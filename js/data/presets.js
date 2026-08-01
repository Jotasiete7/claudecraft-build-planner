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
    title: 'Warrior - Bladestorm Battlecraft',
    classKey: 'warrior',
    className: 'Warrior',
    classColor: '#d67a54',
    roleId: 'arms',
    desc: 'Devastating Battlecraft Warrior build with Avatar, Bladestorm, and Anger Management for maximum DPS.',
    badgeText: '⚔️ Meta PvP/PvE DPS',
    hypeCount: 1280,
    buildPayload: {
      v: 2,
      c: 'warrior',
      s: 'arms',
      r: {
        '5': 'war_row_double_charge',
        '8': 'war_row_die_by_the_sword',
        '11': 'war_row_storm_bolt',
        '14': 'war_row_anger_management',
        '17': 'war_row_avatar',
        '20': 'war_row_bladestorm'
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
    desc: 'High sustained caster DPS build with Gloam Siphon, Twin Fracture, and Thoughtburn.',
    badgeText: '✨ Meta Caster DPS',
    hypeCount: 950,
    buildPayload: {
      v: 2,
      c: 'priest',
      s: 'shadow',
      r: {
        '5': 'pri_r5_twisted_faith',
        '8': 'pri_r8_silence',
        '11': 'pri_r11_vampiric_embrace',
        '14': 'pri_r14_mind_melt',
        '17': 'pri_r17_desperate_prayer',
        '20': 'pri_r20_mind_sear'
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
    title: 'Mage - Elemental Convergence',
    classKey: 'mage',
    className: 'Mage',
    classColor: '#33c1f1',
    roleId: 'fire',
    desc: 'Burst mage build combining Fire and Frost for maximum Elemental Convergence procs and Power Echo finishers.',
    badgeText: '🔮 Meta AoE Burst',
    hypeCount: 1100,
    buildPayload: {
      v: 2,
      c: 'mage',
      s: 'fire',
      r: {
        '5': 'mag_r5_ice_floes',
        '8': 'mag_r8_greater_invis',
        '11': 'mag_r11_rings_of_frost',
        '14': 'mag_r14_power_echo',
        '17': 'mag_r17_convergence',
        '20': 'mag_r20_rune_of_power'
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
    id: 'hunter_survival_meta',
    title: 'Hunter - Wildfang Survival',
    classKey: 'hunter',
    className: 'Hunter',
    classColor: '#a6d84f',
    roleId: 'survival',
    desc: 'Lethal Survival Hunter build focused on Deepvenom poison damage, Viperfletch, and the Wildfang Rally capstone.',
    badgeText: '🏹 Meta Physical DPS',
    hypeCount: 870,
    buildPayload: {
      v: 2,
      c: 'hunter',
      s: 'survival',
      r: {
        '5': 'hun_r5_improved_serpent_sting',
        '8': 'hun_r8_improved_concussive',
        '11': 'hun_r11_efficiency',
        '14': 'hun_r14_sniper_training',
        '17': 'hun_r17_deterrence',
        '20': 'hun_r20_aspect_of_the_wild'
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
    id: 'warlock_affliction_meta',
    title: 'Warlock - Hexstorm Affliction',
    classKey: 'warlock',
    className: 'Warlock',
    classColor: '#a785e6',
    roleId: 'affliction',
    desc: 'DoT juggernaut build stacking Blacktide slows, Deepened Hex damage amplification, and Hexstorm instant bolts.',
    badgeText: '💀 Meta Sustained DoT',
    hypeCount: 760,
    buildPayload: {
      v: 2,
      c: 'warlock',
      s: 'affliction',
      r: {
        '5': 'wlk_r5_improved_corruption',
        '8': 'wlk_r8_voidfeast',
        '11': 'wlk_r11_improved_life_tap',
        '14': 'wlk_r14_amplify_curse',
        '17': 'wlk_r17_death_coil',
        '20': 'wlk_r20_curse_mastery'
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
