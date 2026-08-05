-- ============================================================================
-- World of Claudecraft Build Planner - Supabase Migration v0.34.1
-- Compact URL Slugs: build_slugs table + save_build_slug RPC
-- Run this AFTER supabase_migration_v034.sql
-- ============================================================================

-- 1. Table: build_slugs (slug -> build_id mapping)
CREATE TABLE IF NOT EXISTS build_slugs (
  slug       TEXT PRIMARY KEY,              -- e.g. "warrior-fury-6xk3"
  build_id   TEXT NOT NULL REFERENCES builds(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_build_slugs_build_id ON build_slugs(build_id);

-- RLS
ALTER TABLE build_slugs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access Slugs"   ON build_slugs FOR SELECT USING (true);
CREATE POLICY "Public Insert Access Slugs" ON build_slugs FOR INSERT WITH CHECK (true);

-- 2. RPC: save_build_slug (idempotent)
CREATE OR REPLACE FUNCTION save_build_slug(
  p_slug     text,
  p_build_id text
) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  -- Insert slug; same build always maps to same slug. Hash collisions handled gracefully.
  INSERT INTO build_slugs (slug, build_id, created_at)
  VALUES (p_slug, p_build_id, now())
  ON CONFLICT (slug) DO NOTHING;

  -- Return whichever slug is authoritative for this build_id
  RETURN jsonb_build_object(
    'slug', (SELECT slug FROM build_slugs WHERE build_id = p_build_id LIMIT 1)
  );
END; $$;

-- 3. RPC: resolve_slug (slug -> build_id + full build data)
CREATE OR REPLACE FUNCTION resolve_slug(
  p_slug text
) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_build_id text;
  v_build    jsonb;
BEGIN
  SELECT build_id INTO v_build_id FROM build_slugs WHERE slug = p_slug;

  IF v_build_id IS NULL THEN
    RETURN jsonb_build_object('found', false);
  END IF;

  SELECT row_to_json(b)::jsonb INTO v_build FROM builds b WHERE id = v_build_id;

  RETURN jsonb_build_object(
    'found',    true,
    'build_id', v_build_id,
    'build',    v_build
  );
END; $$;
