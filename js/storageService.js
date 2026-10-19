/**
 * Unified StorageService Adapter for DeutschLernen SaaS
 * Provides synchronous local caching (localStorage + memory fallback)
 * alongside prepared async cloud synchronization hooks (Supabase / Cloudflare Worker KV).
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.StorageService = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const memoryStore = {};

  const safeStorage = {
    getItem(key) {
      if (typeof StorageEngine !== 'undefined') {
        if (key === KEYS.FEHLERHEFT) return JSON.stringify(StorageEngine.getFehlerheft());
        if (key === KEYS.LANG) return StorageEngine.getUserProfile().lang;
        if (key === KEYS.THEME) return StorageEngine.getUserProfile().theme;
        if (key === KEYS.LICENSE_KEY) return StorageEngine.getUserProfile().licenseKey;
        if (key === KEYS.LICENSE_PLAN) return StorageEngine.getUserProfile().licensePlan;
        if (key === KEYS.CREDITS) return String(StorageEngine.getUserProfile().credits);
      }
      try {
        if (typeof localStorage !== 'undefined') {
          return localStorage.getItem(key);
        }
      } catch (e) {
        console.warn('LocalStorage read error:', e);
      }
      return memoryStore[key] || null;
    },
    setItem(key, value) {
      if (typeof StorageEngine !== 'undefined') {
        if (key === KEYS.LANG) StorageEngine.updateUserProfile({ lang: String(value) });
        if (key === KEYS.THEME) StorageEngine.updateUserProfile({ theme: String(value) });
        if (key === KEYS.LICENSE_KEY) StorageEngine.updateUserProfile({ licenseKey: String(value) });
        if (key === KEYS.LICENSE_PLAN) StorageEngine.updateUserProfile({ licensePlan: String(value) });
        if (key === KEYS.CREDITS) StorageEngine.updateUserProfile({ credits: parseInt(value, 10) || 0 });
      }
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(key, String(value));
        }
      } catch (e) {
        console.warn('LocalStorage write error:', e);
      }
      memoryStore[key] = String(value);
    },
    removeItem(key) {
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem(key);
        }
      } catch (e) {
        console.warn('LocalStorage remove error:', e);
      }
      delete memoryStore[key];
    }
  };

  const KEYS = {
    THEME: 'deutschlernen_theme',
    GOAL: 'deutschlernen_goal',
    LANG: 'deutschlernen_lang',
    VOCAB_PROGRESS: 'deutschlernen_vocab_progress',
    FEHLERHEFT: 'deutschlernen_fehlerheft_items',
    CREDITS: 'deutschlernen_letter_credits',
    LICENSE_KEY: 'deutschlernen_pro_license',
    LICENSE_PLAN: 'deutschlernen_pro_plan',
    DEVICE_ID: 'deutschlernen_device_id',
    INVOICES: 'deutschlernen_invoices',
    LAST_EVALUATION: 'deutschlernen_last_eval'
  };

  class StorageService {
    // --- Device Identification ---
    static getDeviceId() {
      let id = safeStorage.getItem(KEYS.DEVICE_ID);
      if (!id) {
        id = 'dl-dev-' + Math.random().toString(36).substring(2, 10) + '-' + Date.now().toString(36);
        safeStorage.setItem(KEYS.DEVICE_ID, id);
      }
      return id;
    }

    // --- Localization & Settings ---
    static getLanguage() {
      return safeStorage.getItem(KEYS.LANG) || safeStorage.getItem('site_lang') || 'en';
    }

    static setLanguage(lang) {
      safeStorage.setItem(KEYS.LANG, lang);
      safeStorage.setItem('site_lang', lang);
    }

    static getTheme() {
      return safeStorage.getItem(KEYS.THEME) || 'dark';
    }

    static setTheme(theme) {
      safeStorage.setItem(KEYS.THEME, theme);
    }

    // --- Monetization, Pro License & Credits ---
    static getLicenseKey() {
      return (safeStorage.getItem(KEYS.LICENSE_KEY) || '').trim();
    }

    static setLicenseKey(key, plan = 'pass-30') {
      if (key) {
        safeStorage.setItem(KEYS.LICENSE_KEY, key.trim());
        safeStorage.setItem(KEYS.LICENSE_PLAN, plan);
      } else {
        safeStorage.removeItem(KEYS.LICENSE_KEY);
        safeStorage.removeItem(KEYS.LICENSE_PLAN);
      }
    }

    static isProUser() {
      const key = this.getLicenseKey();
      if (!key) return false;
      // Validated test keys or existing pass format
      return key.length > 5;
    }

    static isPro() {
      return this.isProUser();
    }

    static getLetterCredits() {
      const raw = safeStorage.getItem(KEYS.CREDITS);
      if (raw === null) return 1; // 1 free credit by default
      const n = parseInt(raw, 10);
      return isNaN(n) ? 0 : n;
    }

    static useLetterCredit() {
      const current = this.getLetterCredits();
      if (current > 0) {
        safeStorage.setItem(KEYS.CREDITS, String(current - 1));
        return true;
      }
      return false;
    }

    static addLetterCredits(count) {
      const current = this.getLetterCredits();
      const next = current + count;
      safeStorage.setItem(KEYS.CREDITS, String(next));
      return next;
    }

    // --- Last Evaluation Cache ---
    static saveLastEvaluation(evalData) {
      try {
        safeStorage.setItem(KEYS.LAST_EVALUATION, JSON.stringify(evalData));
      } catch (e) {
        console.warn('Failed to cache evaluation:', e);
      }
    }

    static getLastEvaluation() {
      try {
        const raw = safeStorage.getItem(KEYS.LAST_EVALUATION);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    }

    // --- Fehlerheft (Mistake Notebook) ---
    static getFehlerheft() {
      if (typeof StorageEngine !== 'undefined') {
        return StorageEngine.getFehlerheft();
      }
      try {
        let raw = safeStorage.getItem(KEYS.FEHLERHEFT);
        let list = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(list)) list = [];
        return list;
      } catch (e) {
        return [];
      }
    }

    static addFehlerItem(item) {
      if (typeof StorageEngine !== 'undefined') {
        return StorageEngine.addFehlerItem(item);
      }
      if (!item) return [];
      const list = this.getFehlerheft();
      const word = (item.word || item.original_snippet || '').trim();
      const existing = list.find(i => (i.word || '').toLowerCase() === word.toLowerCase());
      if (existing) {
        existing.reviewCount = (existing.reviewCount || 1) + 1;
        existing.lastReviewed = Date.now();
        if (item.meaning) existing.meaning = item.meaning;
        if (item.example) existing.example = item.example;
      } else {
        list.unshift({
          id: item.id || ('err-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5)),
          word: word || 'Grammatikfehler',
          meaning: item.meaning || item.corrected_snippet || '',
          example: item.example || item.explanation || '',
          mistakeType: item.mistakeType || 'grammar',
          reviewCount: 1,
          lastReviewed: Date.now(),
          timestamp: item.timestamp || Date.now()
        });
      }
      const trimmed = list.slice(0, 100);
      safeStorage.setItem(KEYS.FEHLERHEFT, JSON.stringify(trimmed));
      return trimmed;
    }

    // --- Invoices ---
    static getInvoices() {
      try {
        const raw = safeStorage.getItem(KEYS.INVOICES);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    static addInvoice(invoice) {
      const list = this.getInvoices();
      list.unshift(invoice);
      safeStorage.setItem(KEYS.INVOICES, JSON.stringify(list));
      return list;
    }

    // --- Asynchronous Cloud Sync Hooks (Supabase / Worker Backend) ---
    static async syncWithCloud(apiEndpoint, authToken) {
      if (!apiEndpoint || !authToken) return null;
      try {
        const payload = {
          device_id: this.getDeviceId(),
          license_key: this.getLicenseKey(),
          vocab_progress: safeStorage.getItem(KEYS.VOCAB_PROGRESS),
          fehlerheft: this.getFehlerheft(),
          last_synced: new Date().toISOString()
        };

        const res = await fetch(apiEndpoint + '/sync', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn('Cloud synchronization failed, continuing in offline mode:', err);
      }
      return null;
    }
  }

  return StorageService;
});
