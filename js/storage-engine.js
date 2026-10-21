/**
 * DeutschLernen Suite v2.0 - Unified Storage Engine & Offline State Manager
 * 
 * Features:
 * 1. Single centralized namespace: 'deutschLernen_v2_state' in localStorage
 * 2. Automatic migration from legacy keys (deutschlernen_streak, fehlerheft_items, etc.)
 * 3. Cross-tab synchronization via 'storage' window events
 * 4. SuperMemo SM-2 Spaced Repetition engine (easeFactor, interval, repetitions, nextReviewDate)
 * 5. Unified Fehlerheft mistake repository (vocab, grammar, reading, listening, lid, speaking, writing)
 * 6. User profile manager (target exam date, active track, Bundesland, streak, XP)
 * 7. IndexedDB audio/deck storage with memory/fallback
 * 8. JSON Export / Import utility for 100% data preservation
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.StorageEngine = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const STORAGE_KEY = 'deutschLernen_v2_state';
  const DB_NAME = 'deutschLernen_idb_v2';
  const DB_VERSION = 1;
  const STORE_AUDIO = 'audio_recordings';

  // Default Initial State
  const defaultState = {
    version: '2.0.0',
    lastUpdated: new Date().toISOString(),
    userProfile: {
      targetExamDate: '',
      activeTrack: 'telc_b1', // 'telc_b1' | 'bamf_lid' | 'b2_pro'
      bundesland: 'NRW',      // default North Rhine-Westphalia (NW)
      dailyStreak: 0,
      lastStreakDate: '',
      xp: 0,
      displayName: 'Lerner',
      licenseKey: '',
      licensePlan: 'free',
      credits: 1,
      theme: 'dark',
      lang: 'en'
    },
    examScores: {
      lesen: 0,
      sprachbausteine: 0,
      hoeren: 0,
      schreiben: 0,
      sprechen: 0,
      lidScore: 0,
      lastUpdated: null
    },
    license: {
      activeKey: '',
      plan: 'free',
      leaseToken: '',
      leaseExpiresAt: 0,
      lastHandshake: 0,
      remainingCredits: 1,
      instanceId: '',
      deviceFingerprint: ''
    },
    sm2DeckState: {
      // wordId -> { easeFactor, interval, repetitions, nextReviewDate, mistakeCount, lastReviewed }
    },
    fehlerheft: [
      // { id, word, meaning, example, mistakeType, source, timestamp, reviewCount, lastReviewed }
    ],
    lidState: {
      selectedBundesland: 'NW',
      starredQuestions: [],
      history: []
    },
    speakingHistory: []
  };

  // Safe LocalStorage Wrapper
  const safeLS = {
    get(key) {
      try {
        if (typeof localStorage !== 'undefined') return localStorage.getItem(key);
      } catch (e) {
        console.warn('[StorageEngine] Read error:', e);
      }
      return null;
    },
    set(key, val) {
      try {
        if (typeof localStorage !== 'undefined') localStorage.setItem(key, String(val));
      } catch (e) {
        console.warn('[StorageEngine] Write error:', e);
      }
    },
    remove(key) {
      try {
        if (typeof localStorage !== 'undefined') localStorage.removeItem(key);
      } catch (e) {
        console.warn('[StorageEngine] Remove error:', e);
      }
    }
  };

  class DeutschLernenStorageEngine {
    constructor() {
      this.state = this._loadInitialState();
      this.listeners = new Set();
      this.db = null;
      this._initIndexedDB();
      this._bindCrossTabSync();
    }

    /* ----------------------------------------------------
     * 1. State Persistence & Migration
     * ---------------------------------------------------- */
    _loadInitialState() {
      const raw = safeLS.get(STORAGE_KEY);
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          return this._mergeWithDefaults(parsed);
        } catch (e) {
          console.error('[StorageEngine] Error parsing saved state, restoring backup or defaults', e);
        }
      }
      // First run: migrate legacy keys
      const migrated = this._migrateLegacyKeys();
      this._persist(migrated);
      return migrated;
    }

    _mergeWithDefaults(loaded) {
      return {
        ...defaultState,
        ...loaded,
        userProfile: { ...defaultState.userProfile, ...(loaded?.userProfile || {}) },
        license: { ...defaultState.license, ...(loaded?.license || {}) },
        examScores: { ...defaultState.examScores, ...(loaded?.examScores || {}) },
        sm2DeckState: { ...(loaded?.sm2DeckState || {}) },
        fehlerheft: Array.isArray(loaded?.fehlerheft) ? loaded.fehlerheft : [],
        lidState: { ...defaultState.lidState, ...(loaded?.lidState || {}) },
        speakingHistory: Array.isArray(loaded?.speakingHistory) ? loaded.speakingHistory : []
      };
    }

    _migrateLegacyKeys() {
      const state = JSON.parse(JSON.stringify(defaultState));

      // Theme & Lang
      state.userProfile.theme = safeLS.get('deutschlernen_theme') || safeLS.get('telc_theme') || 'dark';
      state.userProfile.lang = safeLS.get('deutschlernen_lang') || safeLS.get('site_lang') || safeLS.get('telc_lang') || 'en';

      // Streak & XP
      const rawStreak = safeLS.get('deutschlernen_streak') || safeLS.get('vocab_streak');
      if (rawStreak) state.userProfile.dailyStreak = parseInt(rawStreak, 10) || 0;

      const rawXp = safeLS.get('deutschlernen_daily_xp');
      if (rawXp) state.userProfile.xp = parseInt(rawXp, 10) || 0;

      // Track & Goal
      const rawGoal = safeLS.get('deutschlernen_goal') || safeLS.get('deutschlernen_track');
      if (rawGoal) {
        if (rawGoal.includes('lid')) state.userProfile.activeTrack = 'bamf_lid';
        else if (rawGoal.includes('b2')) state.userProfile.activeTrack = 'b2_pro';
        else state.userProfile.activeTrack = 'telc_b1';
      }

      // Bundesland
      const rawBL = safeLS.get('deutschlernen_lid_state');
      if (rawBL) {
        state.lidState.selectedBundesland = rawBL;
        state.userProfile.bundesland = rawBL === 'NW' ? 'NRW' : rawBL;
      }

      // Pro Status, Credits & Offline Lease
      const rawLic = safeLS.get('deutschlernen_pro_license');
      if (rawLic) {
        state.userProfile.licenseKey = rawLic;
        state.userProfile.licensePlan = safeLS.get('deutschlernen_pro_plan') || 'pass-30';
        state.license.activeKey = rawLic;
        state.license.plan = state.userProfile.licensePlan;
      }
      const rawCreds = safeLS.get('deutschlernen_letter_credits');
      if (rawCreds !== null) {
        const c = parseInt(rawCreds, 10) || 0;
        state.userProfile.credits = c;
        state.license.remainingCredits = c;
      }
      const rawLease = safeLS.get('deutschlernen_lease_expires');
      if (rawLease) {
        state.license.leaseExpiresAt = parseInt(rawLease, 10) || 0;
      }
      const rawToken = safeLS.get('deutschlernen_lease_token');
      if (rawToken) {
        state.license.leaseToken = rawToken;
      }
      const rawInst = safeLS.get('deutschlernen_instance_id');
      if (rawInst) {
        state.license.instanceId = rawInst;
      }

      // Fehlerheft
      const rawFehler = safeLS.get('deutschlernen_fehlerheft_items') || safeLS.get('fehlerheft_items');
      if (rawFehler) {
        try {
          const list = JSON.parse(rawFehler);
          if (Array.isArray(list)) {
            state.fehlerheft = list.map(item => ({
              id: item.id || ('err-' + Math.random().toString(36).substr(2, 7)),
              word: item.word || item.original_snippet || 'Grammatikpunkt',
              meaning: item.meaning || item.corrected_snippet || '',
              example: item.example || item.explanation || '',
              mistakeType: item.mistakeType || 'vocab',
              source: item.source || 'trainer',
              timestamp: item.timestamp || Date.now(),
              reviewCount: item.reviewCount || 1,
              lastReviewed: item.lastReviewed || Date.now()
            }));
          }
        } catch (_) {}
      }

      // SM2 Progress
      const rawProgress = safeLS.get('deutschlernen_vocab_progress') || safeLS.get('deutschlernen_srs_words');
      if (rawProgress) {
        try {
          const pMap = JSON.parse(rawProgress);
          Object.keys(pMap).forEach(key => {
            const entry = pMap[key];
            state.sm2DeckState[key] = {
              easeFactor: entry.easeFactor || 2.5,
              interval: entry.interval || 1,
              repetitions: entry.streak || entry.correctCount || 0,
              nextReviewDate: entry.nextReviewDate || new Date().toISOString().slice(0, 10),
              mistakeCount: entry.wrongCount || 0,
              lastReviewed: Date.now()
            };
          });
        } catch (_) {}
      }

      // Exam scores
      state.examScores.lesen = parseFloat(safeLS.get('telc_lesen_score') || '0');
      state.examScores.sprachbausteine = parseFloat(safeLS.get('telc_sprachbausteine_score') || '0');
      state.examScores.hoeren = parseFloat(safeLS.get('telc_hoeren_score') || '0');
      state.examScores.schreiben = parseFloat(safeLS.get('telc_letter_score') || '0');
      state.examScores.sprechen = parseFloat(safeLS.get('telc_voice_score') || '0');

      return state;
    }

    _persist(newState) {
      this.state = newState;
      this.state.lastUpdated = new Date().toISOString();
      safeLS.set(STORAGE_KEY, JSON.stringify(this.state));

      // Mirror critical fields to legacy keys for older components
      this._mirrorLegacyKeys();

      // Notify in-tab subscribers
      this._notifyListeners();
    }

    _mirrorLegacyKeys() {
      try {
        const up = this.state.userProfile;
        safeLS.set('deutschlernen_theme', up.theme);
        safeLS.set('site_theme', up.theme);
        safeLS.set('deutschlernen_lang', up.lang);
        safeLS.set('site_lang', up.lang);
        safeLS.set('deutschlernen_streak', String(up.dailyStreak));
        safeLS.set('deutschlernen_daily_xp', String(up.xp));
        safeLS.set('deutschlernen_pro_license', up.licenseKey);
        safeLS.set('deutschlernen_pro_plan', up.licensePlan);
        safeLS.set('deutschlernen_letter_credits', String(up.credits));
        safeLS.set('deutschlernen_fehlerheft_items', JSON.stringify(this.state.fehlerheft.slice(0, 100)));
        safeLS.set('deutschlernen_lid_state', this.state.lidState.selectedBundesland || 'NW');
        
        // Mirror license & offline lease
        if (this.state.license) {
          safeLS.set('deutschlernen_lease_expires', String(this.state.license.leaseExpiresAt || 0));
          if (this.state.license.leaseToken) safeLS.set('deutschlernen_lease_token', this.state.license.leaseToken);
          if (this.state.license.instanceId) safeLS.set('deutschlernen_instance_id', this.state.license.instanceId);
        }

        // Mirror exam scores
        if (this.state.examScores.lesen) safeLS.set('telc_lesen_score', String(this.state.examScores.lesen));
        if (this.state.examScores.sprachbausteine) safeLS.set('telc_sprachbausteine_score', String(this.state.examScores.sprachbausteine));
        if (this.state.examScores.hoeren) safeLS.set('telc_hoeren_score', String(this.state.examScores.hoeren));
        if (this.state.examScores.schreiben) safeLS.set('telc_letter_score', String(this.state.examScores.schreiben));
        if (this.state.examScores.sprechen) safeLS.set('telc_voice_score', String(this.state.examScores.sprechen));
      } catch (e) {
        console.warn('[StorageEngine] Mirroring error:', e);
      }
    }

    _bindCrossTabSync() {
      if (typeof window === 'undefined') return;
      window.addEventListener('storage', (event) => {
        if (event.key === STORAGE_KEY && event.newValue) {
          try {
            const parsed = JSON.parse(event.newValue);
            this.state = this._mergeWithDefaults(parsed);
            this._notifyListeners(true);
          } catch (e) {
            console.warn('[StorageEngine] Cross-tab parse error:', e);
          }
        }
      });
    }

    _notifyListeners(isCrossTab = false) {
      this.listeners.forEach(cb => {
        try {
          cb(this.state, isCrossTab);
        } catch (err) {
          console.error('[StorageEngine] Listener error:', err);
        }
      });
    }

    onStateChange(callback) {
      if (typeof callback === 'function') {
        this.listeners.add(callback);
        return () => this.listeners.delete(callback);
      }
      return () => {};
    }

    getState() {
      return JSON.parse(JSON.stringify(this.state));
    }

    /* ----------------------------------------------------
     * 2. User Profile Management & Streak / XP
     * ---------------------------------------------------- */
    getUserProfile() {
      return { ...this.state.userProfile };
    }

    updateUserProfile(partial) {
      const state = this.getState();
      state.userProfile = {
        ...state.userProfile,
        ...partial
      };
      this._persist(state);
      return state.userProfile;
    }

    checkAndUpdateDailyStreak() {
      const today = new Date().toISOString().slice(0, 10);
      const state = this.getState();
      const last = state.userProfile.lastStreakDate;

      if (!last) {
        state.userProfile.dailyStreak = 1;
        state.userProfile.lastStreakDate = today;
      } else if (last !== today) {
        const lastDate = new Date(last);
        const currDate = new Date(today);
        const diffDays = Math.round((currDate - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          state.userProfile.dailyStreak += 1;
          state.userProfile.lastStreakDate = today;
        } else if (diffDays > 1) {
          state.userProfile.dailyStreak = 1;
          state.userProfile.lastStreakDate = today;
        }
      }

      this._persist(state);
      return state.userProfile.dailyStreak;
    }

    addXP(points) {
      const state = this.getState();
      state.userProfile.xp = (state.userProfile.xp || 0) + Number(points || 0);
      this._persist(state);
      return state.userProfile.xp;
    }

    /* ----------------------------------------------------
     * 2.1 License, Device Limits & Offline Lease Engine
     * ---------------------------------------------------- */
    getDeviceFingerprint() {
      let fp = safeLS.get('deutschlernen_device_fp');
      if (!fp) {
        fp = 'fp-' + Math.random().toString(36).substring(2, 10) + '-' + Date.now().toString(36);
        safeLS.set('deutschlernen_device_fp', fp);
      }
      return fp;
    }

    getLicense() {
      const state = this.getState();
      const lic = state.license || { ...defaultState.license };
      const now = Date.now();
      const hasKey = Boolean(lic.activeKey || state.userProfile?.licenseKey);
      const isPro = hasKey && (lic.plan !== 'free' || state.userProfile?.licensePlan !== 'free');
      const offlineLeaseValid = isPro && (lic.leaseExpiresAt ? lic.leaseExpiresAt > now : true);

      return {
        ...lic,
        activeKey: lic.activeKey || state.userProfile?.licenseKey || '',
        plan: lic.plan || state.userProfile?.licensePlan || 'free',
        remainingCredits: typeof lic.remainingCredits === 'number' ? lic.remainingCredits : (state.userProfile?.credits || 0),
        isPro,
        offlineLeaseValid
      };
    }

    saveLicenseLease(leaseData = {}) {
      const state = this.getState();
      const now = Date.now();
      const key = leaseData.licenseKey || leaseData.key || state.license?.activeKey || state.userProfile?.licenseKey || '';
      const plan = leaseData.plan || 'pass-30';
      const credits = typeof leaseData.remainingCredits === 'number' ? leaseData.remainingCredits : (typeof leaseData.credits === 'number' ? leaseData.credits : 50);
      const expiresAt = leaseData.leaseExpiresAt || (now + 7 * 24 * 60 * 60 * 1000);

      state.license = {
        ...state.license,
        activeKey: key,
        plan,
        leaseToken: leaseData.leaseToken || state.license?.leaseToken || '',
        leaseExpiresAt: expiresAt,
        lastHandshake: now,
        remainingCredits: credits,
        instanceId: leaseData.instanceId || state.license?.instanceId || '',
        deviceFingerprint: this.getDeviceFingerprint()
      };

      state.userProfile.licenseKey = key;
      state.userProfile.licensePlan = plan;
      state.userProfile.credits = credits;

      this._persist(state);
      return this.getLicense();
    }

    checkOfflineLease() {
      const lic = this.getLicense();
      if (!lic.isPro) {
        return { isPro: false, valid: false, daysRemaining: 0, needsHandshake: false };
      }
      const now = Date.now();
      if (!lic.leaseExpiresAt) {
        this.saveLicenseLease({ ...lic, leaseExpiresAt: now + 7 * 24 * 60 * 60 * 1000 });
        return { isPro: true, valid: true, daysRemaining: 7, needsHandshake: false };
      }
      const msRemaining = lic.leaseExpiresAt - now;
      const daysRemaining = Math.max(0, Math.ceil(msRemaining / (1000 * 60 * 60 * 24)));
      const valid = msRemaining > 0;
      return {
        isPro: true,
        valid,
        daysRemaining,
        needsHandshake: !valid
      };
    }

    consumeAiCredit() {
      const state = this.getState();
      const current = typeof state.license?.remainingCredits === 'number' ? state.license.remainingCredits : (state.userProfile?.credits || 0);
      if (current > 0) {
        const next = current - 1;
        state.license = { ...state.license, remainingCredits: next };
        state.userProfile.credits = next;
        this._persist(state);
        return next;
      }
      return 0;
    }

    async activateRemoteLicense(licenseKey, instanceName = 'Web Browser', endpoint = '/api/license/activate') {
      const cleanKey = (licenseKey || '').trim();
      if (!cleanKey) return { success: false, error: 'MISSING_KEY' };

      const fingerprint = this.getDeviceFingerprint();
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            licenseKey: cleanKey,
            instanceName,
            clientFingerprint: fingerprint
          })
        });

        const data = await res.json();
        if (res.ok && data.success) {
          const updated = this.saveLicenseLease({
            licenseKey: cleanKey,
            plan: data.plan || 'pro',
            leaseToken: data.leaseToken,
            leaseExpiresAt: data.leaseExpiresAt,
            remainingCredits: data.remainingCredits,
            instanceId: data.instanceId
          });
          return { success: true, license: updated, data };
        } else {
          return { success: false, error: data.error || 'ACTIVATION_FAILED', message: data.message };
        }
      } catch (err) {
        console.warn('[StorageEngine] Remote activation network offline, falling back to local lease:', err);
        const currentLic = this.getLicense();
        if (currentLic.activeKey === cleanKey && currentLic.offlineLeaseValid) {
          return { success: true, offline: true, license: currentLic };
        }
        return { success: false, error: 'NETWORK_ERROR', message: err.message };
      }
    }

    /* ----------------------------------------------------
     * 3. SuperMemo SM-2 Spaced Repetition Engine
     * ---------------------------------------------------- */
    getSM2Card(wordId) {
      const card = this.state.sm2DeckState[wordId];
      if (card) return { ...card };
      const today = new Date().toISOString().slice(0, 10);
      return {
        wordId,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        nextReviewDate: today,
        mistakeCount: 0,
        lastReviewed: null
      };
    }

    getAllDueSM2Cards() {
      const today = new Date().toISOString().slice(0, 10);
      const deck = this.state.sm2DeckState;
      return Object.keys(deck)
        .filter(id => deck[id].nextReviewDate <= today)
        .map(id => ({ id, ...deck[id] }));
    }

    /**
     * Process SM-2 Rating:
     * Rating can be 1..4 (Again=1, Hard=2, Good=3, Easy=4) or boolean
     */
    recordSM2Review(wordId, ratingOrCorrect) {
      let quality; // 0 to 5 SM-2 scale
      if (typeof ratingOrCorrect === 'boolean') {
        quality = ratingOrCorrect ? 4 : 1;
      } else {
        const r = parseInt(ratingOrCorrect, 10);
        if (r === 1) quality = 1; // Again
        else if (r === 2) quality = 2; // Hard
        else if (r === 3) quality = 4; // Good
        else if (r === 4) quality = 5; // Easy
        else quality = Math.max(0, Math.min(5, r));
      }

      const card = this.getSM2Card(wordId);
      let { easeFactor, interval, repetitions, mistakeCount } = card;

      if (quality >= 3) {
        if (repetitions === 0) {
          interval = 1;
        } else if (repetitions === 1) {
          interval = 6;
        } else {
          interval = Math.round(interval * easeFactor);
        }
        repetitions += 1;
      } else {
        repetitions = 0;
        interval = 1;
        mistakeCount = (mistakeCount || 0) + 1;
      }

      // Calculate new easeFactor: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
      easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
      if (easeFactor < 1.3) easeFactor = 1.3;

      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + interval);
      const nextReviewDate = nextDate.toISOString().slice(0, 10);

      const state = this.getState();
      state.sm2DeckState[wordId] = {
        easeFactor: Math.round(easeFactor * 100) / 100,
        interval,
        repetitions,
        nextReviewDate,
        mistakeCount,
        lastReviewed: Date.now()
      };

      this._persist(state);
      this.checkAndUpdateDailyStreak();
      this.addXP(quality >= 3 ? 10 : 2);

      return state.sm2DeckState[wordId];
    }

    /* ----------------------------------------------------
     * 4. Unified Fehlerheft (Mistake Repository)
     * ---------------------------------------------------- */
    getFehlerheft() {
      return [...this.state.fehlerheft];
    }

    addFehlerItem(item) {
      if (!item) return this.getFehlerheft();
      const state = this.getState();
      const wordKey = (item.word || item.original_snippet || '').trim();
      if (!wordKey) return this.getFehlerheft();

      const existingIdx = state.fehlerheft.findIndex(
        i => (i.word || '').toLowerCase() === wordKey.toLowerCase()
      );

      if (existingIdx > -1) {
        const curr = state.fehlerheft[existingIdx];
        curr.reviewCount = (curr.reviewCount || 1) + 1;
        curr.lastReviewed = Date.now();
        if (item.meaning) curr.meaning = item.meaning;
        if (item.example) curr.example = item.example;
        if (item.mistakeType) curr.mistakeType = item.mistakeType;
      } else {
        state.fehlerheft.unshift({
          id: item.id || ('err-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5)),
          word: wordKey,
          meaning: item.meaning || item.corrected_snippet || '',
          example: item.example || item.explanation || '',
          mistakeType: item.mistakeType || 'vocab', // 'vocab' | 'grammar' | 'reading' | 'listening' | 'lid' | 'speaking' | 'writing'
          source: item.source || 'trainer',
          timestamp: Date.now(),
          reviewCount: 1,
          lastReviewed: Date.now()
        });
      }

      // Keep max 200 items in personal mistake queue
      state.fehlerheft = state.fehlerheft.slice(0, 200);
      this._persist(state);
      return state.fehlerheft;
    }

    removeFehlerItem(idOrWord) {
      if (!idOrWord) return;
      const state = this.getState();
      state.fehlerheft = state.fehlerheft.filter(
        i => i.id !== idOrWord && (i.word || '').toLowerCase() !== String(idOrWord).toLowerCase()
      );
      this._persist(state);
      return state.fehlerheft;
    }

    clearFehlerheft() {
      const state = this.getState();
      state.fehlerheft = [];
      this._persist(state);
    }

    /* ----------------------------------------------------
     * 5. Exam Scores Management
     * ---------------------------------------------------- */
    getExamScores() {
      return { ...this.state.examScores };
    }

    setExamScore(component, score) {
      const valid = ['lesen', 'sprachbausteine', 'hoeren', 'schreiben', 'sprechen', 'lidScore'];
      if (!valid.includes(component)) return;
      const state = this.getState();
      state.examScores[component] = Number(score) || 0;
      state.examScores.lastUpdated = new Date().toISOString();
      this._persist(state);
    }

    /* ----------------------------------------------------
     * 6. IndexedDB for Audio Blobs & Large Decks
     * ---------------------------------------------------- */
    _initIndexedDB() {
      if (typeof window === 'undefined' || !window.indexedDB) return;
      try {
        const req = window.indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(STORE_AUDIO)) {
            db.createObjectStore(STORE_AUDIO, { keyPath: 'id' });
          }
        };
        req.onsuccess = (e) => {
          this.db = e.target.result;
        };
        req.onerror = (e) => {
          console.warn('[StorageEngine] IndexedDB open error, falling back:', e);
        };
      } catch (err) {
        console.warn('[StorageEngine] IndexedDB init failure:', err);
      }
    }

    async saveAudioBlob(id, blob, metadata = {}) {
      if (!this.db) {
        console.warn('[StorageEngine] IDB not active, skipping audio save');
        return false;
      }
      return new Promise((resolve, reject) => {
        try {
          const tx = this.db.transaction(STORE_AUDIO, 'readwrite');
          const store = tx.objectStore(STORE_AUDIO);
          store.put({
            id,
            blob,
            metadata,
            timestamp: Date.now()
          });
          tx.oncomplete = () => resolve(true);
          tx.onerror = (e) => reject(e);
        } catch (err) {
          reject(err);
        }
      });
    }

    async getAudioBlob(id) {
      if (!this.db) return null;
      return new Promise((resolve) => {
        try {
          const tx = this.db.transaction(STORE_AUDIO, 'readonly');
          const store = tx.objectStore(STORE_AUDIO);
          const req = store.get(id);
          req.onsuccess = () => resolve(req.result ? req.result.blob : null);
          req.onerror = () => resolve(null);
        } catch (err) {
          resolve(null);
        }
      });
    }

    /* ----------------------------------------------------
     * 7. Export / Import Progress (JSON)
     * ---------------------------------------------------- */
    exportJSON() {
      const state = this.getState();
      const payload = {
        app: 'DeutschLernen Suite v2.0',
        exportedAt: new Date().toISOString(),
        version: state.version,
        userProfile: state.userProfile,
        license: state.license,
        examScores: state.examScores,
        sm2DeckState: state.sm2DeckState,
        fehlerheft: state.fehlerheft,
        lidState: state.lidState
      };
      return JSON.stringify(payload, null, 2);
    }

    importJSON(jsonStringOrObj) {
      try {
        const data = typeof jsonStringOrObj === 'string' ? JSON.parse(jsonStringOrObj) : jsonStringOrObj;
        if (!data || typeof data !== 'object') {
          throw new Error('Invalid JSON structure');
        }

        const state = this.getState();
        if (data.userProfile) state.userProfile = { ...state.userProfile, ...data.userProfile };
        if (data.license) state.license = { ...state.license, ...data.license };
        if (data.examScores) state.examScores = { ...state.examScores, ...data.examScores };
        if (data.sm2DeckState) state.sm2DeckState = { ...state.sm2DeckState, ...data.sm2DeckState };
        if (Array.isArray(data.fehlerheft)) {
          // Merge unique mistakes
          const existingWords = new Set(state.fehlerheft.map(i => (i.word || '').toLowerCase()));
          data.fehlerheft.forEach(item => {
            if (item && item.word && !existingWords.has(item.word.toLowerCase())) {
              state.fehlerheft.push(item);
            }
          });
        }
        if (data.lidState) state.lidState = { ...state.lidState, ...data.lidState };

        this._persist(state);
        return { success: true, count: state.fehlerheft.length };
      } catch (err) {
        console.error('[StorageEngine] Import error:', err);
        return { success: false, error: err.message };
      }
    }
  }

  // Singleton Instance
  return new DeutschLernenStorageEngine();
});
