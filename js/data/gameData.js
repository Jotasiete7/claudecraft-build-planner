/**
 * World of Claudecraft - Complete 9-Class Dataset & Talent Choices
 * Original English Names and Official GitHub Image Art CDN (.webp):
 * https://raw.githubusercontent.com/levy-street/world-of-claudecraft/main/public/ui/
 */

const REPO_ASSET_BASE = 'https://raw.githubusercontent.com/levy-street/world-of-claudecraft/main/public/ui';

function getSkillIconUrl(classKey, iconName) {
  return `${REPO_ASSET_BASE}/skills/${classKey}/${iconName}.webp`;
}

function getItemIconUrl(iconName) {
  return `${REPO_ASSET_BASE}/items/${iconName}.webp`;
}

const GAME_SPECS = {
  warrior: {
    className: 'Warrior',
    icon: '🗡️',
    color: '#d67a54',
    resource: 'Rage',
    armorType: 'plate',
    specs: [
      {
        id: 'arms',
        name: 'ARMS',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Mortal Strike',
        primaryStat: 'Strength',
        complexity: 'Medium',
        passive: 'Seasoned Soldier — Increases 2H weapon damage by 20%.',
        sampleSkills: [
          { name: 'Mortal Strike', iconUrl: getSkillIconUrl('warrior', 'mortal_strike'), isSignature: true },
          { name: 'Overpower', iconUrl: getSkillIconUrl('warrior', 'overpower') },
          { name: 'Execute', iconUrl: getSkillIconUrl('warrior', 'execute') },
          { name: 'Charge', iconUrl: getSkillIconUrl('warrior', 'charge') }
        ]
      },
      {
        id: 'fury',
        name: 'FURY',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Bloodthirst',
        primaryStat: 'Strength',
        complexity: 'High',
        passive: 'Titan\'s Grip — Dual wield 2H weapons, increasing haste by 15%.',
        sampleSkills: [
          { name: 'Bloodthirst', iconUrl: getSkillIconUrl('warrior', 'bloodthirst'), isSignature: true },
          { name: 'Whirlwind', iconUrl: getSkillIconUrl('warrior', 'whirlwind') },
          { name: 'Rampage', iconUrl: getSkillIconUrl('warrior', 'raging_blow') },
          { name: 'Battle Shout', iconUrl: getSkillIconUrl('warrior', 'battle_shout') }
        ]
      },
      {
        id: 'protection',
        name: 'PROTECTION',
        role: 'TANK',
        roleType: 'tank',
        roleIcon: '🛡️',
        signatureAbility: 'Shield Slam',
        primaryStat: 'Strength',
        complexity: 'Medium',
        passive: 'Vanguard — Increases armor by 25% and block value by 30%.',
        sampleSkills: [
          { name: 'Shield Slam', iconUrl: getSkillIconUrl('warrior', 'shield_slam'), isSignature: true },
          { name: 'Revenge', iconUrl: getSkillIconUrl('warrior', 'revenge') },
          { name: 'Shield Block', iconUrl: getSkillIconUrl('warrior', 'shield_block') },
          { name: 'Taunt', iconUrl: getSkillIconUrl('warrior', 'taunt') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'war_r5_sweeping_strikes', name: 'Sweeping Strikes', iconUrl: getSkillIconUrl('warrior', 'sweeping_strikes'), desc: 'Melee attacks hit 1 additional nearby target.' },
          { id: 'war_r5_blood_craze', name: 'Blood Craze', iconUrl: getSkillIconUrl('warrior', 'bloodthirst'), desc: 'Regenerates 3% health over 6s when critically hit.' },
          { id: 'war_r5_shield_specialization', name: 'Shield Specialization', iconUrl: getSkillIconUrl('warrior', 'shield_block'), desc: 'Increases block chance by 5% and generates 1 Rage on block.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'war_r8_piercing_howl', name: 'Piercing Howl', iconUrl: getSkillIconUrl('warrior', 'demoralizing_shout'), desc: 'Slows all nearby enemies by 50% for 6s.' },
          { id: 'war_r8_improved_overpower', name: 'Improved Overpower', iconUrl: getSkillIconUrl('warrior', 'overpower'), desc: 'Increases critical strike chance of Overpower by 50%.' },
          { id: 'war_r8_last_stand', name: 'Last Stand', iconUrl: getSkillIconUrl('warrior', 'shield_wall'), desc: 'Temporarily grants 30% of maximum health for 20s.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'war_r11_mortal_strike', name: 'Deep Wounds', iconUrl: getSkillIconUrl('warrior', 'mortal_strike'), desc: 'Critical strikes bleed the target for 60% of weapon damage.' },
          { id: 'war_r11_flurry', name: 'Flurry', iconUrl: getSkillIconUrl('warrior', 'bloodthirst'), desc: 'Increases attack speed by 25% for 3 swings after a critical hit.' },
          { id: 'war_r11_concussion_blow', name: 'Concussion Blow', iconUrl: getSkillIconUrl('warrior', 'shield_slam'), desc: 'Stuns the target for 5s and generates high threat.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'war_r14_weapon_mastery', name: 'Weapon Mastery', iconUrl: getSkillIconUrl('warrior', 'mortal_strike'), desc: 'Reduces the chance your attacks are dodged by 2%.' },
          { id: 'war_r14_death_wish', name: 'Death Wish', iconUrl: getSkillIconUrl('warrior', 'execute'), desc: 'Increases physical damage by 20% but increases damage taken by 5%.' },
          { id: 'war_r14_shield_wall', name: 'Shield Wall', iconUrl: getSkillIconUrl('warrior', 'shield_wall'), desc: 'Reduces all damage taken by 60% for 12s.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'war_r17_second_wind', name: 'Second Wind', iconUrl: getSkillIconUrl('warrior', 'battle_shout'), desc: 'Regenerates 10% health and 20 Rage when stunned or immobilized.' },
          { id: 'war_r17_rampage', name: 'Rampage', iconUrl: getSkillIconUrl('warrior', 'raging_blow'), desc: 'Enrages you on critical hits, increasing attack power by 10%.' },
          { id: 'war_r17_devastate', name: 'Devastate', iconUrl: getSkillIconUrl('warrior', 'revenge'), desc: 'Sunder Armor also deals 120% weapon damage.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'war_r20_bladestorm', name: 'Bladestorm', iconUrl: getSkillIconUrl('warrior', 'whirlwind'), desc: 'Become an unstoppable whirlwind dealing massive AoE damage for 6s.' },
          { id: 'war_r20_recklessness', name: 'Recklessness', iconUrl: getSkillIconUrl('warrior', 'execute'), desc: 'Next 3 special attacks have 100% critical strike chance.' },
          { id: 'war_r20_shockwave', name: 'Shockwave', iconUrl: getSkillIconUrl('warrior', 'shield_slam'), desc: 'Sends a frontal cone wave dealing damage and stunning for 4s.' }
        ]
      }
    ],
    spellbook: [
      { id: 'mortal_strike', name: 'Mortal Strike', type: 'Signature', cost: '30 Rage', cooldown: '6s', iconUrl: getSkillIconUrl('warrior', 'mortal_strike'), desc: 'Vicious strike reducing target healing received by 50%.' },
      { id: 'overpower', name: 'Overpower', type: 'Melee', cost: '5 Rage', cooldown: '5s', iconUrl: getSkillIconUrl('warrior', 'overpower'), desc: 'Instantly strike an enemy when they dodge.' },
      { id: 'execute', name: 'Execute', type: 'Finisher', cost: '10 Rage', cooldown: 'Instant', iconUrl: getSkillIconUrl('warrior', 'execute'), desc: 'Finishing move available on targets under 20% health.' },
      { id: 'charge', name: 'Charge', type: 'Gap Closer', cost: '0 Rage', cooldown: '15s', iconUrl: getSkillIconUrl('warrior', 'charge'), desc: 'Charge an enemy, generating 20 Rage and stunning for 1s.' }
    ]
  },

  paladin: {
    className: 'Paladin',
    icon: '🛡️',
    color: '#f58ca0',
    resource: 'Mana',
    armorType: 'plate',
    specs: [
      {
        id: 'holy',
        name: 'SACRAMENT',
        role: 'HEALER',
        roleType: 'healer',
        roleIcon: '💚',
        signatureAbility: 'Holy Shock',
        primaryStat: 'Intellect',
        complexity: 'Low',
        passive: 'Kindled Faith — Your healing spells critically heal for double.',
        sampleSkills: [
          { name: 'Holy Shock', iconUrl: getSkillIconUrl('paladin', 'holy_light'), isSignature: true },
          { name: 'Mending Light', iconUrl: getSkillIconUrl('paladin', 'flash_of_light') },
          { name: 'Lightmend', iconUrl: getSkillIconUrl('paladin', 'lay_on_hands') },
          { name: 'Last Rite', iconUrl: getSkillIconUrl('paladin', 'blessing_of_might') }
        ]
      },
      {
        id: 'protection',
        name: 'VIGIL',
        role: 'TANK',
        roleType: 'tank',
        roleIcon: '🛡️',
        signatureAbility: 'Hallowed Wall',
        primaryStat: 'Strength',
        complexity: 'Low',
        passive: 'Oathward — Increases all threat you generate by 50% and armor by 20%.',
        sampleSkills: [
          { name: 'Hallowed Wall', iconUrl: getSkillIconUrl('paladin', 'divine_protection'), isSignature: true },
          { name: 'Holy Ground', iconUrl: getSkillIconUrl('paladin', 'consecration') },
          { name: 'Burning Oath', iconUrl: getSkillIconUrl('paladin', 'righteous_fury') },
          { name: 'Sacred Bulwark', iconUrl: getSkillIconUrl('paladin', 'devotion_aura') }
        ]
      },
      {
        id: 'retribution',
        name: 'REQUITAL',
        role: 'DAMAGE',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Crusader Strike',
        primaryStat: 'Strength',
        complexity: 'Low',
        passive: 'Blood Debt — Increases your Holy and physical ability damage by 20%.',
        sampleSkills: [
          { name: 'Crusader Strike', iconUrl: getSkillIconUrl('paladin', 'judgement'), isSignature: true },
          { name: 'Verdict', iconUrl: getSkillIconUrl('paladin', 'hammer_of_justice') },
          { name: 'Oathbrand', iconUrl: getSkillIconUrl('paladin', 'seal_of_righteousness') },
          { name: 'Rite of Expulsion', iconUrl: getSkillIconUrl('paladin', 'exorcism') }
        ]
      }
    ],
    // Exact Game Choice Rows IDs for v2
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'pal_r5_crusaders_zeal', name: 'Oath Returned', iconUrl: getSkillIconUrl('paladin', 'holy_light'), desc: 'Verdict restores 25 mana when cast.' },
          { id: 'pal_r5_blessed_momentum', name: "Pilgrim's Light", iconUrl: getSkillIconUrl('paladin', 'flash_of_light'), desc: 'Mending Light is castable while moving.' },
          { id: 'pal_r5_vengeful_exorcism', name: 'Ashen Sentence', iconUrl: getSkillIconUrl('paladin', 'exorcism'), desc: 'Applies radiant holy burn on targets hit.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'pal_r8_cleansing_verdict', name: 'Cleansing Verdict', iconUrl: getSkillIconUrl('paladin', 'hammer_of_justice'), desc: 'Verdict dispels 1 harmful magic effect.' },
          { id: 'pal_r8_fist_of_justice', name: 'Twin Gavels', iconUrl: getSkillIconUrl('paladin', 'judgement'), desc: 'Sundering Gavel stores 2 uses.' },
          { id: 'pal_r8_consecrated_ground', name: 'Hallowed Snare', iconUrl: getSkillIconUrl('paladin', 'consecration'), desc: 'Holy Ground also roots enemies within 8 yd for 2 sec.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'pal_r11_divine_wisdom', name: 'Third Benediction', iconUrl: getSkillIconUrl('paladin', 'blessing_of_might'), desc: 'Blessings last 50% longer.' },
          { id: 'pal_r11_guardians_favor', name: 'Mercy from Ruin', iconUrl: getSkillIconUrl('paladin', 'lay_on_hands'), desc: 'Absorption shields grant health regeneration.' },
          { id: 'pal_r11_greater_blessing', name: 'Afterglow Aegis', iconUrl: getSkillIconUrl('paladin', 'divine_protection'), desc: 'Increases block chance by 15% and reflects Holy damage.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'pal_r14_swift_verdicts', name: 'Swift Verdicts', iconUrl: getSkillIconUrl('paladin', 'judgement'), desc: "Verdict's cooldown is reduced by 20%." },
          { id: 'pal_r14_holy_wrath', name: "Saint's Ire", iconUrl: getSkillIconUrl('paladin', 'seal_of_righteousness'), desc: "Grants Saint's Ire." },
          { id: 'pal_r14_righteous_cause', name: 'Oathwheel', iconUrl: getSkillIconUrl('paladin', 'devotion_aura'), desc: 'Generates 10 mana every time an attack is blocked.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'pal_r17_divine_shield', name: 'Lightward', iconUrl: getSkillIconUrl('paladin', 'divine_protection'), desc: 'Grants Lightward.' },
          { id: 'pal_r17_sacred_ward', name: "Rite's Afterglow", iconUrl: getSkillIconUrl('paladin', 'flash_of_light'), desc: 'Heals the lowest health party member automatically.' },
          { id: 'pal_r17_ardent_defender', name: 'Deathless Ardor', iconUrl: getSkillIconUrl('paladin', 'retribution_aura'), desc: 'Prevents death once every 3 minutes.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'pal_r20_avenging_wrath', name: 'Wrathwing', iconUrl: getSkillIconUrl('paladin', 'righteous_fury'), desc: 'Grants Wrathwing (+30% damage and healing).' },
          { id: 'pal_r20_hammer_of_wrath', name: 'Tolling Hammer', iconUrl: getSkillIconUrl('paladin', 'hammer_of_justice'), desc: 'Grants Tolling Hammer.' },
          { id: 'pal_r20_aura_mastery', name: 'Dawnward Ricochet', iconUrl: getSkillIconUrl('paladin', 'divine_protection'), desc: 'Grants Dawnward Ricochet.' }
        ]
      }
    ],
    spellbook: [
      { id: 'judgement', name: 'Verdict', type: 'Attack', cost: '30 Mana', cooldown: '10s', iconUrl: getSkillIconUrl('paladin', 'judgement'), desc: 'Unleashes holy energy on target.' },
      { id: 'seal_righteousness', name: 'Oathbrand', type: 'Buff', cost: '50 Mana', cooldown: 'Instant', iconUrl: getSkillIconUrl('paladin', 'seal_of_righteousness'), desc: 'Fills paladin with Holy light dealing bonus damage.' },
      { id: 'holy_light', name: 'Mending Light', type: 'Heal', cost: '117 Mana', cooldown: '2.3s cast', iconUrl: getSkillIconUrl('paladin', 'holy_light'), desc: 'Heals an allied target for high amount.' },
      { id: 'consecration', name: 'Holy Ground', type: 'AoE', cost: '60 Mana', cooldown: '8s', iconUrl: getSkillIconUrl('paladin', 'consecration'), desc: 'Consecrates the ground dealing Holy damage.' },
      { id: 'divine_protection', name: 'Hallowed Wall', type: 'Defensive', cost: '25 Mana', cooldown: '180s', iconUrl: getSkillIconUrl('paladin', 'divine_protection'), desc: 'Reduces all damage taken by 50% for 12s.' }
    ]
  },

  mage: {
    className: 'Mage',
    icon: '🔮',
    color: '#33c1f1',
    resource: 'Mana',
    armorType: 'cloth',
    specs: [
      {
        id: 'arcane',
        name: 'ARCANE',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Arcane Blast',
        primaryStat: 'Intellect',
        complexity: 'High',
        passive: 'Arcane Power — Increases spell power by 3% per 1,000 max mana.',
        sampleSkills: [
          { name: 'Arcane Blast', iconUrl: getSkillIconUrl('mage', 'arcane_intellect'), isSignature: true },
          { name: 'Arcane Missiles', iconUrl: getSkillIconUrl('mage', 'arcane_intellect') },
          { name: 'Evocation', iconUrl: getSkillIconUrl('mage', 'arcane_intellect') },
          { name: 'Blink', iconUrl: getSkillIconUrl('mage', 'blink') }
        ]
      },
      {
        id: 'fire',
        name: 'FIRE',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Fireball',
        primaryStat: 'Intellect',
        complexity: 'Medium',
        passive: 'Pyromaniac — Consecutive critical hits trigger instant Pyroblasts.',
        sampleSkills: [
          { name: 'Fireball', iconUrl: getSkillIconUrl('mage', 'fireball'), isSignature: true },
          { name: 'Pyroblast', iconUrl: getSkillIconUrl('mage', 'fireball') },
          { name: 'Flamestrike', iconUrl: getSkillIconUrl('mage', 'fireball') },
          { name: 'Fire Blast', iconUrl: getSkillIconUrl('mage', 'fireball') }
        ]
      },
      {
        id: 'frost',
        name: 'FROST',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Frostbolt',
        primaryStat: 'Intellect',
        complexity: 'Low',
        passive: 'Shatter — Increases critical strike chance against frozen targets by 50%.',
        sampleSkills: [
          { name: 'Frostbolt', iconUrl: getSkillIconUrl('mage', 'frostbolt'), isSignature: true },
          { name: 'Blizzard', iconUrl: getSkillIconUrl('mage', 'blizzard') },
          { name: 'Frost Nova', iconUrl: getSkillIconUrl('mage', 'frost_nova') },
          { name: 'Ice Barrier', iconUrl: getSkillIconUrl('mage', 'ice_armor') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'mag_r5_clearcasting', name: 'Clearcasting', iconUrl: getSkillIconUrl('mage', 'arcane_intellect'), desc: 'Spells have 10% chance to enter a Clearcasting state.' },
          { id: 'mag_r5_ignite', name: 'Ignite', iconUrl: getSkillIconUrl('mage', 'fireball'), desc: 'Fire critical hits burn target for 40% additional damage.' },
          { id: 'mag_r5_ice_floes', name: 'Ice Floes', iconUrl: getSkillIconUrl('mage', 'frostbolt'), desc: 'Allows casting while moving for 5s.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'mag_r8_counterspell', name: 'Counterspell', iconUrl: getSkillIconUrl('mage', 'blink'), desc: 'Interrupts spellcasting and locks school for 6s.' },
          { id: 'mag_r8_blast_wave', name: 'Blast Wave', iconUrl: getSkillIconUrl('mage', 'fireball'), desc: 'Knocks back nearby enemies dealing Fire damage.' },
          { id: 'mag_r8_cold_snap', name: 'Cold Snap', iconUrl: getSkillIconUrl('mage', 'frost_nova'), desc: 'Instantly resets cooldown of all Frost spells.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'mag_r11_presence_of_mind', name: 'Presence of Mind', iconUrl: getSkillIconUrl('mage', 'arcane_intellect'), desc: 'Next spell becomes instant cast.' },
          { id: 'mag_r11_combustion', name: 'Combustion', iconUrl: getSkillIconUrl('mage', 'fireball'), desc: 'Increases Fire critical strike chance by 100%.' },
          { id: 'mag_r11_ice_barrier', name: 'Ice Barrier', iconUrl: getSkillIconUrl('mage', 'ice_armor'), desc: 'Absorbs physical and magical damage for 30s.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'mag_r14_arcane_power', name: 'Arcane Power', iconUrl: getSkillIconUrl('mage', 'arcane_intellect'), desc: 'Increases spell damage by 30% for 15s.' },
          { id: 'mag_r14_dragon_breath', name: "Dragon's Breath", iconUrl: getSkillIconUrl('mage', 'fireball'), desc: 'Disorients enemies in a cone for 4s.' },
          { id: 'mag_r14_fingers_of_frost', name: 'Fingers of Frost', iconUrl: getSkillIconUrl('mage', 'frostbolt'), desc: 'Chilling effects treat target as frozen.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'mag_r17_evocation', name: 'Improved Evocation', iconUrl: getSkillIconUrl('mage', 'arcane_intellect'), desc: 'Regenerates 60% total mana over 6s.' },
          { id: 'mag_r17_living_bomb', name: 'Living Bomb', iconUrl: getSkillIconUrl('mage', 'fireball'), desc: 'Target explodes after 12s dealing AoE Fire damage.' },
          { id: 'mag_r17_deep_freeze', name: 'Deep Freeze', iconUrl: getSkillIconUrl('mage', 'frost_nova'), desc: 'Stuns a frozen target for 5s.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'mag_r20_time_warp', name: 'Time Warp', iconUrl: getSkillIconUrl('mage', 'blink'), desc: 'Increases party haste by 30% for 40s.' },
          { id: 'mag_r20_meteor', name: 'Meteor', iconUrl: getSkillIconUrl('mage', 'fireball'), desc: 'Calls down a meteor dealing massive Fire damage.' },
          { id: 'mag_r20_comet_storm', name: 'Comet Storm', iconUrl: getSkillIconUrl('mage', 'blizzard'), desc: 'Calls down 7 comets around the target.' }
        ]
      }
    ],
    spellbook: [
      { id: 'fireball', name: 'Fireball', type: 'Spell', cost: '120 Mana', cooldown: '2.5s cast', iconUrl: getSkillIconUrl('mage', 'fireball'), desc: 'Hurls a fiery ball dealing heavy Fire damage.' },
      { id: 'frostbolt', name: 'Frostbolt', type: 'Spell', cost: '100 Mana', cooldown: '2.0s cast', iconUrl: getSkillIconUrl('mage', 'frostbolt'), desc: 'Launches bolt of frost slowing target by 50%.' },
      { id: 'frost_nova', name: 'Frost Nova', type: 'AoE Control', cost: '75 Mana', cooldown: '25s', iconUrl: getSkillIconUrl('mage', 'frost_nova'), desc: 'Freezes nearby enemies in place for 8s.' },
      { id: 'blink', name: 'Blink', type: 'Utility', cost: '50 Mana', cooldown: '15s', iconUrl: getSkillIconUrl('mage', 'blink'), desc: 'Teleports caster 20 yards forward.' }
    ]
  },

  rogue: {
    className: 'Rogue',
    icon: '🗡️',
    color: '#fcee58',
    resource: 'Energy',
    armorType: 'leather',
    specs: [
      {
        id: 'assassination',
        name: 'ASSASSINATION',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Mutilate',
        primaryStat: 'Agility',
        complexity: 'Medium',
        passive: 'Venomous Wounds — Poison ticks refund 10 Energy.',
        sampleSkills: [
          { name: 'Mutilate', iconUrl: getSkillIconUrl('rogue', 'sinister_strike'), isSignature: true },
          { name: 'Eviscerate', iconUrl: getSkillIconUrl('rogue', 'eviscerate') },
          { name: 'Envenom', iconUrl: getSkillIconUrl('rogue', 'poisonous_slash') },
          { name: 'Stealth', iconUrl: getSkillIconUrl('rogue', 'stealth') }
        ]
      },
      {
        id: 'combat',
        name: 'COMBAT',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Sinister Strike',
        primaryStat: 'Agility',
        complexity: 'Low',
        passive: 'Combat Potency — Off-hand attacks generate 15 Energy.',
        sampleSkills: [
          { name: 'Sinister Strike', iconUrl: getSkillIconUrl('rogue', 'sinister_strike'), isSignature: true },
          { name: 'Blade Flurry', iconUrl: getSkillIconUrl('rogue', 'blade_flurry') },
          { name: 'Adrenaline Rush', iconUrl: getSkillIconUrl('rogue', 'adrenaline_rush') },
          { name: 'Sprint', iconUrl: getSkillIconUrl('rogue', 'sprint') }
        ]
      },
      {
        id: 'subtlety',
        name: 'SUBTLETY',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Shadowstep',
        primaryStat: 'Agility',
        complexity: 'High',
        passive: 'Master of Subtlety — Attacks from stealth deal 20% bonus damage.',
        sampleSkills: [
          { name: 'Shadowstep', iconUrl: getSkillIconUrl('rogue', 'shadowstep'), isSignature: true },
          { name: 'Backstab', iconUrl: getSkillIconUrl('rogue', 'backstab') },
          { name: 'Ambush', iconUrl: getSkillIconUrl('rogue', 'ambush') },
          { name: 'Vanish', iconUrl: getSkillIconUrl('rogue', 'vanish') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'rog_r5_relentless_strikes', name: 'Relentless Strikes', iconUrl: getSkillIconUrl('rogue', 'eviscerate'), desc: 'Finishers have 20% chance per combo point to refund 25 Energy.' },
          { id: 'rog_r5_craven_thrust', name: 'Craven Thrust', iconUrl: getSkillIconUrl('rogue', 'sinister_strike'), desc: 'Increases critical damage of builders by 25%.' },
          { id: 'rog_r5_opportunity', name: 'Opportunity', iconUrl: getSkillIconUrl('rogue', 'backstab'), desc: 'Increases damage of Backstab and Ambush by 20%.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'rog_r8_smoke_screen', name: 'Smoke Screen', iconUrl: getSkillIconUrl('rogue', 'vanish'), desc: 'Creates a smoke cloud preventing targeted spells for 5s.' },
          { id: 'rog_r8_gouge', name: 'Gouge', iconUrl: getSkillIconUrl('rogue', 'sinister_strike'), desc: 'Incapacitates target for 45s.' },
          { id: 'rog_r8_kick', name: 'Kick', iconUrl: getSkillIconUrl('rogue', 'sinister_strike'), desc: 'Interrupts spellcasting locking school for 5s.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'rog_r11_preparation', name: 'Preparation', iconUrl: getSkillIconUrl('rogue', 'vanish'), desc: 'Resets cooldown of Sprint, Vanish, and Evasion.' },
          { id: 'rog_r11_blade_flurry', name: 'Blade Flurry', iconUrl: getSkillIconUrl('rogue', 'blade_flurry'), desc: 'Attacks hit all nearby enemies.' },
          { id: 'rog_r11_cold_blood', name: 'Cold Blood', iconUrl: getSkillIconUrl('rogue', 'eviscerate'), desc: 'Increases critical strike chance of next offensive ability by 100%.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'rog_r14_seal_fate', name: 'Seal Fate', iconUrl: getSkillIconUrl('rogue', 'sinister_strike'), desc: 'Critical strike combo builders add an extra combo point.' },
          { id: 'rog_r14_adrenaline_rush', name: 'Adrenaline Rush', iconUrl: getSkillIconUrl('rogue', 'adrenaline_rush'), desc: 'Increases Energy regeneration by 100% for 15s.' },
          { id: 'rog_r14_hemorrhage', name: 'Hemorrhage', iconUrl: getSkillIconUrl('rogue', 'backstab'), desc: 'Causes target to bleed and take bonus physical damage.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'rog_r17_cloak_of_shadows', name: 'Cloak of Shadows', iconUrl: getSkillIconUrl('rogue', 'vanish'), desc: 'Dispels all harmful magic effects and grants 90% spell resistance.' },
          { id: 'rog_r17_cheat_death', name: 'Cheat Death', iconUrl: getSkillIconUrl('rogue', 'stealth'), desc: 'Fatal attacks reduce health to 10% instead of killing you.' },
          { id: 'rog_r17_evasion', name: 'Evasion', iconUrl: getSkillIconUrl('rogue', 'sprint'), desc: 'Increases dodge chance by 50% for 15s.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'rog_r20_shadowstep', name: 'Shadowstep', iconUrl: getSkillIconUrl('rogue', 'shadowstep'), desc: 'Teleport behind target, increasing movement speed by 70%.' },
          { id: 'rog_r20_killing_spree', name: 'Killing Spree', iconUrl: getSkillIconUrl('rogue', 'blade_flurry'), desc: 'Step between enemies attacking rapidly 5 times.' },
          { id: 'rog_r20_shadow_dance', name: 'Shadow Dance', iconUrl: getSkillIconUrl('rogue', 'stealth'), desc: 'Allows use of stealth abilities out of stealth for 8s.' }
        ]
      }
    ],
    spellbook: [
      { id: 'sinister_strike', name: 'Sinister Strike', type: 'Builder', cost: '45 Energy', cooldown: 'Instant', iconUrl: getSkillIconUrl('rogue', 'sinister_strike'), desc: 'Vicious strike generating 1 combo point.' },
      { id: 'eviscerate', name: 'Eviscerate', type: 'Finisher', cost: '35 Energy', cooldown: 'Instant', iconUrl: getSkillIconUrl('rogue', 'eviscerate'), desc: 'Finishing move dealing damage based on combo points.' },
      { id: 'stealth', name: 'Stealth', type: 'Utility', cost: '0 Energy', cooldown: '6s', iconUrl: getSkillIconUrl('rogue', 'stealth'), desc: 'Conceals rogue in shadows.' },
      { id: 'vanish', name: 'Vanish', type: 'Escape', cost: '0 Energy', cooldown: '120s', iconUrl: getSkillIconUrl('rogue', 'vanish'), desc: 'Disappears into shadows during combat.' }
    ]
  },

  priest: {
    className: 'Priest',
    icon: '✨',
    color: '#c6d4f0',
    resource: 'Mana',
    armorType: 'cloth',
    specs: [
      {
        id: 'discipline',
        name: 'DISCIPLINE',
        role: 'HEALER',
        roleType: 'healer',
        roleIcon: '💚',
        signatureAbility: 'Power Word: Shield',
        primaryStat: 'Intellect',
        complexity: 'Medium',
        passive: 'Soul Warding — Reduces cooldown of Power Word: Shield.',
        sampleSkills: [
          { name: 'Power Word: Shield', iconUrl: getSkillIconUrl('priest', 'power_word_shield'), isSignature: true },
          { name: 'Penance', iconUrl: getSkillIconUrl('priest', 'flash_heal') },
          { name: 'Inner Focus', iconUrl: getSkillIconUrl('priest', 'inner_focus') },
          { name: 'Dispel Magic', iconUrl: getSkillIconUrl('priest', 'dispel_magic') }
        ]
      },
      {
        id: 'holy',
        name: 'HOLY',
        role: 'HEALER',
        roleType: 'healer',
        roleIcon: '💚',
        signatureAbility: 'Prayer of Healing',
        primaryStat: 'Intellect',
        complexity: 'Low',
        passive: 'Holy Guidance — Increases healing spell power by 25% of Spirit.',
        sampleSkills: [
          { name: 'Prayer of Healing', iconUrl: getSkillIconUrl('priest', 'prayer_of_healing'), isSignature: true },
          { name: 'Renew', iconUrl: getSkillIconUrl('priest', 'renew') },
          { name: 'Circle of Healing', iconUrl: getSkillIconUrl('priest', 'holy_nova') },
          { name: 'Guardian Spirit', iconUrl: getSkillIconUrl('priest', 'flash_heal') }
        ]
      },
      {
        id: 'shadow',
        name: 'SHADOW',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Mind Blast',
        primaryStat: 'Intellect',
        complexity: 'High',
        passive: 'Shadowform — Increases Shadow damage dealt by 20%.',
        sampleSkills: [
          { name: 'Mind Blast', iconUrl: getSkillIconUrl('priest', 'mind_blast'), isSignature: true },
          { name: 'Shadow Word: Pain', iconUrl: getSkillIconUrl('priest', 'shadow_word_pain') },
          { name: 'Mind Flay', iconUrl: getSkillIconUrl('priest', 'mind_flay') },
          { name: 'Vampiric Touch', iconUrl: getSkillIconUrl('priest', 'shadow_word_pain') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'pri_r5_improved_renew', name: 'Improved Renew', iconUrl: getSkillIconUrl('priest', 'renew'), desc: 'Increases healing done by Renew by 15%.' },
          { id: 'pri_r5_shield_ward', name: 'Shield Ward', iconUrl: getSkillIconUrl('priest', 'power_word_shield'), desc: 'Power Word: Shield absorbs 20% more damage.' },
          { id: 'pri_r5_shadow_affinity', name: 'Shadow Affinity', iconUrl: getSkillIconUrl('priest', 'shadow_word_pain'), desc: 'Reduces threat generated by Shadow spells by 25%.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'pri_r8_improved_shield', name: 'Divine Aegis', iconUrl: getSkillIconUrl('priest', 'power_word_shield'), desc: 'Critical heals create a protective shield.' },
          { id: 'pri_r8_psychic_scream', name: 'Psychic Scream', iconUrl: getSkillIconUrl('priest', 'psychic_scream'), desc: 'Fears up to 4 nearby enemies for 8s.' },
          { id: 'pri_r8_silence', name: 'Silence', iconUrl: getSkillIconUrl('priest', 'mind_blast'), desc: 'Silences target for 5s.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'pri_r11_inner_focus', name: 'Inner Focus', iconUrl: getSkillIconUrl('priest', 'inner_focus'), desc: 'Next spell costs 0 mana and has +25% crit chance.' },
          { id: 'pri_r11_holy_nova', name: 'Holy Nova', iconUrl: getSkillIconUrl('priest', 'holy_nova'), desc: 'Explosion of holy light healing allies and damaging foes.' },
          { id: 'pri_r11_vampiric_embrace', name: 'Vampiric Embrace', iconUrl: getSkillIconUrl('priest', 'shadow_word_pain'), desc: 'Shadow damage heals party members for 20% of damage.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'pri_r14_mind_melt', name: 'Mind Melt', iconUrl: getSkillIconUrl('priest', 'mind_blast'), desc: 'Increases Mind Blast critical chance by 15%.' },
          { id: 'pri_r14_pain_suppression', name: 'Pain Suppression', iconUrl: getSkillIconUrl('priest', 'power_word_shield'), desc: 'Reduces damage taken by ally by 40% for 8s.' },
          { id: 'pri_r14_spirit_of_redemption', name: 'Spirit of Redemption', iconUrl: getSkillIconUrl('priest', 'renew'), desc: 'Cast heals for 15s after death.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'pri_r17_desperate_prayer', name: 'Desperate Prayer', iconUrl: getSkillIconUrl('priest', 'flash_heal'), desc: 'Instantly heals caster for large amount.' },
          { id: 'pri_r17_power_infusion', name: 'Power Infusion', iconUrl: getSkillIconUrl('priest', 'inner_focus'), desc: 'Increases target spell casting speed by 20%.' },
          { id: 'pri_r17_dispersion', name: 'Dispersion', iconUrl: getSkillIconUrl('priest', 'shadow_word_pain'), desc: 'Reduces all damage taken by 90% and restores 36% mana.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'pri_r20_prayer_of_healing', name: 'Prayer of Healing', iconUrl: getSkillIconUrl('priest', 'prayer_of_healing'), desc: 'Heals all party members within 30 yards.' },
          { id: 'pri_r20_lightwell', name: 'Lightwell', iconUrl: getSkillIconUrl('priest', 'renew'), desc: 'Creates a Holy Lightwell allies can click to heal.' },
          { id: 'pri_r20_shadowfiend', name: 'Shadowfiend', iconUrl: getSkillIconUrl('priest', 'mind_blast'), desc: 'Summons shadow pet that restores mana on hit.' }
        ]
      }
    ],
    spellbook: [
      { id: 'power_word_shield', name: 'Power Word: Shield', type: 'Shield', cost: '120 Mana', cooldown: '12s', iconUrl: getSkillIconUrl('priest', 'power_word_shield'), desc: 'Draws on soul of target to absorb damage.' },
      { id: 'mind_blast', name: 'Mind Blast', type: 'Shadow Attack', cost: '90 Mana', cooldown: '8s', iconUrl: getSkillIconUrl('priest', 'mind_blast'), desc: 'Blasts target mind with Shadow damage.' },
      { id: 'renew', name: 'Renew', type: 'HoT', cost: '80 Mana', cooldown: 'Instant', iconUrl: getSkillIconUrl('priest', 'renew'), desc: 'Heals target periodically over 15s.' }
    ]
  },

  hunter: {
    className: 'Hunter',
    icon: '🏹',
    color: '#a6d84f',
    resource: 'Focus',
    armorType: 'mail',
    specs: [
      {
        id: 'beast_mastery',
        name: 'BEAST MASTERY',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Bestial Wrath',
        primaryStat: 'Agility',
        complexity: 'Low',
        passive: 'Ferocity — Pet damage increased by 30%.',
        sampleSkills: [
          { name: 'Bestial Wrath', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_hawk'), isSignature: true },
          { name: 'Kill Command', iconUrl: getSkillIconUrl('hunter', 'arcane_shot') },
          { name: 'Mend Pet', iconUrl: getSkillIconUrl('hunter', 'mend_pet') },
          { name: 'Aspect of the Hawk', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_hawk') }
        ]
      },
      {
        id: 'marksmanship',
        name: 'MARKSMANSHIP',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Aimed Shot',
        primaryStat: 'Agility',
        complexity: 'Medium',
        passive: 'Trueshot Aura — Increases ranged attack power by 10%.',
        sampleSkills: [
          { name: 'Aimed Shot', iconUrl: getSkillIconUrl('hunter', 'aimed_shot'), isSignature: true },
          { name: 'Arcane Shot', iconUrl: getSkillIconUrl('hunter', 'arcane_shot') },
          { name: 'Multi-Shot', iconUrl: getSkillIconUrl('hunter', 'multi_shot') },
          { name: 'Serpent Sting', iconUrl: getSkillIconUrl('hunter', 'serpent_sting') }
        ]
      },
      {
        id: 'survival',
        name: 'SURVIVAL',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Explosive Shot',
        primaryStat: 'Agility',
        complexity: 'High',
        passive: 'Entrapment — Trap trigger roots enemies for 4s.',
        sampleSkills: [
          { name: 'Explosive Shot', iconUrl: getSkillIconUrl('hunter', 'arcane_shot'), isSignature: true },
          { name: 'Freezing Trap', iconUrl: getSkillIconUrl('hunter', 'freezing_trap') },
          { name: 'Deterrence', iconUrl: getSkillIconUrl('hunter', 'deterrence') },
          { name: 'Disengage', iconUrl: getSkillIconUrl('hunter', 'disengage') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'hun_r5_lethal_shots', name: 'Lethal Shots', iconUrl: getSkillIconUrl('hunter', 'arcane_shot'), desc: 'Increases ranged critical strike chance by 5%.' },
          { id: 'hun_r5_improved_hawk', name: 'Improved Hawk', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_hawk'), desc: 'Ranged attacks have 10% chance to increase attack speed by 15%.' },
          { id: 'hun_r5_savage_strikes', name: 'Savage Strikes', iconUrl: getSkillIconUrl('hunter', 'serpent_sting'), desc: 'Increases critical strike chance of traps by 20%.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'hun_r8_startle_shot', name: 'Concussive Shot', iconUrl: getSkillIconUrl('hunter', 'concussive_shot'), desc: 'Slows target movement speed by 50% for 4s.' },
          { id: 'hun_r8_freezing_trap', name: 'Freezing Trap', iconUrl: getSkillIconUrl('hunter', 'freezing_trap'), desc: 'Traps enemy in ice for 20s.' },
          { id: 'hun_r8_scatter_shot', name: 'Scatter Shot', iconUrl: getSkillIconUrl('hunter', 'multi_shot'), desc: 'Short-range shot disorienting target for 4s.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'hun_r11_mend_pet', name: 'Mend Pet', iconUrl: getSkillIconUrl('hunter', 'mend_pet'), desc: 'Heals pet over 10s.' },
          { id: 'hun_r11_trueshot_aura', name: 'Trueshot Aura', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_hawk'), desc: 'Increases party ranged attack power by 10%.' },
          { id: 'hun_r11_wyvern_sting', name: 'Wyvern Sting', iconUrl: getSkillIconUrl('hunter', 'serpent_sting'), desc: 'Puts target to sleep for 30s.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'hun_r14_multi_shot', name: 'Multi-Shot', iconUrl: getSkillIconUrl('hunter', 'multi_shot'), desc: 'Fires 3 arrows hitting 3 nearby targets.' },
          { id: 'hun_r14_aimed_shot', name: 'Aimed Shot', iconUrl: getSkillIconUrl('hunter', 'aimed_shot'), desc: 'Precise aimed shot reducing target healing received.' },
          { id: 'hun_r14_readiness', name: 'Readiness', iconUrl: getSkillIconUrl('hunter', 'disengage'), desc: 'Instantly resets cooldown of all Hunter abilities.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'hun_r17_deterrence', name: 'Deterrence', iconUrl: getSkillIconUrl('hunter', 'deterrence'), desc: 'Increases parry chance by 100% for 10s.' },
          { id: 'hun_r17_bestial_wrath', name: 'Bestial Wrath', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_hawk'), desc: 'Enrages pet, increasing damage by 50% for 18s.' },
          { id: 'hun_r17_disengage', name: 'Disengage', iconUrl: getSkillIconUrl('hunter', 'disengage'), desc: 'Leaps backward escaping melee range.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'hun_r20_improved_volley', name: 'Volley', iconUrl: getSkillIconUrl('hunter', 'multi_shot'), desc: 'Rains arrows down on target area dealing AoE damage.' },
          { id: 'hun_r20_kill_shot', name: 'Kill Shot', iconUrl: getSkillIconUrl('hunter', 'aimed_shot'), desc: 'Finishing shot available on low health targets.' },
          { id: 'hun_r20_explosive_shot', name: 'Explosive Shot', iconUrl: getSkillIconUrl('hunter', 'arcane_shot'), desc: 'Fires explosive charge dealing Fire damage per second.' }
        ]
      }
    ],
    spellbook: [
      { id: 'arcane_shot', name: 'Arcane Shot', type: 'Shot', cost: '25 Focus', cooldown: '6s', iconUrl: getSkillIconUrl('hunter', 'arcane_shot'), desc: 'Instant shot dealing Arcane damage.' },
      { id: 'aimed_shot', name: 'Aimed Shot', type: 'Shot', cost: '50 Focus', cooldown: '12s', iconUrl: getSkillIconUrl('hunter', 'aimed_shot'), desc: 'Precise aimed shot dealing heavy damage.' }
    ]
  },

  shaman: {
    className: 'Shaman',
    icon: '⚡',
    color: '#4e8aea',
    resource: 'Mana',
    armorType: 'mail',
    specs: [
      {
        id: 'elemental',
        name: 'ELEMENTAL',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Lightning Bolt',
        primaryStat: 'Intellect',
        complexity: 'Medium',
        passive: 'Elemental Overload — Spells have 25% chance to cast a free duplicate spell.',
        sampleSkills: [
          { name: 'Lightning Bolt', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), isSignature: true },
          { name: 'Chain Lightning', iconUrl: getSkillIconUrl('shaman', 'chain_lightning') },
          { name: 'Earth Shock', iconUrl: getSkillIconUrl('shaman', 'earth_shock') },
          { name: 'Flame Shock', iconUrl: getSkillIconUrl('shaman', 'flame_shock') }
        ]
      },
      {
        id: 'enhancement',
        name: 'ENHANCEMENT',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Stormstrike',
        primaryStat: 'Strength',
        complexity: 'High',
        passive: 'Maelstrom Weapon — Melee hits grant instant spell casts.',
        sampleSkills: [
          { name: 'Stormstrike', iconUrl: getSkillIconUrl('shaman', 'stormstrike'), isSignature: true },
          { name: 'Lava Lash', iconUrl: getSkillIconUrl('shaman', 'flame_shock') },
          { name: 'Windfury Weapon', iconUrl: getSkillIconUrl('shaman', 'windfury_weapon') },
          { name: 'Lightning Shield', iconUrl: getSkillIconUrl('shaman', 'lightning_shield') }
        ]
      },
      {
        id: 'restoration',
        name: 'RESTORATION',
        role: 'HEALER',
        roleType: 'healer',
        roleIcon: '💚',
        signatureAbility: 'Chain Heal',
        primaryStat: 'Intellect',
        complexity: 'Low',
        passive: 'Ancestral Awakening — Critical heals heal additional low health allies.',
        sampleSkills: [
          { name: 'Chain Heal', iconUrl: getSkillIconUrl('shaman', 'healing_wave'), isSignature: true },
          { name: 'Healing Wave', iconUrl: getSkillIconUrl('shaman', 'healing_wave') },
          { name: 'Earth Shield', iconUrl: getSkillIconUrl('shaman', 'earth_shield') },
          { name: 'Mana Tide Totem', iconUrl: getSkillIconUrl('shaman', 'mana_tide_totem') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'sha_r5_concussion', name: 'Concussion', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), desc: 'Increases damage of Lightning Bolt and Shock spells by 5%.' },
          { id: 'sha_r5_flurry', name: 'Flurry', iconUrl: getSkillIconUrl('shaman', 'windfury_weapon'), desc: 'Increases attack speed by 30% after a critical hit.' },
          { id: 'sha_r5_tidal_focus', name: 'Tidal Focus', iconUrl: getSkillIconUrl('shaman', 'healing_wave'), desc: 'Reduces mana cost of healing spells by 5%.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'sha_r8_improved_earth_shock', name: 'Earth Shock', iconUrl: getSkillIconUrl('shaman', 'earth_shock'), desc: 'Interrupts spellcasting locking school for 2s.' },
          { id: 'sha_r8_windfury', name: 'Windfury Weapon', iconUrl: getSkillIconUrl('shaman', 'windfury_weapon'), desc: 'Imbues weapon giving 20% chance to attack 2 extra times.' },
          { id: 'sha_r8_earth_shield', name: 'Earth Shield', iconUrl: getSkillIconUrl('shaman', 'earth_shield'), desc: 'Shields ally healing them whenever attacked.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'sha_r11_ancestral_guidance', name: 'Ancestral Guidance', iconUrl: getSkillIconUrl('shaman', 'healing_wave'), desc: 'Converts 20% damage or healing into area healing.' },
          { id: 'sha_r11_stormstrike', name: 'Stormstrike', iconUrl: getSkillIconUrl('shaman', 'stormstrike'), desc: 'Instantly attack with both weapons.' },
          { id: 'sha_r11_mana_tide', name: 'Mana Tide Totem', iconUrl: getSkillIconUrl('shaman', 'mana_tide_totem'), desc: 'Restores 6% total mana every 3s to party.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'sha_r14_chain_lightning', name: 'Chain Lightning', iconUrl: getSkillIconUrl('shaman', 'chain_lightning'), desc: 'Hurls lightning bolt striking up to 3 targets.' },
          { id: 'sha_r14_feral_spirit', name: 'Feral Spirit', iconUrl: getSkillIconUrl('shaman', 'windfury_weapon'), desc: 'Summons 2 Spirit Wolves to fight by your side.' },
          { id: 'sha_r14_riptide', name: 'Riptide', iconUrl: getSkillIconUrl('shaman', 'healing_wave'), desc: 'Heals an ally instantly and over 18s.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'sha_r17_earthbind', name: 'Earthbind Totem', iconUrl: getSkillIconUrl('shaman', 'earth_shock'), desc: 'Slows all nearby enemies by 50%.' },
          { id: 'sha_r17_ghost_wolf', name: 'Ghost Wolf', iconUrl: getSkillIconUrl('shaman', 'windfury_weapon'), desc: 'Transforms into a Ghost Wolf increasing speed by 40%.' },
          { id: 'sha_r17_nature_swiftness', name: 'Nature\'s Swiftness', iconUrl: getSkillIconUrl('shaman', 'healing_wave'), desc: 'Next Nature spell becomes instant cast.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'sha_r20_bloodlust', name: 'Bloodlust / Heroism', iconUrl: getSkillIconUrl('shaman', 'stormstrike'), desc: 'Increases party haste by 30% for 40s.' },
          { id: 'sha_r20_thunderstorm', name: 'Thunderstorm', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), desc: 'Knocks back all enemies and restores 20% mana.' },
          { id: 'sha_r20_ascendance', name: 'Ascendance', iconUrl: getSkillIconUrl('shaman', 'chain_lightning'), desc: 'Transforms into elemental ascendant form.' }
        ]
      }
    ],
    spellbook: [
      { id: 'lightning_bolt', name: 'Lightning Bolt', type: 'Spell', cost: '80 Mana', cooldown: '2.0s cast', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), desc: 'Casts lightning at enemy.' }
    ]
  },

  warlock: {
    className: 'Warlock',
    icon: '💀',
    color: '#a785e6',
    resource: 'Mana',
    armorType: 'cloth',
    specs: [
      {
        id: 'affliction',
        name: 'AFFLICTION',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Corruption',
        primaryStat: 'Intellect',
        complexity: 'High',
        passive: 'Shadow Mastery — DoT ticks increase Shadow damage by 15%.',
        sampleSkills: [
          { name: 'Corruption', iconUrl: getSkillIconUrl('warlock', 'corruption'), isSignature: true },
          { name: 'Curse of Agony', iconUrl: getSkillIconUrl('warlock', 'curse_of_agony') },
          { name: 'Unstable Affliction', iconUrl: getSkillIconUrl('warlock', 'unstable_affliction') },
          { name: 'Drain Soul', iconUrl: getSkillIconUrl('warlock', 'drain_soul') }
        ]
      },
      {
        id: 'demonology',
        name: 'DEMONOLOGY',
        role: 'DPS / TANK',
        roleType: 'tank',
        roleIcon: '🛡️',
        signatureAbility: 'Metamorphosis',
        primaryStat: 'Intellect',
        complexity: 'Medium',
        passive: 'Demonic Knowledge — Increases spell power by 12% of demon pet stats.',
        sampleSkills: [
          { name: 'Metamorphosis', iconUrl: getSkillIconUrl('warlock', 'demon_armor'), isSignature: true },
          { name: 'Summon Felguard', iconUrl: getSkillIconUrl('warlock', 'summon_voidwalker') },
          { name: 'Demon Armor', iconUrl: getSkillIconUrl('warlock', 'demon_armor') },
          { name: 'Shadow Bolt', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt') }
        ]
      },
      {
        id: 'destruction',
        name: 'DESTRUCTION',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Chaos Bolt',
        primaryStat: 'Intellect',
        complexity: 'Low',
        passive: 'Ruin — Increases critical strike damage bonus of Destruction spells by 100%.',
        sampleSkills: [
          { name: 'Chaos Bolt', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt'), isSignature: true },
          { name: 'Immolate', iconUrl: getSkillIconUrl('warlock', 'immolate') },
          { name: 'Conflagrate', iconUrl: getSkillIconUrl('warlock', 'immolate') },
          { name: 'Incinerate', iconUrl: getSkillIconUrl('warlock', 'immolate') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'wlk_r5_bane', name: 'Bane', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt'), desc: 'Reduces cast time of Shadow Bolt and Immolate by 0.5s.' },
          { id: 'wlk_r5_improved_corruption', name: 'Improved Corruption', iconUrl: getSkillIconUrl('warlock', 'corruption'), desc: 'Reduces cast time of Corruption by 0.4s.' },
          { id: 'wlk_r5_demonic_embrace', name: 'Demonic Embrace', iconUrl: getSkillIconUrl('warlock', 'demon_armor'), desc: 'Increases total Stamina by 15%.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'wlk_r8_voidfeast', name: 'Fel Domination', iconUrl: getSkillIconUrl('warlock', 'summon_voidwalker'), desc: 'Next demon summon spell cast time reduced by 5.5s.' },
          { id: 'wlk_r8_fear', name: 'Fear', iconUrl: getSkillIconUrl('warlock', 'fear'), desc: 'Fears target causing them to flee for 20s.' },
          { id: 'wlk_r8_shadowfury', name: 'Shadowfury', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt'), desc: 'Stuns all enemies in target area for 3s.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'wlk_r11_siphon_life', name: 'Siphon Life', iconUrl: getSkillIconUrl('warlock', 'corruption'), desc: 'Corruption ticks heal caster for 40% of damage dealt.' },
          { id: 'wlk_r11_soul_link', name: 'Soul Link', iconUrl: getSkillIconUrl('warlock', 'demon_armor'), desc: 'Transfers 20% of damage taken to your demon pet.' },
          { id: 'wlk_r11_ruin', name: 'Ruin', iconUrl: getSkillIconUrl('warlock', 'immolate'), desc: 'Increases critical strike damage bonus of Destruction spells.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'wlk_r14_amplify_curse', name: 'Amplify Curse', iconUrl: getSkillIconUrl('warlock', 'curse_of_agony'), desc: 'Increases effect of next Curse by 50%.' },
          { id: 'wlk_r14_demonic_pact', name: 'Demonic Pact', iconUrl: getSkillIconUrl('warlock', 'summon_voidwalker'), desc: 'Increases party spell power by 10%.' },
          { id: 'wlk_r14_conflagrate', name: 'Conflagrate', iconUrl: getSkillIconUrl('warlock', 'immolate'), desc: 'Consumes Immolate to deal instant Fire damage.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'wlk_r17_death_coil', name: 'Mortal Coil', iconUrl: getSkillIconUrl('warlock', 'fear'), desc: 'Causes target to flee for 3s and heals caster.' },
          { id: 'wlk_r17_haunt', name: 'Haunt', iconUrl: getSkillIconUrl('warlock', 'unstable_affliction'), desc: 'Increases Shadow DoT damage taken by target by 20%.' },
          { id: 'wlk_r17_demonic_circle', name: 'Demonic Circle', iconUrl: getSkillIconUrl('warlock', 'demon_armor'), desc: 'Teleports caster to designated circle.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'wlk_r20_chaos_bolt', name: 'Chaos Bolt', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt'), desc: 'Fires chaotic bolt piercing all absorption shields.' },
          { id: 'wlk_r20_metamorphosis', name: 'Metamorphosis', iconUrl: getSkillIconUrl('warlock', 'demon_armor'), desc: 'Transforms into Demon Demonology form gaining armor.' },
          { id: 'wlk_r20_summon_infernal', name: 'Summon Infernal', iconUrl: getSkillIconUrl('warlock', 'summon_voidwalker'), desc: 'Calls down infernal meteor stunning enemies.' }
        ]
      }
    ],
    spellbook: [
      { id: 'shadow_bolt', name: 'Shadow Bolt', type: 'Spell', cost: '110 Mana', cooldown: '2.5s cast', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt'), desc: 'Sends bolt of shadow energy at enemy.' }
    ]
  },

  druid: {
    className: 'Druid',
    icon: '🌿',
    color: '#ff8c1a',
    resource: 'Mana',
    armorType: 'leather',
    specs: [
      {
        id: 'balance',
        name: 'BALANCE',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Starfire',
        primaryStat: 'Intellect',
        complexity: 'Medium',
        passive: 'Eclipse — Alternates between Solar and Lunar spell power boosts.',
        sampleSkills: [
          { name: 'Starfire', iconUrl: getSkillIconUrl('druid', 'starfire'), isSignature: true },
          { name: 'Wrath', iconUrl: getSkillIconUrl('druid', 'wrath') },
          { name: 'Moonfire', iconUrl: getSkillIconUrl('druid', 'moonfire') },
          { name: 'Entangling Roots', iconUrl: getSkillIconUrl('druid', 'entangling_roots') }
        ]
      },
      {
        id: 'feral',
        name: 'FERAL',
        role: 'TANK / DPS',
        roleType: 'tank',
        roleIcon: '🛡️',
        signatureAbility: 'Mangle',
        primaryStat: 'Agility',
        complexity: 'High',
        passive: 'Thick Hide — Increases Bear Form armor by 180% and Stamina by 25%.',
        sampleSkills: [
          { name: 'Mangle', iconUrl: getSkillIconUrl('druid', 'claw'), isSignature: true },
          { name: 'Maul', iconUrl: getSkillIconUrl('druid', 'maul') },
          { name: 'Swipe', iconUrl: getSkillIconUrl('druid', 'swipe') },
          { name: 'Rip', iconUrl: getSkillIconUrl('druid', 'rip') }
        ]
      },
      {
        id: 'restoration',
        name: 'RESTORATION',
        role: 'HEALER',
        roleType: 'healer',
        roleIcon: '💚',
        signatureAbility: 'Rejuvenation',
        primaryStat: 'Intellect',
        complexity: 'Low',
        passive: 'Tree of Life — Increases healing done by 15% and armor by 120%.',
        sampleSkills: [
          { name: 'Rejuvenation', iconUrl: getSkillIconUrl('druid', 'rejuvenation'), isSignature: true },
          { name: 'Healing Touch', iconUrl: getSkillIconUrl('druid', 'healing_touch') },
          { name: 'Regrowth', iconUrl: getSkillIconUrl('druid', 'regrowth') },
          { name: 'Tranquility', iconUrl: getSkillIconUrl('druid', 'tranquility') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'dru_r5_improved_wrath', name: 'Improved Wrath', iconUrl: getSkillIconUrl('druid', 'wrath'), desc: 'Reduces cast time of Wrath by 0.5s.' },
          { id: 'dru_r5_feral_aggression', name: 'Feral Aggression', iconUrl: getSkillIconUrl('druid', 'claw'), desc: 'Increases damage of Ferocious Bite and Demoralizing Roar.' },
          { id: 'dru_r5_improved_rejuvenation', name: 'Improved Rejuvenation', iconUrl: getSkillIconUrl('druid', 'rejuvenation'), desc: 'Increases effect of Rejuvenation by 15%.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'dru_r8_typhoon', name: 'Typhoon', iconUrl: getSkillIconUrl('druid', 'wrath'), desc: 'Knocks back all enemies in front of druid.' },
          { id: 'dru_r8_bash', name: 'Bash', iconUrl: getSkillIconUrl('druid', 'maul'), desc: 'Stuns target in Bear Form for 4s.' },
          { id: 'dru_r8_nature_swiftness', name: "Nature's Swiftness", iconUrl: getSkillIconUrl('druid', 'healing_touch'), desc: 'Next Nature spell becomes instant cast.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'dru_r11_innervate', name: 'Innervate', iconUrl: getSkillIconUrl('druid', 'innervate'), desc: 'Restores 20% max mana over 10s.' },
          { id: 'dru_r11_survival_instincts', name: 'Survival Instincts', iconUrl: getSkillIconUrl('druid', 'maul'), desc: 'Grants 30% max health temporarily in Bear Form.' },
          { id: 'dru_r11_swiftmend', name: 'Swiftmend', iconUrl: getSkillIconUrl('druid', 'rejuvenation'), desc: 'Consumes Rejuvenation to heal target instantly.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'dru_r14_savage_fury', name: 'Savage Fury', iconUrl: getSkillIconUrl('druid', 'claw'), desc: 'Increases damage of Claw and Mangle by 20%.' },
          { id: 'dru_r14_moonkin_form', name: 'Moonkin Form', iconUrl: getSkillIconUrl('druid', 'starfire'), desc: 'Transforms into Moonkin Form increasing spell crit by 5%.' },
          { id: 'dru_r14_wild_growth', name: 'Wild Growth', iconUrl: getSkillIconUrl('druid', 'rejuvenation'), desc: 'Heals up to 5 party members over 7s.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'dru_r17_improved_barkskin', name: 'Barkskin', iconUrl: getSkillIconUrl('druid', 'barkskin'), desc: 'Reduces all damage taken by 20% for 12s.' },
          { id: 'dru_r17_frenzied_regeneration', name: 'Frenzied Regeneration', iconUrl: getSkillIconUrl('druid', 'maul'), desc: 'Converts Rage into health per second.' },
          { id: 'dru_r17_tree_of_life', name: 'Tree of Life', iconUrl: getSkillIconUrl('druid', 'rejuvenation'), desc: 'Transforms into Tree of Life increasing healing.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'dru_r20_starfall', name: 'Starfall', iconUrl: getSkillIconUrl('druid', 'starfire'), desc: 'Calls down stars striking all enemies within 30 yards.' },
          { id: 'dru_r20_berserk', name: 'Berserk', iconUrl: getSkillIconUrl('druid', 'claw'), desc: 'Reduces Energy cost of Cat Form abilities by 50%.' },
          { id: 'dru_r20_tranquility', name: 'Tranquility', iconUrl: getSkillIconUrl('druid', 'tranquility'), desc: 'Channels massive area healing to all allies for 8s.' }
        ]
      }
    ],
    spellbook: [
      { id: 'starfire', name: 'Starfire', type: 'Spell', cost: '110 Mana', cooldown: '3.0s cast', iconUrl: getSkillIconUrl('druid', 'starfire'), desc: 'Calls down star beam dealing heavy Arcane damage.' }
    ]
  }
};

const GAME_ITEMS = [
  {
    id: 'runic_blade_epic',
    name: 'Champion\'s Runic Blade',
    slot: 'mainhand',
    kind: 'weapon',
    quality: 'epic',
    ilvl: 90,
    stats: { dps: 92, str: 35, sta: 28, crit: 2.5 },
    armorType: 'plate',
    source: '🏰 Drop: Runic Eye Keep (Final Boss)',
    iconUrl: getItemIconUrl('arcanite_mining_pick')
  },
  {
    id: 'mithril_defender_shield',
    name: 'Sacred Mithril Bulwark',
    slot: 'offhand',
    kind: 'shield',
    quality: 'epic',
    ilvl: 88,
    stats: { armor: 850, block: 120, sta: 40, str: 22 },
    armorType: 'plate',
    source: '🛠️ Craft: Guild Advanced Blacksmithing',
    iconUrl: getItemIconUrl('architects_cornerstone')
  },
  {
    id: 'helm_dreadnought',
    name: 'Helm of the Unbroken',
    slot: 'head',
    kind: 'armor',
    quality: 'epic',
    ilvl: 88,
    stats: { armor: 680, str: 38, sta: 45, defense: 18 },
    armorType: 'plate',
    source: '🏰 Drop: Ashfall Chasm (Boss 2)',
    iconUrl: getItemIconUrl('ashstalker_cowl')
  },
  {
    id: 'chest_plate_glory',
    name: 'Chestplate of Immortal Glory',
    slot: 'chest',
    kind: 'armor',
    quality: 'legendary',
    ilvl: 100,
    stats: { armor: 980, str: 52, sta: 60, crit: 3.0, block: 85 },
    armorType: 'plate',
    source: '⭐ Legendary Drop: King Claude (World Raid Boss)',
    iconUrl: getItemIconUrl('alien_armor_plate')
  },
  {
    id: 'legs_mithril_greaves',
    name: 'Reinforced Mithril Greaves',
    slot: 'legs',
    kind: 'armor',
    quality: 'rare',
    ilvl: 78,
    stats: { armor: 520, str: 28, sta: 32 },
    armorType: 'plate',
    source: '🛠️ Craft: Level 70 Blacksmithing',
    iconUrl: getItemIconUrl('ashstalker_legguards')
  },
  {
    id: 'ring_dragon_seal',
    name: 'Seal of the Fire Dragon',
    slot: 'ring1',
    kind: 'ring',
    quality: 'epic',
    ilvl: 90,
    stats: { str: 25, int: 25, crit: 2.0, haste: 1.5 },
    armorType: 'any',
    source: '🏰 Drop: Dragon\'s Lair',
    iconUrl: getItemIconUrl('ashen_focus_ring')
  },
  {
    id: 'trinket_holy_relic',
    name: 'Relic of Purifying Light',
    slot: 'trinket',
    kind: 'trinket',
    quality: 'epic',
    ilvl: 92,
    stats: { spellPower: 55, active: 'Heals 1,200 HP instantly (Cooldown: 2 min)' },
    armorType: 'any',
    source: '🏆 Guild Ranking Reward',
    iconUrl: getItemIconUrl('amber_crimson_armor_plate')
  }
];
