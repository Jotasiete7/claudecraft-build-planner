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

  const anonId = getOrCreateAnonId();

  try {
    const { data, error } = await supabaseClient.rpc('save_build', {
      p_build_id: buildData.string,
      p_class_key: buildData.classKey || 'unknown',
      p_spec_id: buildData.specId || 'unknown',
      p_title: buildData.name || 'Build Customizada',
      p_choices: buildData.choices || {},
      p_anon_id: anonId
    });

    if (error) {
      // Fallback if RPC function is not yet created in Supabase SQL editor
      await registerBuildFallback(buildData, anonId, 'save');
      return { success: true, isDuplicate: false, originalTitle: buildData.name, countedTowardHype: true };
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
    let query = supabaseClient.from('builds').select('*, build_popularity(save_count, share_count)');

    if (filters.classKey && filters.classKey !== 'all') {
      query = query.eq('class_key', filters.classKey);
    }
    if (filters.role && filters.role !== 'all') {
      query = query.eq('role', filters.role);
    }
    if (filters.searchQuery) {
      query = query.ilike('title', `%${filters.searchQuery}%`);
    }

    query = query.order('created_at', { ascending: false }).limit(30);

    const { data, error } = await query;
    if (error) {
      // Fallback query if join fails
      const fallbackRes = await supabaseClient.from('builds').select('*').limit(30);
      const formatted = (fallbackRes.data || []).map(item => ({
        builds: {
          id: item.id,
          class_key: item.class_key,
          spec_id: item.spec_id,
          title: item.title,
          role: item.role || 'dps',
          patch_version: item.patch_version || 'v0.34.0',
          verified_by_guild: item.verified_by_guild,
          created_at: item.created_at
        },
        save_count: 1,
        share_count: 1
      }));
      return { data: formatted, isColdStart: true, totalCount: formatted.length, error: null };
    }

    const formattedData = (data || []).map(item => {
      const pop = (item.build_popularity && item.build_popularity[0]) || {};
      return {
        builds: {
          id: item.id,
          class_key: item.class_key,
          spec_id: item.spec_id,
          title: item.title,
          role: item.role || 'dps',
          patch_version: item.patch_version || 'v0.34.0',
          verified_by_guild: item.verified_by_guild,
          created_at: item.created_at
        },
        save_count: pop.save_count || 1,
        share_count: pop.share_count || 1
      };
    });

    return { data: formattedData, isColdStart: true, totalCount: formattedData.length, error: null };
  } catch (err) {
    return { data: [], isColdStart: true, totalCount: 0, error: null };
  }
}