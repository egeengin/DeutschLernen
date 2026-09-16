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
      c1Deck: "Academic C1 Deck",
      allDeck: "All Words Combined",
      sessionLabel: "Session",
      streakLabel: "Day Streak",
      reviewQueue: "Mistakes Queue",
      mode_de_meaning: "German ➔ Meaning",
      mode_meaning_de: "Meaning ➔ German",
      mode_synonyms: "Synonyms (DE ➔ DE)",
      mode_antonyms: "Antonyms (Opposites)",
      mode_mistakes: "Review Mistakes",
      mode_sprint: "Timed Sprint (2m)",
      timerLabel: "Time",
      sprintSummaryTitle: "Timed Sprint Complete!",
      sprintSummaryDesc: "Here is how you performed under exam countdown pressure:",
      sprintCardsAnswered: "Answered",
      sprintWpm: "Cards / min",
      sprintTryAgain: "Try Again",
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
      privacyNotice: "100% Client-Side Privacy. Your study data is saved locally on your device.",
      exampleUsage: "Example Sentence",
      synonymsLabel: "Synonyms",
      antonymsLabel: "Antonyms",
      arenaSubhint: "Choose the correct meaning below or press keys 1–4",
      cardLabel: "Card",
      restartDeck: "Restart Drill",
      resetProgressBtn: "Reset Progress",
      levelA1: "A1 Level",
      levelA2: "A2 Level",
      levelB1: "B1 Level",
      levelB2: "B2 Level",
      levelC1: "C1 Level",
      langSwitchBtn: "🇹🇷 Türkçe",
      impressumLink: "🇩🇪 Impressum (§ 5 DDG)",
      privacyLink: "🔒 Privacy Policy (GDPR)",
      termsLink: "📜 Terms & Trademarks",
      accountTitle: "Account & Cloud Sync",
      accountBtn: "Account",
      loggedInAs: "Signed in as:",
      syncActiveDesc: "Your study progress, streak, and mistake reviews are automatically synced with Cloud Firestore across all your devices.",
      syncNowBtn: "Sync Now",
      signOutBtn: "Sign Out",
      tabLogin: "Sign In",
      tabRegister: "Create Account",
      labelName: "Full Name / Nickname",
      labelEmail: "Email Address",
      labelPassword: "Password",
      signInAction: "Sign In",
      signUpAction: "Create Account",
      orDivider: "OR",
      googleSignIn: "Continue with Google",
      feedbackBtn: "Feedback",
      feedbackTitle: "Send Feedback & Suggestions",
      feedbackUsername: "Name / Nickname",
      feedbackLocation: "Location (Auto-detected)",
      feedbackCategory: "Category",
      catGeneral: "💡 General Feedback / Suggestion",
      catVocab: "📝 Vocabulary / Translation Correction",
      catFeature: "✨ Feature Request",
      catBug: "🐛 Bug Report",
      feedbackRating: "Your Rating",
      feedbackMessage: "Your Message",
      submitFeedbackBtn: "Submit Feedback",
      feedbackSuccess: "Thank you! Your feedback has been received.",
      feedbackError: "Failed to submit feedback. Please try again.",
      feedbackUserPlaceholder: "Anonymous or your name",
      feedbackLocPlaceholder: "Detecting location...",
      feedbackMsgPlaceholder: "Tell us what we can improve or report an issue...",
      ratingExcellent: "5/5 — Excellent",
      ratingVeryGood: "4/5 — Very Good",
      ratingGood: "3/5 — Good",
      ratingNeedsImprovement: "2/5 — Needs Improvement",
      ratingPoor: "1/5 — Poor",
      authSuccess: "Successfully signed in!",
      authLoggedOut: "Signed out. Operating in Guest Mode.",
      syncSuccess: "Progress synchronized with cloud!"
    },
    tr: {
      portalBack: "← Portala Dön",
      appTitle: "Kelime Antrenörü",
      coreDeck: "Temel 2.000 (A1–B1)",
      b2Deck: "İleri B2 Destesi",
      c1Deck: "Akademik C1 Destesi",
      allDeck: "Tüm Kelimeler (Birleşik)",
      sessionLabel: "Oturum",
      streakLabel: "Günlük Seri",
      reviewQueue: "Hata Tekrar Havuzu",
      mode_de_meaning: "Almanca ➔ Anlam",
      mode_meaning_de: "Anlam ➔ Almanca",
      mode_synonyms: "Eş Anlamlılar (DE ➔ DE)",
      mode_antonyms: "Zıt Anlamlılar (Karşıt)",
      mode_mistakes: "Hataları Tekrar Et",
      mode_sprint: "Süreli Hızlı Tur (2dk)",
      timerLabel: "Süre",
      sprintSummaryTitle: "Süreli Tur Tamamlandı!",
      sprintSummaryDesc: "Sınav süresi baskısı altında gösterdiğiniz performans:",
      sprintCardsAnswered: "Cevaplanan",
      sprintWpm: "Kart / dk",
      sprintTryAgain: "Tekrar Dene",
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
      privacyNotice: "%100 Cihaz İçi Gizlilik. Çalışma verileriniz yalnızca tarayıcınızda saklanır.",
      exampleUsage: "Örnek Cümle",
      synonymsLabel: "Eş Anlamlılar",
      antonymsLabel: "Zıt Anlamlılar",
      arenaSubhint: "Aşağıdan doğru anlamı seçin veya 1–4 tuşlarına basın",
      cardLabel: "Kart",
      restartDeck: "Antrenmanı Yeniden Başlat",
      resetProgressBtn: "İlerlemeyi Sıfırla",
      levelA1: "A1 Seviyesi",
      levelA2: "A2 Seviyesi",
      levelB1: "B1 Seviyesi",
      levelB2: "B2 Seviyesi",
      levelC1: "C1 Seviyesi",
      langSwitchBtn: "🇬🇧 English",
      impressumLink: "🇩🇪 Yasal Künye (§ 5 DDG)",
      privacyLink: "🔒 Gizlilik Politikası (KVKK/GDPR)",
      termsLink: "📜 Kullanım Şartları ve Markalar",
      accountTitle: "Hesap & Bulut Eşitleme",
      accountBtn: "Hesap",
      loggedInAs: "Giriş yapılan hesap:",
      syncActiveDesc: "Kelime çalışma ilerlemeniz, günlük seriniz ve hata havuzunuz tüm cihazlarınız arasında Cloud Firestore ile otomatik eşitlenir.",
      syncNowBtn: "Şimdi Eşitle",
      signOutBtn: "Çıkış Yap",
      tabLogin: "Giriş Yap",
      tabRegister: "Hesap Oluştur",
      labelName: "Ad Soyad / Takma Ad",
      labelEmail: "E-posta Adresi",
      labelPassword: "Şifre",
      signInAction: "Giriş Yap",
      signUpAction: "Hesap Oluştur",
      orDivider: "VEYA",
      googleSignIn: "Google ile Devam Et",
      feedbackBtn: "Geri Bildirim",
      feedbackTitle: "Geri Bildirim ve Öneriler",
      feedbackUsername: "İsim / Takma Ad",
      feedbackLocation: "Konum (Otomatik Tespit)",
      feedbackCategory: "Kategori",
      catGeneral: "💡 Genel Geri Bildirim / Öneri",
      catVocab: "📝 Kelime / Çeviri Düzeltmesi",
      catFeature: "✨ Yeni Özellik İsteği",
      catBug: "🐛 Hata Bildirimi",
      feedbackRating: "Puanınız",
      feedbackMessage: "Mesajınız",
      submitFeedbackBtn: "Geri Bildirimi Gönder",
      feedbackSuccess: "Teşekkür ederiz! Geri bildiriminiz başarıyla iletildi.",
      feedbackError: "Geri bildirim gönderilemedi. Lütfen tekrar deneyin.",
      feedbackUserPlaceholder: "Anonim veya isminiz",
      feedbackLocPlaceholder: "Konum tespit ediliyor...",
      feedbackMsgPlaceholder: "Neleri geliştirebileceğimizi bize iletin veya bir hata bildirin...",
      ratingExcellent: "5/5 — Mükemmel",
      ratingVeryGood: "4/5 — Çok İyi",
      ratingGood: "3/5 — İyi",
      ratingNeedsImprovement: "2/5 — Geliştirilmeli",
      ratingPoor: "1/5 — Zayıf",
      authSuccess: "Başarıyla giriş yapıldı!",
      authLoggedOut: "Çıkış yapıldı. Misafir modundasınız.",
      syncSuccess: "İlerlemeniz bulutla eşitlendi!"
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
      const siteLang = localStorage.getItem('site_lang') || localStorage.getItem('telc_lang');
      const savedTheme = localStorage.getItem('deutschlernen_theme') || localStorage.getItem('site_theme') || localStorage.getItem('telc_theme') || 'dark';
      const def = {
        lang: siteLang || 'en',
        theme: savedTheme,
        deck: 'core', // 'core', 'b2', 'all'
        mode: 'de_meaning',
        level: 'ALL',
        deckSize: 20,
        audio: true
      };
      try {
        const saved = JSON.parse(localStorage.getItem(this.STORAGE_KEY_SETTINGS) || '{}');
        const settings = { ...def, ...saved };
        if (siteLang) {
          settings.lang = siteLang;
        }
        return settings;
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

    clearAllProgress() {
      localStorage.removeItem(this.STORAGE_KEY_PROGRESS);
    }

    recordResult(wordId, isCorrect) {
      const progress = this.getProgressMap();
      const todayIso = new Date().toISOString().slice(0, 10);
      const current = progress[wordId] || {
        status: 'unseen',
        correctCount: 0,
        wrongCount: 0,
        streak: 0,
        interval: 1,
        easeFactor: 2.5,
        nextReviewDate: todayIso,
        lastSeenSession: this.sessionData.totalSessions
      };

      current.lastSeenSession = this.sessionData.totalSessions;

      if (isCorrect) {
        current.correctCount += 1;
        current.streak += 1;

        // SM-2 / Leitner progressive interval calculation
        const prevInterval = current.interval || 1;
        const ease = current.easeFactor || 2.5;
        if (current.streak === 1) {
          current.interval = 1;
        } else if (current.streak === 2) {
          current.interval = 3;
        } else if (current.streak === 3) {
          current.interval = 7;
        } else {
          current.interval = Math.min(60, Math.round(prevInterval * ease));
        }

        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + current.interval);
        current.nextReviewDate = nextDate.toISOString().slice(0, 10);

        if (current.streak >= 3) {
          current.status = 'mastered';
        } else {
          current.status = 'learning';
        }
      } else {
        current.wrongCount += 1;
        current.streak = 0;
        current.interval = 1;
        current.nextReviewDate = todayIso;
        current.status = 'review'; // Enters Mistake Review Queue as due immediately!
        current.easeFactor = Math.max(1.3, (current.easeFactor || 2.5) - 0.2);
      }

      progress[wordId] = current;
      this.saveProgressMap(progress);

      // Trigger automatic debounced cloud synchronization if user is authenticated
      if (window.FirebaseService) {
        window.FirebaseService.syncProgress(progress, this.sessionData, this.getSettings());
      }

      return current;
    }

    mergeCloudProgress(cloudData) {
      if (!cloudData) return;
      if (cloudData.progress) {
        const local = this.getProgressMap();
        const merged = { ...local, ...cloudData.progress };
        this.saveProgressMap(merged);
      }
      if (cloudData.sessions) {
        const localSessions = this.sessionData || {};
        const maxStreak = Math.max(localSessions.streak || 1, cloudData.sessions.streak || 1);
        const maxTotal = Math.max(localSessions.totalSessions || 1, cloudData.sessions.totalSessions || 1);
        this.sessionData = {
          ...localSessions,
          ...cloudData.sessions,
          streak: maxStreak,
          totalSessions: maxTotal
        };
        localStorage.setItem(this.STORAGE_KEY_SESSIONS, JSON.stringify(this.sessionData));
      }
    }

    getStats(dataset) {
      const progress = this.getProgressMap();
      const todayIso = new Date().toISOString().slice(0, 10);
      let mastered = 0;
      let learning = 0;
      let review = 0;
      let dueReview = 0;
      let unseen = 0;

      dataset.forEach(item => {
        const p = progress[item.id];
        if (!p || p.status === 'unseen') {
          unseen++;
        } else if (p.status === 'mastered') {
          mastered++;
        } else if (p.status === 'review') {
          review++;
          if (!p.nextReviewDate || p.nextReviewDate <= todayIso) {
            dueReview++;
          }
        } else {
          learning++;
        }
      });

      return { total: dataset.length, mastered, learning, review, dueReview, unseen };
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
      const { mode = 'de_meaning', level = 'ALL', deckSize = 20 } = options;
      const progress = this.sessionManager.getProgressMap();

      // Filter by Level
      let pool = allWords;
      if (level && level.toUpperCase() !== 'ALL') {
        pool = pool.filter(w => w.level && w.level.toUpperCase() === level.toUpperCase());
      }

      // Filter by Mode eligibility (e.g. synonyms require non-empty synonyms array)
      if (mode === 'synonyms') {
        pool = pool.filter(w => w.synonyms && w.synonyms.length > 0);
      } else if (mode === 'antonyms') {
        pool = pool.filter(w => w.antonyms && w.antonyms.length > 0);
      }

      // Partition into Buckets with SRS due dates
      const todayIso = new Date().toISOString().slice(0, 10);
      const dueReviewBucket = [];
      const futureReviewBucket = [];
      const unseenBucket = [];
      const learningBucket = [];
      const masteredBucket = [];

      pool.forEach(item => {
        const state = progress[item.id];
        if (!state || state.status === 'unseen') {
          unseenBucket.push(item);
        } else if (state.status === 'review') {
          if (!state.nextReviewDate || state.nextReviewDate <= todayIso) {
            dueReviewBucket.push(item);
          } else {
            futureReviewBucket.push(item);
          }
        } else if (state.status === 'learning') {
          learningBucket.push(item);
        } else {
          masteredBucket.push(item);
        }
      });

      // If user chose Review Mistakes mode: prioritize due items first
      if (mode === 'mistakes') {
        const sortedDue = this.shuffle(dueReviewBucket);
        if (sortedDue.length >= deckSize) {
          return sortedDue.slice(0, deckSize);
        }
        return [...sortedDue, ...this.shuffle(futureReviewBucket)].slice(0, deckSize);
      }

      // If user chose Timed Sprint mode: rapid fire mix
      if (mode === 'sprint') {
        const sprintPool = this.shuffle([...dueReviewBucket, ...unseenBucket, ...learningBucket]);
        return sprintPool.slice(0, Math.max(30, deckSize));
      }

      // Smart proportions for anti-repetition:
      const combinedReview = [...dueReviewBucket, ...futureReviewBucket];
      const targetReview = Math.min(combinedReview.length, Math.floor(deckSize * 0.35));
      const targetUnseen = Math.min(unseenBucket.length, Math.floor(deckSize * 0.50));
      const remainingSlots = deckSize - (targetReview + targetUnseen);

      const deck = [];
      const reviewSlice = this.shuffle(dueReviewBucket);
      if (reviewSlice.length < targetReview) {
        reviewSlice.push(...this.shuffle(futureReviewBucket));
      }
      deck.push(...reviewSlice.slice(0, targetReview));
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

      // Support URL parameter initialization (e.g. ?level=B2, ?level=A1, ?deck=b2)
      try {
        if (typeof window !== 'undefined' && window.location && window.location.search) {
          const params = new URLSearchParams(window.location.search);
          const urlLevel = params.get('level');
          if (urlLevel && ['ALL', 'A1', 'A2', 'B1', 'B2'].includes(urlLevel.toUpperCase())) {
            this.settings.level = urlLevel.toUpperCase();
            if (this.settings.level === 'B2') {
              this.settings.deck = 'b2';
            }
          }
          const urlDeck = params.get('deck');
          if (urlDeck && ['core', 'b2', 'all'].includes(urlDeck.toLowerCase())) {
            this.settings.deck = urlDeck.toLowerCase();
          }
        }
      } catch (e) {
        console.warn('URL parameter parsing skipped:', e);
      }

      this.sprintTimer = null;
      this.sprintTimeRemaining = 120;
      this.sprintCardsAnswered = 0;
      this.sprintCorrectCount = 0;
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
      this.setupAuthAndFeedback();
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
        accuracyCounter: document.getElementById('accuracy-counter'),
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
        fileImport: document.getElementById('file-import-progress'),
        // Header Sync & User Account
        syncStatusPill: document.getElementById('sync-status-pill'),
        btnUserAccount: document.getElementById('btn-user-account'),
        // Auth Modal
        authModal: document.getElementById('auth-modal'),
        btnCloseAuth: document.getElementById('btn-close-auth'),
        tabLogin: document.getElementById('tab-login'),
        tabRegister: document.getElementById('tab-register'),
        groupDisplayName: document.getElementById('group-display-name'),
        authSubmitText: document.getElementById('auth-submit-text'),
        authForm: document.getElementById('auth-form'),
        authEmail: document.getElementById('auth-email'),
        authPassword: document.getElementById('auth-password'),
        authDisplayName: document.getElementById('auth-display-name'),
        btnGoogleAuth: document.getElementById('btn-google-auth'),
        authNoticeMsg: document.getElementById('auth-notice-msg'),
        authLoggedInView: document.getElementById('auth-logged-in-view'),
        authLoggedOutView: document.getElementById('auth-logged-out-view'),
        authUserEmail: document.getElementById('auth-user-email'),
        btnCloudSyncNow: document.getElementById('btn-cloud-sync-now'),
        btnSignOut: document.getElementById('btn-sign-out'),
        // Community Feedback
        btnFloatingFeedback: document.getElementById('btn-floating-feedback'),
        btnFooterFeedback: document.getElementById('btn-footer-feedback'),
        feedbackModal: document.getElementById('feedback-modal'),
        btnCloseFeedback: document.getElementById('btn-close-feedback'),
        feedbackForm: document.getElementById('feedback-form'),
        feedbackUsername: document.getElementById('feedback-username'),
        feedbackLocation: document.getElementById('feedback-location'),
        feedbackCategory: document.getElementById('feedback-category'),
        feedbackStars: document.getElementById('feedback-stars'),
        feedbackRatingText: document.getElementById('feedback-rating-text'),
        feedbackMessage: document.getElementById('feedback-message'),
        feedbackNoticeMsg: document.getElementById('feedback-notice-msg'),
        btnSubmitFeedback: document.getElementById('btn-submit-feedback'),
        // Timed Sprint
        timerPill: document.getElementById('exam-timer-pill'),
        timerBadge: document.getElementById('exam-timer-badge'),
        btnTimedSprint: document.getElementById('btn-timed-sprint'),
        sprintModal: document.getElementById('sprint-summary-modal'),
        btnCloseSprintSummary: document.getElementById('btn-close-sprint-summary'),
        sprintMetricScore: document.getElementById('sprint-metric-score'),
        sprintMetricAccuracy: document.getElementById('sprint-metric-accuracy'),
        sprintMetricSpeed: document.getElementById('sprint-metric-speed'),
        btnSprintRetry: document.getElementById('btn-sprint-retry')
      };

      if (this.dom.deckSelector && this.settings.deck) {
        this.dom.deckSelector.value = this.settings.deck;
      }
      if (this.dom.levelSelector && this.settings.level) {
        this.dom.levelSelector.value = this.settings.level;
      }
      if (this.dom.deckSizeSelect && this.settings.deckSize) {
        this.dom.deckSizeSelect.value = String(this.settings.deckSize);
      }
    }

    getAllWordsPool() {
      const core = window.VOCAB_2000 || [];
      const b2Raw = window.VOCAB_B2 || [];
      const c1Raw = window.VOCAB_C1 || [];
      const b2 = b2Raw.map(w => ({
        ...w,
        id: (typeof w.id === 'number' && w.id < 10000) ? 10000 + w.id : w.id
      }));
      const c1 = c1Raw.map(w => ({
        ...w,
        id: (typeof w.id === 'number' && w.id < 20000) ? 20000 + w.id : w.id
      }));
      if (this.settings.level === 'C1') return c1;
      if (this.settings.level === 'B2') return b2;
      if (this.settings.deck === 'c1') return c1;
      if (this.settings.deck === 'b2') return b2;
      if (this.settings.deck === 'all') return [...core, ...b2, ...c1];
      return core;
    }

    bindEvents() {
      // Language Toggle
      this.dom.langBtn.addEventListener('click', () => {
        this.settings.lang = this.settings.lang === 'en' ? 'tr' : 'en';
        localStorage.setItem('site_lang', this.settings.lang);
        localStorage.setItem('telc_lang', this.settings.lang);
        this.sessionManager.saveSettings(this.settings);
        this.updateI18nLabels();
        this.renderCurrentQuestion();
      });

      // Theme Toggle
      this.dom.themeBtn.addEventListener('click', () => {
        this.settings.theme = this.settings.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('deutschlernen_theme', this.settings.theme);
        localStorage.setItem('site_theme', this.settings.theme);
        localStorage.setItem('telc_theme', this.settings.theme);
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
          const mode = chip.dataset.mode;
          this.settings.mode = mode;
          this.sessionManager.saveSettings(this.settings);
          if (mode === 'sprint') {
            this.startSprintMode();
          } else {
            this.stopSprintTimer();
            this.startNewDeck();
          }
        });
      });

      // Sprint Modal Controls
      if (this.dom.btnCloseSprintSummary) {
        this.dom.btnCloseSprintSummary.addEventListener('click', () => {
          if (this.dom.sprintModal) this.dom.sprintModal.classList.add('hidden');
        });
      }
      if (this.dom.btnSprintRetry) {
        this.dom.btnSprintRetry.addEventListener('click', () => {
          if (this.dom.sprintModal) this.dom.sprintModal.classList.add('hidden');
          this.startSprintMode();
        });
      }

      // Audio speaker button
      this.dom.arenaAudioPlay.addEventListener('click', () => {
        const item = this.currentDeck[this.currentIndex];
        if (item) this.playSpeech(item.de);
      });

      // Next button
      this.dom.nextButton.addEventListener('click', () => this.nextCard());

      // Keyboard navigation (1-4, Space, Enter, Escape)
      window.addEventListener('keydown', (e) => {
        // Modal Dismissal with Escape key
        if (e.key === 'Escape') {
          if (this.dom.searchModal && !this.dom.searchModal.classList.contains('hidden')) {
            this.closeSearchModal();
            return;
          }
          if (this.dom.authModal && !this.dom.authModal.classList.contains('hidden')) {
            this.dom.authModal.classList.add('hidden');
            return;
          }
          if (this.dom.feedbackModal && !this.dom.feedbackModal.classList.contains('hidden')) {
            this.dom.feedbackModal.classList.add('hidden');
            return;
          }
          if (this.dom.sprintModal && !this.dom.sprintModal.classList.contains('hidden')) {
            this.dom.sprintModal.classList.add('hidden');
            return;
          }
        }

        // Never intercept keyboard shortcuts when typing in an input, textarea, or editable field
        if (e.target && (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || e.target.isContentEditable)) {
          return;
        }

        // Prevent quiz hotkeys while ANY modal is visible
        const isAnyModalOpen = (this.dom.searchModal && !this.dom.searchModal.classList.contains('hidden')) ||
                               (this.dom.authModal && !this.dom.authModal.classList.contains('hidden')) ||
                               (this.dom.feedbackModal && !this.dom.feedbackModal.classList.contains('hidden')) ||
          (this.dom.sprintModal && !this.dom.sprintModal.classList.contains('hidden'));
        if (isAnyModalOpen) {
          return;
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
        document.documentElement.setAttribute('data-theme', 'light');
        this.dom.themeBtn.innerHTML = '🌙';
      } else {
        document.body.classList.remove('light-mode');
        document.documentElement.setAttribute('data-theme', 'dark');
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
      if (this.dom.feedbackStars && typeof this.updateFeedbackRatingDisplay === 'function') {
        const curR = parseInt(this.dom.feedbackStars.getAttribute('data-rating') || '5', 10);
        this.updateFeedbackRatingDisplay(curR, false);
      }
      if (window.FirebaseService) {
        window.FirebaseService.updateSyncStatusPill(window.FirebaseService.currentUser ? 'synced' : 'guest');
      }
    }

    refreshHeaderStats() {
      const pool = this.getAllWordsPool();
      const stats = this.sessionManager.getStats(pool);
      this.dom.sessionBadge.textContent = `#${this.sessionManager.sessionData.totalSessions}`;
      this.dom.streakBadge.textContent = `🔥 ${this.sessionManager.sessionData.streak}d`;
      this.dom.reviewBadge.textContent = stats.dueReview > 0 ? `⚠️ ${stats.dueReview} due` : `⚠️ ${stats.review}`;
      if (this.dom.reviewBadge.parentElement) {
        this.dom.reviewBadge.parentElement.title = `${stats.dueReview} due today (${stats.review} total in mistake review queue)`;
      }

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

      // Reset live accuracy counter
      if (this.dom.accuracyCounter) {
        const texts = I18N[this.settings.lang];
        this.dom.accuracyCounter.innerHTML = `<span data-i18n="accuracy">${texts.accuracy || 'Accuracy'}</span>: 100%`;
      }

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
      this.dom.nextButton.disabled = true;

      const item = this.currentDeck[this.currentIndex];
      const total = this.currentDeck.length;
      const texts = I18N[this.settings.lang];

      // Progress bar & counters
      this.dom.cardCounter.textContent = `${texts.cardLabel || 'Card'} ${this.currentIndex + 1} / ${total}`;
      const pct = Math.round(((this.currentIndex) / total) * 100);
      this.dom.progressBar.style.width = `${pct}%`;

      const subhintEl = document.getElementById('arena-subhint');
      if (subhintEl) subhintEl.textContent = texts.arenaSubhint;

      // Word & Badges
      this.dom.arenaPosBadge.textContent = item.pos.toUpperCase();
      this.dom.arenaLevelBadge.textContent = item.level;

      // Render Question prompt according to selected Mode
      const isEn = this.settings.lang === 'en';
      let promptTitle = "";
      let correctAnswerText = "";

      if (this.settings.mode === 'de_meaning' || this.settings.mode === 'mistakes' || this.settings.mode === 'sprint') {
        promptTitle = item.de;
        correctAnswerText = isEn ? item.en : item.tr;
      } else if (this.settings.mode === 'meaning_de') {
        promptTitle = isEn ? item.en : item.tr;
        correctAnswerText = item.de;
      } else if (this.settings.mode === 'synonyms') {
        promptTitle = item.de;
        correctAnswerText = (item.synonyms && item.synonyms.length > 0) ? item.synonyms[0] : (isEn ? item.en : item.tr);
      } else if (this.settings.mode === 'antonyms') {
        promptTitle = item.de;
        correctAnswerText = (item.antonyms && item.antonyms.length > 0) ? item.antonyms[0] : (isEn ? item.en : item.tr);
      }

      this.dom.arenaWordDe.textContent = promptTitle;

      // Auto TTS if audio is on and prompt is German
      if (this.settings.audio && (this.settings.mode === 'de_meaning' || this.settings.mode === 'synonyms' || this.settings.mode === 'antonyms' || this.settings.mode === 'mistakes' || this.settings.mode === 'sprint')) {
        try {
          this.playSpeech(item.de);
        } catch (e) {
          console.warn("Auto TTS playback failed:", e);
        }
      }

      // Generate 4 Distractor Options
      const options = this.generateOptions(item, correctAnswerText);
      this.dom.optionsGrid.innerHTML = '';

      options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-option-btn';
        btn.setAttribute('tabindex', '0');
        btn.innerHTML = `<span class="opt-key">${i + 1}</span><span class="opt-text">${optText}</span>`;
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
      let candidates;
      if (this.settings.mode === 'synonyms') {
        candidates = pool.filter(w => w.id !== currentItem.id && w.pos === currentItem.pos && w.synonyms && w.synonyms.length > 0);
        if (candidates.length < 5) candidates = pool.filter(w => w.id !== currentItem.id && w.pos === currentItem.pos);
      } else if (this.settings.mode === 'antonyms') {
        candidates = pool.filter(w => w.id !== currentItem.id && w.pos === currentItem.pos && w.antonyms && w.antonyms.length > 0);
        if (candidates.length < 5) candidates = pool.filter(w => w.id !== currentItem.id && w.pos === currentItem.pos);
      } else {
        candidates = pool.filter(w => w.id !== currentItem.id && w.pos === currentItem.pos);
      }
      const fallback = pool.filter(w => w.id !== currentItem.id);

      const sampleFrom = candidates.length >= 5 ? candidates : fallback;
      const shuffled = this.deckGenerator.shuffle(sampleFrom);

      for (const cand of shuffled) {
        if (distractors.size >= 4) break;
        let val = "";
        if (this.settings.mode === 'de_meaning' || this.settings.mode === 'mistakes' || this.settings.mode === 'sprint') {
          val = isEn ? cand.en : cand.tr;
        } else if (this.settings.mode === 'meaning_de') {
          val = cand.de;
        } else if (this.settings.mode === 'synonyms') {
          // Exclusively German words: prefer candidate's synonym, otherwise candidate German headword
          val = (cand.synonyms && cand.synonyms.length > 0) ? cand.synonyms[0] : cand.de;
        } else if (this.settings.mode === 'antonyms') {
          // Exclusively German words: prefer candidate's antonym, otherwise candidate German headword
          val = (cand.antonyms && cand.antonyms.length > 0) ? cand.antonyms[0] : cand.de;
        }
        if (val && val !== correctAnswer && !distractors.has(val)) {
          distractors.add(val);
        }
      }

      // If pool was small and we still need distractors, fill with other German headwords (or target language meanings)
      if (distractors.size < 4) {
        for (const cand of this.deckGenerator.shuffle(fallback)) {
          if (distractors.size >= 4) break;
          let val = "";
          if (this.settings.mode === 'de_meaning' || this.settings.mode === 'mistakes' || this.settings.mode === 'sprint') {
            val = isEn ? cand.en : cand.tr;
          } else if (this.settings.mode === 'meaning_de') {
            val = cand.de;
          } else if (this.settings.mode === 'synonyms') {
            val = (cand.synonyms && cand.synonyms.length > 0) ? cand.synonyms[0] : cand.de;
          } else if (this.settings.mode === 'antonyms') {
            val = (cand.antonyms && cand.antonyms.length > 0) ? cand.antonyms[0] : cand.de;
          } else {
            val = cand.de;
          }
          if (val && val !== correctAnswer && !distractors.has(val)) {
            distractors.add(val);
          }
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
        const labelEl = b.querySelector('.opt-text') || b.querySelector('.opt-label');
        const label = labelEl ? labelEl.textContent.trim() : b.textContent.trim();
        if (label.toLowerCase() === correct.trim().toLowerCase()) {
          b.classList.add('correct');
        }
        b.classList.add('disabled');
        b.disabled = true;
      });

      if (isCorrect) {
        btn.classList.add('correct');
        this.sessionCorrect++;
      } else {
        btn.classList.add('wrong');
        this.sessionWrong++;
      }

      // Update Accuracy Counter in live UI
      const totalAnswered = this.sessionCorrect + this.sessionWrong;
      const accPct = totalAnswered > 0 ? Math.round((this.sessionCorrect / totalAnswered) * 100) : 100;
      if (this.dom.accuracyCounter) {
        const texts = I18N[this.settings.lang];
        this.dom.accuracyCounter.innerHTML = `<span data-i18n="accuracy">${texts.accuracy || 'Accuracy'}</span>: ${accPct}%`;
      }

      // Record in Session Manager
      this.sessionManager.recordResult(item.id, isCorrect);
      if (this.settings.mode === 'sprint') {
        this.sprintCardsAnswered++;
        if (isCorrect) this.sprintCorrectCount++;
      }
      this.refreshHeaderStats();

      // Show Rich Explanation Card
      const texts = I18N[this.settings.lang];
      this.dom.explainExampleDe.textContent = item.example;
      this.dom.explainExampleTrans.textContent = this.settings.lang === 'en' ? item.example_en : item.example_tr;

      let synAntHtml = "";
      if (item.synonyms && item.synonyms.length > 0) {
        synAntHtml += `<div class="tag-row"><strong>${texts.synonymsLabel}:</strong> ${item.synonyms.map(s => `<span class="word-tag syn">${s}</span>`).join(' ')}</div>`;
      }
      if (item.antonyms && item.antonyms.length > 0) {
        synAntHtml += `<div class="tag-row"><strong>${texts.antonymsLabel}:</strong> ${item.antonyms.map(a => `<span class="word-tag ant">${a}</span>`).join(' ')}</div>`;
      }
      this.dom.explainSynAnt.innerHTML = synAntHtml;

      this.dom.explanationCard.classList.remove('hidden');
      this.dom.nextButton.classList.remove('hidden');
      this.dom.nextButton.disabled = false;
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

      document.getElementById('btn-restart-deck')?.addEventListener('click', () => {
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
      document.getElementById('btn-switch-core')?.addEventListener('click', () => {
        if (this.dom.modeChips && this.dom.modeChips[0]) {
          this.dom.modeChips[0].click();
        }
      });
    }

    startSprintMode() {
      this.settings.mode = 'sprint';
      this.dom.modeChips.forEach(chip => {
        const isActive = chip.dataset.mode === 'sprint';
        chip.classList.toggle('active', isActive);
        chip.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      if (this.dom.timerPill) {
        this.dom.timerPill.classList.remove('hidden');
        this.dom.timerPill.classList.remove('urgent');
      }
      this.sprintTimeRemaining = 120;
      this.sprintCardsAnswered = 0;
      this.sprintCorrectCount = 0;
      this.updateTimerDisplay();

      clearInterval(this.sprintTimer);
      this.sprintTimer = setInterval(() => this.tickSprintTimer(), 1000);

      this.currentDeck = this.deckGenerator.generateDeck(this.getAllWordsPool(), {
        mode: 'sprint',
        level: this.settings.level,
        deckSize: 40
      });
      this.currentIndex = 0;
      this.renderCurrentQuestion();
    }

    stopSprintTimer() {
      clearInterval(this.sprintTimer);
      this.sprintTimer = null;
      if (this.dom.timerPill) {
        this.dom.timerPill.classList.add('hidden');
        this.dom.timerPill.classList.remove('urgent');
      }
    }

    tickSprintTimer() {
      if (this.sprintTimeRemaining > 0) {
        this.sprintTimeRemaining--;
        this.updateTimerDisplay();
        if (this.sprintTimeRemaining <= 30 && this.dom.timerPill) {
          this.dom.timerPill.classList.add('urgent');
        }
      } else {
        this.finishSprint();
      }
    }

    updateTimerDisplay() {
      if (!this.dom.timerBadge) return;
      const mins = Math.floor(this.sprintTimeRemaining / 60);
      const secs = this.sprintTimeRemaining % 60;
      this.dom.timerBadge.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    finishSprint() {
      this.stopSprintTimer();
      const acc = this.sprintCardsAnswered > 0 
        ? Math.round((this.sprintCorrectCount / this.sprintCardsAnswered) * 100) 
        : 0;
      const speedWpm = (this.sprintCardsAnswered / 2).toFixed(1);

      if (this.dom.sprintMetricScore) this.dom.sprintMetricScore.textContent = this.sprintCardsAnswered;
      if (this.dom.sprintMetricAccuracy) this.dom.sprintMetricAccuracy.textContent = `${acc}%`;
      if (this.dom.sprintMetricSpeed) this.dom.sprintMetricSpeed.textContent = speedWpm;

      if (this.dom.sprintModal) {
        this.dom.sprintModal.classList.remove('hidden');
      }
    }

    playSpeech(text, rate = 0.92) {
      try {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        if (!text) return;
        const clean = text.split('(')[0].trim();
        const utter = new SpeechSynthesisUtterance(clean);
        utter.lang = 'de-DE';

        // Select highest quality German voice if available
        try {
          const voices = window.speechSynthesis.getVoices();
          const deVoices = voices.filter(v => v.lang.startsWith('de'));
          const bestVoice = deVoices.find(v => 
            v.name.includes('Natural') || 
            v.name.includes('Google') || 
            v.name.includes('Premium') ||
            v.name.includes('Neural') ||
            v.name.includes('Hedda') ||
            v.name.includes('Katja')
          ) || deVoices[0];
          if (bestVoice) utter.voice = bestVoice;
        } catch (e) {
          // Fallback to default
        }

        utter.rate = (typeof rate === 'number' && rate > 0) ? rate : 0.92;
        window.speechSynthesis.speak(utter);
      } catch (err) {
        console.warn('TTS playback error:', err);
      }
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

    // --- User Account, Cloud Sync & Community Feedback Methods ---
    setupAuthAndFeedback() {
      // Connect to Firebase auth state
      if (window.FirebaseService) {
        window.FirebaseService.onAuthChange(async (user) => {
          this.renderAuthState(user);
          if (user) {
            // Load and merge cloud progress
            try {
              const cloudData = await window.FirebaseService.fetchCloudProgress();
              if (cloudData) {
                this.sessionManager.mergeCloudProgress(cloudData);
                this.refreshHeaderStats();
                this.startNewDeck();
              }
            } catch (err) {
              console.warn("Cloud progress merge error:", err);
            }
          }
        });
      }

      // Open / Close Auth Modal
      if (this.dom.btnUserAccount) {
        this.dom.btnUserAccount.addEventListener('click', () => this.openAuthModal());
      }
      if (this.dom.syncStatusPill) {
        this.dom.syncStatusPill.addEventListener('click', () => this.openAuthModal());
      }
      if (this.dom.btnCloseAuth) {
        this.dom.btnCloseAuth.addEventListener('click', () => this.closeAuthModal());
      }
      if (this.dom.authModal) {
        this.dom.authModal.addEventListener('click', (e) => {
          if (e.target === this.dom.authModal) this.closeAuthModal();
        });
      }

      // Auth Tabs (Sign In / Register)
      let authMode = 'login';
      if (this.dom.tabLogin && this.dom.tabRegister) {
        this.dom.tabLogin.addEventListener('click', () => {
          authMode = 'login';
          this.dom.tabLogin.classList.add('active');
          this.dom.tabRegister.classList.remove('active');
          if (this.dom.groupDisplayName) this.dom.groupDisplayName.style.display = 'none';
          const texts = I18N[this.settings.lang];
          if (this.dom.authSubmitText) this.dom.authSubmitText.textContent = texts.signInAction;
        });

        this.dom.tabRegister.addEventListener('click', () => {
          authMode = 'register';
          this.dom.tabRegister.classList.add('active');
          this.dom.tabLogin.classList.remove('active');
          if (this.dom.groupDisplayName) this.dom.groupDisplayName.style.display = 'block';
          const texts = I18N[this.settings.lang];
          if (this.dom.authSubmitText) this.dom.authSubmitText.textContent = texts.signUpAction;
        });
      }

      // Auth Form Submit
      if (this.dom.authForm) {
        this.dom.authForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const email = (this.dom.authEmail ? this.dom.authEmail.value : '').trim();
          const password = (this.dom.authPassword ? this.dom.authPassword.value : '').trim();
          const displayName = (this.dom.authDisplayName ? this.dom.authDisplayName.value : '').trim();
          const texts = I18N[this.settings.lang];

          if (!email || !password) return;
          this.setAuthNotice("", "");

          try {
            if (!window.FirebaseService) throw new Error("Firebase Service is not available.");
            if (authMode === 'login') {
              await window.FirebaseService.signIn(email, password);
            } else {
              await window.FirebaseService.signUp(email, password, displayName);
            }
            this.setAuthNotice(texts.authSuccess, "success");
            setTimeout(() => this.closeAuthModal(), 1200);
          } catch (err) {
            this.setAuthNotice(err.message, "error");
          }
        });
      }

      // Google Sign-In
      if (this.dom.btnGoogleAuth) {
        this.dom.btnGoogleAuth.addEventListener('click', async () => {
          const texts = I18N[this.settings.lang];
          this.setAuthNotice("", "");
          try {
            if (!window.FirebaseService) throw new Error("Firebase Service is not available.");
            await window.FirebaseService.signInWithGoogle();
            this.setAuthNotice(texts.authSuccess, "success");
            setTimeout(() => this.closeAuthModal(), 1200);
          } catch (err) {
            this.setAuthNotice(err.message, "error");
          }
        });
      }

      // Sign Out
      if (this.dom.btnSignOut) {
        this.dom.btnSignOut.addEventListener('click', async () => {
          const texts = I18N[this.settings.lang];
          try {
            if (window.FirebaseService) await window.FirebaseService.signOut();
            this.setAuthNotice(texts.authLoggedOut, "success");
            setTimeout(() => this.closeAuthModal(), 1000);
          } catch (err) {
            console.warn("Sign out error:", err);
          }
        });
      }

      // Sync Now
      if (this.dom.btnCloudSyncNow) {
        this.dom.btnCloudSyncNow.addEventListener('click', async () => {
          const texts = I18N[this.settings.lang];
          try {
            if (window.FirebaseService) {
              await window.FirebaseService.syncProgress(
                this.sessionManager.getProgressMap(),
                this.sessionManager.sessionData,
                this.settings
              );
              this.setAuthNotice(texts.syncSuccess, "success");
            }
          } catch (err) {
            this.setAuthNotice(err.message, "error");
          }
        });
      }

      // Community Feedback Modal Events
      const openFb = () => this.openFeedbackModal();
      if (this.dom.btnFloatingFeedback) this.dom.btnFloatingFeedback.addEventListener('click', openFb);
      if (this.dom.btnFooterFeedback) this.dom.btnFooterFeedback.addEventListener('click', openFb);
      if (this.dom.btnCloseFeedback) this.dom.btnCloseFeedback.addEventListener('click', () => this.closeFeedbackModal());
      if (this.dom.feedbackModal) {
        this.dom.feedbackModal.addEventListener('click', (e) => {
          if (e.target === this.dom.feedbackModal) this.closeFeedbackModal();
        });
      }

      // Feedback Star Rating
      if (this.dom.feedbackStars) {
        const stars = this.dom.feedbackStars.querySelectorAll('span');
        stars.forEach(star => {
          const starVal = parseInt(star.getAttribute('data-star') || '5', 10);
          
          star.addEventListener('click', () => {
            this.dom.feedbackStars.setAttribute('data-rating', starVal);
            this.updateFeedbackRatingDisplay(starVal, false);
          });

          star.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') {
              e.preventDefault();
              this.dom.feedbackStars.setAttribute('data-rating', starVal);
              this.updateFeedbackRatingDisplay(starVal, false);
            }
          });

          star.addEventListener('mouseenter', () => {
            this.updateFeedbackRatingDisplay(starVal, true);
          });
        });

        this.dom.feedbackStars.addEventListener('mouseleave', () => {
          const curRating = parseInt(this.dom.feedbackStars.getAttribute('data-rating') || '5', 10);
          this.updateFeedbackRatingDisplay(curRating, false);
        });

        const initialRating = parseInt(this.dom.feedbackStars.getAttribute('data-rating') || '5', 10);
        this.updateFeedbackRatingDisplay(initialRating, false);
      }

      // Feedback Submit
      if (this.dom.feedbackForm) {
        this.dom.feedbackForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const username = (this.dom.feedbackUsername ? this.dom.feedbackUsername.value : '').trim() || 'Anonymous';
          const location = (this.dom.feedbackLocation ? this.dom.feedbackLocation.value : '').trim();
          const category = this.dom.feedbackCategory ? this.dom.feedbackCategory.value : 'General';
          const rating = parseInt(this.dom.feedbackStars ? this.dom.feedbackStars.getAttribute('data-rating') || '5' : '5', 10);
          const message = (this.dom.feedbackMessage ? this.dom.feedbackMessage.value : '').trim();
          const texts = I18N[this.settings.lang];

          if (!message) return;
          if (this.dom.btnSubmitFeedback) this.dom.btnSubmitFeedback.disabled = true;

          try {
            if (window.FirebaseService) {
              await window.FirebaseService.submitFeedback({ username, location, category, rating, message });
            }
            this.setFeedbackNotice(texts.feedbackSuccess, "success");
            if (this.dom.feedbackForm) this.dom.feedbackForm.reset();
            if (this.dom.feedbackStars) {
              this.dom.feedbackStars.setAttribute('data-rating', '5');
              this.updateFeedbackRatingDisplay(5, false);
            }
            setTimeout(() => {
              this.closeFeedbackModal();
              if (this.dom.btnSubmitFeedback) this.dom.btnSubmitFeedback.disabled = false;
            }, 1800);
          } catch (err) {
            this.setFeedbackNotice(err.message || texts.feedbackError, "error");
            if (this.dom.btnSubmitFeedback) this.dom.btnSubmitFeedback.disabled = false;
          }
        });
      }
    }

    renderAuthState(user) {
      if (user) {
        if (this.dom.authLoggedInView) this.dom.authLoggedInView.style.display = 'block';
        if (this.dom.authLoggedOutView) this.dom.authLoggedOutView.style.display = 'none';
        if (this.dom.authUserEmail) this.dom.authUserEmail.textContent = user.displayName || user.email || 'User';
        if (window.FirebaseService) window.FirebaseService.updateSyncStatusPill("synced");
      } else {
        if (this.dom.authLoggedInView) this.dom.authLoggedInView.style.display = 'none';
        if (this.dom.authLoggedOutView) this.dom.authLoggedOutView.style.display = 'block';
        if (window.FirebaseService) window.FirebaseService.updateSyncStatusPill("guest");
      }
    }

    openAuthModal() {
      if (!this.dom.authModal) return;
      this.setAuthNotice("", "");
      this.dom.authModal.classList.remove('hidden');
    }

    closeAuthModal() {
      if (!this.dom.authModal) return;
      this.dom.authModal.classList.add('hidden');
    }

    setAuthNotice(msg, type) {
      if (!this.dom.authNoticeMsg) return;
      if (!msg) {
        this.dom.authNoticeMsg.style.display = 'none';
        this.dom.authNoticeMsg.className = 'auth-notice-msg';
        this.dom.authNoticeMsg.textContent = '';
      } else {
        this.dom.authNoticeMsg.style.display = 'block';
        this.dom.authNoticeMsg.className = `auth-notice-msg ${type}`;
        this.dom.authNoticeMsg.textContent = msg;
      }
    }

    updateFeedbackRatingDisplay(rating, isPreview = false) {
      if (!this.dom.feedbackStars) return;
      const stars = this.dom.feedbackStars.querySelectorAll('span');
      stars.forEach((s, idx) => {
        const starVal = idx + 1;
        if (isPreview) {
          s.classList.toggle('hover', starVal <= rating);
        } else {
          s.classList.remove('hover');
          s.classList.toggle('selected', starVal <= rating);
          s.setAttribute('aria-checked', starVal === rating ? 'true' : 'false');
        }
      });

      if (this.dom.feedbackRatingText) {
        const texts = I18N[this.settings.lang];
        const labelMap = {
          5: texts.ratingExcellent,
          4: texts.ratingVeryGood,
          3: texts.ratingGood,
          2: texts.ratingNeedsImprovement,
          1: texts.ratingPoor
        };
        this.dom.feedbackRatingText.textContent = labelMap[rating] || `${rating}/5`;
      }
    }

    openFeedbackModal() {
      if (!this.dom.feedbackModal) return;
      this.setFeedbackNotice("", "");
      this.dom.feedbackModal.classList.remove('hidden');
      if (this.dom.feedbackStars) {
        const curRating = parseInt(this.dom.feedbackStars.getAttribute('data-rating') || '5', 10);
        this.updateFeedbackRatingDisplay(curRating, false);
      }
      if (this.dom.feedbackLocation && window.FirebaseService) {
        this.dom.feedbackLocation.value = window.FirebaseService.detectLocation();
      }
    }

    closeFeedbackModal() {
      if (!this.dom.feedbackModal) return;
      this.dom.feedbackModal.classList.add('hidden');
    }

    setFeedbackNotice(msg, type) {
      if (!this.dom.feedbackNoticeMsg) return;
      if (!msg) {
        this.dom.feedbackNoticeMsg.style.display = 'none';
        this.dom.feedbackNoticeMsg.className = 'auth-notice-msg';
        this.dom.feedbackNoticeMsg.textContent = '';
      } else {
        this.dom.feedbackNoticeMsg.style.display = 'block';
        this.dom.feedbackNoticeMsg.className = `auth-notice-msg ${type}`;
        this.dom.feedbackNoticeMsg.textContent = msg;
      }
    }
  }

  // Expose globally for HTML onclick handlers
  function initVocabApp() {
    if (!window.VocabApp) {
      window.VocabApp = new VocabTrainerApp();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVocabApp);
  } else {
    initVocabApp();
  }

})();
