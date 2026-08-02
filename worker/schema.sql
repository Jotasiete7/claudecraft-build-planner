-- World of Claudecraft Build Planner - Cloudflare D1 Schema

CREATE TABLE IF NOT EXISTS build_actions (
  build_id    TEXT NOT NULL,
  anon_id     TEXT NOT NULL,
  action_type TEXT NOT NULL CHECK (action_type IN ('save', 'share')),
  discord_id  TEXT,
  verified    INTEGER DEFAULT 0,
  created_at  INTEGER NOT NULL,
  PRIMARY KEY (build_id, anon_id, action_type)
);

CREATE INDEX IF NOT EXISTS idx_actions_rate_limit ON build_actions(anon_id, created_at);
CREATE INDEX IF NOT EXISTS idx_actions_build ON build_actions(build_id, action_type);

CREATE TABLE IF NOT EXISTS build_popularity (
  build_id      TEXT PRIMARY KEY,
  class_key     TEXT NOT NULL,
  spec_id       TEXT NOT NULL,
  build_name    TEXT,
  save_count    INTEGER DEFAULT 0,
  share_count   INTEGER DEFAULT 0,
  computed_at   INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_popularity_ranking ON build_popularity(class_key, (save_count + share_count) DESC);

CREATE TABLE IF NOT EXISTS talent_pick_rates (
  class_key   TEXT NOT NULL,
  spec_id     TEXT NOT NULL,
  row_level   INTEGER NOT NULL,
  talent_id   TEXT NOT NULL,
  pick_count  INTEGER DEFAULT 0,
  total_builds INTEGER DEFAULT 0,
  computed_at INTEGER NOT NULL,
  PRIMARY KEY (class_key, spec_id, row_level, talent_id)
);