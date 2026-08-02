-- World of Claudecraft - Supabase Complete Schema
-- Project URL: https://gjdbeipgqbjydenkppfq.supabase.co

-- 1. Table: build_actions (Deduplicated Save and Share Telemetry)
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

-- 2. Table: build_popularity (Pre-computed & Aggregated Rankings)
CREATE TABLE IF NOT EXISTS public.build_popularity (
  build_id      TEXT PRIMARY KEY,
  class_key     TEXT NOT NULL,
  spec_id       TEXT NOT NULL,
  build_name    TEXT,
  save_count    INTEGER DEFAULT 0,
  share_count   INTEGER DEFAULT 0,
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Table: wiki_items (Game Item Codex Database)
CREATE TABLE IF NOT EXISTS public.wiki_items (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL,
  slot        TEXT NOT NULL,
  kind        TEXT NOT NULL,
  quality     TEXT NOT NULL,
  ilvl        INTEGER NOT NULL,
  stats       JSONB,
  armor_type  TEXT NOT NULL,
  source      TEXT,
  icon_url    TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.build_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.build_popularity ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wiki_items ENABLE ROW LEVEL SECURITY;

-- Allow Public Read Access
CREATE POLICY "Allow public read build_popularity" ON public.build_popularity FOR SELECT USING (true);
CREATE POLICY "Allow public read wiki_items" ON public.wiki_items FOR SELECT USING (true);

-- Allow Public Insert into build_actions
CREATE POLICY "Allow public insert build_actions" ON public.build_actions FOR INSERT WITH CHECK (true);