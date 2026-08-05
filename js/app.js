/**
 * A GUILDA — World of Claudecraft Hub Application Controller
 * Live Real-Time Game String Generator (eyJ2...) & 1-Click Direct String Copy on Every Meta Build.
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // State
  const state = {
    currentTab: 'gallery',
    currentGameSubtab: 'spec',
    selectedClass: 'paladin',
    selectedSpec: 'protection',
    selectedChoices: {
      5: 'pal_r5_crusaders_zeal',
      8: 'pal_r8_fist_of_justice',
      11: 'pal_r11_greater_blessing',
      14: 'pal_r14_righteous_cause',
      17: 'pal_r17_ardent_defender',
      20: 'pal_r20_aura_mastery'
    },
    activeRoleFilter: 'all',
    equippedItems: {
      head: 'helm_dreadnought',
      chest: 'chest_plate_glory',
      legs: 'legs_mithril_greaves',
      mainhand: 'runic_blade_epic',
      offhand: 'mithril_defender_shield',
      ring1: 'ring_dragon_seal',
      trinket: 'trinket_holy_relic'
    },
    hypeCounts: {},
    votedBuilds: new Set(JSON.parse(localStorage.getItem('aguilda_voted_builds') || '[]'))
  };

  META_PRESETS.forEach(p => {
    state.hypeCounts[p.id] = p.hypeCount;
  });

  // DOM Elements
  const elements = {
    navBtns: document.querySelectorAll('.nav-tab-btn'),
    tabPanels: document.querySelectorAll('.tab-panel'),
    metaPresetsSection: document.getElementById('metaPresetsSection'),
    presetsGrid: document.getElementById('presetsGrid'),
    fullPresetsGrid: document.getElementById('fullPresetsGrid'),
    
    ecosystemTrigger: document.getElementById('ecosystemTrigger'),
    ecosystemMenu: document.getElementById('ecosystemMenu'),

    classGallerySection: document.getElementById('classGallerySection'),
    classGalleryGrid: document.getElementById('classGalleryGrid'),
    roleFilterBtns: document.querySelectorAll('.role-filter-btn'),

    builderWorkspace: document.getElementById('builderWorkspace'),
    classQuickSwitcherIcons: document.getElementById('classQuickSwitcherIcons'),
    activeClassHeaderTitle: document.getElementById('activeClassHeaderTitle'),
    spellbookTitleHeader: document.getElementById('spellbookTitleHeader'),

    // Live String Bar
    liveGameStringInput: document.getElementById('liveGameStringInput'),
    copyLiveStringBtn: document.getElementById('copyLiveStringBtn'),
    
    gameSubtabBtns: document.querySelectorAll('.game-subtab-btn'),
    gameSubtabPanels: {
      spec: document.getElementById('gameSubtabSpec'),
      choices: document.getElementById('gameSubtabChoices'),
      spellbook: document.getElementById('gameSubtabSpellbook'),
      bis: document.getElementById('gameSubtabBis')
    },

    specCardsGrid: document.getElementById('specCardsGrid'),
    choicesRowsContainer: document.getElementById('choicesRowsContainer'),
    spellbookGrid: document.getElementById('spellbookGrid'),

    leftPaperdollSlots: document.getElementById('leftPaperdollSlots'),
    rightPaperdollSlots: document.getElementById('rightPaperdollSlots'),
    avatarClassIcon: document.getElementById('avatarClassIcon'),
    buildTitleHeader: document.getElementById('buildTitleHeader'),
    confidenceBadge: document.getElementById('confidenceBadge'),
    
    statILvl: document.getElementById('statILvl'),
    statHP: document.getElementById('statHP'),
    resourceLabelTitle: document.getElementById('resourceLabelTitle'),
    statResource: document.getElementById('statResource'),
    statArmor: document.getElementById('statArmor'),
    statCrit: document.getElementById('statCrit'),
    applyBiSBtn: document.getElementById('applyBiSBtn'),
    
    // Import Triggers
    headerImportStringBtn: document.getElementById('headerImportStringBtn'),
    presetsImportStringBtn: document.getElementById('presetsImportStringBtn'),

    // Loadout Dropdown & String Modals
    loadoutDropdownBtn: document.getElementById('loadoutDropdownBtn'),
    loadoutDropdownMenu: document.getElementById('loadoutDropdownMenu'),
    activeLoadoutName: document.getElementById('activeLoadoutName'),
    
    menuImportStringBtn: document.getElementById('menuImportStringBtn'),
    menuExportStringBtn: document.getElementById('menuExportStringBtn'),
    menuDownloadFileBtn: document.getElementById('menuDownloadFileBtn'),
    menuUploadFileBtn: document.getElementById('menuUploadFileBtn'),
    buildFileInput: document.getElementById('buildFileInput'),
    menuResetTalentsBtn: document.getElementById('menuResetTalentsBtn'),

    gameImportModalOverlay: document.getElementById('gameImportModalOverlay'),
    gameImportTextarea: document.getElementById('gameImportTextarea'),
    closeGameImportModalBtn: document.getElementById('closeGameImportModalBtn'),
    cancelGameImportBtn: document.getElementById('cancelGameImportBtn'),
    confirmGameImportBtn: document.getElementById('confirmGameImportBtn'),

    gameExportModalOverlay: document.getElementById('gameExportModalOverlay'),
    gameExportTextarea: document.getElementById('gameExportTextarea'),
    closeGameExportModalBtn: document.getElementById('closeGameExportModalBtn'),
    copyGameExportBtn: document.getElementById('copyGameExportBtn'),

    hypeBuildBtn: document.getElementById('hypeBuildBtn'),
    buildHypeCount: document.getElementById('buildHypeCount'),
    shareUrlBtn: document.getElementById('shareUrlBtn'),
    copyDiscordBtn: document.getElementById('copyDiscordBtn'),

    itemDrawerOverlay: document.getElementById('itemDrawerOverlay'),
    closeDrawerBtn: document.getElementById('closeDrawerBtn'),
    drawerSlotTitle: document.getElementById('drawerSlotTitle'),
    drawerItemList: document.getElementById('drawerItemList'),

    shareModalOverlay: document.getElementById('shareModalOverlay'),
    closeShareModalBtn: document.getElementById('closeShareModalBtn'),
    shareUrlInput: document.getElementById('shareUrlInput'),
    discordMarkdownTextarea: document.getElementById('discordMarkdownTextarea'),
    copyMarkdownBtn: document.getElementById('copyMarkdownBtn'),

    wowTooltip: document.getElementById('wowTooltip'),
    toastNotification: document.getElementById('toastNotification'),
    toastMessage: document.getElementById('toastMessage'),
    headerLogoLink: document.getElementById('headerLogoLink'),

    saveBuildBtn: document.getElementById('saveBuildBtn'),
    saveBuildModalOverlay: document.getElementById('saveBuildModalOverlay'),
    saveBuildNameInput: document.getElementById('saveBuildNameInput'),
    closeSaveBuildModalBtn: document.getElementById('closeSaveBuildModalBtn'),
    cancelSaveBuildBtn: document.getElementById('cancelSaveBuildBtn'),
    confirmSaveBuildBtn: document.getElementById('confirmSaveBuildBtn')
  };

  const SLOT_CONFIG_LEFT = [
    { id: 'head', name: 'Cabeça', defaultIcon: '🪖' },
    { id: 'chest', name: 'Peito', defaultIcon: '🛡️' },
    { id: 'legs', name: 'Pernas', defaultIcon: '🦵' }
  ];

  const SLOT_CONFIG_RIGHT = [
    { id: 'mainhand', name: 'Mão Principal', defaultIcon: '🗡️' },
    { id: 'offhand', name: 'Mão Secundária', defaultIcon: '🛡️' },
    { id: 'ring1', name: 'Anel', defaultIcon: '💍' },
    { id: 'trinket', name: 'Acessório', defaultIcon: '📿' }
  ];

  // Memory Cache Preloader for all skill & spec icons to eliminate image flickering
  const iconMemoryCache = new Set();
  function preloadAllSkillIcons() {
    if (typeof GAME_SPECS === 'undefined') return;
    Object.keys(GAME_SPECS).forEach(classKey => {
      const classData = GAME_SPECS[classKey];
      if (classData.specs) {
        classData.specs.forEach(s => {
          if (s.sampleSkills) {
            s.sampleSkills.forEach(sk => {
              if (sk.iconUrl && !iconMemoryCache.has(sk.iconUrl)) {
                const img = new Image();
                img.src = sk.iconUrl;
                iconMemoryCache.add(sk.iconUrl);
              }
            });
          }
        });
      }
      if (classData.choiceRows) {
        classData.choiceRows.forEach(row => {
          if (row.options) {
            row.options.forEach(opt => {
              if (opt.iconUrl && !iconMemoryCache.has(opt.iconUrl)) {
                const img = new Image();
                img.src = opt.iconUrl;
                iconMemoryCache.add(opt.iconUrl);
              }
            });
          }
        });
      }
    });
  }

  async function init() {
    setupNavigation();
    setupEcosystemMenu();
    setupGalleryRoleFilters();
    setupGameSubtabs();
    setupPresetsGrid();
    setupLoadoutDropdown();
    setupGlobalImportTriggers();
    setupLiveStringBar();
    setupSaveBuildModal();
    setupModals();
    preloadAllSkillIcons();

    // 1. Try compact /b/{slug} path first
    const hasSlugLink = await handleSlugDeepLink();
    if (hasSlugLink) return;

    // 2. Fallback: legacy #class/base64 hash (backwards compatible)
    const hasHashLink = handleUrlDeepLink();
    if (hasHashLink) return;

    // 3. No deep link — show gallery
    renderClassGallery();
    switchTab('gallery');
  }

  function getOrCreateAnonId() {
    let anonId = localStorage.getItem('claudecraft_anon_id');
    if (!anonId) {
      anonId = 'anon_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
      localStorage.setItem('claudecraft_anon_id', anonId);
    }
    return anonId;
  }

  async function recordBuildAction(actionType, buildString, extraData = {}) {
    const anonId = getOrCreateAnonId();
    const discordId = localStorage.getItem('claudecraft_discord_id') || null;

    try {
      await fetch('/api/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          buildId: buildString,
          anonId: anonId,
          actionType: actionType,
          discordId: discordId,
          classKey: state.selectedClass,
          specId: state.selectedSpec,
          buildName: extraData.name || 'Custom Build'
        })
      });
    } catch (e) {
      // Silent background tracking
    }
  }

  function setupSaveBuildModal() {
    if (!elements.saveBuildBtn) return;

    elements.saveBuildBtn.addEventListener('click', () => {
      const classData = GAME_SPECS[state.selectedClass];
      const specData = classData ? classData.specs.find(s => s.id === state.selectedSpec) : null;
      const className = classData ? classData.className : 'Build';
      const specName = specData ? specData.name : '';
      elements.saveBuildNameInput.value = `${className} - ${specName} Custom`;
      elements.saveBuildModalOverlay.classList.remove('hidden');
    });

    const closeModal = () => {
      elements.saveBuildModalOverlay.classList.add('hidden');
    };

    if (elements.closeSaveBuildModalBtn) elements.closeSaveBuildModalBtn.addEventListener('click', closeModal);
    if (elements.cancelSaveBuildBtn) elements.cancelSaveBuildBtn.addEventListener('click', closeModal);

    if (elements.confirmSaveBuildBtn) {
      elements.confirmSaveBuildBtn.addEventListener('click', async () => {
        const buildName = elements.saveBuildNameInput.value.trim() || 'Minha Build Customizada';
        const buildString = exportOfficialBuildString();

        const savedBuilds = JSON.parse(localStorage.getItem('claudecraft_user_builds') || '[]');
        const newBuild = {
          id: 'user_' + Date.now(),
          name: buildName,
          classKey: state.selectedClass,
          specId: state.selectedSpec,
          choices: { ...state.selectedChoices },
          string: buildString,
          createdAt: new Date().toLocaleDateString('pt-BR'),
          synced: false
        };

        savedBuilds.unshift(newBuild);
        localStorage.setItem('claudecraft_user_builds', JSON.stringify(savedBuilds));

        closeModal();

        // RPC Save Call to Supabase (Atomic & Idempotent)
        const rpcResult = await recordSupabaseSaveBuild({
          string: buildString,
          classKey: state.selectedClass,
          specId: state.selectedSpec,
          name: buildName,
          choices: state.selectedChoices
        });

        if (rpcResult && rpcResult.success) {
          newBuild.synced = true;
          localStorage.setItem('claudecraft_user_builds', JSON.stringify(savedBuilds));
        }

        const titleText = getI18nText('toast_saved_local_title', { name: buildName });
        if (rpcResult && rpcResult.countedTowardHype) {
          const subText = getI18nText('toast_saved_hype_subtitle');
          showToast(titleText, subText);
        } else {
          showToast(titleText);
        }

        loadAndRenderMetaBuilds();
      });
    }
  }

  // Live Real-Time String Bar
  function setupLiveStringBar() {
    if (elements.copyLiveStringBtn) {
      elements.copyLiveStringBtn.addEventListener('click', () => {
        const liveString = exportOfficialBuildString();
        navigator.clipboard.writeText(liveString);
        recordSupabaseShareBuild(liveString);
        showToast(getI18nText('toast_string_copied'));
      });
    }
  }

  function updateLiveStringDisplay() {
    const liveString = exportOfficialBuildString();
    if (elements.liveGameStringInput) {
      elements.liveGameStringInput.value = liveString;
    }
    // Update class•spec indicator
    const classData = GAME_SPECS[state.selectedClass];
    const specObj = classData ? classData.specs.find(s => s.id === state.selectedSpec) : null;
    const indicator = document.getElementById('liveStringClassIndicator');
    if (indicator && classData) {
      indicator.textContent = `${classData.className} • ${specObj ? specObj.name : '—'}`;
      indicator.style.color = classData.color;
    }
  }

  function setupGlobalImportTriggers() {
    const openImportModal = () => {
      elements.gameImportTextarea.value = '';
      elements.gameImportModalOverlay.classList.remove('hidden');
      elements.gameImportTextarea.focus();
    };

    if (elements.headerImportStringBtn) elements.headerImportStringBtn.addEventListener('click', openImportModal);
    if (elements.presetsImportStringBtn) elements.presetsImportStringBtn.addEventListener('click', openImportModal);
    if (elements.menuImportStringBtn) elements.menuImportStringBtn.addEventListener('click', openImportModal);
  }

  // --- Compact URL Slug Utilities -------------------------------------------

  /**
   * Generates a deterministic slug: e.g. "warrior-fury-6xk3"
   * Uses SHA-256 so the same build always maps to the same slug.
   */
  async function generateSlug(classKey, specId, buildString) {
    try {
      const msgBuffer = new TextEncoder().encode(buildString);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hex4 = hashArray.slice(0, 2).map(b => b.toString(16).padStart(2, '0')).join('');
      const classPart = (classKey || 'woc').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 10);
      const specPart  = (specId || 'unknown').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 12);
      return `${classPart}-${specPart}-${hex4}`;
    } catch {
      return `${classKey}-${specId}-${Date.now().toString(36)}`;
    }
  }

  /**
   * Handles /b/{slug} path-based deep links.
   * Resolves via Supabase, loads the build, then rewrites URL cleanly.
   */
  async function handleSlugDeepLink() {
    const path = window.location.pathname;
    const match = path.match(/^\/b\/([a-z0-9-]+)$/);
    if (!match) return false;

    const slug = match[1];
    window.history.replaceState(null, '', '/');

    const result = await resolveSlugFromSupabase(slug);
    if (!result || !result.found || !result.build_id) return false;

    const success = importOfficialBuildString(result.build_id);
    if (success) {
      switchTab('builder');
      showToast(getI18nText('toast_link_loaded'));
      return true;
    }
    return false;
  }

  /**
   * Handles legacy #class/base64 hash deep links — no old links break.
   */
  function handleUrlDeepLink() {
    const hash = window.location.hash.replace('#', '').trim();
    if (!hash) return false;

    let targetClass = null;
    let buildStr = null;

    if (hash.includes('/')) {
      const parts = hash.split('/');
      targetClass = parts[0];
      buildStr = parts[1];
    } else if (hash.startsWith('eyJ2')) {
      buildStr = hash;
    }

    if (buildStr) {
      const success = importOfficialBuildString(buildStr);
      if (success) {
        if (targetClass && GAME_SPECS[targetClass]) {
          state.selectedClass = targetClass;
        }
        switchTab('builder');
        showToast(getI18nText('toast_link_loaded'));
        return true;
      }
    }
    return false;
  }

  function updateUrlHashState() {
    const stringResult = exportOfficialBuildString();
    window.history.replaceState(null, '', `#${state.selectedClass}/${stringResult}`);
    updateLiveStringDisplay();
  }

  function setupEcosystemMenu() {
    if (elements.ecosystemTrigger && elements.ecosystemMenu) {
      elements.ecosystemTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.ecosystemMenu.classList.toggle('hidden');
      });
      document.addEventListener('click', () => {
        elements.ecosystemMenu.classList.add('hidden');
      });
    }
  }

  function setupNavigation() {
    elements.navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        switchTab(tabName);
      });
    });
    if (elements.headerLogoLink) {
      elements.headerLogoLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.replaceState(null, '', window.location.pathname);
        state.activeRoleFilter = 'all';
        renderClassGallery();
        switchTab('gallery');
      });
    }
  }

  function switchTab(tabName) {
    state.currentTab = tabName;
    elements.navBtns.forEach(b => {
      if (b.getAttribute('data-tab') === tabName) {
        b.classList.add('active', 'text-wurm-accent');
        b.classList.remove('text-wurm-muted');
      } else {
        b.classList.remove('active', 'text-wurm-accent');
        b.classList.add('text-wurm-muted');
      }
    });

    elements.tabPanels.forEach(panel => {
      if ((tabName === 'gallery' && panel.id === 'classGallerySection') ||
          (tabName === 'builder' && panel.id === 'builderWorkspace') ||
          (panel.id === `${tabName}Tab`)) {
        panel.classList.remove('hidden');
        panel.classList.add('active');
      } else {
        panel.classList.add('hidden');
        panel.classList.remove('active');
      }
    });

    if (tabName === 'gallery') {
      renderClassGallery();
    }
    if (tabName === 'builder') {
      renderClassQuickSwitcher();
      renderActiveBuilderWorkspace();
    }
    if (tabName === 'presets') renderFullPresetsGrid();
    if (tabName === 'wiki') renderWikiItems();
  }

  function setupGalleryRoleFilters() {
    elements.roleFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const role = btn.getAttribute('data-role');
        state.activeRoleFilter = role;

        elements.roleFilterBtns.forEach(b => {
          if (b.getAttribute('data-role') === role) {
            b.classList.add('active', 'bg-wurm-accent', 'text-wurm-bg');
            b.classList.remove('text-wurm-muted');
          } else {
            b.classList.remove('active', 'bg-wurm-accent', 'text-wurm-bg');
            b.classList.add('text-wurm-muted');
          }
        });

        renderClassGallery();
      });
    });
  }

  function renderClassGallery() {
    elements.classGalleryGrid.innerHTML = '';

    Object.keys(GAME_SPECS).forEach(classKey => {
      const classData = GAME_SPECS[classKey];

      const matchesFilter = state.activeRoleFilter === 'all' || classData.specs.some(s => s.roleType === state.activeRoleFilter);
      if (!matchesFilter) return;

      const card = document.createElement('div');
      card.className = 'class-card bg-wurm-panel p-6 rounded-lg cursor-pointer transition-all flex flex-col justify-between';
      card.style.borderColor = `${classData.color}40`;

      const specsTagsHTML = classData.specs.map(spec => `
        <div class="px-2.5 py-1 rounded bg-white/5 border border-wurm-border text-[11px] font-mono flex items-center gap-1.5" style="color: ${classData.color}">
          <span>${spec.roleIcon}</span>
          <span class="font-bold">${spec.name}</span>
        </div>
      `).join('');

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-lg bg-wurm-bg border flex items-center justify-center text-2xl" style="border-color: ${classData.color}">
                ${classData.icon}
              </div>
              <div>
                <h3 class="font-serif text-lg font-bold text-wurm-text">${classData.className}</h3>
                <div class="text-[10px] font-mono uppercase text-wurm-muted">${classData.armorType.toUpperCase()} ${getI18nText('armor_label')} • ${classData.resource}</div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 mb-6">
            ${specsTagsHTML}
          </div>
        </div>

        <button class="w-full py-2.5 rounded font-mono text-xs font-bold uppercase transition-all" style="background-color: ${classData.color}; color: #050505">
          ${getI18nText('select_talents_btn')}
        </button>
      `;

      card.addEventListener('click', () => {
        state.selectedClass = classKey;
        state.selectedSpec = classData.specs[0].id;
        state.selectedChoices = {};
        switchTab('builder');
      });

      elements.classGalleryGrid.appendChild(card);
    });
  }

  function renderClassQuickSwitcher() {
    elements.classQuickSwitcherIcons.innerHTML = '';
    Object.keys(GAME_SPECS).forEach(classKey => {
      const classData = GAME_SPECS[classKey];
      const isSelected = state.selectedClass === classKey;

      const iconBtn = document.createElement('button');
      iconBtn.className = `px-3 py-1.5 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${isSelected ? 'bg-wurm-accent/20 border-2' : 'bg-white/5 border border-wurm-border hover:border-wurm-accent/50'}`;
      iconBtn.style.borderColor = isSelected ? classData.color : 'transparent';
      iconBtn.style.color = isSelected ? classData.color : '#e5e5e5';

      iconBtn.innerHTML = `<span>${classData.icon}</span> <span>${classData.className}</span>`;

      iconBtn.addEventListener('click', () => {
        state.selectedClass = classKey;
        state.selectedSpec = classData.specs[0].id;
        state.selectedChoices = {};
        renderClassQuickSwitcher();
        renderActiveBuilderWorkspace();
      });

      elements.classQuickSwitcherIcons.appendChild(iconBtn);
    });
  }

  function renderActiveBuilderWorkspace() {
    const classData = GAME_SPECS[state.selectedClass];
    if (!classData) return;

    elements.activeClassHeaderTitle.textContent = `TALENTOS ${classData.className.toUpperCase()}`;
    elements.spellbookTitleHeader.textContent = `LIVRO DE FEITIÇOS — Habilidades de ${classData.className}`;

    renderSpecCards();
    renderChoiceRows();
    renderSpellbook();
    renderPaperdollSlots();
    recalculateStats();
    updateLiveStringDisplay();
  }

  function setupGameSubtabs() {
    elements.gameSubtabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const subtab = btn.getAttribute('data-game-subtab');
        switchGameSubtab(subtab);
      });
    });
  }

  function switchGameSubtab(subtab) {
    state.currentGameSubtab = subtab;
    elements.gameSubtabBtns.forEach(b => {
      if (b.getAttribute('data-game-subtab') === subtab) {
        b.classList.add('active', 'border-wurm-accent', 'text-wurm-accent', 'bg-wurm-accent/10');
        b.classList.remove('border-wurm-border', 'text-wurm-muted', 'bg-white/5');
      } else {
        b.classList.remove('active', 'border-wurm-accent', 'text-wurm-accent', 'bg-wurm-accent/10');
        b.classList.add('border-wurm-border', 'text-wurm-muted', 'bg-white/5');
      }
    });

    Object.keys(elements.gameSubtabPanels).forEach(key => {
      if (key === subtab) {
        elements.gameSubtabPanels[key].classList.remove('hidden');
        elements.gameSubtabPanels[key].classList.add('active');
      } else {
        elements.gameSubtabPanels[key].classList.add('hidden');
        elements.gameSubtabPanels[key].classList.remove('active');
      }
    });
  }

  function renderSpecCards() {
    const classData = GAME_SPECS[state.selectedClass];
    if (!classData) return;

    elements.specCardsGrid.innerHTML = '';
    classData.specs.forEach(spec => {
      const isSelected = state.selectedSpec === spec.id;
      const card = document.createElement('div');
      card.className = `bg-[#0a0e1a] rounded-lg border-2 p-6 text-center flex flex-col justify-between transition-all ${isSelected ? 'border-wurm-accent bg-wurm-accent/5 shadow-2xl shadow-wurm-accent/20' : 'border-wurm-border hover:border-wurm-accent/50'}`;

      const sampleSkillsHTML = spec.sampleSkills.map(sk => `
        <div class="flex flex-col items-center gap-1">
          <img src="${sk.iconUrl}" alt="${sk.name}" class="w-10 h-10 rounded border object-cover ${sk.isSignature ? 'signature-skill-badge' : 'border-wurm-border'}" onerror="this.src='https://raw.githubusercontent.com/levy-street/world-of-claudecraft/main/public/favicon-32x32.png'">
          <span class="text-[10px] font-mono text-wurm-muted leading-tight">${sk.name} ${sk.isSignature ? '⭐' : ''}</span>
        </div>
      `).join('');

      card.innerHTML = `
        <div>
          <div class="w-14 h-14 rounded-lg bg-wurm-accent/10 border border-wurm-accent text-wurm-accent text-3xl flex items-center justify-center mx-auto mb-3">
            ${spec.roleIcon}
          </div>
          <h3 class="font-serif text-lg font-bold text-wurm-text">${spec.name}</h3>
          <div class="text-xs font-mono text-wurm-accent uppercase mb-3 font-semibold">${spec.roleIcon} ${spec.role}</div>
          <p class="text-xs text-wurm-muted leading-relaxed mb-4">Especialização de ${classData.className} focada em ${spec.role.toLowerCase()}. Habilidade assinatura: <strong class="text-wurm-text">${spec.signatureAbility}</strong>.</p>
          
          <div class="inline-block px-3 py-1 bg-white/5 border border-wurm-border rounded font-mono text-xs text-wurm-muted mb-4">
            ATRIBUTO PRIMÁRIO <strong class="text-wurm-accent">${spec.primaryStat}</strong>
          </div>

          <div class="p-3 bg-wurm-bg rounded border border-wurm-border text-left text-xs font-mono text-wurm-text mb-6">
            <strong class="text-wurm-accent">${spec.passive.split('—')[0]}</strong> — ${spec.passive.split('—')[1] || ''}
          </div>

          <div class="text-[11px] font-mono text-wurm-muted uppercase tracking-wider mb-2 font-semibold">Habilidades de Exemplo</div>
          <div class="flex justify-center gap-3 mb-6">
            ${sampleSkillsHTML}
          </div>
        </div>

        <button class="w-full py-2.5 rounded font-mono text-xs font-bold uppercase transition-all ${isSelected ? 'bg-wurm-accent text-wurm-bg' : 'bg-red-950/60 hover:bg-red-900 border border-red-800 text-red-200'}">
          ${isSelected ? 'SELECIONADO' : 'VER TALENTOS'}
        </button>
      `;

      card.addEventListener('click', () => {
        state.selectedSpec = spec.id;
        renderSpecCards();
        recalculateStats();
        switchGameSubtab('choices');
        updateUrlHashState();
      });

      elements.specCardsGrid.appendChild(card);
    });
  }

  function renderChoiceRows() {
    const classData = GAME_SPECS[state.selectedClass];
    if (!classData) return;

    elements.choicesRowsContainer.innerHTML = '';
    classData.choiceRows.forEach(row => {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'grid grid-cols-12 gap-3 items-center bg-[#0a0e1a] p-3 rounded-lg border border-wurm-border';

      // Level badge + reset button column
      const lvlCol = document.createElement('div');
      lvlCol.className = 'col-span-1 flex flex-col items-center gap-1';

      const lvlBadge = document.createElement('div');
      lvlBadge.className = 'font-mono font-bold text-sm text-wurm-accent w-8 h-8 rounded-full border border-wurm-accent/40 flex items-center justify-center';
      lvlBadge.textContent = row.level;
      lvlCol.appendChild(lvlBadge);

      // Reset button for this row
      if (state.selectedChoices[row.level]) {
        const resetBtn = document.createElement('button');
        resetBtn.className = 'text-[9px] font-mono text-wurm-muted hover:text-red-400 transition-colors px-1 leading-tight';
        resetBtn.title = 'Limpar escolha';
        resetBtn.textContent = '✕';
        resetBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          delete state.selectedChoices[row.level];
          renderChoiceRows();
          recalculateStats();
          updateUrlHashState();
        });
        lvlCol.appendChild(resetBtn);
      }

      rowDiv.appendChild(lvlCol);

      const optionsContainer = document.createElement('div');
      optionsContainer.className = 'col-span-11 grid grid-cols-3 gap-3';

      row.options.forEach(opt => {
        const isSelected = state.selectedChoices[row.level] === opt.id;
        const optCard = document.createElement('div');
        optCard.className = `p-3 rounded-md border flex items-center gap-3 cursor-pointer transition-all ${isSelected ? 'border-wurm-accent bg-wurm-accent/15 shadow-md shadow-wurm-accent/20 choice-selected' : 'border-wurm-border bg-wurm-bg hover:border-wurm-accent/50'}`;
        optCard.setAttribute('data-tooltip-name', opt.name);
        optCard.setAttribute('data-tooltip-desc', opt.desc);
        
        optCard.innerHTML = `
          <img src="${opt.iconUrl}" alt="${opt.name}" class="w-8 h-8 rounded border border-wurm-border object-cover flex-shrink-0" onerror="this.src='https://raw.githubusercontent.com/levy-street/world-of-claudecraft/main/public/favicon-32x32.png'">
          <div class="overflow-hidden">
            <div class="font-mono text-xs font-bold text-wurm-text truncate">${opt.name}</div>
            <div class="text-[10px] text-wurm-muted line-clamp-2">${opt.desc}</div>
          </div>
        `;

        // Skill tooltip on hover
        optCard.addEventListener('mouseenter', (e) => {
          showSkillTooltip(e, opt.name, opt.desc);
        });
        optCard.addEventListener('mousemove', moveTooltip);
        optCard.addEventListener('mouseleave', hideTooltip);

        optCard.addEventListener('click', () => {
          state.selectedChoices[row.level] = opt.id;
          // Pulse animation
          optCard.classList.add('choice-pulse');
          setTimeout(() => optCard.classList.remove('choice-pulse'), 400);
          renderChoiceRows();
          recalculateStats();
          updateUrlHashState();
        });

        optionsContainer.appendChild(optCard);
      });

      rowDiv.appendChild(optionsContainer);
      elements.choicesRowsContainer.appendChild(rowDiv);
    });
  }

  function renderSpellbook() {
    const classData = GAME_SPECS[state.selectedClass];
    if (!classData) return;

    elements.spellbookGrid.innerHTML = '';
    classData.spellbook.forEach(spell => {
      const card = document.createElement('div');
      card.className = 'bg-[#0a0e1a] p-4 rounded-lg border border-wurm-border flex items-start gap-3.5 transition-all';

      card.innerHTML = `
        <img src="${spell.iconUrl}" alt="${spell.name}" class="w-11 h-11 rounded border border-wurm-accent/40 object-cover flex-shrink-0" onerror="this.src='https://raw.githubusercontent.com/levy-street/world-of-claudecraft/main/public/favicon-32x32.png'">
        <div class="flex-grow overflow-hidden">
          <div class="flex items-center justify-between gap-2 mb-1">
            <h4 class="font-mono text-xs font-bold text-wurm-text uppercase truncate">${spell.name}</h4>
            <span class="text-[10px] font-mono text-wurm-accent px-1.5 py-0.5 rounded bg-wurm-accent/10 border border-wurm-accent/20 flex-shrink-0">${spell.type}</span>
          </div>
          <div class="text-[11px] font-mono text-wurm-accentDim mb-1.5">${spell.cost} • ${spell.cooldown}</div>
          <p class="text-[11px] text-wurm-muted leading-relaxed">${spell.desc || 'Active combat ability.'}</p>
        </div>
      `;

      elements.spellbookGrid.appendChild(card);
    });
  }

  function renderPaperdollSlots() {
    renderSlotColumn(elements.leftPaperdollSlots, SLOT_CONFIG_LEFT);
    renderSlotColumn(elements.rightPaperdollSlots, SLOT_CONFIG_RIGHT);
  }

  function renderSlotColumn(container, slotConfigs) {
    container.innerHTML = '';
    slotConfigs.forEach(config => {
      const equippedItemId = state.equippedItems[config.id];
      const itemDef = GAME_ITEMS.find(i => i.id === equippedItemId);

      const slotCard = document.createElement('div');
      slotCard.className = `paperdoll-slot-card ${itemDef ? 'has-item' : ''}`;
      
      if (itemDef) {
        const rarityColor = getRarityColor(itemDef.quality);
        slotCard.style.setProperty('--item-rarity-color', rarityColor);
      }

      slotCard.innerHTML = `
        <div class="w-9 h-9 rounded bg-wurm-bg border border-wurm-border flex items-center justify-center text-lg flex-shrink-0 overflow-hidden">
          ${itemDef && itemDef.iconUrl ? `<img src="${itemDef.iconUrl}" class="w-full h-full object-cover">` : config.defaultIcon}
        </div>
        <div class="flex-grow overflow-hidden">
          <div class="text-[10px] font-mono uppercase text-wurm-muted">${config.name}</div>
          <div class="text-xs font-mono font-semibold truncate text-wurm-text">${itemDef ? itemDef.name : 'Vazio'}</div>
        </div>
      `;

      slotCard.addEventListener('click', () => {
        openItemDrawer(config.id, config.name);
      });

      if (itemDef) {
        slotCard.addEventListener('mouseenter', (e) => showTooltip(e, itemDef));
        slotCard.addEventListener('mouseleave', hideTooltip);
        slotCard.addEventListener('mousemove', moveTooltip);
      }

      container.appendChild(slotCard);
    });
  }

  function getRarityColor(quality) {
    if (quality === 'legendary') return '#ff8000';
    if (quality === 'epic') return '#a335ee';
    if (quality === 'rare') return '#0070dd';
    if (quality === 'uncommon') return '#1eff00';
    return '#e5e5e5';
  }

  function recalculateStats() {
    let baseHP = 4000;
    let baseArmor = 600;
    let baseCrit = 10.0;
    let totalILvl = 0;
    let equippedCount = 0;

    Object.keys(state.equippedItems).forEach(slotKey => {
      const itemId = state.equippedItems[slotKey];
      const item = GAME_ITEMS.find(i => i.id === itemId);
      if (item) {
        equippedCount++;
        totalILvl += item.ilvl;
        if (item.stats.sta) baseHP += item.stats.sta * 25;
        if (item.stats.armor) baseArmor += item.stats.armor;
        if (item.stats.crit) baseCrit += item.stats.crit;
      }
    });

    const classData = GAME_SPECS[state.selectedClass];
    const specObj = classData ? classData.specs.find(s => s.id === state.selectedSpec) : null;

    elements.resourceLabelTitle.textContent = `Recurso (${classData ? classData.resource : 'Mana'})`;
    elements.statResource.textContent = classData.resource === 'Rage' ? '100' : classData.resource === 'Energy' ? '100' : classData.resource === 'Focus' ? '100' : '1.400';

    const avgILvl = equippedCount > 0 ? Math.round(totalILvl / equippedCount) : 88;
    elements.statILvl.textContent = avgILvl;
    elements.statHP.textContent = baseHP.toLocaleString();
    elements.statArmor.textContent = baseArmor;
    elements.statCrit.textContent = `${baseCrit.toFixed(1)}%`;

    elements.buildTitleHeader.textContent = specObj ? `${classData.className} - ${specObj.name}` : 'Build Customizada';
    elements.avatarClassIcon.textContent = classData ? classData.icon : '⚔️';
    elements.buildHypeCount.textContent = (state.hypeCounts['pala_tank_meta'] || 1420).toLocaleString();
  }

  // Loadout Dropdown & Base64 String Protocol (Version 2)
  function setupLoadoutDropdown() {
    elements.loadoutDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      elements.loadoutDropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      elements.loadoutDropdownMenu.classList.add('hidden');
    });

    elements.confirmGameImportBtn.addEventListener('click', () => {
      const str = elements.gameImportTextarea.value.trim();
      if (!str) {
        showToast(getI18nText('toast_invalid_string'));
        return;
      }
      const result = importOfficialBuildStringDetailed(str);
      if (result.success) {
        elements.gameImportModalOverlay.classList.add('hidden');
        switchTab('builder');
        showToast(getI18nText('toast_import_success'));
      } else {
        showToast(getI18nText('toast_error', { error: result.error }));
      }
    });

    elements.cancelGameImportBtn.addEventListener('click', () => {
      elements.gameImportModalOverlay.classList.add('hidden');
    });

    elements.closeGameImportModalBtn.addEventListener('click', () => {
      elements.gameImportModalOverlay.classList.add('hidden');
    });

    elements.menuExportStringBtn.addEventListener('click', () => {
      const stringResult = exportOfficialBuildString();
      elements.gameExportTextarea.value = stringResult;
      elements.gameExportModalOverlay.classList.remove('hidden');
    });

    elements.copyGameExportBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(elements.gameExportTextarea.value);
      showToast(getI18nText('toast_short_string_copied'));
    });

    elements.closeGameExportModalBtn.addEventListener('click', () => {
      elements.gameExportModalOverlay.classList.add('hidden');
    });

    elements.menuDownloadFileBtn.addEventListener('click', () => {
      const payload = getBuildPayload();
      const jsonStr = JSON.stringify(payload, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Build_${state.selectedClass}_${state.selectedSpec}.wocbuild`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(getI18nText('toast_file_downloaded'));
    });

    elements.menuUploadFileBtn.addEventListener('click', () => {
      elements.buildFileInput.click();
    });

    elements.buildFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const payload = JSON.parse(event.target.result);
          loadBuildFromPayload(payload);
          switchTab('builder');
          showToast(getI18nText('toast_file_loaded', { name: file.name }));
        } catch {
          showToast(getI18nText('toast_file_error'));
        }
      };
      reader.readAsText(file);
    });

    elements.menuResetTalentsBtn.addEventListener('click', () => {
      state.selectedChoices = {};
      renderChoiceRows();
      recalculateStats();
      updateUrlHashState();
      showToast(getI18nText('toast_points_reset'));
    });
  }

  // Generate Version 2 Payload { v: 2, c: class, s: spec, r: choices }
  function exportOfficialBuildString() {
    const payload = getBuildPayload();
    return btoa(JSON.stringify(payload));
  }

  function importOfficialBuildString(str) {
    try {
      const decodedStr = atob(str.trim());
      const payload = JSON.parse(decodedStr);
      return loadBuildFromPayload(payload);
    } catch {
      return false;
    }
  }

  function importOfficialBuildStringDetailed(str) {
    try {
      let decodedStr;
      try {
        decodedStr = atob(str.trim());
      } catch {
        return { success: false, error: 'String não é um Base64 válido. Verifique se copiou corretamente.' };
      }
      let payload;
      try {
        payload = JSON.parse(decodedStr);
      } catch {
        return { success: false, error: 'String decodificada não é um JSON válido.' };
      }
      if (!payload.c) return { success: false, error: 'Campo de classe (c) ausente na string.' };
      if (!GAME_SPECS[payload.c]) return { success: false, error: `Classe "${payload.c}" não reconhecida neste site.` };
      if (!payload.v || payload.v !== 2) return { success: false, error: 'Versão de string incompatível. Apenas v:2 é suportado.' };
      const ok = loadBuildFromPayload(payload);
      return ok ? { success: true } : { success: false, error: 'Falha ao carregar build.' };
    } catch (e) {
      return { success: false, error: 'Erro desconhecido ao importar string.' };
    }
  }

  function showSkillTooltip(e, name, desc) {
    if (!elements.wowTooltip) return;
    elements.wowTooltip.innerHTML = `
      <div class="font-mono font-bold text-wurm-accent text-xs mb-1">${name}</div>
      <div class="text-[11px] text-wurm-muted leading-relaxed">${desc}</div>
    `;
    elements.wowTooltip.classList.remove('hidden');
    moveTooltip(e);
  }

  function getBuildPayload() {
    return {
      v: 2,
      c: state.selectedClass,
      s: state.selectedSpec,
      r: state.selectedChoices
    };
  }

  function loadBuildFromPayload(payload) {
    if (!payload || typeof payload !== 'object') return false;
    if (payload.c && GAME_SPECS[payload.c]) state.selectedClass = payload.c;
    if (payload.s) state.selectedSpec = payload.s;
    if (payload.r && typeof payload.r === 'object') state.selectedChoices = { ...payload.r };

    renderClassQuickSwitcher();
    renderActiveBuilderWorkspace();
    updateUrlHashState();
    return true;
  }

  // Drawer
  function openItemDrawer(slotKey, slotName) {
    state.activeSlotPicking = slotKey;
    elements.drawerSlotTitle.textContent = `Escolher Item: ${slotName}`;
    renderDrawerItems('');
    elements.itemDrawerOverlay.classList.remove('hidden');
  }

  function renderDrawerItems(filterText) {
    elements.drawerItemList.innerHTML = '';
    const classData = GAME_SPECS[state.selectedClass];

    const compatibleItems = GAME_ITEMS.filter(item => {
      const matchSlot = (item.slot === state.activeSlotPicking) || 
                        (state.activeSlotPicking === 'offhand' && item.kind === 'shield') ||
                        (state.activeSlotPicking === 'ring1' && item.kind === 'ring') ||
                        (state.activeSlotPicking === 'trinket' && item.kind === 'trinket');
      const matchArmor = item.armorType === 'any' || item.armorType === classData.armorType;
      return matchSlot && matchArmor;
    });

    compatibleItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'p-3 bg-wurm-bg border border-wurm-border hover:border-wurm-accent rounded cursor-pointer transition-all flex items-center gap-3';
      const rarityColor = getRarityColor(item.quality);
      
      card.innerHTML = `
        <div class="w-8 h-8 rounded bg-wurm-panel border flex items-center justify-center text-sm overflow-hidden" style="border-color: ${rarityColor}">
          ${item.iconUrl ? `<img src="${item.iconUrl}" class="w-full h-full object-cover">` : '🎒'}
        </div>
        <div class="flex-grow">
          <div class="text-xs font-mono font-bold" style="color: ${rarityColor}">${item.name}</div>
          <div class="text-[10px] font-mono text-wurm-muted">iLvl ${item.ilvl} | ${item.source.split(':')[0]}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        state.equippedItems[state.activeSlotPicking] = item.id;
        renderPaperdollSlots();
        recalculateStats();
        closeDrawer();
        showToast(getI18nText('toast_equipped', { name: item.name }));
      });

      elements.drawerItemList.appendChild(card);
    });
  }

  function closeDrawer() {
    elements.itemDrawerOverlay.classList.add('hidden');
  }

  function setupModals() {
    elements.closeDrawerBtn.addEventListener('click', closeDrawer);
    elements.closeShareModalBtn.addEventListener('click', closeShareModal);
  }

  // Meta Controls State
  const metaState = {
    searchQuery: '',
    activeClassKey: 'all',
    activeRole: 'all',
    sortBy: 'saves',
    patchFilter: 'current',
    verifiedOnly: false,
    myBuildsOnly: false,
    viewMode: localStorage.getItem('claudecraft_meta_view_mode') || 'cards'
  };

  let metaSearchDebounceTimer = null;

  function setupPresetsGrid() {
    setupMetaControlBar();
    syncMetaStateFromUrl();
    loadAndRenderMetaBuilds();
  }

  function syncMetaStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('class')) metaState.activeClassKey = params.get('class');
    if (params.has('role')) metaState.activeRole = params.get('role');
    if (params.has('search')) metaState.searchQuery = params.get('search');
    if (params.has('sort')) metaState.sortBy = params.get('sort');

    // Sync UI elements
    const searchInput = document.getElementById('metaSearchInput');
    const sortSelect = document.getElementById('metaSortSelect');
    const patchSelect = document.getElementById('metaPatchSelect');
    const verifiedToggle = document.getElementById('metaVerifiedToggle');

    if (searchInput) searchInput.value = metaState.searchQuery;
    if (sortSelect) sortSelect.value = metaState.sortBy;
    if (patchSelect) patchSelect.value = metaState.patchFilter;
    if (verifiedToggle) verifiedToggle.checked = metaState.verifiedOnly;

    updateMetaFilterButtonsUI();
    updateMetaViewButtonsUI();
  }

  function updateUrlWithMetaState() {
    const params = new URLSearchParams();
    if (metaState.activeClassKey !== 'all') params.set('class', metaState.activeClassKey);
    if (metaState.activeRole !== 'all') params.set('role', metaState.activeRole);
    if (metaState.searchQuery) params.set('search', metaState.searchQuery);
    if (metaState.sortBy !== 'saves') params.set('sort', metaState.sortBy);

    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}${window.location.hash}`;
    window.history.replaceState(null, '', newUrl);
  }

  function setupMetaControlBar() {
    const searchInput = document.getElementById('metaSearchInput');
    const sortSelect = document.getElementById('metaSortSelect');
    const patchSelect = document.getElementById('metaPatchSelect');
    const verifiedToggle = document.getElementById('metaVerifiedToggle');
    const cardsViewBtn = document.getElementById('metaViewCardsBtn');
    const listViewBtn = document.getElementById('metaViewListBtn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        clearTimeout(metaSearchDebounceTimer);
        metaSearchDebounceTimer = setTimeout(() => {
          metaState.searchQuery = e.target.value.trim();
          updateUrlWithMetaState();
          loadAndRenderMetaBuilds();
        }, 300);
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        metaState.sortBy = e.target.value;
        updateUrlWithMetaState();
        loadAndRenderMetaBuilds();
      });
    }

    if (patchSelect) {
      patchSelect.addEventListener('change', (e) => {
        metaState.patchFilter = e.target.value;
        loadAndRenderMetaBuilds();
      });
    }

    if (verifiedToggle) {
      verifiedToggle.addEventListener('change', (e) => {
        metaState.verifiedOnly = e.target.checked;
        loadAndRenderMetaBuilds();
      });
    }

    const myBuildsToggle = document.getElementById('metaMyBuildsToggle');
    if (myBuildsToggle) {
      myBuildsToggle.addEventListener('change', (e) => {
        metaState.myBuildsOnly = e.target.checked;
        loadAndRenderMetaBuilds();
      });
    }

    if (cardsViewBtn && listViewBtn) {
      cardsViewBtn.addEventListener('click', () => {
        metaState.viewMode = 'cards';
        localStorage.setItem('claudecraft_meta_view_mode', 'cards');
        updateMetaViewButtonsUI();
        loadAndRenderMetaBuilds();
      });

      listViewBtn.addEventListener('click', () => {
        metaState.viewMode = 'list';
        localStorage.setItem('claudecraft_meta_view_mode', 'list');
        updateMetaViewButtonsUI();
        loadAndRenderMetaBuilds();
      });
    }

    // Class Buttons Event Listeners
    const classBtns = document.querySelectorAll('.meta-class-btn');
    classBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        metaState.activeClassKey = btn.getAttribute('data-meta-class');
        updateMetaFilterButtonsUI();
        updateUrlWithMetaState();
        loadAndRenderMetaBuilds();
      });
    });

    // Role Buttons Event Listeners
    const roleBtns = document.querySelectorAll('.meta-role-btn');
    roleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        metaState.activeRole = btn.getAttribute('data-meta-role');
        updateMetaFilterButtonsUI();
        updateUrlWithMetaState();
        loadAndRenderMetaBuilds();
      });
    });
  }

  function updateMetaFilterButtonsUI() {
    document.querySelectorAll('.meta-class-btn').forEach(btn => {
      const cls = btn.getAttribute('data-meta-class');
      if (cls === metaState.activeClassKey) {
        btn.classList.add('active', 'bg-wurm-accent', 'text-wurm-bg');
        btn.classList.remove('bg-white/5', 'text-wurm-muted');
      } else {
        btn.classList.remove('active', 'bg-wurm-accent', 'text-wurm-bg');
        btn.classList.add('bg-white/5');
      }
    });

    document.querySelectorAll('.meta-role-btn').forEach(btn => {
      const role = btn.getAttribute('data-meta-role');
      if (role === metaState.activeRole) {
        btn.classList.add('active', 'bg-wurm-accent/20', 'text-wurm-accent');
        btn.classList.remove('text-wurm-muted');
      } else {
        btn.classList.remove('active', 'bg-wurm-accent/20', 'text-wurm-accent');
        btn.classList.add('text-wurm-muted');
      }
    });
  }

  function updateMetaViewButtonsUI() {
    const cardsBtn = document.getElementById('metaViewCardsBtn');
    const listBtn = document.getElementById('metaViewListBtn');
    const cardsContainer = document.getElementById('metaCardsContainer');
    const listContainer = document.getElementById('metaListViewContainer');

    if (cardsBtn && listBtn) {
      if (metaState.viewMode === 'cards') {
        cardsBtn.classList.add('bg-wurm-accent', 'text-wurm-bg');
        cardsBtn.classList.remove('bg-white/5', 'text-wurm-muted');
        listBtn.classList.remove('bg-wurm-accent', 'text-wurm-bg');
        listBtn.classList.add('bg-white/5', 'text-wurm-muted');
        if (cardsContainer) cardsContainer.classList.remove('hidden');
        if (listContainer) listContainer.classList.add('hidden');
      } else {
        listBtn.classList.add('bg-wurm-accent', 'text-wurm-bg');
        listBtn.classList.remove('bg-white/5', 'text-wurm-muted');
        cardsBtn.classList.remove('bg-wurm-accent', 'text-wurm-bg');
        cardsBtn.classList.add('bg-white/5', 'text-wurm-muted');
        if (listContainer) listContainer.classList.remove('hidden');
        if (cardsContainer) cardsContainer.classList.add('hidden');
      }
    }
  }

  async function loadAndRenderMetaBuilds() {
    const cardsContainer = document.getElementById('metaCardsContainer');
    const listContainer = document.getElementById('metaListViewContainer');
    const titleText = document.getElementById('metaHeaderTitleText');

    // Phase 6: Loading Skeleton
    if (cardsContainer) {
      cardsContainer.innerHTML = Array(6).fill(0).map(() => `
        <div class="bg-wurm-bg p-5 rounded border border-wurm-border animate-pulse space-y-4">
          <div class="h-4 bg-white/10 rounded w-3/4"></div>
          <div class="h-3 bg-white/5 rounded w-1/2"></div>
          <div class="h-10 bg-white/5 rounded"></div>
        </div>
      `).join('');
    }

    const { data: supabaseData, isColdStart, totalCount, error } = await fetchMetaBuildsFromSupabase({
      classKey: metaState.activeClassKey,
      role: metaState.activeRole,
      searchQuery: metaState.searchQuery,
      sortBy: metaState.sortBy,
      patch: metaState.patchFilter,
      verifiedOnly: metaState.verifiedOnly
    });

    function getRoleForClassSpec(classKey, specId) {
      if (!classKey || !specId) return 'DPS';
      const classData = GAME_SPECS[classKey.toLowerCase()];
      if (!classData || !classData.specs) return 'DPS';
      const specObj = classData.specs.find(s => s.id.toLowerCase() === specId.toLowerCase());
      return specObj ? (specObj.role || 'DPS').toUpperCase() : 'DPS';
    }

    const rawLocalBuilds = JSON.parse(localStorage.getItem('claudecraft_user_builds') || '[]');
    const formattedLocalBuilds = rawLocalBuilds.map(b => ({
      builds: {
        id: b.string || b.id,
        class_key: b.classKey,
        spec_id: b.specId,
        title: b.name,
        role: getRoleForClassSpec(b.classKey, b.specId),
        patch_version: 'v0.34.0',
        verified_by_guild: false,
        created_at: b.createdAt || new Date().toISOString(),
        isLocal: true
      },
      save_count: 1,
      share_count: 1
    }));

    let data = [...(supabaseData || [])];

    formattedLocalBuilds.forEach(lb => {
      const existing = data.find(item => item.builds && (item.builds.id === lb.builds.id || item.builds.title === lb.builds.title));
      if (existing) {
        if (existing.builds) existing.builds.isLocal = true;
      } else {
        data.unshift(lb);
      }
    });

    if (metaState.myBuildsOnly) {
      data = data.filter(item => item.builds && item.builds.isLocal);
    }

    // Phase 4: Cold Start Header Rule
    if (titleText) {
      titleText.textContent = getI18nText(isColdStart ? 'meta_recent_header' : 'meta_header');
    }

    // Phase 6: Error State
    if (error && (!data || data.length === 0)) {
      if (cardsContainer) {
        cardsContainer.innerHTML = `
          <div class="col-span-full p-8 text-center bg-wurm-panel border border-red-900/40 rounded-lg space-y-3">
            <div class="text-2xl">⚠️</div>
            <div class="text-sm font-mono text-red-300 font-bold">Erro ao conectar com o banco de dados Supabase.</div>
            <p class="text-xs text-wurm-muted">Verifique a conexão de rede ou tente novamente.</p>
            <button onclick="loadAndRenderMetaBuilds()" class="px-4 py-2 bg-wurm-accent text-wurm-bg font-mono text-xs font-bold rounded uppercase cursor-pointer">Tentar Novamente 🔄</button>
          </div>
        `;
      }
      return;
    }

    // Phase 6: Empty State with CTA
    if (!data || data.length === 0) {
      const emptyHTML = `
        <div class="col-span-full p-10 text-center bg-wurm-panel border border-wurm-border rounded-lg space-y-4">
          <div class="text-4xl">🏹</div>
          <div class="font-serif text-lg text-wurm-text font-bold">${getI18nText('empty_meta_title')}</div>
          <p class="text-xs text-wurm-muted max-w-md mx-auto">${getI18nText('empty_meta_sub')}</p>
          <button id="emptyStateCtaBtn" class="px-6 py-2.5 bg-wurm-accent text-wurm-bg hover:bg-wurm-accentDim font-mono text-xs font-bold uppercase rounded shadow transition-all cursor-pointer">
            ${getI18nText('create_build_now')}
          </button>
        </div>
      `;
      if (cardsContainer) cardsContainer.innerHTML = emptyHTML;
      if (listContainer) listContainer.innerHTML = emptyHTML;

      const ctaBtn = document.getElementById('emptyStateCtaBtn');
      if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
          if (metaState.activeClassKey !== 'all' && GAME_SPECS[metaState.activeClassKey]) {
            state.selectedClass = metaState.activeClassKey;
          }
          switchTab('builder');
          const builderWorkspace = document.getElementById('builderWorkspace');
          if (builderWorkspace) builderWorkspace.scrollIntoView({ behavior: 'smooth' });
        });
      }
      return;
    }

    // Render Cards View
    if (cardsContainer) {
      cardsContainer.innerHTML = '';
      data.forEach(item => {
        const buildInfo = item.builds || {};
        const classData = GAME_SPECS[buildInfo.class_key] || { className: buildInfo.class_key || 'WoC', color: '#d4b483' };
        const card = document.createElement('div');
        card.className = 'bg-wurm-bg p-5 rounded border border-wurm-border hover:border-wurm-accent transition-all flex flex-col justify-between gap-4 shadow-lg';

        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="font-serif text-base font-bold text-wurm-text">${buildInfo.title || 'Build Sem Nome'}</span>
              <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold" style="background-color: ${classData.color}20; color: ${classData.color}">
                ${classData.className}
              </span>
            </div>
            <div class="flex items-center gap-2 text-[11px] font-mono text-wurm-muted mb-3 flex-wrap">
              <span>Spec: <strong class="text-wurm-text">${(buildInfo.spec_id || '').toUpperCase()}</strong></span>
              <span>•</span>
              <span class="uppercase text-wurm-accent">${getRoleForClassSpec(buildInfo.class_key, buildInfo.spec_id)}</span>
              ${buildInfo.verified_by_guild ? '<span class="text-amber-400 font-bold">👑 Guilda</span>' : ''}
              ${buildInfo.isLocal ? `<span class="bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 font-bold px-1.5 py-0.5 rounded text-[10px]">${getI18nText('saved_locally_badge')}</span>` : ''}
            </div>
          </div>

          <div class="space-y-3 border-t border-wurm-border pt-3">
            <div class="flex items-center justify-between text-xs font-mono">
              <span class="text-emerald-400 font-bold">💾 ${item.save_count || 0} Saves</span>
              <span class="text-wurm-accent font-bold">📋 ${item.share_count || 0} Shares</span>
            </div>
            <div class="flex gap-2">
              <button class="preset-load-btn flex-1 py-2 bg-white/5 hover:bg-white/10 text-wurm-text font-mono text-xs font-bold uppercase rounded border border-wurm-border transition-all cursor-pointer">
                ${getI18nText('load_on_site')}
              </button>
              <button class="preset-copy-btn px-3 py-2 bg-wurm-accent/15 hover:bg-wurm-accent hover:text-wurm-bg text-wurm-accent font-mono text-xs font-bold uppercase rounded border border-wurm-accent transition-all cursor-pointer" title="Copiar String">
                ${getI18nText('copy_string_short')}
              </button>
            </div>
          </div>
        `;

        card.querySelector('.preset-load-btn').addEventListener('click', () => {
          const success = importOfficialBuildString(buildInfo.id);
          if (success) {
            switchTab('builder');
            showToast(getI18nText('toast_build_loaded', { name: buildInfo.title }));
          } else {
            showToast(getI18nText('toast_build_load_error'));
          }
        });

        card.querySelector('.preset-copy-btn').addEventListener('click', () => {
          navigator.clipboard.writeText(buildInfo.id);
          recordSupabaseAction('share', buildInfo.id);
          showToast(getI18nText('toast_build_string_copied', { name: buildInfo.title }));
        });

        cardsContainer.appendChild(card);
      });
    }

    // Phase 5: Render List View (Compact Table)
    if (listContainer) {
      listContainer.innerHTML = `
        <table class="w-full text-left font-mono text-xs border-collapse">
          <thead>
            <tr class="border-b border-wurm-border text-wurm-accent uppercase text-[10px] bg-white/5">
              <th class="p-3">${getI18nText('table_build')}</th>
              <th class="p-3">${getI18nText('table_class')}</th>
              <th class="p-3">${getI18nText('table_spec')}</th>
              <th class="p-3">${getI18nText('table_role')}</th>
              <th class="p-3 text-center">${getI18nText('table_saves')}</th>
              <th class="p-3 text-center">${getI18nText('table_shares')}</th>
              <th class="p-3 text-right">${getI18nText('table_action')}</th>
            </tr>
          </thead>
          <tbody>
            ${data.map(item => {
              const b = item.builds || {};
              const classData = GAME_SPECS[b.class_key] || { className: b.class_key, color: '#d4b483' };
              return `
                <tr class="border-b border-wurm-border/40 hover:bg-white/5 transition-all">
                  <td class="p-3 font-serif font-bold text-wurm-text">${b.title || 'Build Customizada'} ${b.verified_by_guild ? '👑' : ''} ${b.isLocal ? `<span class="text-emerald-400 text-[10px] ml-1">(${getI18nText('saved_locally_badge')})</span>` : ''}</td>
                  <td class="p-3" style="color: ${classData.color}">${classData.className}</td>
                  <td class="p-3 text-wurm-muted uppercase">${b.spec_id || '-'}</td>
                  <td class="p-3 uppercase text-wurm-accent">${getRoleForClassSpec(b.class_key, b.spec_id)}</td>
                  <td class="p-3 text-center text-emerald-400 font-bold">${item.save_count || 0}</td>
                  <td class="p-3 text-center text-wurm-accent font-bold">${item.share_count || 0}</td>
                  <td class="p-3 text-right">
                    <button class="list-load-btn px-2.5 py-1 bg-wurm-accent/15 border border-wurm-accent text-wurm-accent text-[11px] font-bold uppercase rounded hover:bg-wurm-accent hover:text-wurm-bg" data-string="${b.id}">
                      ${getI18nText('table_load')}
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      `;

      listContainer.querySelectorAll('.list-load-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const str = btn.getAttribute('data-string');
          const ok = importOfficialBuildString(str);
          if (ok) {
            switchTab('builder');
            showToast(getI18nText('toast_builder_loaded'));
          }
        });
      });
    }
  }

  function loadPreset(preset) {
    state.selectedClass = preset.classKey || 'paladin';
    state.selectedSpec = preset.roleId || 'protection';
    state.equippedItems = { ...preset.items };
    if (preset.buildPayload && preset.buildPayload.r) {
      state.selectedChoices = { ...preset.buildPayload.r };
    }

    renderClassQuickSwitcher();
    renderActiveBuilderWorkspace();
    switchTab('builder');
    updateUrlHashState();
    showToast(getI18nText('toast_preset_loaded', { name: preset.title }));
  }

  // Tooltip
  function showTooltip(e, item) {
    const tt = elements.wowTooltip;
    const rarityColor = getRarityColor(item.quality);
    document.getElementById('ttName').textContent = item.name;
    document.getElementById('ttName').style.color = rarityColor;
    document.getElementById('ttILvl').textContent = `Nível de Item ${item.ilvl}`;
    document.getElementById('ttSlot').textContent = item.slot.toUpperCase();
    
    let statsHTML = '';
    if (item.stats.dps) statsHTML += `<div>+${item.stats.dps} Dano por Segundo (DPS)</div>`;
    if (item.stats.armor) statsHTML += `<div>+${item.stats.armor} de Armadura</div>`;
    if (item.stats.str) statsHTML += `<div>+${item.stats.str} de Força</div>`;
    
    document.getElementById('ttStats').innerHTML = statsHTML;
    document.getElementById('ttSource').textContent = item.source;
    tt.classList.remove('hidden');
    moveTooltip(e);
  }

  function moveTooltip(e) {
    const tt = elements.wowTooltip;
    const padding = 15;
    let left = e.clientX + padding;
    let top = e.clientY + padding;
    if (left + tt.offsetWidth > window.innerWidth) left = e.clientX - tt.offsetWidth - padding;
    if (top + tt.offsetHeight > window.innerHeight) top = e.clientY - tt.offsetHeight - padding;
    tt.style.left = `${left}px`;
    tt.style.top = `${top}px`;
  }

  function hideTooltip() {
    elements.wowTooltip.classList.add('hidden');
  }

  // Hype & Share
  elements.hypeBuildBtn.addEventListener('click', () => {
    const presetId = 'pala_tank_meta';
    if (state.votedBuilds.has(presetId)) {
      showToast(getI18nText('toast_already_voted'));
      return;
    }
    state.hypeCounts[presetId] = (state.hypeCounts[presetId] || 1420) + 1;
    state.votedBuilds.add(presetId);
    localStorage.setItem('aguilda_voted_builds', JSON.stringify(Array.from(state.votedBuilds)));
    elements.buildHypeCount.textContent = state.hypeCounts[presetId].toLocaleString();
    showToast(getI18nText('toast_hype_added'));
  });

  elements.shareUrlBtn.addEventListener('click', openShareModal);
  elements.copyDiscordBtn.addEventListener('click', openShareModal);

  async function openShareModal() {
    updateUrlHashState();
    const stringResult = exportOfficialBuildString();
    const classData = GAME_SPECS[state.selectedClass];
    const specObj = classData ? classData.specs.find(s => s.id === state.selectedSpec) : null;

    // Show modal immediately with long URL while slug resolves async
    const longUrl = window.location.href;
    elements.shareUrlInput.value = getI18nText('share_generating_link') || 'Generating compact link...';
    elements.shareModalOverlay.classList.remove('hidden');

    // Build compact URL via deterministic slug
    const slug = await generateSlug(state.selectedClass, state.selectedSpec, stringResult);
    const compactUrl = `${window.location.origin}/b/${slug}`;

    if (navigator.onLine) {
      // Ensure build exists in DB before persisting slug (both idempotent)
      const buildTitle = (classData ? classData.className : state.selectedClass)
        + ' - ' + (specObj ? specObj.name : state.selectedSpec);
      await recordSupabaseSaveBuild({
        string: stringResult,
        classKey: state.selectedClass,
        specId: state.selectedSpec,
        name: buildTitle,
        choices: state.selectedChoices
      });
      await saveSlugToSupabase(slug, stringResult);
      elements.shareUrlInput.value = compactUrl;
    } else {
      // Offline fallback: use the long URL
      elements.shareUrlInput.value = longUrl;
    }

    const shareUrl = navigator.onLine ? compactUrl : longUrl;

    const markdownText = [
      `\u2694\uFE0F **Build [A GUILDA]: ${classData ? classData.className : ''} - ${specObj ? specObj.name : ''}**`,
      `\uD83D\uDCCA **Status:** iLvl ${elements.statILvl.textContent} | HP: ${elements.statHP.textContent} | ${elements.resourceLabelTitle.textContent}: ${elements.statResource.textContent}`,
      `\uD83D\uDD11 **String Oficial do Jogo:** \`${stringResult}\``,
      `\uD83D\uDD17 **Ver & Testar Build:** ${shareUrl}`
    ].join('\n');

    elements.discordMarkdownTextarea.value = markdownText;
  }

  function closeShareModal() {
    elements.shareModalOverlay.classList.add('hidden');
  }

  elements.copyMarkdownBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(elements.discordMarkdownTextarea.value);
    showToast(getI18nText('toast_discord_copied'));
  });

  function showToast(titleMsg, subMsg = null) {
    if (subMsg) {
      elements.toastMessage.innerHTML = `
        <div class="font-bold">${titleMsg}</div>
        <div class="text-[11px] opacity-90 font-normal mt-0.5">${subMsg}</div>
      `;
    } else {
      elements.toastMessage.textContent = titleMsg;
    }
    elements.toastNotification.classList.remove('hidden');
    setTimeout(() => {
      elements.toastNotification.classList.add('hidden');
    }, subMsg ? 4000 : 2500);
  }

  async function flushOfflineBuildsQueue() {
    if (!navigator.onLine) return;
    const savedBuilds = JSON.parse(localStorage.getItem('claudecraft_user_builds') || '[]');
    let syncedCount = 0;

    for (let i = 0; i < savedBuilds.length; i++) {
      const b = savedBuilds[i];
      if (!b.synced) {
        const res = await recordSupabaseSaveBuild({
          string: b.string,
          classKey: b.classKey,
          specId: b.specId,
          name: b.name,
          choices: b.choices
        });
        if (res && res.success) {
          savedBuilds[i].synced = true;
          syncedCount++;
        }
      }
    }

    if (syncedCount > 0) {
      localStorage.setItem('claudecraft_user_builds', JSON.stringify(savedBuilds));
      showToast(getI18nText('toast_offline_synced', { count: syncedCount }));
      loadAndRenderMetaBuilds();
    }
  }

  window.addEventListener('online', flushOfflineBuildsQueue);
  flushOfflineBuildsQueue();

  window.onI18nLanguageChange = () => {
    renderClassGallery();
    renderActiveBuilderWorkspace();
    loadAndRenderMetaBuilds();
  };

  init();
});
