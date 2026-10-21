const CACHE_NAME = 'deutschlernen-v57';
const ASSETS = [
  './',
  './index.html',
  './dashboard.html',
  './trainer.html',
  './grammatik.html',
  './simulation.html',
  './legal.html',
  './sprechen.html',
  './lesen.html',
  './hoeren.html',
  './telc-b1-beschwerdebrief-beispiel.html',
  './telc-b1-einladung-schreiben.html',
  './telc-b1-punkte-rechner.html',
  './leben-in-deutschland-nrw-fragen.html',
  './assets/fonts/fonts.css',
  './css/portal.css',
  './css/nav-drawer.css',
  './css/seo.css',
  './css/trainer.css',
  './css/grammatik.css',
  './css/simulation.css',
  './css/sprechen.css',
  './css/lesen.css',
  './css/hoeren.css',
  './css/schreiben.css',
  './css/dashboard.css',
  './js/storage-engine.js',
  './js/navDrawer.js',
  './js/portal.js',
  './js/grammarApp.js',
  './js/notifications.js',
  './js/simulationApp.js',
  './data/grammar_data.js',
  './js/dashboard.js',
  './js/voiceExamEngine.js',
  './js/sprechenApp.js',
  './js/lesenApp.js',
  './js/hoerenApp.js',
  './js/schreiben.js',
  './js/firebaseConfig.js',
  './js/firebaseService.js',
  './js/lidTrainer.js',
  './js/lidChecklist.js',
  './js/fehlerheft.js',
  './js/storageService.js',
  './js/sampleEvaluationData.js',
  './js/schreibenShowcase.js',
  './js/telcCalculator.js',
  './js/vocabTrainer.js',
  './js/placementTest.js',
  './data/lid310.js',
  './data/lidChecklistData.js',
  './data/vocab2000.js',
  './data/vocab_b2.js',
  './data/vocab_c1.js',
  './data/vocab_c2.js',
  './data/vocab_nvv.js',
  './data/readingLexicon.js',
  './data/readingData.js',
  './data/sprachbausteineData.js',
  './data/hoerenData.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/favicon-32.png',
  './assets/icons/favicon-16.png',
  './assets/icons/favicon.ico',
  './favicon.ico',
  './manifest.json',
  './docs/en/telc_b1_exam_guide.md',
  './docs/tr/telc_b1_exam_guide.md',
  './docs/ar/telc_b1_exam_guide.md',
  './docs/uk/telc_b1_exam_guide.md',
  './docs/en/1_month_study_plan.md',
  './docs/tr/1_month_study_plan.md',
  './docs/ar/1_month_study_plan.md',
  './docs/uk/1_month_study_plan.md',
  './docs/en/review_grammar_vocab.md',
  './docs/tr/review_grammar_vocab.md',
  './docs/ar/review_grammar_vocab.md',
  './docs/uk/review_grammar_vocab.md',
  './docs/en/review_reading_listening.md',
  './docs/tr/review_reading_listening.md',
  './docs/ar/review_reading_listening.md',
  './docs/uk/review_reading_listening.md',
  './docs/en/review_writing_speaking.md',
  './docs/tr/review_writing_speaking.md',
  './docs/ar/review_writing_speaking.md',
  './docs/uk/review_writing_speaking.md',
  './docs/en/mock_exam_diagnostic.md',
  './docs/tr/mock_exam_diagnostic.md',
  './docs/ar/mock_exam_diagnostic.md',
  './docs/uk/mock_exam_diagnostic.md',
  './docs/en/mock_exam_final.md',
  './docs/tr/mock_exam_final.md',
  './docs/ar/mock_exam_final.md',
  './docs/uk/mock_exam_final.md',
  './docs/en/example_exams_resources.md',
  './docs/tr/example_exams_resources.md',
  './docs/ar/example_exams_resources.md',
  './docs/uk/example_exams_resources.md',
  './docs/en/vocab_part1_verbs_adjectives.md',
  './docs/tr/vocab_part1_fiiller_sifatlar.md',
  './docs/ar/vocab_part1_verbs_adjectives.md',
  './docs/uk/vocab_part1_verbs_adjectives.md',
  './docs/en/vocab_part2_nouns_themes.md',
  './docs/tr/vocab_part2_isimler_temalar.md',
  './docs/ar/vocab_part2_nouns_themes.md',
  './docs/uk/vocab_part2_nouns_themes.md',
  './assets/lid/aufgabe_21.png',
  './assets/lid/aufgabe_55.png',
  './assets/lid/aufgabe_130.png',
  './assets/lid/aufgabe_176.png',
  './assets/lid/aufgabe_187.png',
  './assets/lid/aufgabe_226.png',
  './assets/lid/q181.png',
  './assets/lid/q209.png',
  './assets/lid/q235.png',
  './assets/lid/baden-wurttemberg_1.png',
  './assets/lid/baden-wurttemberg_8.png',
  './assets/lid/bayern_1.png',
  './assets/lid/bayern_8.png',
  './assets/lid/berlin_1.png',
  './assets/lid/berlin_8.png',
  './assets/lid/brandenburg_aufgabe_1.png',
  './assets/lid/brandenburg_aufgabe_8.png',
  './assets/lid/bremen_1.png',
  './assets/lid/bremen_8.png',
  './assets/lid/hamburg_1.png',
  './assets/lid/hamburg_8.png',
  './assets/lid/hessen_1.png',
  './assets/lid/hessen_8.png',
  './assets/lid/mecklenburg-vorpommern_1.png',
  './assets/lid/mecklenburg-vorpommern_8.png',
  './assets/lid/niedersachsen_1.png',
  './assets/lid/niedersachsen_8.png',
  './assets/lid/nordrhein-westfalen_1.png',
  './assets/lid/nordrhein-westfalen_8.png',
  './assets/lid/rheinland-pfalz_1.png',
  './assets/lid/rheinland-pfalz_8.png',
  './assets/lid/saarland_1.png',
  './assets/lid/saarland_8.png',
  './assets/lid/sachsen_1.png',
  './assets/lid/sachsen_8.png',
  './assets/lid/sachsen-anhalt_1.png',
  './assets/lid/sachsen-anhalt_8.png',
  './assets/lid/schleswig-holstein_1.png',
  './assets/lid/schleswig-holstein_8.png',
  './assets/lid/thuringen_1.png',
  './assets/lid/thuringen_8.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Use catch on each to prevent single file 404 from breaking entire installation
      return Promise.allSettled(
        ASSETS.map(url => cache.add(url).catch(err => console.warn('Cache fetch failed for:', url, err)))
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Only handle GET requests with cache
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);

  // Bypass service worker entirely for Firebase Auth, OAuth, Firestore and dynamic APIs
  if (
    url.hostname.includes('identitytoolkit.googleapis.com') ||
    url.hostname.includes('securetoken.googleapis.com') ||
    url.hostname.includes('firestore.googleapis.com') ||
    url.hostname.includes('accounts.google.com') ||
    url.hostname.includes('firebaseapp.com') ||
    url.hostname.includes('firebasestorage.app')
  ) {
    return;
  }

  // Navigation requests: Network first with cache fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request) || caches.match('./index.html'))
    );
    return;
  }

  // External CDN static assets (fonts, flag icons, jsdelivr): Cache-first with dynamic caching
  if (url.origin !== self.location.origin) {
    if (
      url.hostname === 'fonts.googleapis.com' ||
      url.hostname === 'fonts.gstatic.com' ||
      url.hostname.includes('jsdelivr.net') ||
      url.hostname.includes('flagcdn.com')
    ) {
      event.respondWith(
        caches.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(resp => {
            if (resp && resp.status === 200) {
              const clone = resp.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            }
            return resp;
          }).catch(() => cached);
        })
      );
      return;
    }
    // Let other external origins (e.g. gstatic modules) stream natively
    return;
  }

  // Local assets: Stale-While-Revalidate (instant response from cache + background refresh)
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(networkResp => {
        if (networkResp && networkResp.status === 200) {
          const clone = networkResp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return networkResp;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

// ==========================================
// PWA Web Notifications & Streak Reminder
// ==========================================
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || './index.html';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      // Focus if tab already open
      for (let client of windowClients) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      // Open new window if not open
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});

self.addEventListener('push', event => {
  let data = { title: 'DeutschLernen', body: 'Deine tägliche Deutsch-Einheit wartet auf dich! 🔥' };
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: './assets/icons/icon-192.png',
    badge: './assets/icons/favicon-32.png',
    tag: 'deutschlernen-push',
    data: { url: data.url || './index.html' }
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});
