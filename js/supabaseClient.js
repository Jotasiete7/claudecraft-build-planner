/**
 * Supabase Client Integration for A Guilda World of Claudecraft
 * Project URL: https://gjdbeipgqbjydenkppfq.supabase.co
 */

const SUPABASE_URL = 'https://gjdbeipgqbjydenkppfq.supabase.co';
// Cole a sua SUPABASE_ANON_KEY abaixo (disponÃ­vel no painel Supabase: Settings > API)
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || '';

let supabaseClient = null;

if (typeof supabase !== 'undefined' && SUPABASE_ANON_KEY) {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function recordSupabaseAction(actionType, buildString, extraData = {}) {
  if (!supabaseClient) return;

  const anonId = localStorage.getItem('claudecraft_anon_id') || 'anon_guest';
  const discordId = localStorage.getItem('claudecraft_discord_id') || null;

  try {
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
    // Silent fail if RLS or network issue
  }
}