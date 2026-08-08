/**
 * World of Claudecraft Build Planner - i18n Translations (Unicode Escaped - Encoding Proof)
 * Supported Languages: PT-BR, EN-US, FR-FR, ES-ES
 */

const TRANSLATIONS = {
  pt: {
    nav_gallery: "Galeria de Classes",
    nav_builder: "Montador de Talentos",
    nav_meta: "Builds Meta",
    nav_wiki: "Wiki de Itens",
    
    import_string: "\u{1F4E5} Importar String",
    save_build: "\u{1F4BE} Salvar Build",
    copy_string: "\u{1F4CB} Copiar String",
    
    choose_class: "Escolha sua Classe",
    choose_class_sub: "Selecione uma das 9 classes para montar sua build e gerar a string oficial para o jogo real",
    switch_class_label: "Trocar Classe:",
    
    step_spec: "1. ESPECIALIZA\u00C7\u00C3O",
    step_choices: "2. ESCOLHAS (6/6)",
    step_bis: "3. EQUIPAMENTOS BiS",
    choices_sub_instruction: "Selecione 1 op\u00E7\u00E3o em cada uma das 6 linhas de n\u00EDvel para compor sua build:",
    
    live_string_label: "String do Jogo (Ao Vivo):",
    select_talents_btn: "SELECIONAR TALENTOS",
    
    meta_header: "\u{1F525} Builds Meta em Destaque",
    meta_recent_header: "\u{1F195} Builds Recentes da Comunidade",
    meta_sub: "Builds da comunidade ranqueadas por saves e compartilhamentos reais no Supabase.",
    
    search_placeholder: "Buscar por nome ou classe...",
    sort_saves: "\u{1F4BE} Mais Salvas",
    sort_shares: "\u{1F4CB} Mais Compartilhadas",
    sort_recent: "\u{23F1}\uFE0F Mais Recentes",
    
    patch_current: "Patch v0.35.0 (Atual)",
    patch_all: "Todos os Patches",
    
    view_cards: "\u{1F4B4} Cards",
    view_table: "\u{1F4CB} Tabela",
    only_guild: "\u{1F451} Apenas Guilda",
    only_my_builds: "\u{1F4BE} Minhas Builds",
    
    role_all: "TODOS",
    role_tank: "\u{1F6E1}\uFE0F TANK",
    role_healer: "\u{1F49A} HEALER",
    role_dps: "\u{2694}\uFE0F DPS",

    // Descrições de Habilidades & Talentos (PT-BR) - Nomes mantidos em Inglês Original
    // Warrior
    desc_war_row_double_charge: "Sua Investida (Charge) armazena 2 cargas, permitindo avançar duas vezes seguidas.",
    desc_war_row_pursuit: "Cada inimigo derrotado concede 30% de velocidade de movimento por 6 seg.",
    desc_war_row_crushing_charge: "Sua Investida enraíza o alvo por 4 seg e reduz a velocidade dele em 50% por 15 seg.",
    desc_war_row_second_wind: "Abaixo de 35% de vida, você regenera 1,5% da sua vida máxima por segundo.",
    desc_war_row_die_by_the_sword: "Recarga defensiva: por 8 seg você recebe 30% a menos de dano e esquiva de mais ataques.",
    desc_war_row_victory_rush: "Após derrotar um inimigo, seu próximo golpe cura 20% da sua vida máxima.",
    desc_war_row_piercing_howl: "Um brado que reduz a velocidade de movimento de inimigos a até 15 metros em 50% por 8 seg.",
    desc_war_row_storm_bolt: "Arremessa sua arma para atordoar um alvo à distância.",
    desc_war_row_lingering_dread: "Inimigos amedrontados por seu Intimidating Shout suportam até 20% da vida em dano antes de quebrar o medo.",
    desc_war_row_anger_management: "Seus ataques automáticos geram 10% a mais de Raiva e suas habilidades geram 5% a mais.",
    desc_war_row_blood_offering: "Suas posturas ganham efeitos extras: Battle Stance aumenta acertos críticos, Berserker acelera ataques, Guarded reduz grandes danos.",
    desc_war_row_battle_rhythm: "A cada 3 habilidades utilizadas, você gera 20% a mais de Raiva.",
    desc_war_row_recklessness: "Enfurece: aumenta toda a sua geração de Raiva em 50% e concede 20% de chance de acerto crítico adicional por 12 seg.",
    desc_war_row_avatar: "Transforma-se em um colosso por 20 seg, quebrando efeitos de controle e aumentando o dano causado em 20%.",
    desc_war_row_bloodbath: "Cada inimigo derrotado concede 5% de acerto crítico e 5% de dano causado por 8 seg (acumula até 25%).",
    desc_war_row_colossal_might: "Cada ponto de Raiva gasto reduz 0,1 seg do tempo de recarga das suas habilidades ofensivas principais.",
    desc_war_row_bladestorm: "Torne-se um furacão de aço, atingindo todos os inimigos a até 8 metros a cada segundo por 4 seg.",
    desc_war_row_sanguine_aura: "Você e seus aliados corpo a corpo ganham 10% de velocidade de ataque e 10% de dano por 20 seg.",

    // Paladin
    desc_pal_r5_crusaders_zeal: "Judgement concede 15% de velocidade de ataque por 10 seg.",
    desc_pal_r5_lights_dividend: "Flash of Light reembolsa 20% do mana em acertos críticos de cura.",
    desc_pal_r5_righteous_dividend: "Judgement causa 25% a mais de dano Sagrado.",
    desc_pal_r8_fist_of_justice: "Tempo de recarga de Hammer of Justice reduzido em 15 seg.",
    desc_pal_r8_turn_undead: "Amedronta um alvo morto-vivo por 20 seg.",
    desc_pal_r8_repentance: "Incapacita o alvo por 1 minuto.",
    desc_pal_r11_greater_blessing: "Bênçãos afetam todos os membros do grupo/raid da mesma classe.",
    desc_pal_r11_divine_favor: "A próxima habilidade de cura tem 100% de chance de acerto crítico.",
    desc_pal_r11_pursuit_of_justice: "Velocidade de movimento aumentada em 15%.",
    desc_pal_r14_righteous_cause: "Área de efeito do Consecration aumentada em 50%.",
    desc_pal_r14_sanctified_retribution: "Retribution Aura causa 50% a mais de dano.",
    desc_pal_r14_holy_wrath: "Atordoa todos os alvos mortos-vivos e demônios a até 10 metros.",
    desc_pal_r17_ardent_defender: "Dano fatal reduz sua vida para 20% em vez de causar a morte.",
    desc_pal_r17_lay_on_hands: "Cura um aliado no valor equivalente à sua vida máxima.",
    desc_pal_r17_cleanse: "Remove efeitos de veneno, doença e magia do alvo.",
    desc_pal_r20_aura_mastery: "Potencializa a aura ativa por 8 seg.",
    desc_pal_r20_avenging_wrath: "Aumenta todo o dano e cura em 20% por 20 seg.",
    desc_pal_r20_divine_shield: "Fica imune a todo o dano e feitiços por 8 seg.",

    // Hunter
    desc_hun_r5_improved_serpent_sting: "O veneno da sua habilidade Venom Barb causa 20% a mais de dano.",
    desc_hun_r5_quick_shots: "Fell Shot armazena 2 cargas de uso.",
    desc_hun_r5_aspect_mastery: "Os efeitos de Harrier's Guise e Marten's Guise ficam 25% mais fortes.",
    desc_hun_r8_startle_shot: "Concede Startle Shot: um desorientar à distância que é quebrado ao receber qualquer dano.",
    desc_hun_r8_frost_trap: "Concede a habilidade Rime Snare para congelar os pés dos inimigos.",
    desc_hun_r8_improved_concussive: "A desaceleração do Rattling Shot aumenta para 70% durante seus 4 seg de duração.",
    desc_hun_r11_mend_pet: "Patch Up cura um mascote vivo em 50% a mais de vida.",
    desc_hun_r11_efficiency: "A cada 3 disparos à distância, você recupera 20 de recurso.",
    desc_hun_r11_survival_instincts: "Receber um golpe de pelo menos 30% da sua vida máxima concede 40% de velocidade de movimento por 4 seg.",
    desc_hun_r14_multi_shot: "Concede a habilidade Splitshot (disparo dividido para múltiplos alvos).",
    desc_hun_r14_sniper_training: "Tempo de conjuração de Long Draw reduzido em 20%.",
    desc_hun_r14_serpents_venom: "Fell Shot também envenena o alvo em 50% do seu dano ao longo de 3 seg.",
    desc_hun_r17_deterrence: "Concede a habilidade Bristleguard (defesa corporal de espinhos).",
    desc_hun_r17_master_tamer: "Enquanto seu pet estiver vivo, 20% do dano que você recebe é redirecionado para ele.",
    desc_hun_r17_thick_hide: "Aumenta sua vida máxima em 10%.",
    desc_hun_r20_improved_volley: "Arrowfall causa 50% a mais de dano e receber dano não reduz a canalização.",
    desc_hun_r20_rapid_killing: "A cada 3 disparos à distância, reduz o tempo de recarga de Fevered Draw em 5 seg.",
    desc_hun_r20_aspect_of_the_wild: "Concede a habilidade Wildfang Rally aumentando o ataque do grupo.",

    // Mage
    desc_mag_r5_ice_floes: "Concede Ice Floes: os próximos 2 feitiços com tempo de conjuração podem ser lançados em movimento.",
    desc_mag_r5_double_blink: "Flickerstep armazena 2 cargas, com recarga 30% mais lenta.",
    desc_mag_r5_blink_cast: "Permite usar Flickerstep no meio de uma conjuração sem interrompê-la.",
    desc_mag_r8_warded: "Com barreira ativa: recebe 15% a menos de dano e cura 10% da vida máxima ao quebrar.",
    desc_mag_r8_temporal_rift: "Conjurar barreira pessoal remove efeitos de enraizamento.",
    desc_mag_r8_greater_invis: "Fica invisível por 20 seg e remove 2 efeitos de dano contínuo (DoTs).",
    desc_mag_r11_rings_of_frost: "Perímetro persiste por 10 seg e congela inimigos que cruzarem a área.",
    desc_mag_r11_snap_polymorph: "Snap Bewitch torna-se instantâneo com 20 seg de recarga.",
    desc_mag_r11_twin_nova: "Icebind armazena 2 cargas de uso.",
    desc_mag_r14_power_echo: "O próximo feitiço direto é repetido com 50% de poder.",
    desc_mag_r14_overload: "Próximo feitiço amplificado em 40%, mas custa 50% a mais de mana.",
    desc_mag_r14_presence_of_mind: "Próximo feitiço com tempo de conjuração torna-se instantâneo.",
    desc_mag_r17_convergence: "Alternar feitiços de Fogo e Gelo ativa um surto de poder por 8 seg.",
    desc_mag_r17_cold_snap: "Reinicia o tempo de recarga de Flickerstep, Frostveil e Greater Invisibility.",
    desc_mag_r17_mass_barrier: "Aplica escudo em você e em todos os aliados a até 30 metros.",
    desc_mag_r20_rune_of_power: "Runa concede aos aliados próximos 10% a mais de dano.",
    desc_mag_r20_overflowing_power: "Gastar mana reduz o tempo de recarga das suas habilidades defensivas.",
    desc_mag_r20_evocation: "Canalize para restaurar mana rapidamente, acumulando poder mágico.",

    // Rogue
    desc_rog_r5_relentless_strikes: "A cada 3 Wicked Slash, você recupera 30 de energia.",
    desc_rog_r5_improved_backstab: "Craven Thrust faz seu próximo Dirt Nap custar 50% a menos de energia.",
    desc_rog_r5_opportunist: "Usar Lurker's Strike ou Throat Wire recupera 20 de energia.",
    desc_rog_r8_smoke_screen: "Concede Smoke Screen: esquiva +30% por 8 seg.",
    desc_rog_r8_improved_gouge: "Eye Jab faz o próximo Craven Thrust ser gratuito.",
    desc_rog_r8_improved_kidney_shot: "Low Blow recupera 15 de energia quando utilizado.",
    desc_rog_r11_preparation: "Concede Contingency (reinicia tempos de recarga de habilidades de mobilidade e fuga).",
    desc_rog_r11_endurance: "Swift Heels e Ghostfoot armazenam 2 cargas de uso.",
    desc_rog_r11_improved_slice_and_dice: "A cada 3 geradores de combo, seu próximo Cutthroat Tempo é gratuito.",
    desc_rog_r14_seal_fate: "Finalizadores de combo fazem seu próximo gerador custar 50% a menos de energia.",
    desc_rog_r14_ghostly_strike: "Concede a habilidade Wraith Strike.",
    desc_rog_r14_deadly_brew: "Ataques automáticos envenenados têm 20% de chance de recuperar 10 de energia.",
    desc_rog_r17_cloak_of_shadows: "Concede Shadecloak (imunidade a magias e remoção de efeitos).",
    desc_rog_r17_improved_evasion: "Ghostfoot recupera 30 de energia ao ativar.",
    desc_rog_r17_cheat_death: "Golpe fatal reduz você a 1 de vida em vez de causar a morte.",
    desc_rog_r20_shadowstep: "Concede Shadeslip (teleporte para as costas do alvo).",
    desc_rog_r20_adrenaline_junkie: "Finalizador de combo reduz o tempo de recarga de Quickened Blood.",
    desc_rog_r20_master_assassin: "Ataques de abertura fazem seu próximo finalizador custar 50% a menos.",

    // Priest
    desc_pri_r5_improved_renew: "A cada 3 Whispered Prayer, o alvo ganha um escudo endurecido.",
    desc_pri_r5_searing_light: "A cada 3 Scouring Hymn, sua próxima cura é gratuita.",
    desc_pri_r5_twisted_faith: "Mindfracture causa 25% a mais de dano.",
    desc_pri_r8_improved_shield: "Psalm of Warding detona ao ser consumido, curando o proprietário.",
    desc_pri_r8_silence: "Concede a habilidade Hushword (silêncio em feitiços inimigos).",
    desc_pri_r8_psychic_scream: "Concede Terror Canticle (amedronta inimigos próximos).",
    desc_pri_r11_inner_focus: "Concede Stilled Mind (próximo feitiço não custa mana e tem 100% crítico).",
    desc_pri_r11_meditation: "A cada 3 curas, a próxima cura custa 50% a menos de mana.",
    desc_pri_r11_vampiric_embrace: "Mindfracture aflige o alvo e cura você simultaneamente.",
    desc_pri_r14_mind_melt: "Mindfracture armazena 2 cargas de uso.",
    desc_pri_r14_greater_heal: "Deixa um eco de cura em alvos com vida baixa.",
    desc_pri_r14_pain_and_suffering: "Litany of Woe estende a duração de Dirge of Decay.",
    desc_pri_r17_desperate_prayer: "Concede Last Prayer (cura emergencial instantânea).",
    desc_pri_r17_improved_fortitude: "Concede 7,5% de Estamina adicional para todo o grupo.",
    desc_pri_r17_inner_fire: "Grandes acertos recebidos acendem um escudo protetor automático.",
    desc_pri_r20_prayer_of_healing: "Concede a habilidade Choirmend (cura em grupo potente).",
    desc_pri_r20_mind_sear: "Concede a habilidade Thoughtburn (dano em área contínuo).",
    desc_pri_r20_blessed_recovery: "Acertos críticos de cura aplicam um escudo protetor no alvo.",

    // Shaman
    desc_sha_r5_concussion: "A cada 3 Arc Bolt, seu próximo Jolt é gratuito.",
    desc_sha_r5_improved_lightning_shield: "Refletir dano com Thunder Ward torna o próximo Arc Bolt instantâneo.",
    desc_sha_r5_imbue_mastery: "Ataques automáticos corpo a corpo com encantamento de arma curam você.",
    desc_sha_r8_improved_earth_shock: "Earthen Jolt interrompe a conjuração de feitiços inimigos.",
    desc_sha_r8_frost_bind: "Rime Jolt enraíza o alvo por 2 seg.",
    desc_sha_r8_shock_efficiency: "A cada 3 Jolt, você recupera 30 de mana.",
    desc_sha_r11_ancestral_guidance: "Curas críticas fazem sua próxima Mending Waters ser instantânea.",
    desc_sha_r11_elemental_attunement: "Acertos críticos com Arc Bolt tornam o próximo Arc Bolt instantâneo.",
    desc_sha_r11_healing_stream: "Concede a habilidade Springwell (fonte d'água curativa).",
    desc_sha_r14_chain_lightning: "Concede a habilidade Skybranch (raios em cadeia).",
    desc_sha_r14_improved_flame_shock: "Earthen Jolt detona o dano acumulado de Cinder Jolt.",
    desc_sha_r14_weapon_fury: "Golpes corpo a corpo reduzem os tempos de recarga de Jolt.",
    desc_sha_r17_earthbind: "Concede Gripping Earth (desaceleração e enraizamento em área).",
    desc_sha_r17_improved_ghost_wolf: "Shadewolf torna-se instantâneo ao ativar.",
    desc_sha_r17_elemental_warding: "Grandes golpes recebidos curam instantaneamente 12% da sua vida máxima.",
    desc_sha_r20_bloodlust: "Concede a habilidade Storm Chorus (surto de fúria e aceleração para o grupo).",
    desc_sha_r20_elemental_fury: "Acertos críticos com Arc Bolt concluem a recarga de Earthen Jolt.",
    desc_sha_r20_tidal_waves: "Mending Waters deixa um eco de cura em alvos com vida baixa.",

    // Warlock
    desc_wlk_r5_bane: "A cada 3 Gloom Bolt, seu próximo Blackrot é instantâneo.",
    desc_wlk_r5_improved_corruption: "Blackrot desacelera o alvo em 30% por 6 seg.",
    desc_wlk_r5_improved_immolate: "Burning Pact causa 20% a mais de dano.",
    desc_wlk_r8_voidfeast: "Devora um efeito mágico inimigo e cura a si mesmo.",
    desc_wlk_r8_howl_of_terror: "Concede Dread Chorus (grito de medo em área).",
    desc_wlk_r8_curse_of_exhaustion: "Concede Leaden Hex (maldição de desaceleração extrema).",
    desc_wlk_r11_improved_life_tap: "Hard Bargain concede 20% a mais de mana ao trocar vida.",
    desc_wlk_r11_fel_concentration: "Consume (dreno) pode ser canalizado em movimento.",
    desc_wlk_r11_demon_armor: "Grandes golpes vinculam o demônio para curar você em vida baixa.",
    desc_wlk_r14_amplify_curse: "Gloom Bolt causa 20% a mais de dano em alvos afetados por DoTs.",
    desc_wlk_r14_ruin: "Sear causa 25% a mais de dano.",
    desc_wlk_r14_shadow_mastery: "Feitiços de Fogo fazem feitiços de Sombra custarem 50% a menos.",
    desc_wlk_r17_death_coil: "Concede a habilidade Morrowlash (esfera de morte que drena vida e causa medo).",
    desc_wlk_r17_improved_fear: "Harrow torna-se instantâneo com 16 seg de recarga.",
    desc_wlk_r17_demonic_resilience: "Consume causa 50% a mais de dano.",
    desc_wlk_r20_chaos_bolt: "Concede a habilidade Ruinbolt (projétil de caos devastador que ignora defesas).",
    desc_wlk_r20_grimoire_of_haste: "A cada 3 feitiços lançados, ergue uma barreira demoníaca protetora.",
    desc_wlk_r20_curse_mastery: "Feitiços de dano contínuo (DoTs) tornam seu próximo Gloom Bolt instantâneo.",

    // Druid
    desc_dru_r5_improved_wrath: "A cada 3 Wildbolt, seu próximo Lunar Tempest é gratuito.",
    desc_dru_r5_ferocity: "Wolf Form faz seu próximo Rendclaw custar 50% a menos de energia.",
    desc_dru_r5_natures_bounty: "Concluir Wildbloom faz sua próxima Wildmend ser instantânea.",
    desc_dru_r8_typhoon: "Empurra e tonta inimigos a até 8 metros de distância.",
    desc_dru_r8_improved_roots: "Gripping Roots faz seu próximo Wildbolt ser instantâneo.",
    desc_dru_r8_brutal_bash: "Concuss recupera 15 de raiva.",
    desc_dru_r11_innervate: "Restaura o recurso do alvo em ondas ao longo do tempo.",
    desc_dru_r11_furor: "Trocar de forma faz o próximo ataque da nova forma custar 50% a menos.",
    desc_dru_r11_improved_mark: "A cada 3 Wildmend, concede um escudo no alvo.",
    desc_dru_r14_savage_fury: "Gorebite faz seu próximo Rendclaw custar 50% a menos.",
    desc_dru_r14_moonfury: "Lunar Tempest faz seu próximo Skyfall ser instantâneo.",
    desc_dru_r14_empowered_touch: "Deixa uma semente de cura armazenada em alvos com vida baixa.",
    desc_dru_r17_improved_barkskin: "Oakhide faz seu próximo feitiço ser instantâneo.",
    desc_dru_r17_frenzied_regeneration: "Concede Savage Mending (regeneração frenética de vida).",
    desc_dru_r17_survival_of_the_fittest: "Grandes golpes recebidos protegem você com um escudo de 15% da vida máxima.",
    desc_dru_r20_improved_hurricane: "Moonwing Form concede 3% de acerto crítico mágico para todo o grupo.",
    desc_dru_r20_berserk: "Concede Red Haze (estado de fúria e redução drástica de custos).",
    desc_dru_r20_tranquility: "Concede Gladesong (chuva de cura massiva para o grupo).",
    
    empty_meta_title: "Nenhuma build encontrada com estes filtros.",
    empty_meta_sub: "Que tal criar a sua e ser a primeira dessa combina\u00E7\u00E3o?",
    create_build_now: "\u{2692}\uFE0F Criar Nova Build Agora",
    
    spellbook_title: "\u{1F4D6} Livro de Feiti\u00E7os & Habilidades Base da Classe",
    spellbook_sub: "Consulte as habilidades passivas e ativas enquanto escolhe os talentos",
    
    save_modal_title: "\u{1F4BE} Salvar Minha Build",
    save_modal_name: "NOME DA SUA BUILD:",
    save_modal_placeholder: "Ex: Paladin Holy Tank Raid 2026",
    save_modal_cancel: "CANCELAR",
    save_modal_save: "SALVAR NO NAVEGADOR",
    import_modal_instruction: "Cole uma string de build exportada do jogo (come\u00E7a com eyJ2...):",

    armor_label: "ARMADURA",
    primary_stat_label: "ATRIBUTO PRIM\u00C1RIO",
    stat_avg_ilvl: "iLvl M\u00E9dio:",
    stat_crit: "Cr\u00EDtico",
    apply_bis_set: "\u{26A1} Aplicar Set BiS Recomendado",

    table_build: "Build",
    table_class: "Classe",
    table_spec: "Spec",
    table_role: "Role",
    table_saves: "Saves",
    table_shares: "Shares",
    table_action: "A\u00E7\u00E3o",
    table_load: "Carregar",

    load_on_site: "Carregar no Site",
    copy_string_short: "\u{1F4CB} String",

    wiki_banner_title: "\u{1F4D6} Wiki de Itens & Banco de Dados em Expans\u00E3o",
    wiki_banner_sub: "Estamos catalogando os atributos, iLvls e fontes de drop de todos os equipamentos do jogo. Em breve o banco de dados completo estar\u00E1 dispon\u00EDvel aqui.",
    wiki_bis_preview: "Itens BiS Recomendados (Pr\u00E9via)",
    wiki_status_badge: "\u{26A1} Sincronizando com Supabase...",

    // Mensagens de Toast Notifica\u00E7\u00F5es (PT)
    toast_saved_success: "Build \"{name}\" salva com sucesso no navegador! \u{1F4BE}",
    toast_string_copied: "String oficial do jogo copiada para a \u00E1rea de transfer\u00EAncia!",
    toast_link_loaded: "Build carregada via Link Direto!",
    toast_invalid_string: "Por favor, cole uma string de build v\u00E1lida.",
    toast_import_success: "Build oficial importada com sucesso!",
    toast_error: "Erro: {error}",
    toast_short_string_copied: "String oficial do jogo copiada!",
    toast_file_downloaded: "Arquivo .wocbuild baixado!",
    toast_file_loaded: "Arquivo \"{name}\" carregado!",
    toast_file_error: "Erro ao ler arquivo.",
    toast_points_reset: "Pontos de escolha redefinidos.",
    toast_equipped: "Equipado: {name}",
    toast_build_loaded: "Build \"{name}\" carregada!",
    toast_build_load_error: "Erro ao carregar build.",
    toast_build_string_copied: "String da build \"{name}\" copiada!",
    toast_builder_loaded: "Build carregada no montador!",
    toast_preset_loaded: "Build \"{name}\" carregada!",
    toast_already_voted: "Voc\u00EA j\u00E1 votou nesta build!",
    toast_hype_added: "\u{1F525} Hype adicionado!",
    toast_discord_copied: "Texto para Discord copiado!",
    toast_saved_local_title: "\u{1F4BE} Salva no seu dispositivo como \"{name}\"",
    toast_saved_hype_subtitle: "\u{1F525} Essa combina\u00E7\u00E3o de talentos \u00E9 popular na comunidade! (+1 Hype)",
    toast_offline_synced: "\u{23F3} {count} build(s) salvas offline foram sincronizadas com a nuvem!",
    saved_locally_badge: "\u{1F4BE} Salva Local",
    share_generating_link: "\u{23F3} Gerando link compacto...",
    builder_talents_header: "TALENTOS {class}",
    builder_spellbook_header: "LIVRO DE FEITI\u00C7OS \u2014 Habilidades de {class}",
    spec_card_desc: "Especializa\u00E7\u00E3o de {class} focada em {role}. Habilidade assinatura: {ability}.",
    spec_primary_stat: "ATRIBUTO PRIM\u00C1RIO",
    spec_btn_selected: "SELECIONADO",
    spec_btn_view: "VER TALENTOS",
    default_build_name: "Minha Build Customizada",
    builder_sample_skills: "Habilidades de Exemplo",
    save_name_conflict_error: "\u26A0\uFE0F O nome \"{name}\" j\u00E1 pertence a outra build da comunidade com talentos diferentes. Escolha um nome \u00FAnico.",
    save_checking_title: "\u23F3 Verificando nome...",
    delete_local_tooltip: "Remover do seu dispositivo",
    toast_local_deleted: "\uD83D\uDDD1\uFE0F Build \"{name}\" removida do seu dispositivo."
  },
  en: {
    nav_gallery: "Class Gallery",
    nav_builder: "Talent Builder",
    nav_meta: "Meta Builds",
    nav_wiki: "Item Wiki",
    
    import_string: "\u{1F4E5} Import String",
    save_build: "\u{1F4BE} Save Build",
    copy_string: "\u{1F4CB} Copy String",
    
    choose_class: "Choose Your Class",
    choose_class_sub: "Select one of 9 classes to build your loadout and export the official game string",
    switch_class_label: "Switch Class:",
    
    step_spec: "1. SPECIALIZATION",
    step_choices: "2. TALENTS (6/6)",
    step_bis: "3. BiS GEAR",
    choices_sub_instruction: "Select 1 option on each of the 6 level rows to construct your build:",
    
    live_string_label: "Live Game String:",
    select_talents_btn: "SELECT TALENTS",
    
    meta_header: "\u{1F525} Featured Meta Builds",
    meta_recent_header: "\u{1F195} Recent Community Builds",
    meta_sub: "Community builds ranked by real saves and shares in Supabase.",
    
    search_placeholder: "Search by name or class...",
    sort_saves: "\u{1F4BE} Most Saved",
    sort_shares: "\u{1F4CB} Most Shared",
    sort_recent: "\u{23F1}\uFE0F Most Recent",
    
    patch_current: "Patch v0.35.0 (Current)",
    patch_all: "All Patches",
    
    view_cards: "\u{1F4B4} Cards",
    view_table: "\u{1F4CB} Table",
    only_guild: "\u{1F451} Guild Only",
    only_my_builds: "\u{1F4BE} My Builds",
    
    role_all: "ALL",
    role_tank: "\u{1F6E1}\uFE0F TANK",
    role_healer: "\u{1F49A} HEALER",
    role_dps: "\u{2694}\uFE0F DPS",
    
    empty_meta_title: "No builds found matching these filters.",
    empty_meta_sub: "How about creating yours and being the first for this spec?",
    create_build_now: "\u{2692}\uFE0F Create New Build Now",
    
    spellbook_title: "\u{1F4D6} Spellbook & Base Class Abilities",
    spellbook_sub: "Reference passive and active abilities while allocating talent points",
    
    save_modal_title: "\u{1F4BE} Save My Build",
    save_modal_name: "BUILD NAME:",
    save_modal_placeholder: "E.g. Paladin Holy Tank Raid 2026",
    save_modal_cancel: "CANCEL",
    save_modal_save: "SAVE TO BROWSER",
    import_modal_instruction: "Paste an exported in-game build string (starts with eyJ2...):",

    armor_label: "ARMOR",
    primary_stat_label: "PRIMARY STAT",
    stat_avg_ilvl: "Avg iLvl:",
    stat_crit: "Critical Strike",
    apply_bis_set: "\u{26A1} Apply Recommended BiS Set",

    table_build: "Build",
    table_class: "Class",
    table_spec: "Spec",
    table_role: "Role",
    table_saves: "Saves",
    table_shares: "Shares",
    table_action: "Action",
    table_load: "Load",

    load_on_site: "Load on Site",
    copy_string_short: "\u{1F4CB} String",

    wiki_banner_title: "\u{1F4D6} Item Wiki & Database Expanding",
    wiki_banner_sub: "We are cataloging stats, iLvls, and drop sources for all in-game equipment. The full searchable database will be live here soon.",
    wiki_bis_preview: "Recommended BiS Items (Preview)",
    wiki_status_badge: "\u{26A1} Syncing with Supabase...",

    // Toast Notifications (EN)
    toast_saved_success: "Build \"{name}\" saved to browser successfully! \u{1F4BE}",
    toast_string_copied: "Official game string copied to clipboard!",
    toast_link_loaded: "Build loaded via Direct Link!",
    toast_invalid_string: "Please paste a valid build string.",
    toast_import_success: "Official build imported successfully!",
    toast_error: "Error: {error}",
    toast_short_string_copied: "Official game string copied!",
    toast_file_downloaded: ".wocbuild file downloaded!",
    toast_file_loaded: "File \"{name}\" loaded!",
    toast_file_error: "Error reading file.",
    toast_points_reset: "Talent choices reset.",
    toast_equipped: "Equipped: {name}",
    toast_build_loaded: "Build \"{name}\" loaded!",
    toast_build_load_error: "Error loading build.",
    toast_build_string_copied: "Build \"{name}\" string copied!",
    toast_builder_loaded: "Build loaded into builder!",
    toast_preset_loaded: "Build \"{name}\" loaded!",
    toast_already_voted: "You have already voted for this build!",
    toast_hype_added: "\u{1F525} Hype added!",
    toast_discord_copied: "Discord text copied!",
    toast_saved_local_title: "\u{1F4BE} Saved to your device as \"{name}\"",
    toast_saved_hype_subtitle: "\u{1F525} This talent combination is popular in the community! (+1 Hype)",
    toast_offline_synced: "\u{23F3} {count} offline build(s) synced with the cloud!",
    saved_locally_badge: "\u{1F4BE} Saved Locally",
    share_generating_link: "\u{23F3} Generating compact link...",
    builder_talents_header: "TALENTS {class}",
    builder_spellbook_header: "SPELLBOOK \u2014 {class} Abilities",
    spec_card_desc: "{class} specialization focused on {role}. Signature ability: {ability}.",
    spec_primary_stat: "PRIMARY STAT",
    spec_btn_selected: "SELECTED",
    spec_btn_view: "VIEW TALENTS",
    default_build_name: "My Custom Build",
    builder_sample_skills: "Sample Abilities",
    save_name_conflict_error: "\u26A0\uFE0F The name \"{name}\" is already used by another community build with different talents. Please choose a unique name.",
    save_checking_title: "\u23F3 Checking name...",
    delete_local_tooltip: "Remove from your device",
    toast_local_deleted: "\uD83D\uDDD1\uFE0F Build \"{name}\" removed from your device."
  },
  fr: {
    nav_gallery: "Galerie de Classes",
    nav_builder: "Arbre de Talents",
    nav_meta: "Builds M\u00E9ta",
    nav_wiki: "Wiki d'Objets",
    
    import_string: "\u{1F4E5} Importer String",
    save_build: "\u{1F4BE} Sauvegarder",
    copy_string: "\u{1F4CB} Copier String",
    
    choose_class: "Choisissez votre Classe",
    choose_class_sub: "S\u00E9lectionnez l'une des 9 classes pour cr\u00E9er votre build et g\u00E9n\u00E9rer la string officielle",
    switch_class_label: "Changer de Classe:",
    
    step_spec: "1. SP\u00C9CIALISATION",
    step_choices: "2. TALENTS (6/6)",
    step_bis: "3. \u00C9QUIPEMENT BiS",
    choices_sub_instruction: "S\u00E9lectionnez 1 option sur chacune des 6 lignes pour cr\u00E9er votre build :",
    
    live_string_label: "String du Jeu En Direct:",
    select_talents_btn: "S\u00C9LECTIONNER TALENTS",
    
    meta_header: "\u{1F525} Builds M\u00E9ta en Vedette",
    meta_recent_header: "\u{1F195} Builds R\u00E9cents de la Communaut\u00E9",
    meta_sub: "Builds communautaires class\u00E9s par sauvegardes et partages r\u00E9els sur Supabase.",
    
    search_placeholder: "Chercher par nom ou classe...",
    sort_saves: "\u{1F4BE} Plus Sauvegard\u00E9s",
    sort_shares: "\u{1F4CB} Plus Partag\u00E9s",
    sort_recent: "\u{23F1}\uFE0F Plus R\u00E9cents",
    
    patch_current: "Patch v0.35.0 (Actuel)",
    patch_all: "Tous les Patches",
    
    view_cards: "\u{1F4B4} Cartes",
    view_table: "\u{1F4CB} Tableau",
    only_guild: "\u{1F451} Guilde Uniquement",
    only_my_builds: "\u{1F4BE} Mes Builds",
    
    role_all: "TOUS",
    role_tank: "\u{1F6E1}\uFE0F TANK",
    role_healer: "\u{1F49A} SOIGNEUR",
    role_dps: "\u{2694}\uFE0F DPS",
    
    empty_meta_title: "Aucun build trouv\u00E9 avec ces filtres.",
    empty_meta_sub: "Pourquoi ne pas cr\u00E9er le v\u00F4tre et \u00EAtre le premier ?",
    create_build_now: "\u{2692}\uFE0F Cr\u00E9er un Nouveau Build",
    
    spellbook_title: "\u{1F4D6} Livre de Sorts & Capacit\u00E9s de Classe",
    spellbook_sub: "Consultez les sorts passifs et actifs pendant la s\u00E9lection des talents",
    
    save_modal_title: "\u{1F4BE} Sauvegarder Mon Build",
    save_modal_name: "NOM DU BUILD:",
    save_modal_placeholder: "Ex: Paladin Sacr\u00E9 Tank Raid 2026",
    save_modal_cancel: "ANNULER",
    save_modal_save: "ENREGISTRER",
    import_modal_instruction: "Collez un string de build export\u00E9 du jeu (commence par eyJ2...):",

    armor_label: "ARMURE",
    primary_stat_label: "STAT PRIMAIRE",
    stat_avg_ilvl: "iLvl Moyen:",
    stat_crit: "Coup Critique",
    apply_bis_set: "\u{26A1} Appliquer le Set BiS Recommand\u00E9",

    table_build: "Build",
    table_class: "Classe",
    table_spec: "Sp\u00E9c",
    table_role: "R\u00F4le",
    table_saves: "Sauvegardes",
    table_shares: "Partages",
    table_action: "Action",
    table_load: "Charger",

    load_on_site: "Charger sur le Site",
    copy_string_short: "\u{1F4CB} String",

    wiki_banner_title: "\u{1F4D6} Wiki d'Objets & Base de Donn\u00E9es en Expansion",
    wiki_banner_sub: "Nous cataloguons les statistiques, iLvls et sources de drop de tous les \u00E9quipements du jeu. La base de donn\u00E9es compl\u00E8te sera disponible ici tr\u00E8s bient\u00F4t.",
    wiki_bis_preview: "Objets BiS Recommand\u00E9s (Aper\u00E7u)",
    wiki_status_badge: "\u{26A1} Synchronisation Supabase...",

    // Toast Notifications (FR)
    toast_saved_success: "Build \"{name}\" enregistr\u00E9 avec succ\u00E8s ! \u{1F4BE}",
    toast_string_copied: "String officielle copi\u00E9e dans le presse-papiers !",
    toast_link_loaded: "Build charg\u00E9 via Lien Direct !",
    toast_invalid_string: "Veuillez coller un string de build valide.",
    toast_import_success: "Build officiel import\u00E9 avec succ\u00E8s !",
    toast_error: "Erreur : {error}",
    toast_short_string_copied: "String officielle copi\u00E9e !",
    toast_file_downloaded: "Fichier .wocbuild t\u00E9l\u00E9charg\u00E9 !",
    toast_file_loaded: "Fichier \"{name}\" charg\u00E9 !",
    toast_file_error: "Erreur de lecture du fichier.",
    toast_points_reset: "Choix de talents r\u00E9initialis\u00E9s.",
    toast_equipped: "\u00C9quip\u00E9 : {name}",
    toast_build_loaded: "Build \"{name}\" charg\u00E9 !",
    toast_build_load_error: "Erreur lors du chargement du build.",
    toast_build_string_copied: "String du build \"{name}\" copi\u00E9 !",
    toast_builder_loaded: "Build charg\u00E9 dans le simulateur !",
    toast_preset_loaded: "Build \"{name}\" charg\u00E9 !",
    toast_already_voted: "Vous avez d\u00E9j\u00E0 vot\u00E9 pour ce build !",
    toast_hype_added: "\u{1F525} Hype ajout\u00E9 !",
    toast_discord_copied: "Texte Discord copi\u00E9 !",
    toast_saved_local_title: "\u{1F4BE} Enregistr\u00E9 sur votre appareil sous \"{name}\"",
    toast_saved_hype_subtitle: "\u{1F525} Cette combinaison est populaire dans la communaut\u00E9 ! (+1 Hype)",
    toast_offline_synced: "\u{23F3} {count} build(s) hors-ligne synchronis\u00E9(s) avec le nuage !",
    saved_locally_badge: "\u{1F4BE} Enregistr\u00E9 Localement",
    share_generating_link: "\u{23F3} G\u00E9n\u00E9ration du lien compact...",
    builder_talents_header: "TALENTS {class}",
    builder_spellbook_header: "GRIMOIRE \u2014 Comp\u00E9tences de {class}",
    spec_card_desc: "Sp\u00E9cialisation de {class} orient\u00E9e vers {role}. Comp\u00E9tence signature : {ability}.",
    spec_primary_stat: "ATTRIBUT PRINCIPAL",
    spec_btn_selected: "S\u00C9LECTIONN\u00C9",
    spec_btn_view: "VOIR LES TALENTS",
    default_build_name: "Mon Build Personnalis\u00E9",
    builder_sample_skills: "Comp\u00E9tences Exemples",
    save_name_conflict_error: "\u26A0\uFE0F Le nom \"{name}\" est d\u00E9j\u00E0 utilis\u00E9 par un autre build avec des talents diff\u00E9rents. Choisissez un nom unique.",
    save_checking_title: "\u23F3 V\u00E9rification du nom...",
    delete_local_tooltip: "Supprimer de votre appareil",
    toast_local_deleted: "\uD83D\uDDD1\uFE0F Build \"{name}\" supprim\u00E9 de votre appareil."
  },
  es: {
    nav_gallery: "Galer\u00EDa de Clases",
    nav_builder: "Creador de Talentos",
    nav_meta: "Builds Meta",
    nav_wiki: "Wiki de Objetos",
    
    import_string: "\u{1F4E5} Importar String",
    save_build: "\u{1F4BE} Guardar Build",
    copy_string: "\u{1F4CB} Copiar String",
    
    choose_class: "Elige tu Clase",
    choose_class_sub: "Selecciona una de las 9 clases para armar tu build y exportar la string oficial del juego",
    switch_class_label: "Cambiar Clase:",
    
    step_spec: "1. ESPECIALIZACI\u00D3N",
    step_choices: "2. TALENTOS (6/6)",
    step_bis: "3. EQUIPO BiS",
    choices_sub_instruction: "Selecciona 1 opci\u00F3n en cada una de las 6 filas para armar tu build:",
    
    live_string_label: "String del Juego En Vivo:",
    select_talents_btn: "SELECCIONAR TALENTOS",
    
    meta_header: "\u{1F525} Builds Meta Destacadas",
    meta_recent_header: "\u{1F195} Builds Recientes de la Comunidad",
    meta_sub: "Builds de la comunidad clasificadas por guardados y compartidos reales en Supabase.",
    
    search_placeholder: "Buscar por nombre o clase...",
    sort_saves: "\u{1F4BE} M\u00E1s Guardadas",
    sort_shares: "\u{1F4CB} M\u00E1s Compartidas",
    sort_recent: "\u{23F1}\uFE0F M\u00E1s Recientes",
    
    patch_current: "Parche v0.35.0 (Actual)",
    patch_all: "Todos los Parches",
    
    view_cards: "\u{1F4B4} Tarjetas",
    view_table: "\u{1F4CB} Tabla",
    only_guild: "\u{1F451} Solo Hermandad",
    only_my_builds: "\u{1F4BE} Mis Builds",
    
    role_all: "TODOS",
    role_tank: "\u{1F6E1}\uFE0F TANK",
    role_healer: "\u{1F49A} SANADOR",
    role_dps: "\u{2694}\uFE0F DPS",
    
    empty_meta_title: "No se encontraron builds con estos filtros.",
    empty_meta_sub: "\u00BFQu\u00E9 tal crear la tuya y ser la primera de esta combinaci\u00F3n?",
    create_build_now: "\u{2692}\uFE0F Crear Nueva Build Ahora",
    
    spellbook_title: "\u{1F4D6} Libro de Hechizos y Habilidades de Clase",
    spellbook_sub: "Consulta las habilidades pasivas y activas mientras eliges los talentos",
    
    save_modal_title: "\u{1F4BE} Guardar Mi Build",
    save_modal_name: "NOMBRE DE TU BUILD:",
    save_modal_placeholder: "Ej: Palad\u00EDn Sagrado Tanque 2026",
    save_modal_cancel: "CANCELAR",
    save_modal_save: "GUARDAR EN NAVEGADOR",
    import_modal_instruction: "Pega una string de build exportada del juego (empieza con eyJ2...):",

    armor_label: "ARMADURA",
    primary_stat_label: "ESTAD\u00CDSTICA PRIMARIA",
    stat_avg_ilvl: "iLvl Medio:",
    stat_crit: "Cr\u00EDtico",
    apply_bis_set: "\u{26A1} Aplicar Set BiS Recomendado",

    table_build: "Build",
    table_class: "Clase",
    table_spec: "Espec",
    table_role: "Rol",
    table_saves: "Guardados",
    table_shares: "Compartidos",
    table_action: "Acci\u00F3n",
    table_load: "Cargar",

    load_on_site: "Cargar en el Sitio",
    copy_string_short: "\u{1F4CB} String",

    wiki_banner_title: "\u{1F4D6} Wiki de Objetos y Base de Datos en Expansi\u00F3n",
    wiki_banner_sub: "Estamos catalogando las estad\u00EDsticas, iLvls y fuentes de loteo de todo el equipo del juego. La base de datos completa estar\u00E1 disponible aqu\u00ED pronto.",
    wiki_bis_preview: "Objetos BiS Recomendados (Vista previa)",
    wiki_status_badge: "\u{26A1} Sincronizando con Supabase...",

    // Toast Notifications (ES)
    toast_saved_success: "\u00A1Build \"{name}\" guardada con \u00E9xito en el navegador! \u{1F4BE}",
    toast_string_copied: "\u00A1String oficial del juego copiada al portapapeles!",
    toast_link_loaded: "\u00A1Build cargada mediante Enlace Directo!",
    toast_invalid_string: "Por favor, pega una string de build v\u00E1lida.",
    toast_import_success: "\u00A1Build oficial importada con \u00E9xito!",
    toast_error: "Error: {error}",
    toast_short_string_copied: "\u00A1String oficial del juego copiada!",
    toast_file_downloaded: "\u00A1Archivo .wocbuild descargado!",
    toast_file_loaded: "\u00A1Archivo \"{name}\" cargado!",
    toast_file_error: "Error al leer el archivo.",
    toast_points_reset: "Puntos de talentos reiniciados.",
    toast_equipped: "Equipado: {name}",
    toast_build_loaded: "\u00A1Build \"{name}\" cargada!",
    toast_build_load_error: "Error al cargar la build.",
    toast_build_string_copied: "\u00A1String de la build \"{name}\" copiada!",
    toast_builder_loaded: "\u00A1Build cargada en el creador!",
    toast_preset_loaded: "\u00A1Build \"{name}\" cargada!",
    toast_already_voted: "\u00A1Ya has votado por esta build!",
    toast_hype_added: "\u00A1\u{1F525} Hype a\u00F1adido!",
    toast_discord_copied: "\u00A1Texto de Discord copiado!",
    toast_saved_local_title: "\u{1F4BE} Guardada en tu dispositivo como \"{name}\"",
    toast_saved_hype_subtitle: "\u{1F525} \u00A1Esta combinaci\u00F3n de talentos es popular en la comunidad! (+1 Hype)",
    toast_offline_synced: "\u{23F3} \u00A1{count} build(s) guardada(s) offline se sincronizaron con la nube!",
    saved_locally_badge: "\u{1F4BE} Guardada Localmente",
    share_generating_link: "\u{23F3} Generando enlace compacto...",
    builder_talents_header: "TALENTOS {class}",
    builder_spellbook_header: "GRIMORIO \u2014 Habilidades de {class}",
    spec_card_desc: "Especializaci\u00F3n de {class} centrada en {role}. Habilidad emblema: {ability}.",
    spec_primary_stat: "ATRIBUTO PRINCIPAL",
    spec_btn_selected: "SELECCIONADO",
    spec_btn_view: "VER TALENTOS",
    default_build_name: "Mi Build Personalizada",
    builder_sample_skills: "Habilidades de Ejemplo",
    save_name_conflict_error: "\u26A0\uFE0F El nombre \"{name}\" ya pertenece a otra build con talentos diferentes. Elige un nombre \u00FAnico.",
    save_checking_title: "\u23F3 Verificando nombre...",
    delete_local_tooltip: "Eliminar de tu dispositivo",
    toast_local_deleted: "\uD83D\uDDD1\uFE0F Build \"{name}\" eliminada de tu dispositivo."
  }
};

