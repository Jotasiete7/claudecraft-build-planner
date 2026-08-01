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
    headerLogoLink: document.getElementById('headerLogoLink')
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

  function init() {
    setupNavigation();
    setupEcosystemMenu();
    setupGalleryRoleFilters();
    setupGameSubtabs();
    setupPresetsGrid();
    setupLoadoutDropdown();
    setupGlobalImportTriggers();
    setupLiveStringBar();
    setupModals();
    preloadAllSkillIcons();

    const hasDeepLink = handleUrlDeepLink();
    if (!hasDeepLink) {
      renderClassGallery();
      switchTab('gallery');
    }
  }

  // Live Real-Time String Bar
  function setupLiveStringBar() {
    if (elements.copyLiveStringBtn) {
      elements.copyLiveStringBtn.addEventListener('click', () => {
        const liveString = exportOfficialBuildString();
        navigator.clipboard.writeText(liveString);
        showToast('String oficial do jogo copiada para a área de transferência!');
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
        showToast('Build carregada via Link Direto!');
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
                <div class="text-[10px] font-mono uppercase text-wurm-muted">${classData.armorType.toUpperCase()} ARMOR • ${classData.resource}</div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 mb-6">
            ${specsTagsHTML}
          </div>
        </div>

        <button class="w-full py-2.5 rounded font-mono text-xs font-bold uppercase transition-all" style="background-color: ${classData.color}; color: #050505">
          SELECIONAR TALENTOS
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
        showToast('Por favor, cole uma string de build válida.');
        return;
      }
      const result = importOfficialBuildStringDetailed(str);
      if (result.success) {
        elements.gameImportModalOverlay.classList.add('hidden');
        switchTab('builder');
        showToast('Build oficial importada com sucesso!');
      } else {
        showToast(`Erro: ${result.error}`);
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
      showToast('String oficial do jogo copiada!');
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
      showToast('Arquivo .wocbuild baixado!');
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
          showToast(`Arquivo "${file.name}" carregado!`);
        } catch {
          showToast('Erro ao ler arquivo.');
        }
      };
      reader.readAsText(file);
    });

    elements.menuResetTalentsBtn.addEventListener('click', () => {
      state.selectedChoices = {};
      renderChoiceRows();
      recalculateStats();
      updateUrlHashState();
      showToast('Pontos de escolha redefinidos.');
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
        showToast(`Equipado: ${item.name}`);
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

  // Presets Grid with 1-Click Game String Copy on Every Card!
  function setupPresetsGrid() {
    renderPresetsGrid(META_PRESETS);
  }

  function renderPresetsGrid(presets) {
    elements.presetsGrid.innerHTML = '';
    presets.forEach(preset => {
      const card = document.createElement('div');
      card.className = 'bg-wurm-bg p-4 rounded border border-wurm-border hover:border-wurm-accent transition-all flex flex-col justify-between gap-3';
      
      const preEncodedString = btoa(JSON.stringify(preset.buildPayload));

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="font-serif text-sm font-semibold text-wurm-text">${preset.title}</span>
            <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold" style="background-color: ${preset.classColor}20; color: ${preset.classColor}">${preset.className}</span>
          </div>
          <p class="text-xs text-wurm-muted leading-snug mb-3">${preset.desc}</p>
        </div>

        <div class="space-y-2 border-t border-wurm-border pt-3">
          <div class="flex items-center justify-between text-[11px] font-mono">
            <span class="text-wurm-accentDim font-semibold">${preset.badgeText}</span>
            <span class="text-orange-400 font-bold">🔥 ${state.hypeCounts[preset.id] || preset.hypeCount}</span>
          </div>
          <div class="flex gap-2">
            <button class="preset-load-btn flex-1 py-1.5 bg-white/5 hover:bg-white/10 text-wurm-text font-mono text-[11px] font-bold uppercase rounded border border-wurm-border transition-all">
              Carregar no Site
            </button>
            <button class="preset-copy-string-btn px-2.5 py-1.5 bg-wurm-accent/15 hover:bg-wurm-accent hover:text-wurm-bg text-wurm-accent font-mono text-[11px] font-bold uppercase rounded border border-wurm-accent transition-all" title="Copiar String do Jogo">
              📋 String
            </button>
          </div>
        </div>
      `;

      // Load preset in site
      card.querySelector('.preset-load-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        loadPreset(preset);
      });

      // Copy Game String directly from Preset Card
      card.querySelector('.preset-copy-string-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(preEncodedString);
        showToast(`String da build "${preset.title}" copiada para o jogo!`);
      });

      elements.presetsGrid.appendChild(card);
    });
  }

  function renderFullPresetsGrid() {
    elements.fullPresetsGrid.innerHTML = '';
    META_PRESETS.forEach(preset => {
      const card = document.createElement('div');
      card.className = 'bg-wurm-panel p-6 rounded border border-wurm-border hover:border-wurm-accent transition-all flex flex-col justify-between';
      const preEncodedString = btoa(JSON.stringify(preset.buildPayload));

      card.innerHTML = `
        <div>
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-serif text-base font-semibold text-wurm-text">${preset.title}</h3>
            <span class="text-xs font-mono font-bold uppercase" style="color: ${preset.classColor}">${preset.className}</span>
          </div>
          <p class="text-xs text-wurm-muted leading-relaxed mb-4">${preset.desc}</p>
        </div>
        <div class="flex gap-3">
          <button class="full-load-btn flex-1 py-2 bg-wurm-accent text-wurm-bg font-mono text-xs font-bold uppercase rounded hover:bg-wurm-accentDim">Carregar no Montador</button>
          <button class="full-copy-string-btn px-4 py-2 bg-white/5 hover:bg-white/10 text-wurm-accent font-mono text-xs font-bold uppercase rounded border border-wurm-accent">📋 Copiar String</button>
        </div>
      `;

      card.querySelector('.full-load-btn').addEventListener('click', () => {
        loadPreset(preset);
        switchTab('builder');
      });

      card.querySelector('.full-copy-string-btn').addEventListener('click', () => {
        navigator.clipboard.writeText(preEncodedString);
        showToast(`String da build "${preset.title}" copiada!`);
      });

      elements.fullPresetsGrid.appendChild(card);
    });
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
    showToast(`Build "${preset.title}" carregada!`);
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
      showToast('Você já votou nesta build!');
      return;
    }
    state.hypeCounts[presetId] = (state.hypeCounts[presetId] || 1420) + 1;
    state.votedBuilds.add(presetId);
    localStorage.setItem('aguilda_voted_builds', JSON.stringify(Array.from(state.votedBuilds)));
    elements.buildHypeCount.textContent = state.hypeCounts[presetId].toLocaleString();
    showToast('🔥 Hype adicionado!');
  });

  elements.shareUrlBtn.addEventListener('click', openShareModal);
  elements.copyDiscordBtn.addEventListener('click', openShareModal);

  function openShareModal() {
    updateUrlHashState();
    const url = window.location.href;
    const stringResult = exportOfficialBuildString();
    elements.shareUrlInput.value = url;
    const classData = GAME_SPECS[state.selectedClass];
    const specObj = classData ? classData.specs.find(s => s.id === state.selectedSpec) : null;

    const markdownText = `⚔️ **Build [A GUILDA]: ${classData ? classData.className : ''} - ${specObj ? specObj.name : ''}**
📊 **Status:** iLvl ${elements.statILvl.textContent} | HP: ${elements.statHP.textContent} | ${elements.resourceLabelTitle.textContent}: ${elements.statResource.textContent}
🔑 **String Oficial do Jogo:** \`${stringResult}\`
🔗 **Ver & Testar Build:** ${url}`;

    elements.discordMarkdownTextarea.value = markdownText;
    elements.shareModalOverlay.classList.remove('hidden');
  }

  function closeShareModal() {
    elements.shareModalOverlay.classList.add('hidden');
  }

  elements.copyMarkdownBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(elements.discordMarkdownTextarea.value);
    showToast('Texto para Discord copiado!');
  });

  // Wiki
  function setupWiki() {
    renderWikiItems();
  }

  function renderWikiItems() {
    elements.wikiItemsGrid.innerHTML = '';
    GAME_ITEMS.forEach(item => {
      const rarityColor = getRarityColor(item.quality);
      const card = document.createElement('div');
      card.className = 'bg-wurm-panel p-4 rounded border border-wurm-border hover:border-wurm-accent transition-all flex flex-col justify-between';

      card.innerHTML = `
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded bg-wurm-bg border flex items-center justify-center text-sm overflow-hidden flex-shrink-0" style="border-color: ${rarityColor}">
            ${item.iconUrl ? `<img src="${item.iconUrl}" class="w-full h-full object-cover">` : '🎒'}
          </div>
          <div>
            <div class="font-serif font-bold text-sm mb-1" style="color: ${rarityColor}">${item.name}</div>
            <div class="text-[10px] font-mono text-wurm-accent mb-2">iLvl ${item.ilvl} | ${item.slot.toUpperCase()}</div>
          </div>
        </div>
        <div class="text-[10px] text-wurm-muted border-t border-wurm-border pt-2 font-mono mt-3">${item.source}</div>
      `;

      elements.wikiItemsGrid.appendChild(card);
    });
  }

  function showToast(msg) {
    elements.toastMessage.textContent = msg;
    elements.toastNotification.classList.remove('hidden');
    setTimeout(() => {
      elements.toastNotification.classList.add('hidden');
    }, 2500);
  }

  init();
});
