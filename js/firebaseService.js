/**
 * DeutschLernen — Firebase Service & Client-Side Sync Engine
 * Handles:
 * - Authentication (Email/Password & Google Sign-In)
 * - Real-time cloud progress synchronization
 * - Community feedback collection in Firestore
 * - Location detection & Guest Mode fallback
 */

(function () {
  'use strict';

  class FirebaseService {
    constructor() {
      this.app = null;
      this.auth = null;
      this.db = null;
      this.currentUser = null;
      this.authListeners = [];
      this.isSyncing = false;
      this.syncDebounceTimer = null;
      this.initialized = false;
      this.initPromise = null;

      this.init();
    }

    async init() {
      if (this.initPromise) return this.initPromise;

      this.initPromise = (async () => {
        if (!window.isFirebaseConfigured || !window.isFirebaseConfigured()) {
          console.info("DeutschLernen: Firebase is operating in offline Guest Mode.");
          return;
        }

        try {
          // Dynamically import Firebase modular v10 from official Google CDN
          const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");
          const { 
            getAuth, 
            onAuthStateChanged, 
            signInWithEmailAndPassword, 
            createUserWithEmailAndPassword, 
            signInWithPopup, 
            GoogleAuthProvider, 
            signOut,
            updateProfile 
          } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js");
          const { 
            getFirestore, 
            doc, 
            setDoc, 
            getDoc, 
            addDoc, 
            collection, 
            serverTimestamp 
          } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");

          this.app = initializeApp(window.FIREBASE_CONFIG);
          this.auth = getAuth(this.app);
          this.db = getFirestore(this.app);
          this.googleProvider = new GoogleAuthProvider();

          this.firestoreOps = { doc, setDoc, getDoc, addDoc, collection, serverTimestamp };
          this.authOps = { 
            signInWithEmailAndPassword, 
            createUserWithEmailAndPassword, 
            signInWithPopup, 
            signOut,
            updateProfile 
          };

          // Auth State Listener
          onAuthStateChanged(this.auth, (user) => {
            this.currentUser = user;
            this.notifyAuthListeners(user);
          });

          this.initialized = true;
          console.info("DeutschLernen: Firebase Cloud Sync connected successfully.");
        } catch (err) {
          console.warn("DeutschLernen: Firebase initialization fallback:", err.message);
        }
      })();

      return this.initPromise;
    }

    isReady() {
      return Boolean(this.initialized && this.auth && this.db);
    }

    onAuthChange(callback) {
      if (typeof callback === 'function') {
        this.authListeners.push(callback);
        if (this.currentUser) callback(this.currentUser);
      }
    }

    notifyAuthListeners(user) {
      this.authListeners.forEach(cb => {
        try { cb(user); } catch (e) { console.error("Auth listener error:", e); }
      });
    }

    // --- Authentication Actions ---
    async signUp(email, password, displayName = "") {
      await this.init();
      if (!this.isReady()) throw new Error("Firebase is not configured. Please use Guest Mode or provide Firebase credentials.");

      const cred = await this.authOps.createUserWithEmailAndPassword(this.auth, email, password);
      if (displayName && cred.user) {
        await this.authOps.updateProfile(cred.user, { displayName });
      }
      return cred.user;
    }

    async signIn(email, password) {
      await this.init();
      if (!this.isReady()) throw new Error("Firebase is not configured. Please use Guest Mode or provide Firebase credentials.");

      const cred = await this.authOps.signInWithEmailAndPassword(this.auth, email, password);
      return cred.user;
    }

    async signInWithGoogle() {
      await this.init();
      if (!this.isReady()) throw new Error("Firebase is not configured. Please use Guest Mode or provide Firebase credentials.");

      const cred = await this.authOps.signInWithPopup(this.auth, this.googleProvider);
      return cred.user;
    }

    async signOut() {
      await this.init();
      if (!this.isReady()) return;
      await this.authOps.signOut(this.auth);
      this.currentUser = null;
    }

    // --- Cloud Study Progress Synchronization ---
    async syncProgress(progressMap, sessionData, settings) {
      if (!this.isReady() || !this.currentUser) return false;

      // Debounce rapid answers to conserve Firestore writes
      if (this.syncDebounceTimer) clearTimeout(this.syncDebounceTimer);

      return new Promise((resolve) => {
        this.syncDebounceTimer = setTimeout(async () => {
          try {
            this.isSyncing = true;
            this.updateSyncStatusPill("syncing");

            const { doc, setDoc, serverTimestamp } = this.firestoreOps;
            const userDocRef = doc(this.db, "users", this.currentUser.uid);

            const payload = {
              email: this.currentUser.email || "",
              displayName: this.currentUser.displayName || "",
              lastSync: serverTimestamp(),
              sessions: sessionData || {},
              settings: settings || {},
              progress: progressMap || {}
            };

            await setDoc(userDocRef, payload, { merge: true });
            this.isSyncing = false;
            this.updateSyncStatusPill("synced");
            resolve(true);
          } catch (err) {
            console.error("Cloud sync error:", err);
            this.isSyncing = false;
            this.updateSyncStatusPill("offline");
            resolve(false);
          }
        }, 1200); // 1.2 second debounce
      });
    }

    async fetchCloudProgress() {
      if (!this.isReady() || !this.currentUser) return null;

      try {
        const { doc, getDoc } = this.firestoreOps;
        const userDocRef = doc(this.db, "users", this.currentUser.uid);
        const snap = await getDoc(userDocRef);

        if (snap.exists()) {
          return snap.data();
        }
        return null;
      } catch (err) {
        console.error("Fetch cloud progress error:", err);
        return null;
      }
    }

    // --- Community Feedback Collection ---
    async submitFeedback(feedbackData) {
      await this.init();
      
      const payload = {
        username: feedbackData.username || "Anonymous",
        location: feedbackData.location || this.detectLocation(),
        category: feedbackData.category || "General",
        rating: Number(feedbackData.rating) || 5,
        message: String(feedbackData.message || "").trim(),
        userAgent: navigator.userAgent || "Unknown",
        clientLang: localStorage.getItem('site_lang') || 'en',
        createdAt: new Date().toISOString()
      };

      if (!payload.message) {
        throw new Error("Feedback message cannot be empty.");
      }

      // If Firebase Firestore is active, save directly to Firestore collection
      if (this.isReady()) {
        try {
          const { collection, addDoc, serverTimestamp } = this.firestoreOps;
          payload.serverTimestamp = serverTimestamp();
          const docRef = await addDoc(collection(this.db, "feedback"), payload);
          return { success: true, id: docRef.id, destination: "firestore" };
        } catch (err) {
          console.warn("Firestore feedback write failed, saving locally:", err.message);
        }
      }

      // Offline / Local fallback: store in localStorage feedback queue
      try {
        const queue = JSON.parse(localStorage.getItem('deutschlernen_local_feedback') || '[]');
        payload.id = "local_" + Date.now();
        queue.push(payload);
        localStorage.setItem('deutschlernen_local_feedback', JSON.stringify(queue));
        return { success: true, id: payload.id, destination: "local_queue" };
      } catch (e) {
        return { success: true, id: "fallback_" + Date.now(), destination: "memory" };
      }
    }

    // Smart Client Location Detection
    detectLocation() {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const locale = navigator.language || "en-US";
        if (tz) {
          const city = tz.split('/').pop().replace(/_/g, ' ');
          return `${city} (${tz})`;
        }
        return locale;
      } catch (e) {
        return "Unknown";
      }
    }

    // Update UI status pill in header
    updateSyncStatusPill(state) {
      const pill = document.getElementById('sync-status-pill');
      if (!pill) return;

      const lang = localStorage.getItem('site_lang') || 'en';
      const labels = {
        en: {
          synced: "☁️ Synced",
          syncing: "🔄 Syncing...",
          guest: "👤 Guest Mode",
          offline: "⚠️ Offline"
        },
        tr: {
          synced: "☁️ Eşitlendi",
          syncing: "🔄 Eşitleniyor...",
          guest: "👤 Misafir Modu",
          offline: "⚠️ Çevrimdışı"
        }
      };

      const texts = labels[lang] || labels.en;

      if (state === "synced") {
        pill.innerHTML = `<span style="color:var(--accent-green,#22c55e)">${texts.synced}</span>`;
        pill.title = "Progress automatically saved to Cloud Firestore";
      } else if (state === "syncing") {
        pill.innerHTML = `<span style="color:var(--accent-gold,#f59e0b)">${texts.syncing}</span>`;
        pill.title = "Uploading latest answers to Cloud...";
      } else if (state === "guest") {
        pill.innerHTML = `<span style="color:var(--text-muted,#94a3b8)">${texts.guest}</span>`;
        pill.title = "Click to log in and sync across all devices";
      } else {
        pill.innerHTML = `<span style="color:var(--accent-red,#ef4444)">${texts.offline}</span>`;
      }
    }
  }

  // Instantiate globally
  window.FirebaseService = new FirebaseService();

})();
