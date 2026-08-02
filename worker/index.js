/**
 * Cloudflare Worker Backend for A Guilda Build Planner
 * D1 Database Binding: env.DB
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '*';

    // CORS Headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // 1. POST /api/action -> Deduplicated Save or Share action
      if (url.pathname === '/api/action' && request.method === 'POST') {
        const body = await request.json();
        const { buildId, anonId, actionType, discordId, classKey, specId, buildName } = body;

        if (!buildId || !anonId || !['save', 'share'].includes(actionType)) {
          return new Response(JSON.stringify({ error: 'Missing required parameters' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        const now = Math.floor(Date.now() / 1000);
        const oneHourAgo = now - 3600;

        // Rate limiting check: max 30 actions per anon_id per hour
        const rateCheck = await env.DB.prepare(
          'SELECT COUNT(*) as cnt FROM build_actions WHERE anon_id = ? AND created_at > ?'
        ).bind(anonId, oneHourAgo).first();

        if (rateCheck && rateCheck.cnt > 30) {
          return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
            status: 429,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        const isVerified = discordId ? 1 : 0;

        // Insert action with deduplication (INSERT OR IGNORE)
        await env.DB.prepare(
          \INSERT OR IGNORE INTO build_actions (build_id, anon_id, action_type, discord_id, verified, created_at)
           VALUES (?, ?, ?, ?, ?, ?)\
        ).bind(buildId, anonId, actionType, discordId || null, isVerified, now).run();

        // Increment pre-computed summary row
        if (actionType === 'save') {
          await env.DB.prepare(
            \INSERT INTO build_popularity (build_id, class_key, spec_id, build_name, save_count, share_count, computed_at)
             VALUES (?, ?, ?, ?, 1, 0, ?)
             ON CONFLICT(build_id) DO UPDATE SET save_count = save_count + 1, computed_at = ?\
          ).bind(buildId, classKey || 'unknown', specId || 'unknown', buildName || 'Custom Build', now, now).run();
        } else if (actionType === 'share') {
          await env.DB.prepare(
            \INSERT INTO build_popularity (build_id, class_key, spec_id, build_name, save_count, share_count, computed_at)
             VALUES (?, ?, ?, ?, 0, 1, ?)
             ON CONFLICT(build_id) DO UPDATE SET share_count = share_count + 1, computed_at = ?\
          ).bind(buildId, classKey || 'unknown', specId || 'unknown', buildName || 'Custom Build', now, now).run();
        }

        return new Response(JSON.stringify({ success: true, actionType, buildId }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // 2. GET /api/popularity -> Fetch pre-computed ranking
      if (url.pathname === '/api/popularity' && request.method === 'GET') {
        const classFilter = url.searchParams.get('class');
        let query = 'SELECT * FROM build_popularity ORDER BY (save_count + share_count) DESC LIMIT 20';
        let params = [];

        if (classFilter) {
          query = 'SELECT * FROM build_popularity WHERE class_key = ? ORDER BY (save_count + share_count) DESC LIMIT 20';
          params = [classFilter];
        }

        const stmt = env.DB.prepare(query);
        const { results } = params.length ? await stmt.bind(...params).all() : await stmt.all();

        return new Response(JSON.stringify({ popularity: results || [] }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      return new Response(JSON.stringify({ error: 'Not Found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  },

  // Cron Trigger: Recalculate build_popularity summary periodically
  async scheduled(event, env, ctx) {
    const now = Math.floor(Date.now() / 1000);
    ctx.waitUntil(
      env.DB.prepare(\
        INSERT INTO build_popularity (build_id, class_key, spec_id, save_count, share_count, computed_at)
        SELECT 
          build_id,
          'unknown' AS class_key,
          'unknown' AS spec_id,
          COUNT(DISTINCT CASE WHEN action_type = 'save' THEN anon_id END) AS save_count,
          COUNT(DISTINCT CASE WHEN action_type = 'share' THEN anon_id END) AS share_count,
          ? AS computed_at
        FROM build_actions
        GROUP BY build_id
        ON CONFLICT(build_id) DO UPDATE SET 
          save_count = excluded.save_count,
          share_count = excluded.share_count,
          computed_at = excluded.computed_at
      \).bind(now).run()
    );
  }
};