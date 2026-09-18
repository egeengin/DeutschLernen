const CACHE_NAME = 'deutschlernen-v14';
const ASSETS = [
  './',
  './index.html',
  './trainer.html',
  './legal.html',
  './css/portal.css',
  './css/trainer.css',
  './js/portal.js',
  './js/firebaseConfig.js',
  './js/firebaseService.js',
  './js/lidTrainer.js',
  './js/fehlerheft.js',
  './js/sampleEvaluationData.js',
  './js/schreibenShowcase.js',
  './js/vocabTrainer.js',
  './data/lid310.js',
  './data/vocab2000.js',
  './data/vocab_b2.js',
  './data/vocab_c1.js',
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
  './docs/en/1_month_study_plan.md',
  './docs/tr/1_month_study_plan.md',
  './docs/en/review_grammar_vocab.md',
  './docs/tr/review_grammar_vocab.md',
  './docs/en/review_reading_listening.md',
  './docs/tr/review_reading_listening.md',
  './docs/en/review_writing_speaking.md',
  './docs/tr/review_writing_speaking.md',
  './docs/en/mock_exam_diagnostic.md',
  './docs/tr/mock_exam_diagnostic.md',
  './docs/en/mock_exam_final.md',
  './docs/tr/mock_exam_final.md',
  './docs/en/example_exams_resources.md',
  './docs/tr/example_exams_resources.md',
  './docs/en/vocab_part1_verbs_adjectives.md',
  './docs/tr/vocab_part1_fiiller_sifatlar.md',
  './docs/en/vocab_part2_nouns_themes.md',
  './docs/tr/vocab_part2_isimler_temalar.md'
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
