/**
 * DeutschLernen - Navigation & Control Interface (navDrawer.js)
 * Manages:
 * 1. Compact Context Bar (Sticky top header, chip updates)
 * 2. Slide-Over Drawer (Off-canvas panel, focus trap, ESC dismissal, backdrop)
 * 3. Selection behavior & localStorage persistence under 'deutschlernen_prefs'
 * 4. Desktop Sidebar Collapse (64px icon rail with tooltips, persisted state)
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'deutschlernen_prefs';

  const DECK_LABELS = {
    core: '📦 B1 Core',
    b2: '📘 B2 Deck',
    c1: '📙 C1 Deck',
    c2: '📕 C2 Deck',
    nvv: '🔗 NVV',
    all: '📚 All Words'
  };

  const MODE_LABELS = {
    flashcards: '🃏 Flashcards',
    de_meaning: '🇩🇪 DE➔Meaning',
    meaning_de: '🌐 Meaning➔DE',
    typein: '✍️ Type-In',
    artikel: '🔵🔴🟢 Artikel',
    synonyms: '🔗 Synonyms',
    antonyms: '⚖️ Antonyms',
    mistakes: '⚠️ Mistakes',
    sprint: '⏱️ Sprint'
  };

  const GOAL_LABELS = {
    'goal-b1': '🎯 telc B1',
    'goal-lid': '🇩🇪 LiD 310',
    'goal-a1-a2': '🌱 A1–A2',
    'goal-b2': '🚀 B2 Exam',
    'goal-c1': '🎓 C1 Academic',
    'goal-beruf': '💼 B1/B2 Beruf'
  };

  class NavDrawerController {
    constructor() {
      this.prefs = this.loadPrefs();
      this.lastFocusedElement = null;
      this.isOpen = false;

      // Apply collapsed rail state immediately to prevent layout shift
      this.applyCollapsedState();

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.init());
      } else {
        this.init();
      }
    }

    loadPrefs() {
      const defaults = {
        activeDeck: 'core',
        activeMode: 'flashcards',
        activeGoal: 'goal-b1',
        activeLevel: 'B1',
        sidebarCollapsed: false
      };
      try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        // Backwards compatibility with standalone keys
        if (!stored.activeGoal && localStorage.getItem('deutschlernen_goal')) {
          stored.activeGoal = localStorage.getItem('deutschlernen_goal');
        }
        return { ...defaults, ...stored };
      } catch (e) {
        return defaults;
      }
    }

    savePrefs(updates) {
      this.prefs = { ...this.prefs, ...updates };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.prefs));
      } catch (e) {
        console.warn('Could not save deutschlernen_prefs:', e);
      }
    }

    applyCollapsedState() {
      if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
        if (this.prefs.sidebarCollapsed) {
          document.documentElement.classList.add('sidebar-collapsed');
          if (document.body) document.body.classList.add('sidebar-collapsed');
        } else {
          document.documentElement.classList.remove('sidebar-collapsed');
          if (document.body) document.body.classList.remove('sidebar-collapsed');
        }
      }
    }

    init() {
      this.cacheDom();
      this.applyCollapsedState();
      this.syncActiveBadges();
      this.syncContextBarLabels();
      this.bindEvents();
    }

    cacheDom() {
      this.bar = document.getElementById('compact-context-bar') || document.querySelector('.compact-context-bar');
      this.drawer = document.getElementById('drawer-panel') || document.querySelector('.drawer-panel') || document.querySelector('.sidebar');
      this.backdrop = document.getElementById('drawer-backdrop') || document.querySelector('.drawer-backdrop');
      this.toggleBtn = document.getElementById('context-drawer-toggle') || document.querySelector('.context-drawer-toggle');
      this.closeBtn = document.getElementById('drawer-close-btn') || document.querySelector('.drawer-close-btn');
      this.settingsBtn = document.getElementById('context-settings-btn') || document.querySelector('.context-settings-btn');
      this.desktopCollapseBtn = document.getElementById('desktop-sidebar-toggle') || document.querySelector('.desktop-collapse-btn');

      // Chips in Context Bar
      this.chipDeck = document.getElementById('context-chip-deck') || document.querySelector('.context-chip-deck');
      this.chipMode = document.getElementById('context-chip-mode') || document.querySelector('.context-chip-mode');
      this.chipGoal = document.getElementById('context-chip-goal') || document.querySelector('.context-chip-goal');

      // Native app selectors if present on page
      this.nativeDeckSelect = document.getElementById('deck-selector');
      this.nativeLevelSelect = document.getElementById('level-selector');
    }

    bindEvents() {
      // Toggle Hamburger
      if (this.toggleBtn) {
        this.toggleBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleDrawer();
        });
      }

      // Close Button
      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.closeDrawer();
        });
      }

      // Settings Icon
      if (this.settingsBtn) {
        this.settingsBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.openDrawer();
        });
      }

      // Backdrop dismissal
      if (this.backdrop) {
        this.backdrop.addEventListener('click', () => {
          this.closeDrawer();
        });
      }

      // Context Bar Chips -> Open Drawer
      if (this.chipDeck) {
        this.chipDeck.addEventListener('click', () => {
          this.openDrawer('deck');
        });
      }
      if (this.chipMode) {
        this.chipMode.addEventListener('click', () => {
          this.openDrawer('mode');
        });
      }
      if (this.chipGoal) {
        this.chipGoal.addEventListener('click', () => {
          this.openDrawer('goal');
        });
      }

      // Desktop Collapse Toggle Button
      if (this.desktopCollapseBtn) {
        this.desktopCollapseBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleDesktopCollapse();
        });
      }

      // Global Keyboard Shortcut: ESC closes drawer; '[' toggles desktop sidebar
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          e.preventDefault();
          this.closeDrawer();
        } else if (e.key === '[' && window.innerWidth >= 1024 && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
          e.preventDefault();
          this.toggleDesktopCollapse();
        }
      });

      // Event Delegation on Drawer Container
      if (this.drawer) {
        this.drawer.addEventListener('click', (e) => {
          const target = e.target.closest('[data-drawer-deck], [data-drawer-mode], [data-drawer-goal], [data-drawer-link], [data-lang], .drawer-theme-toggle');
          if (!target) return;

          // 1. Deck Selection
          if (target.hasAttribute('data-drawer-deck')) {
            const deck = target.getAttribute('data-drawer-deck');
            this.handleDeckSelection(deck);
          }

          // 2. Mode Selection
          else if (target.hasAttribute('data-drawer-mode')) {
            const mode = target.getAttribute('data-drawer-mode');
            this.handleModeSelection(mode);
          }

          // 3. Goal Selection
          else if (target.hasAttribute('data-drawer-goal')) {
            const goalId = target.getAttribute('data-drawer-goal');
            this.handleGoalSelection(goalId);
          }

          // 4. Language Selection inside drawer
          else if (target.hasAttribute('data-lang')) {
            const lang = target.getAttribute('data-lang');
            if (typeof window.setLang === 'function') {
              window.setLang(lang);
            }
            this.drawer.querySelectorAll('[data-lang]').forEach(b => {
              b.classList.toggle('active', b.getAttribute('data-lang') === lang);
            });
          }

          // 5. Theme Toggle inside drawer
          else if (target.classList.contains('drawer-theme-toggle')) {
            if (typeof window.toggleTheme === 'function') {
              window.toggleTheme();
            } else {
              const current = document.documentElement.getAttribute('data-theme') || 'dark';
              const next = current === 'dark' ? 'light' : 'dark';
              document.documentElement.setAttribute('data-theme', next);
              localStorage.setItem('deutschlernen_theme', next);
            }
          }

          // 6. Direct Page Navigation Links
          else if (target.hasAttribute('data-drawer-link')) {
            this.closeDrawer();
          }
        });

        // Focus Trap on Tab navigation inside drawer
        this.drawer.addEventListener('keydown', (e) => {
          if (e.key !== 'Tab' || !this.isOpen) return;
          const focusables = this.drawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (!focusables || focusables.length === 0) return;
          const first = focusables[0];
          const last = focusables[focusables.length - 1];

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        });
      }

      // Synchronize when window is resized across 1024px boundary
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
          if (this.isOpen) {
            this.closeDrawer();
          }
          this.applyCollapsedState();
        }
      });
    }

    openDrawer(sectionFocus) {
      if (!this.drawer) return;
      this.lastFocusedElement = document.activeElement;
      this.isOpen = true;

      this.drawer.classList.add('is-open');
      this.drawer.classList.add('open');
      this.drawer.setAttribute('aria-hidden', 'false');

      if (this.backdrop) {
        this.backdrop.classList.add('is-open');
        this.backdrop.setAttribute('aria-hidden', 'false');
      }

      document.body.classList.add('drawer-open');

      if (this.toggleBtn) {
        this.toggleBtn.setAttribute('aria-expanded', 'true');
      }

      // Focus first actionable element or target section
      setTimeout(() => {
        if (sectionFocus === 'deck') {
          const deckTarget = this.drawer.querySelector('.drawer-deck-list [data-drawer-deck].active') || this.drawer.querySelector('.drawer-deck-list');
          if (deckTarget) deckTarget.focus?.() || deckTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (sectionFocus === 'mode') {
          const modeTarget = this.drawer.querySelector('.drawer-mode-grid [data-drawer-mode].active') || this.drawer.querySelector('.drawer-mode-grid');
          if (modeTarget) modeTarget.focus?.() || modeTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (sectionFocus === 'goal') {
          const goalTarget = this.drawer.querySelector('.drawer-goal-grid [data-drawer-goal].active') || this.drawer.querySelector('.drawer-goal-grid');
          if (goalTarget) goalTarget.focus?.() || goalTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          if (this.closeBtn) this.closeBtn.focus();
        }
      }, 50);
    }

    closeDrawer() {
      if (!this.drawer) return;
      this.isOpen = false;

      this.drawer.classList.remove('is-open');
      this.drawer.classList.remove('open');
      this.drawer.setAttribute('aria-hidden', 'true');

      if (this.backdrop) {
        this.backdrop.classList.remove('is-open');
        this.backdrop.setAttribute('aria-hidden', 'true');
      }

      document.body.classList.remove('drawer-open');

      if (this.toggleBtn) {
        this.toggleBtn.setAttribute('aria-expanded', 'false');
        if (this.lastFocusedElement && typeof this.lastFocusedElement.focus === 'function') {
          this.lastFocusedElement.focus();
        }
      }
    }

    toggleDrawer() {
      if (this.isOpen) {
        this.closeDrawer();
      } else {
        this.openDrawer();
      }
    }

    toggleDesktopCollapse() {
      const nextCollapsed = !document.documentElement.classList.contains('sidebar-collapsed');
      this.savePrefs({ sidebarCollapsed: nextCollapsed });
      this.applyCollapsedState();
      this.updateCollapseBtnText();
    }

    updateCollapseBtnText() {
      if (!this.desktopCollapseBtn) return;
      const isCollapsed = document.documentElement.classList.contains('sidebar-collapsed');
      const icon = this.desktopCollapseBtn.querySelector('.collapse-icon');
      const text = this.desktopCollapseBtn.querySelector('.collapse-text');

      if (icon) icon.textContent = isCollapsed ? '»' : '«';
      if (text) text.textContent = isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar';
      this.desktopCollapseBtn.title = isCollapsed ? 'Expand sidebar (Hotkey: [ )' : 'Collapse sidebar to icon rail (Hotkey: [ )';
    }

    handleDeckSelection(deck) {
      if (!deck) return;
      this.savePrefs({ activeDeck: deck });

      // Synchronize native page deck-selector if present (e.g. in trainer.html)
      if (this.nativeDeckSelect && this.nativeDeckSelect.value !== deck) {
        this.nativeDeckSelect.value = deck;
        this.nativeDeckSelect.dispatchEvent(new Event('change', { bubbles: true }));
      } else if (window.vocabTrainer && window.vocabTrainer.settings) {
        window.vocabTrainer.settings.deck = deck;
        window.vocabTrainer.startNewDeck();
      }

      this.syncActiveBadges();
      this.syncContextBarLabels();
      this.closeDrawer();
    }

    handleModeSelection(mode) {
      if (!mode) return;
      this.savePrefs({ activeMode: mode });

      // Synchronize native page mode-chips if present (e.g. in trainer.html)
      const targetChip = document.querySelector(`.mode-chip[data-mode="${mode}"]`);
      if (targetChip) {
        targetChip.click();
      } else if (window.vocabTrainer && typeof window.vocabTrainer.switchMode === 'function') {
        window.vocabTrainer.switchMode(mode);
      } else if (window.location && window.location.pathname && window.location.pathname.indexOf('trainer.html') === -1) {
        // If on portal or another page, we can navigate directly or update preference
        // Keep activeMode saved for when user opens trainer.html
      }

      this.syncActiveBadges();
      this.syncContextBarLabels();
      this.closeDrawer();
    }

    handleGoalSelection(goalId) {
      if (!goalId) return;
      this.savePrefs({ activeGoal: goalId });

      if (typeof window.setGoal === 'function') {
        window.setGoal(goalId);
      }

      this.syncActiveBadges();
      this.syncContextBarLabels();
      this.closeDrawer();
    }

    syncActiveBadges() {
      if (!this.drawer) return;

      // Decks
      this.drawer.querySelectorAll('[data-drawer-deck]').forEach(btn => {
        const isMatch = btn.getAttribute('data-drawer-deck') === this.prefs.activeDeck;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-checked', isMatch ? 'true' : 'false');
      });

      // Modes
      this.drawer.querySelectorAll('[data-drawer-mode]').forEach(btn => {
        const isMatch = btn.getAttribute('data-drawer-mode') === this.prefs.activeMode;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-checked', isMatch ? 'true' : 'false');
      });

      // Goals
      this.drawer.querySelectorAll('[data-drawer-goal]').forEach(btn => {
        const isMatch = btn.getAttribute('data-drawer-goal') === this.prefs.activeGoal;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-checked', isMatch ? 'true' : 'false');
      });
    }

    syncContextBarLabels() {
      // 1. Deck Chip Label
      if (this.chipDeck) {
        const label = DECK_LABELS[this.prefs.activeDeck] || `📦 ${this.prefs.activeDeck}`;
        const textSpan = this.chipDeck.querySelector('.chip-text') || this.chipDeck;
        textSpan.textContent = label;
      }

      // 2. Mode Chip Label
      if (this.chipMode) {
        const label = MODE_LABELS[this.prefs.activeMode] || `🃏 ${this.prefs.activeMode}`;
        const textSpan = this.chipMode.querySelector('.chip-text') || this.chipMode;
        textSpan.textContent = label;
      }

      // 3. Goal Chip Label
      if (this.chipGoal) {
        const label = GOAL_LABELS[this.prefs.activeGoal] || '🎯 B1 Exam';
        const textSpan = this.chipGoal.querySelector('.chip-text') || this.chipGoal;
        textSpan.textContent = label;
      }

      this.updateCollapseBtnText();
    }
  }

  // Instantiate singleton on window
  if (typeof window !== 'undefined') {
    window.navDrawerManager = new NavDrawerController();
  }
})();
