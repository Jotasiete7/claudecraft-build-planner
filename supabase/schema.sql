-- World of Claudecraft - Supabase Schema (Idempotent & Safe to Run Multiple Times)
-- Project URL: https://gjdbeipgqbjydenkppfq.supabase.co

-- 1. Table: builds (Registered Build Configurations)
CREATE TABLE IF NOT EXISTS public.builds (
  id                  TEXT PRIMARY KEY, -- Base64 string payload
  class_key           TEXT NOT NULL,
  spec_id             TEXT NOT NULL,
  title               TEXT NOT NULL,
  "role"              TEXT CHECK ("role" IN ('tank', 'healer', 'dps')),
  patch_version       TEXT NOT NULL DEFAULT 'v0.33.1',
  verified_by_guild   BOOLEAN DEFAULT FALSE,
  created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Table: build_actions (Deduplicated Save & Share Telemetry)
CREATE TABLE IF NOT EXISTS public.build_actions (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  build_id    TEXT NOT NULL,
  anon_id     TEXT NOT NULL,
  action_type TEXT NOT NULL CHECK (action_type IN ('save', 'share')),
  discord_id  TEXT,
  verified    BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT  unique_build_action UNIQUE (build_id, anon_id, action_type)
);

-- 3. Table: build_popularity (Pre-computed Popularity Summary)
CREATE TABLE IF NOT EXISTS public.build_popularity (
  build_id      TEXT PRIMARY KEY REFERENCES public.builds(id) ON DELETE CASCADE,
  class_key     TEXT NOT NULL,
  spec_id       TEXT NOT NULL,
  save_count    INTEGER DEFAULT 0,
  share_count   INTEGER DEFAULT 0,
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_build_popularity_rank ON public.build_popularity (save_count DESC, share_count DESC);
CREATE INDEX IF NOT EXISTS idx_builds_class_spec_role ON public.builds (class_key, spec_id, "role");
CREATE INDEX IF NOT EXISTS idx_builds_patch ON public.builds (patch_version);
CREATE INDEX IF NOT EXISTS idx_builds_created ON public.builds (created_at DESC);

-- Enable RLS
ALTER TABLE public.builds ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.build_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.build_popularity ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to prevent 42710 error
DROP POLICY IF EXISTS "Allow public read builds" ON public.builds;
DROP POLICY IF EXISTS "Allow public insert builds" ON public.builds;
DROP POLICY IF EXISTS "Allow public read build_popularity" ON public.build_popularity;
DROP POLICY IF EXISTS "Allow public insert/update build_popularity" ON public.build_popularity;
DROP POLICY IF EXISTS "Allow public insert build_actions" ON public.build_actions;

-- Create RLS Policies
CREATE POLICY "Allow public read builds" ON public.builds FOR SELECT USING (true);
CREATE POLICY "Allow public insert builds" ON public.builds FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read build_popularity" ON public.build_popularity FOR SELECT USING (true);
CREATE POLICY "Allow public insert/update build_popularity" ON public.build_popularity FOR ALL USING (true);

CREATE POLICY "Allow public insert build_actions" ON public.build_actions FOR INSERT WITH CHECK (true);