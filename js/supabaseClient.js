/**
 * Supabase Client Integration for A Guilda World of Claudecraft
 * Project URL: https://gjdbeipgqbjydenkppfq.supabase.co
 * Supports Atomic RPC save_build & share_build with Ledger Idempotency & Popularity Metrics
 */

const SUPABASE_URL = 'https://gjdbeipgqbjydenkppfq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_qYHoYKKyw98Dku5oea1H4w_BH-FViSe';

let supabaseClient = null;

if (typeof supabase !== 'undefined' && SUPABASE_ANON_KEY) {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

function getOrCreateAnonId() {
  let anonId = localStorage.getItem('claudecraft_anon_id');
  if (!anonId) {
    anonId = 'anon_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
    localStorage.setItem('claudecraft_anon_id', anonId);
  }
  return anonId;
}

/**
 * Executes Atomic RPC save_build on Supabase
 */
async function recordSupabaseSaveBuild(buildData) {
  if (!supabaseClient) return { success: false, error: 'Supabase offline' };

  let buildStr = buildData.string || buildData.buildString;
  if (!buildStr && buildData.classKey && buildData.specId && buildData.choices) {
    try {
      buildStr = btoa(JSON.stringify({ v: 2, c: buildData.classKey, s: buildData.specId, r: buildData.choices }));
    } catch {}
  }

  if (!buildStr) return { success: false, error: 'String de build inválida' };

  let choicesObj = buildData.choices || {};
  if (typeof choicesObj === 'string') {
    try { choicesObj = JSON.parse(choicesObj); } catch { choicesObj = {}; }
  }
  if (typeof choicesObj !== 'object' || Array.isArray(choicesObj) || !choicesObj) {
    choicesObj = {};
  }

  const anonId = getOrCreateAnonId();

  try {
    const { data, error } = await supabaseClient.rpc('save_build', {
      p_build_id: String(buildStr),
      p_class_key: String(buildData.classKey || 'unknown'),
      p_spec_id: String(buildData.specId || 'unknown'),
      p_title: String(buildData.name || 'Build Customizada'),
      p_choices: choicesObj,
      p_anon_id: String(anonId)
    });

    if (error) {
      console.warn('save_build RPC warning:', error);
      return { success: false, error: error.message };
    }

    return {
      success: true,
      isDuplicate: !!(data && data.isDuplicate),
      originalTitle: (data && data.originalTitle) || buildData.name,
      countedTowardHype: !!(data && data.countedTowardHype),
      totalSaves: (data && data.totalSaves) || 1
    };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

/**
 * Executes Atomic RPC share_build on Supabase
 */
async function recordSupabaseShareBuild(buildString) {
  if (!supabaseClient) return { success: false };

  const anonId = getOrCreateAnonId();

  try {
    const { data, error } = await supabaseClient.rpc('share_build', {
      p_build_id: buildString,
      p_anon_id: anonId
    });

    if (error) {
      return { success: false };
    }

    return {
      success: true,
      countedTowardShare: !!(data && data.countedTowardShare),
      totalShares: (data && data.totalShares) || 1
    };
  } catch (err) {
    return { success: false };
  }
}

/**
 * Legacy Fallback if RPC SQL migration hasn't been executed
 */
async function registerBuildFallback(buildData, anonId, actionType) {
  if (!supabaseClient) return;
  try {
    await supabaseClient.from('builds').upsert([
      {
        id: buildData.string,
        class_key: buildData.classKey,
        spec_id: buildData.specId,
        title: buildData.name,
        choices: buildData.choices || {},
        patch_version: 'v0.34.0',
        verified_by_guild: false
      }
    ], { onConflict: 'id' });

    await supabaseClient.from('build_actions').upsert([
      {
        build_id: buildData.string,
        anon_id: anonId,
        action_type: actionType
      }
    ], { onConflict: 'build_id,anon_id,action_type' });
  } catch (e) {}
}

/**
 * Fetches Meta & Community Builds with Joined Popularity Data
 */
async function fetchMetaBuildsFromSupabase(filters = {}) {
  if (!supabaseClient) return { data: [], isColdStart: true, totalCount: 0, error: 'Supabase client not initialized' };

  try {
    let buildsQuery = supabaseClient.from('builds').select('*');

    if (filters.classKey && filters.classKey !== 'all') {
      buildsQuery = buildsQuery.eq('class_key', filters.classKey);
    }
    if (filters.searchQuery) {
      buildsQuery = buildsQuery.ilike('title', `%${filters.searchQuery}%`);
    }

    buildsQuery = buildsQuery.order('created_at', { ascending: false }).limit(30);

    const { data: buildsData, error: buildsError } = await buildsQuery;
    if (buildsError || !buildsData || buildsData.length === 0) {
      return { data: [], isColdStart: true, totalCount: 0, error: null };
    }

    // Fetch popularity metrics safely in parallel
    const buildIds = buildsData.map(b => b.id);
    const { data: popData } = await supabaseClient
      .from('build_popularity')
      .select('build_id, save_count, share_count')
      .in('build_id', buildIds);

    const popMap = new Map();
    (popData || []).forEach(p => popMap.set(p.build_id, p));

    const formattedData = buildsData.map(item => {
      const pop = popMap.get(item.id) || {};
      return {
        builds: {
          id: item.id,
          class_key: item.class_key,
          spec_id: item.spec_id,
          title: item.title,
          role: item.role || 'dps',
          patch_version: item.patch_version || (typeof CURRENT_GAME_VERSION !== 'undefined' ? CURRENT_GAME_VERSION : 'v0.34.0'),
          verified_by_guild: item.verified_by_guild,
          created_at: item.created_at
        },
        save_count: pop.save_count || 0,
        share_count: pop.share_count || 0
      };
    });

    return { data: formattedData, isColdStart: true, totalCount: formattedData.length, error: null };
  } catch (err) {
    return { data: [], isColdStart: true, totalCount: 0, error: null };
  }
}

/**
 * Persists a compact slug → build_id mapping via RPC.
 * Idempotent: same build always produces same slug; ON CONFLICT DO NOTHING.
 * Returns the authoritative slug for this build_id (may differ if collision).
 */
async function saveSlugToSupabase(slug, buildId) {
  if (!supabaseClient) return { success: false, slug: null };
  try {
    const { data, error } = await supabaseClient.rpc('save_build_slug', {
      p_slug: slug,
      p_build_id: buildId
    });
    if (error || !data) return { success: false, slug: slug };
    return { success: true, slug: data.slug || slug };
  } catch {
    return { success: false, slug: null };
  }
}

/**
 * Resolves a compact slug back to its build_id + full build data.
 * Returns { found, build_id, build } or { found: false }.
 */
async function resolveSlugFromSupabase(slug) {
  if (!supabaseClient) return { found: false };
  try {
    const { data, error } = await supabaseClient.rpc('resolve_slug', {
      p_slug: slug
    });
    if (error || !data) return { found: false };
    return data;
  } catch {
    return { found: false };
  }
}