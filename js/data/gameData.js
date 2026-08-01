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
        passive: 'Master Armorer — While wielding a two-handed weapon, all damage you deal is increased by 10%.',
        sampleSkills: [
          { name: 'Mortal Strike', iconUrl: getSkillIconUrl('warrior', 'mortal_strike'), isSignature: true },
          { name: 'Overpower', iconUrl: getSkillIconUrl('warrior', 'overpower') },
          { name: 'Sweeping Strikes', iconUrl: getSkillIconUrl('warrior', 'sweeping_strikes') },
          { name: 'Execute', iconUrl: getSkillIconUrl('warrior', 'execute') }
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
        passive: 'Bloodletter — Increases your critical strike chance by 5% and attack power by 10.',
        sampleSkills: [
          { name: 'Bloodthirst', iconUrl: getSkillIconUrl('warrior', 'bloodthirst'), isSignature: true },
          { name: 'Raging Blow', iconUrl: getSkillIconUrl('warrior', 'raging_blow') },
          { name: 'Whirlwind', iconUrl: getSkillIconUrl('warrior', 'whirlwind') },
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
        passive: 'Recompense — Increases all threat you generate by 30% and your armor by 10%. Vanguard: Stamina +40%.',
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
          { id: 'war_row_double_charge', name: 'Double Charge', iconUrl: getSkillIconUrl('warrior', 'double_charge'), desc: 'Your Charge stores 2 uses, so you can charge twice in a row.' },
          { id: 'war_row_pursuit', name: 'Pursuit', iconUrl: getSkillIconUrl('warrior', 'pursuit'), desc: 'Each enemy you kill grants 30% movement speed for 6 sec.' },
          { id: 'war_row_crushing_charge', name: 'Crushing Charge', iconUrl: getSkillIconUrl('warrior', 'crushing_charge'), desc: 'Your Charge also roots the target for 4 sec and slows it by 50% for 15 sec.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'war_row_second_wind', name: 'Second Wind', iconUrl: getSkillIconUrl('warrior', 'second_wind'), desc: 'Below 35% health, you regenerate 1.5% of your health per second.' },
          { id: 'war_row_die_by_the_sword', name: 'Die by the Sword', iconUrl: getSkillIconUrl('warrior', 'die_by_sword'), desc: 'Defensive cooldown: for 8 sec you take 30% less damage and dodge far more attacks.' },
          { id: 'war_row_victory_rush', name: 'Victory Rush', iconUrl: getSkillIconUrl('warrior', 'victory_rush'), desc: 'After killing an enemy, your next strike heals you for 20% of your maximum health.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'war_row_piercing_howl', name: 'Piercing Howl', iconUrl: getSkillIconUrl('warrior', 'piercing_howl'), desc: 'A shout that slows enemies within 15 yards by 50% for 8 sec.' },
          { id: 'war_row_storm_bolt', name: 'Storm Bolt', iconUrl: getSkillIconUrl('warrior', 'storm_bolt'), desc: 'Hurl your weapon to stun a target.' },
          { id: 'war_row_lingering_dread', name: 'Lingering Dread', iconUrl: getSkillIconUrl('warrior', 'lingering_dread'), desc: 'Enemies feared by your Intimidating Shout can endure 20% of their health in damage before fear breaks.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'war_row_anger_management', name: 'Anger Management', iconUrl: getSkillIconUrl('warrior', 'anger_management'), desc: 'Your auto-attacks generate 10% more rage and your abilities 5% more.' },
          { id: 'war_row_blood_offering', name: 'Combat Mastery', iconUrl: getSkillIconUrl('warrior', 'combat_mastery'), desc: 'Your stances gain additional effects: Battle Stance boosts crits, Berserker speeds attacks, Guarded reduces big hits.' },
          { id: 'war_row_battle_rhythm', name: 'Battle Rhythm', iconUrl: getSkillIconUrl('warrior', 'battle_rhythm'), desc: 'Every third ability you use generates 20% more rage.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'war_row_recklessness', name: 'Recklessness', iconUrl: getSkillIconUrl('warrior', 'recklessness'), desc: 'Enrage: increase all your rage generation by 50% and gain 20% additional critical strike chance for 12 sec.' },
          { id: 'war_row_avatar', name: 'Avatar', iconUrl: getSkillIconUrl('warrior', 'avatar'), desc: 'Transform into a colossus for 20 sec, breaking enemy control effects and increasing damage by 20%.' },
          { id: 'war_row_bloodbath', name: 'Bloodbath', iconUrl: getSkillIconUrl('warrior', 'bloodbath'), desc: 'Each enemy you kill grants 5% critical strike and 5% damage dealt for 8 sec, stacking up to 25%.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'war_row_colossal_might', name: 'Colossal Might', iconUrl: getSkillIconUrl('warrior', 'colossal_might'), desc: 'Each point of Rage you spend shaves 0.1 sec off the cooldown of your major offensive abilities.' },
          { id: 'war_row_bladestorm', name: 'Bladestorm', iconUrl: getSkillIconUrl('warrior', 'bladestorm'), desc: 'Become a whirling storm of steel, striking all enemies within 8 yards every second for 4 sec.' },
          { id: 'war_row_sanguine_aura', name: 'Sanguine Aura', iconUrl: getSkillIconUrl('warrior', 'sanguine_aura'), desc: 'You and your melee allies gain 10% attack speed and 10% damage for 20 sec.' }
        ]
      }
    ],
    spellbook: [
      { id: 'mortal_strike', name: 'Mortal Strike', type: 'Special', cost: '30 Rage', cooldown: '6s', iconUrl: getSkillIconUrl('warrior', 'mortal_strike'), desc: 'A vicious strike that deals heavy damage and reduces healing received.' },
      { id: 'shield_slam', name: 'Shield Slam', type: 'Special', cost: '20 Rage', cooldown: '6s', iconUrl: getSkillIconUrl('warrior', 'shield_slam'), desc: 'Slam the target with your shield, generating high threat.' },
      { id: 'charge', name: 'Charge', type: 'Mobility', cost: '0 Rage', cooldown: '15s', iconUrl: getSkillIconUrl('warrior', 'charge'), desc: 'Charge an enemy, generating Rage and rooting them briefly.' },
      { id: 'battle_shout', name: 'Battle Shout', type: 'Buff', cost: '10 Rage', cooldown: '2m', iconUrl: getSkillIconUrl('warrior', 'battle_shout'), desc: 'Increases the attack power of all party members.' }
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
        complexity: 'Medium',
        passive: 'Kindled Faith — Your healing spells critically heal for double.',
        sampleSkills: [
          { name: 'Holy Shock', iconUrl: getSkillIconUrl('paladin', 'flash_of_light'), isSignature: true },
          { name: 'Holy Light', iconUrl: getSkillIconUrl('paladin', 'holy_light') },
          { name: 'Blessing of Might', iconUrl: getSkillIconUrl('paladin', 'blessing_of_might') },
          { name: 'Lay on Hands', iconUrl: getSkillIconUrl('paladin', 'lay_on_hands') }
        ]
      },
      {
        id: 'protection',
        name: 'VIGIL',
        role: 'TANK',
        roleType: 'tank',
        roleIcon: '🛡️',
        signatureAbility: 'Holy Shield',
        primaryStat: 'Strength',
        complexity: 'Low',
        passive: 'Oathward — Increases all threat you generate by 50% and your armor by 20%.',
        sampleSkills: [
          { name: 'Righteous Fury', iconUrl: getSkillIconUrl('paladin', 'righteous_fury'), isSignature: true },
          { name: 'Consecration', iconUrl: getSkillIconUrl('paladin', 'consecration') },
          { name: 'Divine Protection', iconUrl: getSkillIconUrl('paladin', 'divine_protection') },
          { name: 'Hammer of Justice', iconUrl: getSkillIconUrl('paladin', 'hammer_of_justice') }
        ]
      },
      {
        id: 'retribution',
        name: 'REQUITAL',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Crusader Strike',
        primaryStat: 'Strength',
        complexity: 'High',
        passive: 'Blood Debt — Increases your Holy and physical ability damage by 20%.',
        sampleSkills: [
          { name: 'Judgement', iconUrl: getSkillIconUrl('paladin', 'judgement'), isSignature: true },
          { name: 'Seal of Righteousness', iconUrl: getSkillIconUrl('paladin', 'seal_of_righteousness') },
          { name: 'Consecration', iconUrl: getSkillIconUrl('paladin', 'consecration') },
          { name: 'Retribution Aura', iconUrl: getSkillIconUrl('paladin', 'retribution_aura') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'pal_r5_crusaders_zeal', name: 'Crusader\'s Zeal', iconUrl: getSkillIconUrl('paladin', 'seal_of_righteousness'), desc: 'Judgement grants 15% attack speed for 10 sec.' },
          { id: 'pal_r5_lights_dividend', name: 'Light\'s Dividend', iconUrl: getSkillIconUrl('paladin', 'flash_of_light'), desc: 'Flash of Light refunds 20% mana on critical heal.' },
          { id: 'pal_r5_righteous_dividend', name: 'Righteous Dividend', iconUrl: getSkillIconUrl('paladin', 'judgement'), desc: 'Judgement deals 25% additional Holy damage.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'pal_r8_fist_of_justice', name: 'Fist of Justice', iconUrl: getSkillIconUrl('paladin', 'hammer_of_justice'), desc: 'Hammer of Justice cooldown reduced by 15 sec.' },
          { id: 'pal_r8_turn_undead', name: 'Turn Undead', iconUrl: getSkillIconUrl('paladin', 'holy_light'), desc: 'Fears undead target for 20 sec.' },
          { id: 'pal_r8_repentance', name: 'Repentance', iconUrl: getSkillIconUrl('paladin', 'judgement'), desc: 'Incapacitates target for 1 minute.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'pal_r11_greater_blessing', name: 'Greater Blessing', iconUrl: getSkillIconUrl('paladin', 'blessing_of_might'), desc: 'Blessings affect all raid members of the class.' },
          { id: 'pal_r11_divine_favor', name: 'Divine Favor', iconUrl: getSkillIconUrl('paladin', 'holy_light'), desc: 'Next heal spell has 100% critical strike chance.' },
          { id: 'pal_r11_pursuit_of_justice', name: 'Pursuit of Justice', iconUrl: getSkillIconUrl('paladin', 'devotion_aura'), desc: 'Movement speed increased by 15%.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'pal_r14_righteous_cause', name: 'Righteous Cause', iconUrl: getSkillIconUrl('paladin', 'consecration'), desc: 'Consecration area increased by 50%.' },
          { id: 'pal_r14_sanctified_retribution', name: 'Sanctified Retribution', iconUrl: getSkillIconUrl('paladin', 'retribution_aura'), desc: 'Retribution Aura deals 50% more damage.' },
          { id: 'pal_r14_holy_wrath', name: 'Holy Wrath', iconUrl: getSkillIconUrl('paladin', 'exorcism'), desc: 'Stuns all undead and demon enemies within 10 yd.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'pal_r17_ardent_defender', name: 'Ardent Defender', iconUrl: getSkillIconUrl('paladin', 'divine_protection'), desc: 'Fatal damage reduces health to 20% instead.' },
          { id: 'pal_r17_lay_on_hands', name: 'Lay on Hands', iconUrl: getSkillIconUrl('paladin', 'lay_on_hands'), desc: 'Heals an ally for your maximum health.' },
          { id: 'pal_r17_cleanse', name: 'Cleanse', iconUrl: getSkillIconUrl('paladin', 'flash_of_light'), desc: 'Cleanses poison, disease, and magic effects.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'pal_r20_aura_mastery', name: 'Aura Mastery', iconUrl: getSkillIconUrl('paladin', 'devotion_aura'), desc: 'Empowers active aura for 8 sec.' },
          { id: 'pal_r20_avenging_wrath', name: 'Avenging Wrath', iconUrl: getSkillIconUrl('paladin', 'judgement'), desc: 'Increases all damage and healing by 20% for 20 sec.' },
          { id: 'pal_r20_divine_shield', name: 'Divine Shield', iconUrl: getSkillIconUrl('paladin', 'divine_protection'), desc: 'Immune to all damage and spells for 8 sec.' }
        ]
      }
    ],
    spellbook: [
      { id: 'holy_light', name: 'Holy Light', type: 'Heal', cost: '120 Mana', cooldown: '2.5s cast', iconUrl: getSkillIconUrl('paladin', 'holy_light'), desc: 'Heals a friendly target for a large amount.' },
      { id: 'judgement', name: 'Judgement', type: 'Damage', cost: '40 Mana', cooldown: '8s', iconUrl: getSkillIconUrl('paladin', 'judgement'), desc: 'Unleashes seal energy on the target.' },
      { id: 'consecration', name: 'Consecration', type: 'AoE', cost: '80 Mana', cooldown: '8s', iconUrl: getSkillIconUrl('paladin', 'consecration'), desc: 'Consecrates the ground beneath you dealing Holy damage over time.' }
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
        name: 'PACKLORD',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Bestial Wrath',
        primaryStat: 'Agility',
        complexity: 'Low',
        passive: 'Packbond — Your pet deals 35% more damage. Maximum health increased by 8%.',
        sampleSkills: [
          { name: 'Bestial Wrath', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_hawk'), isSignature: true },
          { name: 'Tame Beast', iconUrl: getSkillIconUrl('hunter', 'tame_beast') },
          { name: 'Revive Pet', iconUrl: getSkillIconUrl('hunter', 'revive_pet') },
          { name: 'Aspect of the Hawk', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_hawk') }
        ]
      },
      {
        id: 'marksmanship',
        name: 'COLDSIGHT',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Trueshot Aura',
        primaryStat: 'Agility',
        complexity: 'Medium',
        passive: 'Iron Aim — Increases your ranged ability damage by 20% and critical strike chance by 3%.',
        sampleSkills: [
          { name: 'Aimed Shot', iconUrl: getSkillIconUrl('hunter', 'aimed_shot'), isSignature: true },
          { name: 'Arcane Shot', iconUrl: getSkillIconUrl('hunter', 'arcane_shot') },
          { name: 'Concussive Shot', iconUrl: getSkillIconUrl('hunter', 'concussive_shot') },
          { name: 'Rapid Fire', iconUrl: getSkillIconUrl('hunter', 'rapid_fire') }
        ]
      },
      {
        id: 'survival',
        name: 'FIELDCRAFT',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Wyvern Sting',
        primaryStat: 'Agility',
        complexity: 'High',
        passive: 'Quickblood — Increases your Agility by 15% and your dodge chance by 4%.',
        sampleSkills: [
          { name: 'Serpent Sting', iconUrl: getSkillIconUrl('hunter', 'serpent_sting'), isSignature: true },
          { name: 'Mongoose Bite', iconUrl: getSkillIconUrl('hunter', 'mongoose_bite') },
          { name: 'Raptor Strike', iconUrl: getSkillIconUrl('hunter', 'raptor_strike') },
          { name: 'Wing Clip', iconUrl: getSkillIconUrl('hunter', 'wing_clip') }
        ]
      }
    ],
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
          { id: 'hun_r8_startle_shot', name: 'Startle Shot', iconUrl: getSkillIconUrl('hunter', 'concussive_shot'), desc: 'Grants Startle Shot: a ranged disorient that breaks on any damage.' },
          { id: 'hun_r8_frost_trap', name: 'Rime Snare', iconUrl: getSkillIconUrl('hunter', 'concussive_shot'), desc: 'Grants Rime Snare.' },
          { id: 'hun_r8_improved_concussive', name: 'Pinning Barb', iconUrl: getSkillIconUrl('hunter', 'concussive_shot'), desc: "Rattling Shot's slow deepens to 70% for its 4 sec duration." }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'hun_r11_mend_pet', name: 'Patch Up', iconUrl: getSkillIconUrl('hunter', 'tame_beast'), desc: 'Patch Up heals a living pet for 50% more.' },
          { id: 'hun_r11_efficiency', name: 'Lean Quiver', iconUrl: getSkillIconUrl('hunter', 'aimed_shot'), desc: 'Every 3rd ranged shot restores 20 mana.' },
          { id: 'hun_r11_survival_instincts', name: 'Deathless Will', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_monkey'), desc: 'Taking a hit for at least 30% of max health grants 40% speed for 4 sec.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'hun_r14_multi_shot', name: 'Splitshot', iconUrl: getSkillIconUrl('hunter', 'arcane_shot'), desc: 'Grants Splitshot.' },
          { id: 'hun_r14_sniper_training', name: 'Steady Draw', iconUrl: getSkillIconUrl('hunter', 'aimed_shot'), desc: "Long Draw's cast time is reduced by 20%." },
          { id: 'hun_r14_serpents_venom', name: 'Viperfletch', iconUrl: getSkillIconUrl('hunter', 'serpent_sting'), desc: 'Fell Shot also envenoms the target for 50% of its damage over 3 sec.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'hun_r17_deterrence', name: 'Bristleguard', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_monkey'), desc: 'Grants Bristleguard.' },
          { id: 'hun_r17_master_tamer', name: 'Bloodbond', iconUrl: getSkillIconUrl('hunter', 'tame_beast'), desc: 'While pet is alive, 20% of damage you take is redirected to it.' },
          { id: 'hun_r17_thick_hide', name: 'Fieldhardy', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_monkey'), desc: 'Increases your maximum health by 10%.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'hun_r20_improved_volley', name: 'Steady Rain', iconUrl: getSkillIconUrl('hunter', 'arcane_shot'), desc: 'Arrowfall deals 50% more damage, and taking damage cannot shorten channel.' },
          { id: 'hun_r20_rapid_killing', name: 'Redline Draw', iconUrl: getSkillIconUrl('hunter', 'rapid_fire'), desc: "Every 3rd ranged shot reduces Fevered Draw's cooldown by 5 sec." },
          { id: 'hun_r20_aspect_of_the_wild', name: 'Wildfang Rally', iconUrl: getSkillIconUrl('hunter', 'aspect_of_the_cheetah'), desc: 'Grants Wildfang Rally.' }
        ]
      }
    ],
    spellbook: [
      { id: 'aimed_shot', name: 'Aimed Shot', type: 'Shot', cost: '50 Focus', cooldown: '12s', iconUrl: getSkillIconUrl('hunter', 'aimed_shot'), desc: 'Precise aimed shot dealing heavy physical damage.' },
      { id: 'arcane_shot', name: 'Arcane Shot', type: 'Shot', cost: '25 Focus', cooldown: '6s', iconUrl: getSkillIconUrl('hunter', 'arcane_shot'), desc: 'Instant shot dealing Arcane damage.' },
      { id: 'serpent_sting', name: 'Serpent Sting', type: 'Shot', cost: '30 Focus', cooldown: 'Instant', iconUrl: getSkillIconUrl('hunter', 'serpent_sting'), desc: 'Stings target dealing Nature damage over 15 sec.' },
      { id: 'rapid_fire', name: 'Rapid Fire', type: 'Buff', cost: '0 Focus', cooldown: '2m', iconUrl: getSkillIconUrl('hunter', 'rapid_fire'), desc: 'Increases ranged attack speed by 40% for 15 sec.' }
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
        name: 'CHRONOMANCY',
        role: 'HEALER',
        roleType: 'healer',
        roleIcon: '💚',
        signatureAbility: 'Temporal Mend',
        primaryStat: 'Intellect',
        complexity: 'High',
        passive: 'Chronoweave — Increases all healing by 15%, max mana by 5%, mana regen by 20%.',
        sampleSkills: [
          { name: 'Temporal Mend', iconUrl: getSkillIconUrl('mage', 'temporal_mend'), isSignature: true },
          { name: 'Evocation', iconUrl: getSkillIconUrl('mage', 'evocation') },
          { name: 'Presence of Mind', iconUrl: getSkillIconUrl('mage', 'presence_of_mind') },
          { name: 'Blink', iconUrl: getSkillIconUrl('mage', 'blink') }
        ]
      },
      {
        id: 'fire',
        name: 'PYROMANCY',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Pyroblast',
        primaryStat: 'Intellect',
        complexity: 'Medium',
        passive: 'Ignition — Spell crits burn target for 40% of damage over 6s. Crit +2%.',
        sampleSkills: [
          { name: 'Pyroblast', iconUrl: getSkillIconUrl('mage', 'pyroblast'), isSignature: true },
          { name: 'Fireball', iconUrl: getSkillIconUrl('mage', 'fireball') },
          { name: 'Combustion', iconUrl: getSkillIconUrl('mage', 'combustion') },
          { name: 'Fire Blast', iconUrl: getSkillIconUrl('mage', 'fire_blast') }
        ]
      },
      {
        id: 'frost',
        name: 'CRYOMANCY',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Ice Lance',
        primaryStat: 'Intellect',
        complexity: 'Low',
        passive: 'Brittlebreak — Increases Frost spell damage by 25% and armor by 10%.',
        sampleSkills: [
          { name: 'Ice Lance', iconUrl: getSkillIconUrl('mage', 'ice_lance'), isSignature: true },
          { name: 'Frostbolt', iconUrl: getSkillIconUrl('mage', 'frostbolt') },
          { name: 'Frost Nova', iconUrl: getSkillIconUrl('mage', 'frost_nova') },
          { name: 'Blizzard', iconUrl: getSkillIconUrl('mage', 'blizzard') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'mag_r5_ice_floes', name: 'Ice Floes', iconUrl: getSkillIconUrl('mage', 'ice_floes'), desc: 'Grants Ice Floes: next 2 spells with cast time castable while moving.' },
          { id: 'mag_r5_double_blink', name: 'Double Blink', iconUrl: getSkillIconUrl('mage', 'double_blink'), desc: 'Flickerstep stores 2 charges, each recharges 30% slower.' },
          { id: 'mag_r5_blink_cast', name: 'Blink While Casting', iconUrl: getSkillIconUrl('mage', 'blink_while_casting'), desc: 'Use Flickerstep mid-cast without interrupting.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'mag_r8_warded', name: 'Warded', iconUrl: getSkillIconUrl('mage', 'warded'), desc: 'Barrier up: take 15% less damage, heals 10% max HP on break.' },
          { id: 'mag_r8_temporal_rift', name: 'Shifting Ward', iconUrl: getSkillIconUrl('mage', 'temporal_rift'), desc: 'Casting personal barrier breaks roots.' },
          { id: 'mag_r8_greater_invis', name: 'Greater Invisibility', iconUrl: getSkillIconUrl('mage', 'greater_invisibility'), desc: 'Vanish for 20 sec and remove 2 DoT effects.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'mag_r11_rings_of_frost', name: 'Ring of Frost', iconUrl: getSkillIconUrl('mage', 'rings_of_frost'), desc: 'Perimeter persists for 10 sec and freezes crossing enemies.' },
          { id: 'mag_r11_snap_polymorph', name: 'Snap Bewitch', iconUrl: getSkillIconUrl('mage', 'snap_polymorph'), desc: 'Bewitch becomes instant on 20 sec cooldown.' },
          { id: 'mag_r11_twin_nova', name: 'Twin Icebind', iconUrl: getSkillIconUrl('mage', 'twin_frost_nova'), desc: 'Icebind stores 2 charges.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'mag_r14_power_echo', name: 'Power Echo', iconUrl: getSkillIconUrl('mage', 'power_echo'), desc: 'Next direct spell repeats at 50% power.' },
          { id: 'mag_r14_overload', name: 'Overload', iconUrl: getSkillIconUrl('mage', 'overload'), desc: 'Next spell amplified by 40% but costs 50% more mana.' },
          { id: 'mag_r14_presence_of_mind', name: 'Racing Mind', iconUrl: getSkillIconUrl('mage', 'presence_of_mind'), desc: 'Next spell with cast time is instant.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'mag_r17_convergence', name: 'Elemental Convergence', iconUrl: getSkillIconUrl('mage', 'elemental_convergence'), desc: 'Alternating Fire/Frost spells opens 8 sec power surge.' },
          { id: 'mag_r17_cold_snap', name: "Winter's Recall", iconUrl: getSkillIconUrl('mage', 'cold_snap'), desc: "Finish cooldown of Flickerstep, Frostveil, and Greater Invisibility." },
          { id: 'mag_r17_mass_barrier', name: 'Mass Barrier', iconUrl: getSkillIconUrl('mage', 'mass_barrier'), desc: 'Shield you and all allies within 30 yd.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'mag_r20_rune_of_power', name: 'Rune of Power', iconUrl: getSkillIconUrl('mage', 'rune_of_power'), desc: 'Rune grants allies standing near it 10% more damage.' },
          { id: 'mag_r20_overflowing_power', name: 'Overflowing Power', iconUrl: getSkillIconUrl('mage', 'overflowing_power'), desc: 'Spending mana shaves defensive cooldowns.' },
          { id: 'mag_r20_evocation', name: 'Aetherwell', iconUrl: getSkillIconUrl('mage', 'evocation'), desc: 'Channel to restore mana, building spell power.' }
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
        name: 'KNIFEWORK',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Cold Blood',
        primaryStat: 'Agility',
        complexity: 'Medium',
        passive: 'Redhanded — Increases Craven Thrust crit by 30% and poison damage by 10%.',
        sampleSkills: [
          { name: 'Sinister Strike', iconUrl: getSkillIconUrl('rogue', 'sinister_strike'), isSignature: true },
          { name: 'Eviscerate', iconUrl: getSkillIconUrl('rogue', 'eviscerate') },
          { name: 'Deadly Poison', iconUrl: getSkillIconUrl('rogue', 'deadly_poison') },
          { name: 'Stealth', iconUrl: getSkillIconUrl('rogue', 'stealth') }
        ]
      },
      {
        id: 'combat',
        name: 'THUGGERY',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Blade Flurry',
        primaryStat: 'Agility',
        complexity: 'Low',
        passive: 'Scrapper\'s Edge — Increases attack speed by 10%, auto-attacks 5% chance for extra attack.',
        sampleSkills: [
          { name: 'Sinister Strike', iconUrl: getSkillIconUrl('rogue', 'sinister_strike'), isSignature: true },
          { name: 'Adrenaline Rush', iconUrl: getSkillIconUrl('rogue', 'adrenaline_rush') },
          { name: 'Sprint', iconUrl: getSkillIconUrl('rogue', 'sprint') },
          { name: 'Evasion', iconUrl: getSkillIconUrl('rogue', 'evasion') }
        ]
      },
      {
        id: 'subtlety',
        name: 'SKULDUGGERY',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Hemorrhage',
        primaryStat: 'Agility',
        complexity: 'High',
        passive: 'False Face — Increases crit damage by 25% and movement speed in Duskveil by 50%.',
        sampleSkills: [
          { name: 'Backstab', iconUrl: getSkillIconUrl('rogue', 'backstab'), isSignature: true },
          { name: 'Ambush', iconUrl: getSkillIconUrl('rogue', 'ambush') },
          { name: 'Vanish', iconUrl: getSkillIconUrl('rogue', 'vanish') },
          { name: 'Shadowstep', iconUrl: getSkillIconUrl('rogue', 'shadowstep') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'rog_r5_relentless_strikes', name: 'Ceaseless Cuts', iconUrl: getSkillIconUrl('rogue', 'sinister_strike'), desc: 'Every 3rd Wicked Slash restores 30 energy.' },
          { id: 'rog_r5_improved_backstab', name: "Knife's Dividend", iconUrl: getSkillIconUrl('rogue', 'backstab'), desc: 'Craven Thrust makes next Dirt Nap cost 50% less.' },
          { id: 'rog_r5_opportunist', name: 'Dusk Dividend', iconUrl: getSkillIconUrl('rogue', 'ambush'), desc: 'Using Lurker\'s Strike or Throat Wire restores 20 energy.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'rog_r8_smoke_screen', name: 'Smoke Screen', iconUrl: getSkillIconUrl('rogue', 'smoke_screen'), desc: 'Grants Smoke Screen: dodge +30% for 8 sec.' },
          { id: 'rog_r8_improved_gouge', name: 'Blindside Opening', iconUrl: getSkillIconUrl('rogue', 'gouge'), desc: 'Eye Jab makes next Craven Thrust free.' },
          { id: 'rog_r8_improved_kidney_shot', name: 'Paid in Pain', iconUrl: getSkillIconUrl('rogue', 'kidney_shot'), desc: 'Low Blow restores 15 energy when used.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'rog_r11_preparation', name: 'Contingency', iconUrl: getSkillIconUrl('rogue', 'preparation'), desc: 'Grants Contingency.' },
          { id: 'rog_r11_endurance', name: 'Second Exit', iconUrl: getSkillIconUrl('rogue', 'sprint'), desc: 'Swift Heels and Ghostfoot store 2 uses.' },
          { id: 'rog_r11_improved_slice_and_dice', name: 'Borrowed Tempo', iconUrl: getSkillIconUrl('rogue', 'slice_and_dice'), desc: 'Every 3rd builder makes next Cutthroat Tempo free.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'rog_r14_seal_fate', name: 'Final Notice', iconUrl: getSkillIconUrl('rogue', 'eviscerate'), desc: 'Finisher makes next builder cost 50% less energy.' },
          { id: 'rog_r14_ghostly_strike', name: 'Wraith Strike', iconUrl: getSkillIconUrl('rogue', 'ambush'), desc: 'Grants Wraith Strike.' },
          { id: 'rog_r14_deadly_brew', name: 'Venom Dividend', iconUrl: getSkillIconUrl('rogue', 'deadly_poison'), desc: 'Poison auto-attacks 20% chance to restore 10 energy.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'rog_r17_cloak_of_shadows', name: 'Shadecloak', iconUrl: getSkillIconUrl('rogue', 'cloak_of_shadows'), desc: 'Grants Shadecloak.' },
          { id: 'rog_r17_improved_evasion', name: 'Ghostfoot Gambit', iconUrl: getSkillIconUrl('rogue', 'evasion'), desc: 'Ghostfoot restores 30 energy.' },
          { id: 'rog_r17_cheat_death', name: 'Borrowed Breath', iconUrl: getSkillIconUrl('rogue', 'vanish'), desc: 'Fatal blow leaves you at 1 health instead.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'rog_r20_shadowstep', name: 'Shadeslip', iconUrl: getSkillIconUrl('rogue', 'shadowstep'), desc: 'Grants Shadeslip.' },
          { id: 'rog_r20_adrenaline_junkie', name: 'Redline Habit', iconUrl: getSkillIconUrl('rogue', 'adrenaline_rush'), desc: 'Finisher reduces Quickened Blood cooldown.' },
          { id: 'rog_r20_master_assassin', name: 'First Cut, Last Word', iconUrl: getSkillIconUrl('rogue', 'ambush'), desc: 'Opener makes next finisher cost 50% less energy.' }
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
        name: 'DOCTRINE',
        role: 'HEALER',
        roleType: 'healer',
        roleIcon: '💚',
        signatureAbility: 'Power Infusion',
        primaryStat: 'Intellect',
        complexity: 'Medium',
        passive: 'Fixed Purpose — Your shields absorb 30% more. Max health increased by 8%.',
        sampleSkills: [
          { name: 'Power Word: Shield', iconUrl: getSkillIconUrl('priest', 'power_word_shield'), isSignature: true },
          { name: 'Flash Heal', iconUrl: getSkillIconUrl('priest', 'flash_heal') },
          { name: 'Dispel Magic', iconUrl: getSkillIconUrl('priest', 'flash_heal') },
          { name: 'Inner Fire', iconUrl: getSkillIconUrl('priest', 'power_word_fortitude') }
        ]
      },
      {
        id: 'holy',
        name: 'BENISON',
        role: 'HEALER',
        roleType: 'healer',
        roleIcon: '💚',
        signatureAbility: 'Holy Nova',
        primaryStat: 'Intellect',
        complexity: 'Low',
        passive: 'Grave Mercy — Increases all healing you do by 20%.',
        sampleSkills: [
          { name: 'Heal', iconUrl: getSkillIconUrl('priest', 'heal'), isSignature: true },
          { name: 'Renew', iconUrl: getSkillIconUrl('priest', 'renew') },
          { name: 'Lesser Heal', iconUrl: getSkillIconUrl('priest', 'lesser_heal') },
          { name: 'Smite', iconUrl: getSkillIconUrl('priest', 'smite') }
        ]
      },
      {
        id: 'shadow',
        name: 'VESPERS',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Shadowform',
        primaryStat: 'Intellect',
        complexity: 'High',
        passive: 'Gloamveil — Increases damage-over-time damage by 15% and spell damage by 10%.',
        sampleSkills: [
          { name: 'Mind Blast', iconUrl: getSkillIconUrl('priest', 'mind_blast'), isSignature: true },
          { name: 'Shadow Word: Pain', iconUrl: getSkillIconUrl('priest', 'shadow_word_pain') },
          { name: 'Mind Flay', iconUrl: getSkillIconUrl('priest', 'mind_flay') },
          { name: 'Power Word: Shield', iconUrl: getSkillIconUrl('priest', 'power_word_shield') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'pri_r5_improved_renew', name: 'Warding Refrain', iconUrl: getSkillIconUrl('priest', 'lesser_heal'), desc: 'Every 3rd Whispered Prayer hardens target into ward.' },
          { id: 'pri_r5_searing_light', name: 'Third Verse', iconUrl: getSkillIconUrl('priest', 'smite'), desc: 'Every 3rd Scouring Hymn makes next heal free.' },
          { id: 'pri_r5_twisted_faith', name: 'Dirgebound Thought', iconUrl: getSkillIconUrl('priest', 'shadow_word_pain'), desc: "Mindfracture deals 25% more damage." }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'pri_r8_improved_shield', name: 'Shattered Psalm', iconUrl: getSkillIconUrl('priest', 'power_word_shield'), desc: 'Psalm of Warding bursts when consumed, healing owner.' },
          { id: 'pri_r8_silence', name: 'Hushword', iconUrl: getSkillIconUrl('priest', 'smite'), desc: 'Grants Hushword.' },
          { id: 'pri_r8_psychic_scream', name: 'Terror Canticle', iconUrl: getSkillIconUrl('priest', 'smite'), desc: 'Grants Terror Canticle.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'pri_r11_inner_focus', name: 'Stilled Mind', iconUrl: getSkillIconUrl('priest', 'lesser_heal'), desc: 'Grants Stilled Mind.' },
          { id: 'pri_r11_meditation', name: 'Measured Mercy', iconUrl: getSkillIconUrl('priest', 'lesser_heal'), desc: 'Every 3rd heal makes next cost 50% less.' },
          { id: 'pri_r11_vampiric_embrace', name: 'Gloam Siphon', iconUrl: getSkillIconUrl('priest', 'mind_blast'), desc: 'Mindfracture afflicts target and heals you.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'pri_r14_mind_melt', name: 'Twin Fracture', iconUrl: getSkillIconUrl('priest', 'mind_blast'), desc: 'Mindfracture stores 2 uses.' },
          { id: 'pri_r14_greater_heal', name: 'Mercy Deferred', iconUrl: getSkillIconUrl('priest', 'heal'), desc: 'Leaves echo healing low health targets.' },
          { id: 'pri_r14_pain_and_suffering', name: 'Endless Dirge', iconUrl: getSkillIconUrl('priest', 'mind_flay'), desc: 'Litany of Woe extends Dirge of Decay.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'pri_r17_desperate_prayer', name: 'Last Prayer', iconUrl: getSkillIconUrl('priest', 'flash_heal'), desc: 'Grants Last Prayer.' },
          { id: 'pri_r17_improved_fortitude', name: 'Resolve Unbroken', iconUrl: getSkillIconUrl('priest', 'power_word_fortitude'), desc: "Grants party 7.5% Stamina." },
          { id: 'pri_r17_inner_fire', name: 'Wounded Halo', iconUrl: getSkillIconUrl('priest', 'power_word_shield'), desc: 'Big hits kindle a protective ward.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'pri_r20_prayer_of_healing', name: 'Choirmend', iconUrl: getSkillIconUrl('priest', 'heal'), desc: 'Grants Choirmend.' },
          { id: 'pri_r20_mind_sear', name: 'Thoughtburn', iconUrl: getSkillIconUrl('priest', 'mind_flay'), desc: 'Grants Thoughtburn.' },
          { id: 'pri_r20_blessed_recovery', name: 'Halo Aftershock', iconUrl: getSkillIconUrl('priest', 'flash_heal'), desc: 'Critical heals ward the target.' }
        ]
      }
    ],
    spellbook: [
      { id: 'power_word_shield', name: 'Power Word: Shield', type: 'Shield', cost: '120 Mana', cooldown: '12s', iconUrl: getSkillIconUrl('priest', 'power_word_shield'), desc: 'Draws on soul of target to absorb damage.' },
      { id: 'mind_blast', name: 'Mind Blast', type: 'Shadow Attack', cost: '90 Mana', cooldown: '8s', iconUrl: getSkillIconUrl('priest', 'mind_blast'), desc: 'Blasts target mind with Shadow damage.' },
      { id: 'renew', name: 'Renew', type: 'HoT', cost: '80 Mana', cooldown: 'Instant', iconUrl: getSkillIconUrl('priest', 'renew'), desc: 'Heals target periodically over 15s.' }
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
        name: 'THUNDERCALL',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Elemental Mastery',
        primaryStat: 'Intellect',
        complexity: 'Medium',
        passive: 'Earthen Fury — Increases your spell damage by 15% and spell haste by 10%.',
        sampleSkills: [
          { name: 'Lightning Bolt', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), isSignature: true },
          { name: 'Earth Shock', iconUrl: getSkillIconUrl('shaman', 'earth_shock') },
          { name: 'Flame Shock', iconUrl: getSkillIconUrl('shaman', 'flame_shock') },
          { name: 'Lightning Shield', iconUrl: getSkillIconUrl('shaman', 'lightning_shield') }
        ]
      },
      {
        id: 'enhancement',
        name: 'WARSPIRIT',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Stormstrike',
        primaryStat: 'Strength',
        complexity: 'High',
        passive: 'Skyrend — Increases melee attack speed by 10% and physical ability damage by 10%.',
        sampleSkills: [
          { name: 'Stormstrike', iconUrl: getSkillIconUrl('shaman', 'stormstrike'), isSignature: true },
          { name: 'Rockbiter Weapon', iconUrl: getSkillIconUrl('shaman', 'rockbiter_weapon') },
          { name: 'Ghost Wolf', iconUrl: getSkillIconUrl('shaman', 'ghost_wolf') },
          { name: 'Lightning Shield', iconUrl: getSkillIconUrl('shaman', 'lightning_shield') }
        ]
      },
      {
        id: 'restoration',
        name: 'SPIRITMEND',
        role: 'HEALER',
        roleType: 'healer',
        roleIcon: '💚',
        signatureAbility: 'Chain Heal',
        primaryStat: 'Intellect',
        complexity: 'Low',
        passive: 'Cleansing Tides — Your healing spells cost 20% less mana.',
        sampleSkills: [
          { name: 'Healing Wave', iconUrl: getSkillIconUrl('shaman', 'healing_wave'), isSignature: true },
          { name: 'Earth Shock', iconUrl: getSkillIconUrl('shaman', 'earth_shock') },
          { name: 'Ghost Wolf', iconUrl: getSkillIconUrl('shaman', 'ghost_wolf') },
          { name: 'Lightning Shield', iconUrl: getSkillIconUrl('shaman', 'lightning_shield') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'sha_r5_concussion', name: 'Fault Line', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), desc: 'Every 3rd Arc Bolt makes next Jolt free.' },
          { id: 'sha_r5_improved_lightning_shield', name: 'Rebounding Current', iconUrl: getSkillIconUrl('shaman', 'lightning_shield'), desc: 'Thunder Ward reflect makes next Arc Bolt instant.' },
          { id: 'sha_r5_imbue_mastery', name: 'Imbued Lifeblood', iconUrl: getSkillIconUrl('shaman', 'rockbiter_weapon'), desc: 'Melee auto-attacks with weapon imbue heal you.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'sha_r8_improved_earth_shock', name: 'Fault Rebuke', iconUrl: getSkillIconUrl('shaman', 'earth_shock'), desc: 'Earthen Jolt interrupts spellcasting.' },
          { id: 'sha_r8_frost_bind', name: 'Rime Lock', iconUrl: getSkillIconUrl('shaman', 'frost_shock'), desc: 'Rime Jolt roots target for 2 sec.' },
          { id: 'sha_r8_shock_efficiency', name: 'Returning Current', iconUrl: getSkillIconUrl('shaman', 'earth_shock'), desc: 'Every 3rd Jolt restores 30 mana.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'sha_r11_ancestral_guidance', name: 'Guiding Spirits', iconUrl: getSkillIconUrl('shaman', 'healing_wave'), desc: 'Critical heals make next Mending Waters instant.' },
          { id: 'sha_r11_elemental_attunement', name: 'Sky Echo', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), desc: 'Arc Bolt crits make next Arc Bolt instant.' },
          { id: 'sha_r11_healing_stream', name: 'Springwell', iconUrl: getSkillIconUrl('shaman', 'healing_wave'), desc: 'Grants Springwell.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'sha_r14_chain_lightning', name: 'Skybranch', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), desc: 'Grants Skybranch.' },
          { id: 'sha_r14_improved_flame_shock', name: 'Cinder Rupture', iconUrl: getSkillIconUrl('shaman', 'flame_shock'), desc: 'Earthen Jolt detonates Cinder Jolt damage.' },
          { id: 'sha_r14_weapon_fury', name: 'Imbued Tempo', iconUrl: getSkillIconUrl('shaman', 'stormstrike'), desc: 'Melee hits shave Jolt cooldowns.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'sha_r17_earthbind', name: 'Gripping Earth', iconUrl: getSkillIconUrl('shaman', 'earth_shock'), desc: 'Grants Gripping Earth.' },
          { id: 'sha_r17_improved_ghost_wolf', name: 'Wolfstep', iconUrl: getSkillIconUrl('shaman', 'ghost_wolf'), desc: 'Shadewolf becomes instant.' },
          { id: 'sha_r17_elemental_warding', name: 'Ancestral Mending', iconUrl: getSkillIconUrl('shaman', 'lightning_shield'), desc: 'Big hits instantly heal 12% max health.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'sha_r20_bloodlust', name: 'Storm Chorus', iconUrl: getSkillIconUrl('shaman', 'stormstrike'), desc: 'Grants Storm Chorus.' },
          { id: 'sha_r20_elemental_fury', name: 'Storm Recall', iconUrl: getSkillIconUrl('shaman', 'lightning_bolt'), desc: "Arc Bolt crits finish Earthen Jolt cooldown." },
          { id: 'sha_r20_tidal_waves', name: 'Undertow Promise', iconUrl: getSkillIconUrl('shaman', 'healing_wave'), desc: 'Mending Waters leaves echo healing low HP targets.' }
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
        name: 'HEXCRAFT',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Siphon Life',
        primaryStat: 'Intellect',
        complexity: 'High',
        passive: 'Creeping Rot — Damage-over-time effects deal 20% more damage.',
        sampleSkills: [
          { name: 'Corruption', iconUrl: getSkillIconUrl('warlock', 'corruption'), isSignature: true },
          { name: 'Curse of Agony', iconUrl: getSkillIconUrl('warlock', 'curse_of_agony') },
          { name: 'Drain Life', iconUrl: getSkillIconUrl('warlock', 'drain_life') },
          { name: 'Demon Skin', iconUrl: getSkillIconUrl('warlock', 'demon_skin') }
        ]
      },
      {
        id: 'demonology',
        name: 'PACTBOUND',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Metamorphosis',
        primaryStat: 'Intellect',
        complexity: 'Medium',
        passive: 'Fiendlore — 20% of damage taken redirected to demon. Stamina +10%.',
        sampleSkills: [
          { name: 'Summon Voidwalker', iconUrl: getSkillIconUrl('warlock', 'summon_voidwalker'), isSignature: true },
          { name: 'Shadow Bolt', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt') },
          { name: 'Demon Skin', iconUrl: getSkillIconUrl('warlock', 'demon_skin') },
          { name: 'Fear', iconUrl: getSkillIconUrl('warlock', 'fear') }
        ]
      },
      {
        id: 'destruction',
        name: 'RUINATION',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Conflagrate',
        primaryStat: 'Intellect',
        complexity: 'Low',
        passive: 'Desolation — Increases Ruinbolt and Gloom Bolt damage by 20%.',
        sampleSkills: [
          { name: 'Immolate', iconUrl: getSkillIconUrl('warlock', 'immolate'), isSignature: true },
          { name: 'Shadowburn', iconUrl: getSkillIconUrl('warlock', 'shadowburn') },
          { name: 'Searing Pain', iconUrl: getSkillIconUrl('warlock', 'searing_pain') },
          { name: 'Shadow Bolt', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt') }
        ]
      }
    ],
    choiceRows: [
      {
        level: 5,
        options: [
          { id: 'wlk_r5_bane', name: 'Grave Rhythm', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt'), desc: 'Every 3rd Gloom Bolt makes Blackrot instant.' },
          { id: 'wlk_r5_improved_corruption', name: 'Blacktide', iconUrl: getSkillIconUrl('warlock', 'corruption'), desc: 'Blackrot slows target by 30% for 6 sec.' },
          { id: 'wlk_r5_improved_immolate', name: 'Pact Deepened', iconUrl: getSkillIconUrl('warlock', 'immolate'), desc: 'Burning Pact deals 20% more damage.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'wlk_r8_voidfeast', name: 'Voidfeast', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt'), desc: 'Devour a magic effect and heal yourself.' },
          { id: 'wlk_r8_howl_of_terror', name: 'Dread Chorus', iconUrl: getSkillIconUrl('warlock', 'fear'), desc: 'Grants Dread Chorus.' },
          { id: 'wlk_r8_curse_of_exhaustion', name: 'Leaden Hex', iconUrl: getSkillIconUrl('warlock', 'curse_of_agony'), desc: 'Grants Leaden Hex.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'wlk_r11_improved_life_tap', name: 'Blood Credit', iconUrl: getSkillIconUrl('warlock', 'life_tap'), desc: 'Hard Bargain grants 20% more mana.' },
          { id: 'wlk_r11_fel_concentration', name: 'Walking Hunger', iconUrl: getSkillIconUrl('warlock', 'drain_life'), desc: 'Consume is channelable while moving.' },
          { id: 'wlk_r11_demon_armor', name: 'Fiendward', iconUrl: getSkillIconUrl('warlock', 'demon_skin'), desc: 'Big hits bind demon to heal on low HP.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'wlk_r14_amplify_curse', name: 'Deepened Hex', iconUrl: getSkillIconUrl('warlock', 'curse_of_agony'), desc: 'Gloom Bolt deals 20% more damage to DoTed targets.' },
          { id: 'wlk_r14_ruin', name: 'Ashen Focus', iconUrl: getSkillIconUrl('warlock', 'shadowburn'), desc: 'Sear deals 25% more damage.' },
          { id: 'wlk_r14_shadow_mastery', name: 'Shadow Credit', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt'), desc: 'Fire spells make Shadow spells cost 50% less.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'wlk_r17_death_coil', name: 'Morrowlash', iconUrl: getSkillIconUrl('warlock', 'fear'), desc: 'Grants Morrowlash.' },
          { id: 'wlk_r17_improved_fear', name: 'Snapdread', iconUrl: getSkillIconUrl('warlock', 'fear'), desc: 'Harrow becomes instant on 16s cooldown.' },
          { id: 'wlk_r17_demonic_resilience', name: 'Deep Hunger', iconUrl: getSkillIconUrl('warlock', 'demon_skin'), desc: 'Consume deals 50% more damage.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'wlk_r20_chaos_bolt', name: 'Ruinbolt', iconUrl: getSkillIconUrl('warlock', 'shadow_bolt'), desc: 'Grants Ruinbolt.' },
          { id: 'wlk_r20_grimoire_of_haste', name: 'Hellglass Ward', iconUrl: getSkillIconUrl('warlock', 'demon_skin'), desc: 'Every 3rd spell raises demonic ward.' },
          { id: 'wlk_r20_curse_mastery', name: 'Hexstorm', iconUrl: getSkillIconUrl('warlock', 'curse_of_agony'), desc: 'DoTs make next Gloom Bolt instant.' }
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
        name: 'MOONGROVE',
        role: 'DPS',
        roleType: 'dps',
        roleIcon: '⚔️',
        signatureAbility: 'Moonkin Form',
        primaryStat: 'Intellect',
        complexity: 'Medium',
        passive: 'Moonrage — Increases spell damage by 15% and spell haste by 10%.',
        sampleSkills: [
          { name: 'Starfire', iconUrl: getSkillIconUrl('druid', 'starfire'), isSignature: true },
          { name: 'Wrath', iconUrl: getSkillIconUrl('druid', 'wrath') },
          { name: 'Moonfire', iconUrl: getSkillIconUrl('druid', 'moonfire') },
          { name: 'Entangling Roots', iconUrl: getSkillIconUrl('druid', 'entangling_roots') }
        ]
      },
      {
        id: 'feral',
        name: 'WILDFANG',
        role: 'TANK',
        roleType: 'tank',
        roleIcon: '🛡️',
        signatureAbility: 'Feral Charge',
        primaryStat: 'Agility',
        complexity: 'High',
        passive: 'Primal Heart — Increases physical damage by 15%, bleed damage by 15%, threat by 20%, armor by 15%.',
        sampleSkills: [
          { name: 'Claw', iconUrl: getSkillIconUrl('druid', 'claw'), isSignature: true },
          { name: 'Maul', iconUrl: getSkillIconUrl('druid', 'maul') },
          { name: 'Swipe', iconUrl: getSkillIconUrl('druid', 'swipe') },
          { name: 'Rip', iconUrl: getSkillIconUrl('druid', 'rip') }
        ]
      },
      {
        id: 'restoration',
        name: 'GROVEHEART',
        role: 'HEALER',
        roleType: 'healer',
        roleIcon: '💚',
        signatureAbility: 'Swiftmend',
        primaryStat: 'Intellect',
        complexity: 'Low',
        passive: 'Grove\'s Gift — Heal-over-time effects heal 25% more.',
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
          { id: 'dru_r5_improved_wrath', name: 'Moonkindle', iconUrl: getSkillIconUrl('druid', 'wrath'), desc: 'Every 3rd Wildbolt makes next Lunar Tempest free.' },
          { id: 'dru_r5_ferocity', name: 'Redmaw', iconUrl: getSkillIconUrl('druid', 'claw'), desc: 'Wolf Form makes next Rendclaw cost 50% less.' },
          { id: 'dru_r5_natures_bounty', name: "Bloom's End", iconUrl: getSkillIconUrl('druid', 'rejuvenation'), desc: 'Wildbloom completion makes next Wildmend instant.' }
        ]
      },
      {
        level: 8,
        options: [
          { id: 'dru_r8_typhoon', name: 'Typhoon', iconUrl: getSkillIconUrl('druid', 'wrath'), desc: 'Knock back and daze enemies within 8 yd.' },
          { id: 'dru_r8_improved_roots', name: 'Briar Ambush', iconUrl: getSkillIconUrl('druid', 'entangling_roots'), desc: 'Gripping Roots makes next Wildbolt instant.' },
          { id: 'dru_r8_brutal_bash', name: 'Bruin Rebound', iconUrl: getSkillIconUrl('druid', 'bash'), desc: 'Concuss restores 15 rage.' }
        ]
      },
      {
        level: 11,
        options: [
          { id: 'dru_r11_innervate', name: 'Lifesap', iconUrl: getSkillIconUrl('druid', 'innervate'), desc: 'Restores current resource in waves.' },
          { id: 'dru_r11_furor', name: 'Formrush', iconUrl: getSkillIconUrl('druid', 'bear_form'), desc: 'Shapeshifting makes next form attack cost 50% less.' },
          { id: 'dru_r11_improved_mark', name: 'Grove Covenant', iconUrl: getSkillIconUrl('druid', 'mark_of_the_wild'), desc: 'Every 3rd Wildmend shields target.' }
        ]
      },
      {
        level: 14,
        options: [
          { id: 'dru_r14_savage_fury', name: 'Redtooth Rhythm', iconUrl: getSkillIconUrl('druid', 'ferocious_bite'), desc: 'Gorebite makes next Rendclaw cost 50% less.' },
          { id: 'dru_r14_moonfury', name: 'Moonspite', iconUrl: getSkillIconUrl('druid', 'moonfire'), desc: 'Lunar Tempest makes next Skyfall instant.' },
          { id: 'dru_r14_empowered_touch', name: 'Mercy Seed', iconUrl: getSkillIconUrl('druid', 'healing_touch'), desc: 'Leaves stored heal on low health target.' }
        ]
      },
      {
        level: 17,
        options: [
          { id: 'dru_r17_improved_barkskin', name: 'Oaken Reflex', iconUrl: getSkillIconUrl('druid', 'barkskin'), desc: 'Oakhide makes next spell instant.' },
          { id: 'dru_r17_frenzied_regeneration', name: 'Savage Mending', iconUrl: getSkillIconUrl('druid', 'frenzied_regeneration'), desc: 'Grants Savage Mending.' },
          { id: 'dru_r17_survival_of_the_fittest', name: 'Ironhide Reflex', iconUrl: getSkillIconUrl('druid', 'bear_form'), desc: 'Big hits shield you absorbing 15% max HP.' }
        ]
      },
      {
        level: 20,
        options: [
          { id: 'dru_r20_improved_hurricane', name: "Nature's Fury", iconUrl: getSkillIconUrl('druid', 'wrath'), desc: 'Moonwing Form grants party 3% spell crit.' },
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
`;
