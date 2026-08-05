-- ============================================================================
-- World of Claudecraft Build Planner - Supabase Migration v0.34.0
-- RPC Functions for Idempotent Build Saves, Popularity Ledger, & Share Hype
-- ============================================================================

-- 1. Table Definitions (If not already created)
CREATE TABLE IF NOT EXISTS builds (
  id TEXT PRIMARY KEY, -- Base64 String or SHA-256 build hash
  class_key TEXT NOT NULL,
  spec_id TEXT NOT NULL,
  title TEXT NOT NULL,
  choices JSONB DEFAULT '{}'::jsonb,
  patch_version TEXT DEFAULT 'v0.34.0',
  verified_by_guild BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS build_actions (
  id BIGSERIAL PRIMARY KEY,
  build_id TEXT NOT NULL REFERENCES builds(id) ON DELETE CASCADE,
  anon_id TEXT NOT NULL,
  action_type TEXT NOT NULL, -- 'save' or 'share'
  discord_id TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  CONSTRAINT unique_build_anon_action UNIQUE (build_id, anon_id, action_type)
);

CREATE TABLE IF NOT EXISTS build_popularity (
  build_id TEXT PRIMARY KEY REFERENCES builds(id) ON DELETE CASCADE,
  save_count BIGINT DEFAULT 0,
  share_count BIGINT DEFAULT 0,
  computed_at TIMESTAMPTZ DEFAULT now()
);

-- Indexing for high performance queries
CREATE INDEX IF NOT EXISTS idx_builds_class_spec ON builds(class_key, spec_id);
CREATE INDEX IF NOT EXISTS idx_build_actions_lookup ON build_actions(build_id, anon_id, action_type);

-- Enable RLS Policies for Public Read & RPC Writes
ALTER TABLE builds ENABLE ROW LEVEL SECURITY;
ALTER TABLE build_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE build_popularity ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Read Access Builds" ON builds FOR SELECT USING (true);
CREATE POLICY "Public Insert Access Builds" ON builds FOR INSERT WITH CHECK (true);

CREATE POLICY "Public Read Access Actions" ON build_actions FOR SELECT USING (true);
CREATE POLICY "Public Insert Access Actions" ON build_actions FOR INSERT WITH CHECK (true);

CREATE POLICY "Public Read Access Popularity" ON build_popularity FOR SELECT USING (true);

-- 2. RPC Function: save_build (Idempotent Save & Hype Ledger)
CREATE OR REPLACE FUNCTION save_build(
  p_build_id text,
  p_class_key text,
  p_spec_id text,
  p_title text,
  p_choices jsonb,
  p_anon_id text
) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_original_title text;
  v_new_save boolean := false;
  v_current_saves bigint := 0;
BEGIN
  -- Sanitize title
  p_title := trim(p_title);
  IF p_title = '' THEN
    p_title := 'Build Customizada';
  END IF;

  -- 1. Insert build if it does not exist; 1st author title is preserved
  INSERT INTO builds (id, class_key, spec_id, title, choices, patch_version, created_at)
  VALUES (p_build_id, p_class_key, p_spec_id, p_title, p_choices, 'v0.34.0', now())
  ON CONFLICT (id) DO NOTHING;

  SELECT title INTO v_original_title FROM builds WHERE id = p_build_id;

  -- 2. Insert action into ledger; UNIQUE(build_id, anon_id, action_type) prevents duplicate spam
  INSERT INTO build_actions (build_id, anon_id, action_type, created_at)
  VALUES (p_build_id, p_anon_id, 'save', now())
  ON CONFLICT (build_id, anon_id, action_type) DO NOTHING;

  GET DIAGNOSTICS v_new_save = ROW_COUNT;

  -- 3. Update popularity metrics if this anon_id hasn't saved this build before
  IF v_new_save THEN
    INSERT INTO build_popularity (build_id, save_count, share_count, computed_at)
    VALUES (p_build_id, 1, 0, now())
    ON CONFLICT (build_id) DO UPDATE
      SET save_count = build_popularity.save_count + 1, computed_at = now();
  END IF;

  SELECT save_count INTO v_current_saves FROM build_popularity WHERE build_id = p_build_id;

  RETURN jsonb_build_object(
    'isDuplicate', (v_original_title <> p_title),
    'originalTitle', v_original_title,
    'countedTowardHype', v_new_save,
    'totalSaves', COALESCE(v_current_saves, 1)
  );
END; $$;

-- 3. RPC Function: share_build (Idempotent Share Ledger)
CREATE OR REPLACE FUNCTION share_build(
  p_build_id text,
  p_anon_id text
) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_new_share boolean := false;
  v_current_shares bigint := 0;
BEGIN
  INSERT INTO build_actions (build_id, anon_id, action_type, created_at)
  VALUES (p_build_id, p_anon_id, 'share', now())
  ON CONFLICT (build_id, anon_id, action_type) DO NOTHING;

  GET DIAGNOSTICS v_new_share = ROW_COUNT;

  IF v_new_share THEN
    INSERT INTO build_popularity (build_id, save_count, share_count, computed_at)
    VALUES (p_build_id, 0, 1, now())
    ON CONFLICT (build_id) DO UPDATE
      SET share_count = build_popularity.share_count + 1, computed_at = now();
  END IF;

  SELECT share_count INTO v_current_shares FROM build_popularity WHERE build_id = p_build_id;

  RETURN jsonb_build_object(
    'countedTowardShare', v_new_share,
    'totalShares', COALESCE(v_current_shares, 1)
  );
END; $$;
