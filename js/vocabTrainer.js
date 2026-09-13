/**
 * DeutschLernen - Vocabulary Trainer & Smart Quiz Engine
 * Features:
 * - Session & Login Tracker with Daily Streaks
 * - Smart Anti-Repetition Rotation Algorithm (prioritizes mistakes & fresh unseen words)
 * - 5 Quiz Modes: DE->Meaning, Meaning->DE, Synonyms, Antonyms, Mistakes Review
 * - Deck Switcher: Core 2,000 (A1-B1) vs. Advanced B2 Study Deck
 * - Client-side German TTS Speech Synthesis
 * - Complete EN / TR bilingual UI reactivity
 * - Keyboard navigation (1-4, Space, Enter)
 * - 100% Client-side privacy & localStorage persistence
 */

(function () {
  'use strict';

  // --- Translation Dictionary for UI ---
  const I18N = {
    en: {
      portalBack: "← Back to Portal",
      appTitle: "Wortschatz Trainer",
      coreDeck: "Core 2,000 (A1–B1)",
      b2Deck: "Advanced B2 Deck",
      allDeck: "All Words Combined",
      sessionLabel: "Session",
      streakLabel: "Day Streak",
      reviewQueue: "Mistakes Queue",
      mode_de_meaning: "German ➔ Meaning",
      mode_meaning_de: "Meaning ➔ German",
      mode_synonyms: "Synonyms (DE ➔ DE)",
      mode_antonyms: "Antonyms (Opposites)",
      mode_mistakes: "Review Mistakes",
      levelAll: "All Levels",
      deckSize: "Cards:",
      startQuiz: "Start Drill",
      nextWord: "Next Word (Enter)",
      finishDeck: "Deck Complete!",
      accuracy: "Accuracy",
      mastered: "Mastered",
      learning: "Learning",
      unseen: "Unseen",
      inReview: "In Review",
      audioOn: "Audio On",
      audioOff: "Audio Off",
      searchPlaceholder: "Search 2,000+ words in German, Turkish, English...",
      emptyReview: "Great job! No mistakes in your review queue right now.",
      browserTitle: "Vocabulary Dictionary",
      exportData: "Export Progress",
      importData: "Import Progress",
      resetConfirm: "Are you sure you want to reset your vocabulary progress?",
      correctToast: "Correct! Excellent recall.",
      wrongToast: "Incorrect! Added to your Mistakes Queue for review.",
      disclaimer: "Independent educational preparation tool. telc is a registered trademark of telc gGmbH.",
      privacyNotice: "100% Client-Side Privacy. Your study data is saved locally on your device."
    },
    tr: {
      portalBack: "← Portala Dön",
      appTitle: "Kelime Antrenörü",
      coreDeck: "Temel 2.000 (A1–B1)",
      b2Deck: "İleri B2 Destesi",
      allDeck: "Tüm Kelimeler (Birleşik)",
      sessionLabel: "Oturum",
      streakLabel: "Günlük Seri",
      reviewQueue: "Hata Tekrar Havuzu",
      mode_de_meaning: "Almanca ➔ Anlam",
      mode_meaning_de: "Anlam ➔ Almanca",
      mode_synonyms: "Eş Anlamlılar (DE ➔ DE)",
      mode_antonyms: "Zıt Anlamlılar (Karşıt)",
      mode_mistakes: "Hataları Tekrar Et",
      levelAll: "Tüm Seviyeler",
      deckSize: "Kart:",
      startQuiz: "Antrenmana Başla",
      nextWord: "Sıradaki Kelime (Enter)",
      finishDeck: "Deste Tamamlandı!",
      accuracy: "Doğruluk Oranı",
      mastered: "Öğrenildi",
      learning: "Çalışılıyor",
      unseen: "Görülmedi",
      inReview: "Tekrarda",
      audioOn: "Ses Açık",
      audioOff: "Ses Kapalı",
      searchPlaceholder: "Almanca, Türkçe veya İngilizce 2000+ kelime ara...",
      emptyReview: "Harika! Şu an hata tekrar havuzunuzda bekleyen kelime yok.",
      browserTitle: "Kelime Sözlüğü & Arama",
      exportData: "İlerlemeyi Dışa Aktar",
      importData: "İlerlemeyi İçe Aktar",
      resetConfirm: "Kelime ilerleme verilerinizi sıfırlamak istediğinize emin misiniz?",
      correctToast: "Tebrikler! Doğru cevap.",
      wrongToast: "Yanlış! Bu kelime tekrar edilmek üzere Hata Havuzunuza eklendi.",
      disclaimer: "Bağımsız eğitim ve çalışma aracıdır. telc, telc gGmbH şirketinin tescilli ticari markasıdır.",
      privacyNotice: "%100 Cihaz İçi Gizlilik. Çalışma verileriniz yalnızca tarayıcınızda saklanır."
    }
  };

  // --- Session & Progress Storage Manager ---
  class VocabSessionManager {
    constructor() {
      this.STORAGE_KEY_PROGRESS = 'deutschlernen_vocab_progress';
      this.STORAGE_KEY_SESSIONS = 'deutschlernen_vocab_sessions';
      this.STORAGE_KEY_SETTINGS = 'deutschlernen_vocab_settings';
      this.initSession();
    }

    getSettings() {
      const def = {
        lang: localStorage.getItem('site_lang') || 'en',
        theme: localStorage.getItem('site_theme') || 'dark',
        deck: 'core', // 'core', 'b2', 'all'
        mode: 'de_to_meaning',
        level: 'ALL',
        deckSize: 20,
        audio: true
      };
      try {
        const saved = JSON.parse(localStorage.getItem(this.STORAGE_KEY_SETTINGS) || '{}');
        return { ...def, ...saved };
      } catch (e) {
        return def;
      }
    }

    saveSettings(settings) {
      localStorage.setItem(this.STORAGE_KEY_SETTINGS, JSON.stringify(settings));
    }

    initSession() {
      const todayIso = new Date().toISOString().slice(0, 10);
      let sessionData = {
        totalSessions: 1,
        lastDate: todayIso,
        streak: 1,
        history: []
      };
      try {
        const raw = localStorage.getItem(this.STORAGE_KEY_SESSIONS);
        if (raw) {
          sessionData = JSON.parse(raw);
          const lastDate = sessionData.lastDate;
          if (lastDate !== todayIso) {
            const last = new Date(lastDate);
            const now = new Date(todayIso);
            const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));
            if (diffDays === 1) {
              sessionData.streak = (sessionData.streak || 1) + 1;
            } else if (diffDays > 1) {
              sessionData.streak = 1;
            }
            sessionData.lastDate = todayIso;
            sessionData.totalSessions = (sessionData.totalSessions || 0) + 1;
          }
        }
      } catch (e) {
        console.warn("Session init error:", e);
      }
      this.sessionData = sessionData;
      localStorage.setItem(this.STORAGE_KEY_SESSIONS, JSON.stringify(sessionData));
    }

    getProgressMap() {
      try {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY_PROGRESS) || '{}');
      } catch (e) {
        return {};
      }
    }

    saveProgressMap(map) {
      localStorage.setItem(this.STORAGE_KEY_PROGRESS, JSON.stringify(map));
    }

    recordResult(wordId, isCorrect) {
      const progress = this.getProgressMap();
      const current = progress[wordId] || {
        status: 'unseen',
        correctCount: 0,
        wrongCount: 0,
        streak: 0,
        lastSeenSession: this.sessionData.totalSessions
      };

      current.lastSeenSession = this.sessionData.totalSessions;

      if (isCorrect) {
        current.correctCount += 1;
        current.streak += 1;
        // If it was in review, promote it back towards mastered after 2 correct answers in a row
        if (current.streak >= 3) {
          current.status = 'mastered';
        } else {
          current.status = 'learning';
        }
      } else {
        current.wrongCount += 1;
        current.streak = 0;
        current.status = 'review'; // Automatically enters Mistake Review Queue!
      }

      progress[wordId] = current;
      this.saveProgressMap(progress);
      return current;
    }

    getStats(dataset) {
      const progress = this.getProgressMap();
      let mastered = 0;
      let learning = 0;
      let review = 0;
      let unseen = 0;

      dataset.forEach(item => {
        const p = progress[item.id];
        if (!p || p.status === 'unseen') {
          unseen++;
        } else if (p.status === 'mastered') {
          mastered++;
        } else if (p.status === 'review') {
          review++;
        } else {
          learning++;
        }
      });

      return { total: dataset.length, mastered, learning, review, unseen };
    }
  }

  // --- Smart Anti-Repetition Deck Generator ---
  class DeckGenerator {
    constructor(sessionManager) {
      this.sessionManager = sessionManager;
    }

    /**
     * Generates a balanced deck according to Guru anti-repetition rules:
     * 1. If in 'mistakes' mode -> 100% review queue words
     * 2. In normal modes:
     *    - 30% urgent review words (previous mistakes)
     *    - 50% fresh unseen words (so new login shows unseen words!)
     *    - 20% learning reinforcement words
     */
    generateDeck(allWords, options = {}) {
      const { mode = 'de_to_meaning', level = 'ALL', deckSize = 20 } = options;
      const progress = this.sessionManager.getProgressMap();

      // Filter by Level
      let pool = allWords;
      if (level !== 'ALL') {
        pool = pool.filter(w => w.level === level);
      }

      // Filter by Mode eligibility (e.g. synonyms require non-empty synonyms array)
      if (mode === 'synonyms') {
        pool = pool.filter(w => w.synonyms && w.synonyms.length > 0);
      } else if (mode === 'antonyms') {
        pool = pool.filter(w => w.antonyms && w.antonyms.length > 0);
      }

      // Partition into Buckets
      const reviewBucket = [];
      const unseenBucket = [];
      const learningBucket = [];
      const masteredBucket = [];

      pool.forEach(item => {
        const state = progress[item.id];
        if (!state || state.status === 'unseen') {
          unseenBucket.push(item);
        } else if (state.status === 'review') {
          reviewBucket.push(item);
        } else if (state.status === 'learning') {
          learningBucket.push(item);
        } else {
          masteredBucket.push(item);
        }
      });

      // If user chose Review Mistakes mode
      if (mode === 'mistakes') {
        return this.shuffle(reviewBucket).slice(0, deckSize);
      }

      // Smart proportions for anti-repetition:
      const targetReview = Math.min(reviewBucket.length, Math.floor(deckSize * 0.35));
      const targetUnseen = Math.min(unseenBucket.length, Math.floor(deckSize * 0.50));
      const remainingSlots = deckSize - (targetReview + targetUnseen);

      const deck = [];
      deck.push(...this.shuffle(reviewBucket).slice(0, targetReview));
      deck.push(...this.shuffle(unseenBucket).slice(0, targetUnseen));

      // Fill remaining from learning, then unseen, then mastered
      const remainingPool = this.shuffle([...learningBucket, ...unseenBucket.slice(targetUnseen), ...masteredBucket]);
      deck.push(...remainingPool.slice(0, remainingSlots));

      return this.shuffle(deck);
    }

    shuffle(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }
  }

  // --- Quiz Arena Engine & Audio TTS ---
  class VocabTrainerApp {
    constructor() {
      this.sessionManager = new VocabSessionManager();
      this.deckGenerator = new DeckGenerator(this.sessionManager);
      this.settings = this.sessionManager.getSettings();

      this.currentDeck = [];
      this.currentIndex = 0;
      this.sessionCorrect = 0;
      this.sessionWrong = 0;
      this.selectedAnswer = null;
      this.hasAnswered = false;

      this.initDomReferences();
      this.bindEvents();
      this.applyTheme(this.settings.theme);
      this.updateI18nLabels();
      this.refreshHeaderStats();
      this.startNewDeck();
    }

    initDomReferences() {
      this.dom = {
        langBtn: document.getElementById('btn-lang-toggle'),
        themeBtn: document.getElementById('btn-theme-toggle'),
        audioBtn: document.getElementById('btn-audio-toggle'),
        deckSelector: document.getElementById('deck-selector'),
        levelSelector: document.getElementById('level-selector'),
        modeChips: document.querySelectorAll('.mode-chip'),
        deckSizeSelect: document.getElementById('deck-size-select'),
        sessionBadge: document.getElementById('session-count-badge'),
        streakBadge: document.getElementById('streak-count-badge'),
        reviewBadge: document.getElementById('review-queue-badge'),
        // Arena
        cardCounter: document.getElementById('card-counter'),
        progressBar: document.getElementById('quiz-progress-bar'),
        arenaWordDe: document.getElementById('arena-word-de'),
        arenaPosBadge: document.getElementById('arena-pos-badge'),
        arenaLevelBadge: document.getElementById('arena-level-badge'),
        arenaAudioPlay: document.getElementById('btn-play-audio'),
        optionsGrid: document.getElementById('options-grid'),
        explanationCard: document.getElementById('explanation-card'),
        explainExampleDe: document.getElementById('explain-example-de'),
        explainExampleTrans: document.getElementById('explain-example-trans'),
        explainSynAnt: document.getElementById('explain-syn-ant'),
        nextButton: document.getElementById('btn-next-card'),
        // Modals & Browser
        searchModal: document.getElementById('search-modal'),
        btnOpenSearch: document.getElementById('btn-open-search'),
        btnCloseSearch: document.getElementById('btn-close-search'),
        searchInput: document.getElementById('vocab-search-input'),
        searchResults: document.getElementById('vocab-search-results'),
        btnExport: document.getElementById('btn-export-progress'),
        fileImport: document.getElementById('file-import-progress')
      };
    }

    getAllWordsPool() {
      const core = window.VOCAB_2000 || [];
      const b2 = window.VOCAB_B2 || [];
      if (this.settings.deck === 'b2') return b2;
      if (this.settings.deck === 'all') return [...core, ...b2];
      return core;
    }

    bindEvents() {
      // Language Toggle
      this.dom.langBtn.addEventListener('click', () => {
        this.settings.lang = this.settings.lang === 'en' ? 'tr' : 'en';
        localStorage.setItem('site_lang', this.settings.lang);
        this.sessionManager.saveSettings(this.settings);
        this.updateI18nLabels();
        this.renderCurrentQuestion();
      });

      // Theme Toggle
      this.dom.themeBtn.addEventListener('click', () => {
        this.settings.theme = this.settings.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('site_theme', this.settings.theme);
        this.sessionManager.saveSettings(this.settings);
        this.applyTheme(this.settings.theme);
      });

      // Audio Toggle
      this.dom.audioBtn.addEventListener('click', () => {
        this.settings.audio = !this.settings.audio;
        this.sessionManager.saveSettings(this.settings);
        this.updateAudioBtnState();
      });

      // Deck & Level Selectors
      this.dom.deckSelector.addEventListener('change', (e) => {
        this.settings.deck = e.target.value;
        this.sessionManager.saveSettings(this.settings);
        this.refreshHeaderStats();
        this.startNewDeck();
      });

      this.dom.levelSelector.addEventListener('change', (e) => {
        this.settings.level = e.target.value;
        this.sessionManager.saveSettings(this.settings);
        this.startNewDeck();
      });

      this.dom.deckSizeSelect.addEventListener('change', (e) => {
        this.settings.deckSize = parseInt(e.target.value, 10);
        this.sessionManager.saveSettings(this.settings);
        this.startNewDeck();
      });

      // Mode Chips
      this.dom.modeChips.forEach(chip => {
        chip.addEventListener('click', () => {
          this.dom.modeChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.settings.mode = chip.dataset.mode;
          this.sessionManager.saveSettings(this.settings);
          this.startNewDeck();
        });
      });

      // Audio speaker button
      this.dom.arenaAudioPlay.addEventListener('click', () => {
        const item = this.currentDeck[this.currentIndex];
        if (item) this.playSpeech(item.de);
      });

      // Next button
      this.dom.nextButton.addEventListener('click', () => this.nextCard());

      // Keyboard navigation (1-4, Space, Enter)
      window.addEventListener('keydown', (e) => {
        if (this.dom.searchModal && !this.dom.searchModal.classList.contains('hidden')) {
          return; // Modal active
        }
        if (e.key >= '1' && e.key <= '4') {
          const idx = parseInt(e.key, 10) - 1;
          const btns = this.dom.optionsGrid.querySelectorAll('.quiz-option-btn');
          if (btns[idx] && !this.hasAnswered) {
            btns[idx].click();
          }
        } else if (e.key === ' ' || e.code === 'Space') {
          e.preventDefault();
          const item = this.currentDeck[this.currentIndex];
          if (item) this.playSpeech(item.de);
        } else if (e.key === 'Enter') {
          if (this.hasAnswered) {
            this.nextCard();
          }
        }
      });

      // Vocabulary Search / Browser
      if (this.dom.btnOpenSearch) {
        this.dom.btnOpenSearch.addEventListener('click', () => this.openSearchModal());
      }
      if (this.dom.btnCloseSearch) {
        this.dom.btnCloseSearch.addEventListener('click', () => this.closeSearchModal());
      }
      if (this.dom.searchInput) {
        this.dom.searchInput.addEventListener('input', (e) => this.filterSearchResults(e.target.value));
      }

      // Export / Import
      if (this.dom.btnExport) {
        this.dom.btnExport.addEventListener('click', () => this.exportProgress());
      }
      if (this.dom.fileImport) {
        this.dom.fileImport.addEventListener('change', (e) => this.importProgress(e));
      }
    }

    applyTheme(theme) {
      if (theme === 'light') {
        document.body.classList.add('light-mode');
        this.dom.themeBtn.innerHTML = '🌙';
      } else {
        document.body.classList.remove('light-mode');
        this.dom.themeBtn.innerHTML = '☀️';
      }
    }

    updateAudioBtnState() {
      const texts = I18N[this.settings.lang];
      this.dom.audioBtn.innerHTML = this.settings.audio ? '🔊 ' + texts.audioOn : '🔇 ' + texts.audioOff;
    }

    updateI18nLabels() {
      const texts = I18N[this.settings.lang];
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (texts[key]) el.textContent = texts[key];
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (texts[key]) el.placeholder = texts[key];
      });
      this.updateAudioBtnState();
      this.dom.langBtn.textContent = this.settings.lang === 'en' ? 'TR 🇹🇷' : 'EN 🇬🇧';
    }

    refreshHeaderStats() {
      const pool = this.getAllWordsPool();
      const stats = this.sessionManager.getStats(pool);
      this.dom.sessionBadge.textContent = `#${this.sessionManager.sessionData.totalSessions}`;
      this.dom.streakBadge.textContent = `🔥 ${this.sessionManager.sessionData.streak}d`;
      this.dom.reviewBadge.textContent = `⚠️ ${stats.review}`;

      // Highlight review badge if there are mistakes
      if (stats.review > 0) {
        this.dom.reviewBadge.classList.add('has-mistakes');
      } else {
        this.dom.reviewBadge.classList.remove('has-mistakes');
      }
    }

    startNewDeck() {
      const pool = this.getAllWordsPool();
      this.currentDeck = this.deckGenerator.generateDeck(pool, {
        mode: this.settings.mode,
        level: this.settings.level,
        deckSize: this.settings.deckSize
      });

      this.currentIndex = 0;
      this.sessionCorrect = 0;
      this.sessionWrong = 0;
      this.hasAnswered = false;

      if (this.currentDeck.length === 0) {
        this.renderEmptyState();
        return;
      }

      this.renderCurrentQuestion();
    }

    renderCurrentQuestion() {
      if (this.currentIndex >= this.currentDeck.length) {
        this.renderDeckCompletion();
        return;
      }

      this.hasAnswered = false;
      this.dom.explanationCard.classList.add('hidden');
      this.dom.nextButton.classList.add('hidden');

      const item = this.currentDeck[this.currentIndex];
      const total = this.currentDeck.length;

      // Progress bar & counters
      this.dom.cardCounter.textContent = `${this.currentIndex + 1} / ${total}`;
      const pct = Math.round(((this.currentIndex) / total) * 100);
      this.dom.progressBar.style.width = `${pct}%`;

      // Word & Badges
      this.dom.arenaPosBadge.textContent = item.pos.toUpperCase();
      this.dom.arenaLevelBadge.textContent = item.level;

      // Render Question prompt according to selected Mode
      const isEn = this.settings.lang === 'en';
      let promptTitle = "";
      let correctAnswerText = "";

      if (this.settings.mode === 'de_to_meaning' || this.settings.mode === 'mistakes') {
        promptTitle = item.de;
        correctAnswerText = isEn ? item.en : item.tr;
      } else if (this.settings.mode === 'meaning_de') {
        promptTitle = isEn ? item.en : item.tr;
        correctAnswerText = item.de;
      } else if (this.settings.mode === 'synonyms') {
        promptTitle = item.de;
        correctAnswerText = item.synonyms[0];
      } else if (this.settings.mode === 'antonyms') {
        promptTitle = item.de;
        correctAnswerText = item.antonyms[0];
      }

      this.dom.arenaWordDe.textContent = promptTitle;

      // Auto TTS if audio is on and prompt is German
      if (this.settings.audio && (this.settings.mode === 'de_to_meaning' || this.settings.mode === 'synonyms' || this.settings.mode === 'antonyms' || this.settings.mode === 'mistakes')) {
        this.playSpeech(item.de);
      }

      // Generate 4 Distractor Options
      const options = this.generateOptions(item, correctAnswerText);
      this.dom.optionsGrid.innerHTML = '';

      options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.setAttribute('tabindex', '0');
        btn.innerHTML = `<span class="opt-num">${i + 1}</span><span class="opt-label">${optText}</span>`;
        btn.addEventListener('click', () => this.handleAnswer(btn, optText, correctAnswerText, item));
        this.dom.optionsGrid.appendChild(btn);
      });
    }

    generateOptions(currentItem, correctAnswer) {
      const pool = this.getAllWordsPool();
      const isEn = this.settings.lang === 'en';
      const distractors = new Set();
      distractors.add(correctAnswer);

      // Filter same POS & similar level for challenging distractors
      const candidates = pool.filter(w => w.id !== currentItem.id && w.pos === currentItem.pos);
      const fallback = pool.filter(w => w.id !== currentItem.id);

      const sampleFrom = candidates.length >= 10 ? candidates : fallback;
      const shuffled = this.deckGenerator.shuffle(sampleFrom);

      for (const cand of shuffled) {
        if (distractors.size >= 4) break;
        let val = "";
        if (this.settings.mode === 'de_to_meaning' || this.settings.mode === 'mistakes') {
          val = isEn ? cand.en : cand.tr;
        } else if (this.settings.mode === 'meaning_de') {
          val = cand.de;
        } else if (this.settings.mode === 'synonyms') {
          val = cand.synonyms && cand.synonyms.length > 0 ? cand.synonyms[0] : (isEn ? cand.en : cand.tr);
        } else if (this.settings.mode === 'antonyms') {
          val = cand.antonyms && cand.antonyms.length > 0 ? cand.antonyms[0] : (isEn ? cand.en : cand.tr);
        }
        if (val && val !== correctAnswer) {
          distractors.add(val);
        }
      }

      return this.deckGenerator.shuffle(Array.from(distractors));
    }

    handleAnswer(btn, chosen, correct, item) {
      if (this.hasAnswered) return;
      this.hasAnswered = true;

      const isCorrect = (chosen.trim().toLowerCase() === correct.trim().toLowerCase());
      const allBtns = this.dom.optionsGrid.querySelectorAll('.quiz-option-btn');

      allBtns.forEach(b => {
        const label = b.querySelector('.opt-label').textContent.trim();
        if (label.toLowerCase() === correct.trim().toLowerCase()) {
          b.classList.add('btn-correct');
        }
      });

      if (isCorrect) {
        btn.classList.add('btn-chosen-correct');
        this.sessionCorrect++;
      } else {
        btn.classList.add('btn-chosen-wrong');
        this.sessionWrong++;
      }

      // Record in Session Manager
      this.sessionManager.recordResult(item.id, isCorrect);
      this.refreshHeaderStats();

      // Show Rich Explanation Card
      this.dom.explainExampleDe.textContent = item.example;
      this.dom.explainExampleTrans.textContent = this.settings.lang === 'en' ? item.example_en : item.example_tr;

      let synAntHtml = "";
      if (item.synonyms && item.synonyms.length > 0) {
        synAntHtml += `<div class="tag-row"><strong>Synonyms:</strong> ${item.synonyms.map(s => `<span class="word-tag syn">${s}</span>`).join(' ')}</div>`;
      }
      if (item.antonyms && item.antonyms.length > 0) {
        synAntHtml += `<div class="tag-row"><strong>Antonyms:</strong> ${item.antonyms.map(a => `<span class="word-tag ant">${a}</span>`).join(' ')}</div>`;
      }
      this.dom.explainSynAnt.innerHTML = synAntHtml;

      this.dom.explanationCard.classList.remove('hidden');
      this.dom.nextButton.classList.remove('hidden');
      this.dom.nextButton.focus();
    }

    nextCard() {
      this.currentIndex++;
      this.renderCurrentQuestion();
    }

    renderDeckCompletion() {
      const texts = I18N[this.settings.lang];
      const total = this.sessionCorrect + this.sessionWrong;
      const pct = total > 0 ? Math.round((this.sessionCorrect / total) * 100) : 100;

      this.dom.progressBar.style.width = '100%';
      this.dom.optionsGrid.innerHTML = `
        <div class="completion-card">
          <h2>🎉 ${texts.finishDeck}</h2>
          <p class="accuracy-score">${texts.accuracy}: <strong>${pct}%</strong> (${this.sessionCorrect}/${total})</p>
          <button id="btn-restart-deck" class="primary-btn">${texts.startQuiz}</button>
        </div>
      `;
      this.dom.arenaWordDe.textContent = "Fertig!";
      this.dom.explanationCard.classList.add('hidden');
      this.dom.nextButton.classList.add('hidden');

      document.getElementById('btn-restart-deck').addEventListener('click', () => {
        this.startNewDeck();
      });
    }

    renderEmptyState() {
      const texts = I18N[this.settings.lang];
      this.dom.optionsGrid.innerHTML = `
        <div class="empty-state-card">
          <p>${texts.emptyReview}</p>
          <button id="btn-switch-core" class="primary-btn">${texts.coreDeck}</button>
        </div>
      `;
      this.dom.arenaWordDe.textContent = "Super!";
      document.getElementById('btn-switch-core').addEventListener('click', () => {
        this.dom.modeChips[0].click();
      });
    }

    playSpeech(text) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const clean = text.split('(')[0].trim();
      const utter = new SpeechSynthesisUtterance(clean);
      utter.lang = 'de-DE';
      utter.rate = 0.92;
      window.speechSynthesis.speak(utter);
    }

    // --- Search Modal / Dictionary ---
    openSearchModal() {
      this.dom.searchModal.classList.remove('hidden');
      this.dom.searchInput.value = '';
      this.filterSearchResults('');
      this.dom.searchInput.focus();
    }

    closeSearchModal() {
      this.dom.searchModal.classList.add('hidden');
    }

    filterSearchResults(query) {
      const pool = this.getAllWordsPool();
      const q = query.trim().toLowerCase();
      const filtered = q === '' 
        ? pool.slice(0, 50) 
        : pool.filter(w => 
            w.de.toLowerCase().includes(q) || 
            w.tr.toLowerCase().includes(q) || 
            w.en.toLowerCase().includes(q)
          ).slice(0, 100);

      this.dom.searchResults.innerHTML = filtered.map(w => `
        <div class="search-result-row">
          <div class="row-header">
            <strong>${w.de}</strong>
            <span class="badge badge-${w.level.toLowerCase()}">${w.level}</span>
            <span class="badge-pos">${w.pos}</span>
            <button class="mini-audio-btn" onclick="window.VocabApp.playSpeech('${w.de.replace(/'/g, "\\'")}')">🔊</button>
          </div>
          <div class="row-meanings">
            <span>🇹🇷 ${w.tr}</span> · <span>🇬🇧 ${w.en}</span>
          </div>
          <div class="row-example">
            <em>"${w.example}"</em>
          </div>
        </div>
      `).join('');
    }

    exportProgress() {
      const data = {
        progress: this.sessionManager.getProgressMap(),
        sessions: this.sessionManager.sessionData,
        exportedAt: new Date().toISOString()
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `deutschlernen_vocab_backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }

    importProgress(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed.progress) {
            this.sessionManager.saveProgressMap(parsed.progress);
          }
          if (parsed.sessions) {
            localStorage.setItem(this.sessionManager.STORAGE_KEY_SESSIONS, JSON.stringify(parsed.sessions));
            this.sessionManager.initSession();
          }
          alert("Progress imported successfully!");
          this.refreshHeaderStats();
          this.startNewDeck();
        } catch (err) {
          alert("Invalid backup file!");
        }
      };
      reader.readAsText(file);
    }
  }

  // Expose globally for HTML onclick handlers
  window.addEventListener('DOMContentLoaded', () => {
    window.VocabApp = new VocabTrainerApp();
  });

})();
