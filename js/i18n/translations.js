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
    
    patch_current: "Patch v0.34.0 (Atual)",
    patch_all: "Todos os Patches",
    
    view_cards: "\u{1F4B4} Cards",
    view_table: "\u{1F4CB} Tabela",
    only_guild: "\u{1F451} Apenas Guilda",
    only_my_builds: "\u{1F4BE} Minhas Builds",
    
    role_all: "TODOS",
    role_tank: "\u{1F6E1}\uFE0F TANK",
    role_healer: "\u{1F49A} HEALER",
    role_dps: "\u{2694}\uFE0F DPS",
    
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
    
    patch_current: "Patch v0.34.0 (Current)",
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
    
    patch_current: "Patch v0.34.0 (Actuel)",
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
    
    patch_current: "Parche v0.34.0 (Actual)",
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
  let text = dict[key] || TRANSLATIONS.pt[key] || key;
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