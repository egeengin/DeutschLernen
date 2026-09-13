/**
 * Firebase Configuration for DeutschLernen
 * 
 * Instructions to connect your Firebase project:
 * 1. Go to https://console.firebase.google.com and create a project (e.g., 'deutschlernen-app').
 * 2. Enable 'Authentication' with Email/Password and Google providers.
 * 3. Enable 'Cloud Firestore' database in Production mode.
 * 4. In Project Settings -> 'Your apps' -> Add Web App, copy your firebaseConfig object.
 * 5. Paste your values below or set them in the UI via Settings modal.
 * 
 * Note: If values remain as placeholders, the app gracefully operates in
 * 100% offline Guest Mode without throwing errors or interrupting study.
 */

(function () {
  'use strict';

  // Default / environment credentials
  const DEFAULT_CONFIG = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };

  // Check if credentials are stored in localStorage for easy zero-code deployment
  function getActiveConfig() {
    try {
      const stored = localStorage.getItem('deutschlernen_firebase_config');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.apiKey && parsed.apiKey !== "YOUR_API_KEY" && parsed.projectId && parsed.projectId !== "YOUR_PROJECT_ID") {
          return parsed;
        }
      }
    } catch (e) {
      // Ignore parse error
    }
    return DEFAULT_CONFIG;
  }

  const activeConfig = getActiveConfig();

  function isConfigured() {
    return activeConfig.apiKey !== "YOUR_API_KEY" && 
           activeConfig.projectId !== "YOUR_PROJECT_ID" && 
           Boolean(activeConfig.apiKey && activeConfig.projectId);
  }

  window.FIREBASE_CONFIG = activeConfig;
  window.isFirebaseConfigured = isConfigured;
  window.saveFirebaseConfig = function (newConfig) {
    if (newConfig && newConfig.apiKey && newConfig.projectId) {
      localStorage.setItem('deutschlernen_firebase_config', JSON.stringify(newConfig));
      window.location.reload();
    }
  };

})();