let currentLanguage = localStorage.getItem('claudecraft_lang') || getBrowserLanguage();

function getBrowserLanguage() {
  const navLang = (navigator.language || 'pt').toLowerCase();
  if (navLang.startsWith('en')) return 'en';
  if (navLang.startsWith('fr')) return 'fr';
  if (navLang.startsWith('es')) return 'es';
  return 'pt';
}

function getI18nText(key, params = {}) {
  const dict = TRANSLATIONS[currentLanguage] || TRANSLATIONS.pt;
  let text = dict[key];

  // For talent descriptions (desc_*) in English, do not fall back to Portuguese
  if (!text && currentLanguage === 'en' && key.startsWith('desc_')) {
    text = key;
  } else if (!text) {
    text = TRANSLATIONS.pt[key] || key;
  }

  for (const p in params) {
    text = text.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
  }
  return text;
}

function setLanguage(lang) {
  if (TRANSLATIONS[lang]) {
    currentLanguage = lang;
    localStorage.setItem('claudecraft_lang', lang);
    applyI18nToDOM();
    if (window.onI18nLanguageChange) window.onI18nLanguageChange(lang);
  }
}

function applyI18nToDOM() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = getI18nText(key);
    if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
      el.placeholder = translation;
    } else {
      el.textContent = translation;
    }
  });

  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = getI18nText(key);
  });

  const langSelect = document.getElementById('headerLanguageSelect');
  if (langSelect) langSelect.value = currentLanguage;
}

document.addEventListener('DOMContentLoaded', () => {
  applyI18nToDOM();
});