/**
 * Meta Presets for A Guilda — World of Claudecraft Hub
 * Each preset includes its pre-encoded official game string (v: 2) for 1-click direct copying!
 */

const META_PRESETS = [
  {
    id: 'pala_tank_meta',
    title: 'Paladin - Supreme Protection Tank',
    classKey: 'paladin',
    className: 'Paladin',
    classColor: '#f58ca0',
    roleId: 'protection',
    desc: 'BiS raid tank build for Paladin with maximum armor, threat multiplier, and Holy Shield uptime.',
    badgeText: '🛡️ Meta Raid Tank',
    hypeCount: 1420,
    buildPayload: {
      v: 2,
      c: 'paladin',
      s: 'protection',
      r: {
        '5': 'pal_r5_crusaders_zeal',
        '8': 'pal_r8_fist_of_justice',
        '11': 'pal_r11_greater_blessing',
        '14': 'pal_r14_righteous_cause',
        '17': 'pal_r17_ardent_defender',
        '20': 'pal_r20_aura_mastery'
      }
    },
    items: {
      head: 'helm_dreadnought',
      chest: 'chest_plate_glory',
      legs: 'legs_mithril_greaves',
      mainhand: 'runic_blade_epic',
      offhand: 'mithril_defender_shield',
      ring1: 'ring_dragon_seal',
      trinket: 'trinket_holy_relic'
    }
  },
  {
    id: 'warrior_arms_meta',
    title: 'Warrior - Mortal Strike Executioner',
    classKey: 'warrior',
    className: 'Warrior',
    classColor: '#d67a54',
    roleId: 'arms',
    desc: 'Devastating 2H Arms Warrior build with Sweeping Strikes, Deep Wounds, and Bladestorm.',
    badgeText: '⚔️ Meta PvP/PvE DPS',
    hypeCount: 1280,
    buildPayload: {
      v: 2,
      c: 'warrior',
      s: 'arms',
      r: {
        '5': 'war_r5_sweeping_strikes',
        '8': 'war_r8_piercing_howl',
        '11': 'war_r11_mortal_strike',
        '14': 'war_r14_weapon_mastery',
        '17': 'war_r17_second_wind',
        '20': 'war_r20_bladestorm'
      }
    },
    items: {
      head: 'helm_dreadnought',
      chest: 'chest_plate_glory',
      legs: 'legs_mithril_greaves',
      mainhand: 'runic_blade_epic',
      offhand: null,
      ring1: 'ring_dragon_seal',
      trinket: 'trinket_holy_relic'
    }
  },
  {
    id: 'priest_shadow_meta',
    title: 'Priest - Shadowform Mind Melter',
    classKey: 'priest',
    className: 'Priest',
    classColor: '#c6d4f0',
    roleId: 'shadow',
    desc: 'High sustained caster DPS build with Vampiric Touch, Mind Blast, and Dispersion.',
    badgeText: '✨ Meta Caster DPS',
    hypeCount: 950,
    buildPayload: {
      v: 2,
      c: 'priest',
      s: 'shadow',
      r: {
        '5': 'pri_r5_shadow_affinity',
        '8': 'pri_r8_silence',
        '11': 'pri_r11_vampiric_embrace',
        '14': 'pri_r14_mind_melt',
        '17': 'pri_r17_dispersion',
        '20': 'pri_r20_shadowfiend'
      }
    },
    items: {
      head: 'helm_dreadnought',
      chest: 'chest_plate_glory',
      legs: 'legs_mithril_greaves',
      mainhand: 'runic_blade_epic',
      offhand: null,
      ring1: 'ring_dragon_seal',
      trinket: 'trinket_holy_relic'
    }
  },
  {
    id: 'mage_fire_meta',
    title: 'Mage - Pyromaniac Fire Burst',
    classKey: 'mage',
    className: 'Mage',
    classColor: '#33c1f1',
    roleId: 'fire',
    desc: 'AoE explosion build with Ignite, Combustion, and Meteor for high critical burst.',
    badgeText: '🔮 Meta AoE Fire',
    hypeCount: 1100,
    buildPayload: {
      v: 2,
      c: 'mage',
      s: 'fire',
      r: {
        '5': 'mag_r5_ignite',
        '8': 'mag_r8_blast_wave',
        '11': 'mag_r11_combustion',
        '14': 'mag_r14_dragon_breath',
        '17': 'mag_r17_living_bomb',
        '20': 'mag_r20_meteor'
      }
    },
    items: {
      head: 'helm_dreadnought',
      chest: 'chest_plate_glory',
      legs: 'legs_mithril_greaves',
      mainhand: 'runic_blade_epic',
      offhand: null,
      ring1: 'ring_dragon_seal',
      trinket: 'trinket_holy_relic'
    }
  }
];
