/**
 * Supabase Client Integration for A Guilda World of Claudecraft
 * Project URL: https://gjdbeipgqbjydenkppfq.supabase.co
 */

const SUPABASE_URL = 'https://gjdbeipgqbjydenkppfq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_qYHoYKKyw98Dku5oea1H4w_BH-FViSe';

let supabaseClient = null;

if (typeof supabase !== 'undefined' && SUPABASE_ANON_KEY) {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function registerBuildInSupabase(buildData) {
  if (!supabaseClient) return;
  try {
    await supabaseClient.from('builds').upsert([
      {
        id: buildData.string,
        class_key: buildData.classKey,
        spec_id: buildData.specId,
        title: buildData.name,
        role: buildData.role || 'dps',
        patch_version: 'v0.33.1',
        verified_by_guild: false
      }
    ]);
  } catch (e) {}
}

async function recordSupabaseAction(actionType, buildString, extraData = {}) {
  if (!supabaseClient) return;

  const anonId = localStorage.getItem('claudecraft_anon_id') || 'anon_guest';
  const discordId = localStorage.getItem('claudecraft_discord_id') || null;

  try {
    if (extraData.name) {
      await registerBuildInSupabase({
        string: buildString,
        classKey: extraData.classKey || 'unknown',
        specId: extraData.specId || 'unknown',
        name: extraData.name,
        role: extraData.role || 'dps'
      });
    }

    await supabaseClient.from('build_actions').insert([
      {
        build_id: buildString,
        anon_id: anonId,
        action_type: actionType,
        discord_id: discordId,
        verified: !!discordId
      }
    ]);
  } catch (err) {
    // Silent fail
  }
}

async function fetchMetaBuildsFromSupabase(filters = {}) {
  if (!supabaseClient) return { data: [], isColdStart: true, totalCount: 0, error: 'Supabase client not initialized' };

  try {
    let query = supabaseClient.from('builds').select('*');

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
      // If table doesn't exist yet, return empty list gracefully
      return { data: [], isColdStart: true, totalCount: 0, error: null };
    }

    const formattedData = (data || []).map(item => ({
      builds: {
        id: item.id,
        class_key: item.class_key,
        spec_id: item.spec_id,
        title: item.title,
        role: item.role,
        patch_version: item.patch_version,
        verified_by_guild: item.verified_by_guild,
        created_at: item.created_at
      },
      save_count: 1,
      share_count: 1
    }));

    return { data: formattedData, isColdStart: true, totalCount: formattedData.length, error: null };
  } catch (err) {
    return { data: [], isColdStart: true, totalCount: 0, error: null };
  }
}