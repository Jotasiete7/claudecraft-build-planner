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
        name: 'BATTLECRAFT',
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
        name: 'BLOODRUSH',
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
        id: 'prot',
        name: 'IRONGUARD',
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
    // Source: warrior_rows.ts - WARRIOR_ROWS (real game data)
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'war_row_double_charge', name: 'Double Charge', iconUrl: getSkillIconUrl('warrior', 'charge'), desc: 'Your Charge stores 2 uses, so you can charge twice in a row.' },
          { id: 'war_row_pursuit', name: 'Pursuit', iconUrl: getSkillIconUrl('warrior', 'charge'), desc: 'Each enemy you kill grants 30% movement speed for 6 sec.' },
          { id: 'war_row_crushing_charge', name: 'Crushing Charge', iconUrl: getSkillIconUrl('warrior', 'charge'), desc: 'Your Charge also roots the target for 4 sec and slows it by 50% for 15 sec.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'war_row_second_wind', name: 'Second Wind', iconUrl: getSkillIconUrl('warrior', 'battle_shout'), desc: 'Below 35% health, you regenerate 1.5% of your health per second.' },
          { id: 'war_row_die_by_the_sword', name: 'Die by the Sword', iconUrl: getSkillIconUrl('warrior', 'mortal_strike'), desc: 'Defensive cooldown: for 8 sec you take 30% less damage and dodge far more attacks.' },
          { id: 'war_row_victory_rush', name: 'Victory Rush', iconUrl: getSkillIconUrl('warrior', 'execute'), desc: 'After killing an enemy, your next strike heals you for 20% of your maximum health.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'war_row_piercing_howl', name: 'Piercing Howl', iconUrl: getSkillIconUrl('warrior', 'demoralizing_shout'), desc: 'A shout that slows enemies within 15 yards by 50% for 8 sec.' },
          { id: 'war_row_storm_bolt', name: 'Storm Bolt', iconUrl: getSkillIconUrl('warrior', 'execute'), desc: 'Hurl your weapon to stun a target.' },
          { id: 'war_row_lingering_dread', name: 'Lingering Dread', iconUrl: getSkillIconUrl('warrior', 'demoralizing_shout'), desc: 'Enemies feared by your Intimidating Shout can endure 20% of their health in damage before the fear breaks.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'war_row_anger_management', name: 'Anger Management', iconUrl: getSkillIconUrl('warrior', 'bloodthirst'), desc: 'Your auto-attacks generate 10% more rage and your abilities 5% more.' },
          { id: 'war_row_blood_offering', name: 'Combat Mastery', iconUrl: getSkillIconUrl('warrior', 'battle_shout'), desc: 'Your stances gain additional effects: Battle Stance boosts crits, Berserker speeds attacks, Guarded reduces big hits.' },
          { id: 'war_row_battle_rhythm', name: 'Battle Rhythm', iconUrl: getSkillIconUrl('warrior', 'bloodthirst'), desc: 'Every third ability you use generates 20% more rage.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'war_row_recklessness', name: 'Recklessness', iconUrl: getSkillIconUrl('warrior', 'raging_blow'), desc: 'Enrage: increase all your rage generation by 50% and gain 20% additional critical strike chance for 12 sec.' },
          { id: 'war_row_avatar', name: 'Avatar', iconUrl: getSkillIconUrl('warrior', 'mortal_strike'), desc: 'Transform into a colossus for 20 sec, breaking enemy control effects and increasing damage by 20%.' },
          { id: 'war_row_bloodbath', name: 'Bloodbath', iconUrl: getSkillIconUrl('warrior', 'execute'), desc: 'Each enemy you kill grants 5% critical strike and 5% damage dealt for 8 sec, stacking up to 25%.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'war_row_colossal_might', name: 'Colossal Might', iconUrl: getSkillIconUrl('warrior', 'mortal_strike'), desc: 'Each point of Rage you spend shaves 0.1 sec off the cooldown of your major offensive abilities.' },
          { id: 'war_row_bladestorm', name: 'Bladestorm', iconUrl: getSkillIconUrl('warrior', 'whirlwind'), desc: 'Become a whirling storm of steel, striking all enemies within 8 yards every second for 4 sec.' },
          { id: 'war_row_sanguine_aura', name: 'Sanguine Aura', iconUrl: getSkillIconUrl('warrior', 'battle_shout'), desc: 'You and your melee allies gain 10% attack speed and 10% damage for 20 sec.' }
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
    // Source: choice_rows_classic.ts - MAGE_CHOICE_ROWS
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'mag_r5_ice_floes', name: 'Ice Floes', iconUrl: getSkillIconUrl('mage', 'ice_floes'), desc: 'Grants Ice Floes: your next two spells with a cast time can be cast while moving.' },
          { id: 'mag_r5_double_blink', name: 'Double Blink', iconUrl: getSkillIconUrl('mage', 'double_blink'), desc: 'Flickerstep stores 2 charges, but each recharges 30% more slowly.' },
          { id: 'mag_r5_blink_cast', name: 'Blink While Casting', iconUrl: getSkillIconUrl('mage', 'blink_while_casting'), desc: 'You can use Flickerstep in the middle of a cast without interrupting it.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'mag_r8_warded', name: 'Warded', iconUrl: getSkillIconUrl('mage', 'warded'), desc: 'While your personal barrier is up you take 15% less damage, and it heals you for 10% of your maximum health when it breaks.' },
          { id: 'mag_r8_temporal_rift', name: 'Shifting Ward', iconUrl: getSkillIconUrl('mage', 'temporal_rift'), desc: 'Casting your personal barrier breaks roots affecting you.' },
          { id: 'mag_r8_greater_invis', name: 'Greater Invisibility', iconUrl: getSkillIconUrl('mage', 'greater_invisibility'), desc: 'Grants Greater Invisibility: vanish for 20 sec and remove 2 damage-over-time effects.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'mag_r11_rings_of_frost', name: 'Ring of Frost', iconUrl: getSkillIconUrl('mage', 'rings_of_frost'), desc: 'Grants Ring of Frost: its perimeter persists for 10 sec and freezes enemies that cross it for 4 sec.' },
          { id: 'mag_r11_snap_polymorph', name: 'Snap Bewitch', iconUrl: getSkillIconUrl('mage', 'snap_polymorph'), desc: 'Bewitch becomes instant, on a 20 sec cooldown.' },
          { id: 'mag_r11_twin_nova', name: 'Twin Icebind', iconUrl: getSkillIconUrl('mage', 'twin_frost_nova'), desc: 'Icebind stores 2 charges that recharge independently.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'mag_r14_power_echo', name: 'Power Echo', iconUrl: getSkillIconUrl('mage', 'power_echo'), desc: 'Grants Power Echo: your next direct spell repeats at 50% power on the same target.' },
          { id: 'mag_r14_overload', name: 'Overload', iconUrl: getSkillIconUrl('mage', 'overload'), desc: 'Grants Overload: your next spell is amplified by 40% but costs 50% more mana.' },
          { id: 'mag_r14_presence_of_mind', name: 'Racing Mind', iconUrl: getSkillIconUrl('mage', 'presence_of_mind'), desc: 'Grants Racing Mind: your next spell with a cast time is cast instantly.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'mag_r17_convergence', name: 'Elemental Convergence', iconUrl: getSkillIconUrl('mage', 'elemental_convergence'), desc: 'Alternating a Fire and a Frost spell opens an 8 sec surge of power, once per 30 sec.' },
          { id: 'mag_r17_cold_snap', name: "Winter's Recall", iconUrl: getSkillIconUrl('mage', 'cold_snap'), desc: "Grants Winter's Recall: instantly finishes the cooldown of Flickerstep, Frostveil and Greater Invisibility." },
          { id: 'mag_r17_mass_barrier', name: 'Mass Barrier', iconUrl: getSkillIconUrl('mage', 'mass_barrier'), desc: 'Grants Mass Barrier: shield you and all allies within 30 yd.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'mag_r20_rune_of_power', name: 'Rune of Power', iconUrl: getSkillIconUrl('mage', 'rune_of_power'), desc: 'Grants Rune of Power: inscribe a rune; allies standing near it deal 10% more damage.' },
          { id: 'mag_r20_overflowing_power', name: 'Overflowing Power', iconUrl: getSkillIconUrl('mage', 'overflowing_power'), desc: 'Spending mana shaves the cooldown of your defensives: 2 sec per tenth of your max mana spent, up to 10 sec every 30 sec.' },
          { id: 'mag_r20_evocation', name: 'Aetherwell', iconUrl: getSkillIconUrl('mage', 'evocation'), desc: 'Grants Aetherwell: channel to restore mana, building spell power the longer you channel.' }
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
    // Source: choice_rows_classic.ts - ROGUE_CHOICE_ROWS
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'rog_r5_relentless_strikes', name: 'Ceaseless Cuts', iconUrl: getSkillIconUrl('rogue', 'sinister_strike'), desc: 'Every 3rd Wicked Slash restores 30 energy.' },
          { id: 'rog_r5_improved_backstab', name: "Knife's Dividend", iconUrl: getSkillIconUrl('rogue', 'backstab'), desc: 'Craven Thrust makes your next Dirt Nap within 6 sec cost 50% less energy.' },
          { id: 'rog_r5_opportunist', name: 'Dusk Dividend', iconUrl: getSkillIconUrl('rogue', 'ambush'), desc: "Using Lurker's Strike or Throat Wire restores 20 energy." }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'rog_r8_smoke_screen', name: 'Smoke Screen', iconUrl: getSkillIconUrl('rogue', 'smoke_screen'), desc: 'Grants Smoke Screen: a cloud that raises your dodge by 30% for 8 sec.' },
          { id: 'rog_r8_improved_gouge', name: 'Blindside Opening', iconUrl: getSkillIconUrl('rogue', 'gouge'), desc: 'Eye Jab makes your next Craven Thrust within 6 sec free.' },
          { id: 'rog_r8_improved_kidney_shot', name: 'Paid in Pain', iconUrl: getSkillIconUrl('rogue', 'kidney_shot'), desc: 'Low Blow restores 15 energy when used.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'rog_r11_preparation', name: 'Contingency', iconUrl: getSkillIconUrl('rogue', 'preparation'), desc: 'Grants Contingency.' },
          { id: 'rog_r11_endurance', name: 'Second Exit', iconUrl: getSkillIconUrl('rogue', 'sprint'), desc: 'Swift Heels and Ghostfoot each store 2 uses.' },
          { id: 'rog_r11_improved_slice_and_dice', name: 'Borrowed Tempo', iconUrl: getSkillIconUrl('rogue', 'slice_and_dice'), desc: 'Every 3rd builder makes your next Cutthroat Tempo within 8 sec free.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'rog_r14_seal_fate', name: 'Final Notice', iconUrl: getSkillIconUrl('rogue', 'eviscerate'), desc: 'Each Dirt Nap or Bleed Out makes your next builder within 8 sec cost 50% less energy.' },
          { id: 'rog_r14_ghostly_strike', name: 'Wraith Strike', iconUrl: getSkillIconUrl('rogue', 'ghostly_strike'), desc: 'Grants Wraith Strike.' },
          { id: 'rog_r14_deadly_brew', name: 'Venom Dividend', iconUrl: getSkillIconUrl('rogue', 'deadly_poison'), desc: 'Landed melee auto-attacks with an active poison have a 20% chance to restore 10 energy.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'rog_r17_cloak_of_shadows', name: 'Shadecloak', iconUrl: getSkillIconUrl('rogue', 'cloak_of_shadows'), desc: 'Grants Shadecloak.' },
          { id: 'rog_r17_improved_evasion', name: 'Ghostfoot Gambit', iconUrl: getSkillIconUrl('rogue', 'evasion'), desc: 'Ghostfoot restores 30 energy and makes your next builder within 8 sec cost 50% less energy.' },
          { id: 'rog_r17_cheat_death', name: 'Borrowed Breath', iconUrl: getSkillIconUrl('rogue', 'vanish'), desc: 'A blow that would kill you leaves you at 1 health instead. Once every 120 sec.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'rog_r20_shadowstep', name: 'Shadeslip', iconUrl: getSkillIconUrl('rogue', 'shadowstep'), desc: 'Grants Shadeslip.' },
          { id: 'rog_r20_adrenaline_junkie', name: 'Redline Habit', iconUrl: getSkillIconUrl('rogue', 'adrenaline_rush'), desc: "Each finisher reduces Quickened Blood's cooldown by 6 sec." },
          { id: 'rog_r20_master_assassin', name: 'First Cut, Last Word', iconUrl: getSkillIconUrl('rogue', 'ambush'), desc: 'Each opener makes your next finisher within 6 sec cost 50% less energy.' }
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
    // Source: choice_rows_classic.ts - PRIEST_CHOICE_ROWS
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'pri_r5_improved_renew', name: 'Warding Refrain', iconUrl: getSkillIconUrl('priest', 'lesser_heal'), desc: 'Every 3rd Whispered Prayer hardens its target into a ward absorbing 40 damage for 10 sec.' },
          { id: 'pri_r5_searing_light', name: 'Third Verse', iconUrl: getSkillIconUrl('priest', 'smite'), desc: 'Every 3rd Scouring Hymn makes your next mana-cost healing spell within 8 sec free.' },
          { id: 'pri_r5_twisted_faith', name: 'Dirgebound Thought', iconUrl: getSkillIconUrl('priest', 'shadow_word_pain'), desc: "Mindfracture deals 25% more damage to targets afflicted by your Dirge of Decay." }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'pri_r8_improved_shield', name: 'Shattered Psalm', iconUrl: getSkillIconUrl('priest', 'power_word_shield'), desc: 'When your Psalm of Warding is fully consumed, it bursts, healing its owner for 45.' },
          { id: 'pri_r8_silence', name: 'Hushword', iconUrl: getSkillIconUrl('priest', 'silence'), desc: 'Grants Hushword.' },
          { id: 'pri_r8_psychic_scream', name: 'Terror Canticle', iconUrl: getSkillIconUrl('priest', 'psychic_scream'), desc: 'Grants Terror Canticle.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'pri_r11_inner_focus', name: 'Stilled Mind', iconUrl: getSkillIconUrl('priest', 'inner_focus'), desc: 'Grants Stilled Mind.' },
          { id: 'pri_r11_meditation', name: 'Measured Mercy', iconUrl: getSkillIconUrl('priest', 'lesser_heal'), desc: 'Every 3rd mana-cost healing spell makes your next mana-cost healing spell within 10 sec cost 50% less.' },
          { id: 'pri_r11_vampiric_embrace', name: 'Gloam Siphon', iconUrl: getSkillIconUrl('priest', 'mind_blast'), desc: 'Mindfracture also afflicts the target for 30 damage over 3 sec and heals you for 100% of it.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'pri_r14_mind_melt', name: 'Twin Fracture', iconUrl: getSkillIconUrl('priest', 'mind_blast'), desc: 'Mindfracture stores 2 uses.' },
          { id: 'pri_r14_greater_heal', name: 'Mercy Deferred', iconUrl: getSkillIconUrl('priest', 'heal'), desc: 'Solemn Prayer leaves an echo for 10 sec: if the target falls below 35% health, they are instantly healed for 60.' },
          { id: 'pri_r14_pain_and_suffering', name: 'Endless Dirge', iconUrl: getSkillIconUrl('priest', 'mind_flay'), desc: 'Each Litany of Woe tick extends your Dirge of Decay on the target by 1 sec, up to 6 added sec.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'pri_r17_desperate_prayer', name: 'Last Prayer', iconUrl: getSkillIconUrl('priest', 'desperate_prayer'), desc: 'Grants Last Prayer.' },
          { id: 'pri_r17_improved_fortitude', name: 'Resolve Unbroken', iconUrl: getSkillIconUrl('priest', 'power_word_fortitude'), desc: "Litany of Resolve effect increased by 50%, granting your party 7.5% Stamina instead of 5%." },
          { id: 'pri_r17_inner_fire', name: 'Wounded Halo', iconUrl: getSkillIconUrl('priest', 'power_word_shield'), desc: 'Taking a hit for at least 15% of your maximum health kindles a ward absorbing 15% of your maximum health for 10 sec.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'pri_r20_prayer_of_healing', name: 'Choirmend', iconUrl: getSkillIconUrl('priest', 'prayer_of_healing'), desc: 'Grants Choirmend.' },
          { id: 'pri_r20_mind_sear', name: 'Thoughtburn', iconUrl: getSkillIconUrl('priest', 'mind_sear'), desc: 'Grants Thoughtburn.' },
          { id: 'pri_r20_blessed_recovery', name: 'Halo Aftershock', iconUrl: getSkillIconUrl('priest', 'flash_heal'), desc: 'Critical heals from Whispered Prayer, Solemn Prayer, Urgent Prayer, Sunburst Canticle, and Choirmend also ward the target, absorbing 50 damage for 10 sec.' }
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
    // Source: choice_rows_classic.ts - HUNTER_CHOICE_ROWS (IDs match game protocol)
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'hun_r5_improved_serpent_sting', name: 'Deepvenom', iconUrl: getSkillIconUrl('hunter', 'serpent_sting'), desc: "Venom Barb's poison deals 20% more damage." },
          { id: 'hun_r5_quick_shots', name: 'Twin Fletching', iconUrl: getSkillIconUrl('hunter', 'arcane_shot'), desc: 'Fell Shot stores 2 uses.' },
          { id: 'hun_r5_aspect_mastery', name: 'Guisecraft', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_hawk'), desc: "Harrier's Guise and Marten's Guise effects are 25% stronger." }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'hun_r8_startle_shot', name: 'Startle Shot', iconUrl: getSkillIconUrl('hunter', 'startle_shot'), desc: 'Grants Startle Shot: a ranged disorient that breaks on any damage.' },
          { id: 'hun_r8_frost_trap', name: 'Rime Snare', iconUrl: getSkillIconUrl('hunter', 'frost_trap'), desc: 'Grants Rime Snare.' },
          { id: 'hun_r8_improved_concussive', name: 'Pinning Barb', iconUrl: getSkillIconUrl('hunter', 'concussive_shot'), desc: "Rattling Shot's slow deepens to 70% for its 4 sec duration." }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'hun_r11_mend_pet', name: 'Patch Up', iconUrl: getSkillIconUrl('hunter', 'mend_pet'), desc: 'Patch Up heals a living pet for 50% more.' },
          { id: 'hun_r11_efficiency', name: 'Lean Quiver', iconUrl: getSkillIconUrl('hunter', 'aimed_shot'), desc: 'Every 3rd ranged shot restores 20 mana.' },
          { id: 'hun_r11_survival_instincts', name: 'Deathless Will', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_monkey'), desc: 'Taking a hit for at least 30% of your maximum health grants 40% movement speed for 4 sec. 30 sec internal cooldown.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'hun_r14_multi_shot', name: 'Splitshot', iconUrl: getSkillIconUrl('hunter', 'multi_shot'), desc: 'Grants Splitshot.' },
          { id: 'hun_r14_sniper_training', name: 'Steady Draw', iconUrl: getSkillIconUrl('hunter', 'aimed_shot'), desc: "Long Draw's cast time is reduced by 20%." },
          { id: 'hun_r14_serpents_venom', name: 'Viperfletch', iconUrl: getSkillIconUrl('hunter', 'serpent_sting'), desc: 'Fell Shot also envenoms the target for 50% of its damage over 3 sec.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'hun_r17_deterrence', name: 'Bristleguard', iconUrl: getSkillIconUrl('hunter', 'deterrence'), desc: 'Grants Bristleguard.' },
          { id: 'hun_r17_master_tamer', name: 'Bloodbond', iconUrl: getSkillIconUrl('hunter', 'tame_beast'), desc: 'While your pet is alive, 20% of damage you take is redirected to it.' },
          { id: 'hun_r17_thick_hide', name: 'Fieldhardy', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_monkey'), desc: 'Increases your maximum health by 10%.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'hun_r20_improved_volley', name: 'Steady Rain', iconUrl: getSkillIconUrl('hunter', 'volley'), desc: 'Arrowfall deals 50% more damage, and taking damage cannot shorten its channel.' },
          { id: 'hun_r20_rapid_killing', name: 'Redline Draw', iconUrl: getSkillIconUrl('hunter', 'rapid_fire'), desc: "Every 3rd ranged shot reduces Fevered Draw's cooldown by 5 sec, at most once every 8 sec." },
          { id: 'hun_r20_aspect_of_the_wild', name: 'Wildfang Rally', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_wild'), desc: 'Grants Wildfang Rally.' }
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
    // Source: choice_rows_classic.ts - SHAMAN_CHOICE_ROWS
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'sha_r5_concussion', name: 'Fault Line', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), desc: 'Every 3rd Arc Bolt makes your next Earthen Jolt, Cinder Jolt, or Rime Jolt within 8 sec free.' },
          { id: 'sha_r5_improved_lightning_shield', name: 'Rebounding Current', iconUrl: getSkillIconUrl('shaman', 'lightning_shield'), desc: 'When your Thunder Ward reflects a strike, your next Arc Bolt within 8 sec is instant.' },
          { id: 'sha_r5_imbue_mastery', name: 'Imbued Lifeblood', iconUrl: getSkillIconUrl('shaman', 'rockbiter_weapon'), desc: 'Each landed melee auto-attack with an active weapon imbue heals you for 8.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'sha_r8_improved_earth_shock', name: 'Fault Rebuke', iconUrl: getSkillIconUrl('shaman', 'earth_shock'), desc: 'Earthen Jolt also interrupts spellcasting for a 2 sec school lockout.' },
          { id: 'sha_r8_frost_bind', name: 'Rime Lock', iconUrl: getSkillIconUrl('shaman', 'frost_shock'), desc: 'Rime Jolt also roots the target for 2 sec.' },
          { id: 'sha_r8_shock_efficiency', name: 'Returning Current', iconUrl: getSkillIconUrl('shaman', 'earth_shock'), desc: 'Every 3rd Jolt restores 30 mana.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'sha_r11_ancestral_guidance', name: 'Guiding Spirits', iconUrl: getSkillIconUrl('shaman', 'healing_wave'), desc: 'When your Mending Waters critically heals, your next Mending Waters within 10 sec is instant.' },
          { id: 'sha_r11_elemental_attunement', name: 'Sky Echo', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), desc: 'Arc Bolt critical strikes make your next Arc Bolt within 8 sec instant.' },
          { id: 'sha_r11_healing_stream', name: 'Springwell', iconUrl: getSkillIconUrl('shaman', 'healing_stream'), desc: 'Grants Springwell.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'sha_r14_chain_lightning', name: 'Skybranch', iconUrl: getSkillIconUrl('shaman', 'chain_lightning'), desc: 'Grants Skybranch.' },
          { id: 'sha_r14_improved_flame_shock', name: 'Cinder Rupture', iconUrl: getSkillIconUrl('shaman', 'flame_shock'), desc: 'Earthen Jolt detonates your Cinder Jolt on the target, dealing its remaining damage instantly.' },
          { id: 'sha_r14_weapon_fury', name: 'Imbued Tempo', iconUrl: getSkillIconUrl('shaman', 'stormstrike'), desc: 'Landed melee auto-attacks with an imbued weapon shave 0.5 sec off your Jolt cooldowns.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'sha_r17_earthbind', name: 'Gripping Earth', iconUrl: getSkillIconUrl('shaman', 'earthbind'), desc: 'Grants Gripping Earth.' },
          { id: 'sha_r17_improved_ghost_wolf', name: 'Wolfstep', iconUrl: getSkillIconUrl('shaman', 'ghost_wolf'), desc: 'Shadewolf becomes instant.' },
          { id: 'sha_r17_elemental_warding', name: 'Ancestral Mending', iconUrl: getSkillIconUrl('shaman', 'lightning_shield'), desc: 'Taking a hit for at least 15% of your maximum health instantly heals you for 12% of your maximum health. 20 sec internal cooldown.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'sha_r20_bloodlust', name: 'Storm Chorus', iconUrl: getSkillIconUrl('shaman', 'bloodlust'), desc: 'Grants Storm Chorus.' },
          { id: 'sha_r20_elemental_fury', name: 'Storm Recall', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), desc: "Arc Bolt critical strikes finish Earthen Jolt's cooldown and make your next Earthen Jolt within 8 sec free." },
          { id: 'sha_r20_tidal_waves', name: 'Undertow Promise', iconUrl: getSkillIconUrl('shaman', 'healing_wave'), desc: 'Every 3rd Mending Waters leaves an echo for 10 sec: if the target falls below 35% health, the echo heals them for 80.' }
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
    // Source: choice_rows_classic.ts - WARLOCK_CHOICE_ROWS
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'wlk_r5_bane', name: 'Grave Rhythm', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt'), desc: 'Every 3rd Gloom Bolt makes your next Blackrot within 8 sec instant.' },
          { id: 'wlk_r5_improved_corruption', name: 'Blacktide', iconUrl: getSkillIconUrl('warlock', 'corruption'), desc: 'Blackrot also slows its target by 30% for 6 sec.' },
          { id: 'wlk_r5_improved_immolate', name: 'Pact Deepened', iconUrl: getSkillIconUrl('warlock', 'immolate'), desc: 'Burning Pact deals 20% more damage.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'wlk_r8_voidfeast', name: 'Voidfeast', iconUrl: getSkillIconUrl('warlock', 'voidfeast'), desc: 'Grants Voidfeast: devour a magic effect and heal yourself.' },
          { id: 'wlk_r8_howl_of_terror', name: 'Dread Chorus', iconUrl: getSkillIconUrl('warlock', 'howl_of_terror'), desc: 'Grants Dread Chorus.' },
          { id: 'wlk_r8_curse_of_exhaustion', name: 'Leaden Hex', iconUrl: getSkillIconUrl('warlock', 'curse_of_exhaustion'), desc: 'Grants Leaden Hex.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'wlk_r11_improved_life_tap', name: 'Blood Credit', iconUrl: getSkillIconUrl('warlock', 'life_tap'), desc: 'Hard Bargain grants 20% more mana.' },
          { id: 'wlk_r11_fel_concentration', name: 'Walking Hunger', iconUrl: getSkillIconUrl('warlock', 'drain_life'), desc: 'Consume is channelable while moving.' },
          { id: 'wlk_r11_demon_armor', name: 'Fiendward', iconUrl: getSkillIconUrl('warlock', 'demon_skin'), desc: 'Taking a hit for at least 15% of your health binds your demon: if you fall below 35% health, it heals you for 15% of your max health.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'wlk_r14_amplify_curse', name: 'Deepened Hex', iconUrl: getSkillIconUrl('warlock', 'curse_of_agony'), desc: 'Gloom Bolt deals 20% more damage to targets afflicted by your DoTs.' },
          { id: 'wlk_r14_ruin', name: 'Ashen Focus', iconUrl: getSkillIconUrl('warlock', 'shadowburn'), desc: 'Sear deals 25% more damage and costs 25% less.' },
          { id: 'wlk_r14_shadow_mastery', name: 'Shadow Credit', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt'), desc: 'Each damaging Fire spell makes your next damaging Shadow spell within 8 sec cost 50% less.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'wlk_r17_death_coil', name: 'Morrowlash', iconUrl: getSkillIconUrl('warlock', 'death_coil'), desc: 'Grants Morrowlash.' },
          { id: 'wlk_r17_improved_fear', name: 'Snapdread', iconUrl: getSkillIconUrl('warlock', 'fear'), desc: 'Harrow becomes instant but gains a 16 sec cooldown.' },
          { id: 'wlk_r17_demonic_resilience', name: 'Deep Hunger', iconUrl: getSkillIconUrl('warlock', 'demon_skin'), desc: 'Consume deals 50% more damage.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'wlk_r20_chaos_bolt', name: 'Ruinbolt', iconUrl: getSkillIconUrl('warlock', 'chaos_bolt'), desc: 'Grants Ruinbolt.' },
          { id: 'wlk_r20_grimoire_of_haste', name: 'Hellglass Ward', iconUrl: getSkillIconUrl('warlock', 'summon_felhound'), desc: 'Every 3rd damaging Fire or Shadow spell raises a demonic ward absorbing 90 damage for 10 sec.' },
          { id: 'wlk_r20_curse_mastery', name: 'Hexstorm', iconUrl: getSkillIconUrl('warlock', 'curse_of_agony'), desc: 'Every 3rd Blackrot or Hex of Anguish makes your next Gloom Bolt within 8 sec instant, at most once every 10 sec.' }
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
    // Source: choice_rows_classic.ts - DRUID_CHOICE_ROWS
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'dru_r5_improved_wrath', name: 'Moonkindle', iconUrl: getSkillIconUrl('druid', 'wrath'), desc: 'Every 3rd Wildbolt makes your next Lunar Tempest within 8 sec free.' },
          { id: 'dru_r5_ferocity', name: 'Redmaw', iconUrl: getSkillIconUrl('druid', 'claw'), desc: 'Shifting into Wolf Form makes your next Rendclaw or Flense within 8 sec cost 50% less.' },
          { id: 'dru_r5_natures_bounty', name: "Bloom's End", iconUrl: getSkillIconUrl('druid', 'rejuvenation'), desc: 'When Wildbloom runs its full duration, your next Wildmend within 8 sec is instant.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'dru_r8_typhoon', name: 'Typhoon', iconUrl: getSkillIconUrl('druid', 'typhoon'), desc: 'Grants Typhoon: knock back and daze all enemies within 8 yd.' },
          { id: 'dru_r8_improved_roots', name: 'Briar Ambush', iconUrl: getSkillIconUrl('druid', 'entangling_roots'), desc: 'Gripping Roots makes your next Wildbolt within 8 sec instant, at most once every 15 sec.' },
          { id: 'dru_r8_brutal_bash', name: 'Bruin Rebound', iconUrl: getSkillIconUrl('druid', 'bash'), desc: 'Concuss restores 15 rage, refunding its cost plus 5 additional rage, and removes 20 sec from its cooldown.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'dru_r11_innervate', name: 'Lifesap', iconUrl: getSkillIconUrl('druid', 'innervate'), desc: 'Grants Lifesap: living sap restores your current resource in waves, in any form.' },
          { id: 'dru_r11_furor', name: 'Formrush', iconUrl: getSkillIconUrl('druid', 'bear_form'), desc: 'Shapeshifting makes your next form attack within 8 sec cost 50% less.' },
          { id: 'dru_r11_improved_mark', name: 'Grove Covenant', iconUrl: getSkillIconUrl('druid', 'mark_of_the_wild'), desc: 'Every 3rd Wildmend shields its target, absorbing 90 damage for 10 sec.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'dru_r14_savage_fury', name: 'Redtooth Rhythm', iconUrl: getSkillIconUrl('druid', 'ferocious_bite'), desc: 'Each Gorebite or Bloodrift makes your next Rendclaw or Flense within 8 sec cost 50% less.' },
          { id: 'dru_r14_moonfury', name: 'Moonspite', iconUrl: getSkillIconUrl('druid', 'moonfire'), desc: 'Every 3rd Lunar Tempest makes your next Skyfall within 8 sec instant, at most once every 15 sec.' },
          { id: 'dru_r14_empowered_touch', name: 'Mercy Seed', iconUrl: getSkillIconUrl('druid', 'healing_touch'), desc: 'Wildmend leaves a stored heal of 60 that triggers if the target falls below 35% health within 8 sec.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'dru_r17_improved_barkskin', name: 'Oaken Reflex', iconUrl: getSkillIconUrl('druid', 'barkskin'), desc: 'Oakhide makes your next Wildbolt, Skyfall, Wildmend, or Second Bloom within 8 sec instant.' },
          { id: 'dru_r17_frenzied_regeneration', name: 'Savage Mending', iconUrl: getSkillIconUrl('druid', 'frenzied_regeneration'), desc: 'Grants Savage Mending.' },
          { id: 'dru_r17_survival_of_the_fittest', name: 'Ironhide Reflex', iconUrl: getSkillIconUrl('druid', 'bear_form'), desc: 'Taking a hit for at least 20% of your maximum health shields you, absorbing 15% of your max health for 6 sec.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'dru_r20_improved_hurricane', name: "Nature's Fury", iconUrl: getSkillIconUrl('druid', 'hurricane'), desc: 'While in Moonwing Form, you and your party members within 30 yd gain 3% spell critical strike chance.' },
          { id: 'dru_r20_berserk', name: 'Red Haze', iconUrl: getSkillIconUrl('druid', 'berserk'), desc: 'Grants Red Haze.' },
          { id: 'dru_r20_tranquility', name: 'Gladesong', iconUrl: getSkillIconUrl('druid', 'tranquility'), desc: 'Grants Gladesong.' }
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
