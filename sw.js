const CACHE_NAME = 'deutschlernen-v6';
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
  './js/vocabTrainer.js',
  './data/vocab2000.js',
  './data/vocab_b2.js',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon-32.png',
  './favicon.ico',
  './manifest.json',
  './TELC_B1_Preparation/telc_b1_exam_guide.md',
  './TELC_B1_Haz%C4%B1rl%C4%B1k/telc_b1_exam_guide.md',
  './TELC_B1_Preparation/1_month_study_plan.md',
  './TELC_B1_Haz%C4%B1rl%C4%B1k/1_month_study_plan.md',
  './TELC_B1_Preparation/review_grammar_vocab.md',
  './TELC_B1_Haz%C4%B1rl%C4%B1k/review_grammar_vocab.md',
  './TELC_B1_Preparation/review_reading_listening.md',
  './TELC_B1_Haz%C4%B1rl%C4%B1k/review_reading_listening.md',
  './TELC_B1_Preparation/review_writing_speaking.md',
  './TELC_B1_Haz%C4%B1rl%C4%B1k/review_writing_speaking.md',
  './TELC_B1_Preparation/mock_exam_diagnostic.md',
  './TELC_B1_Haz%C4%B1rl%C4%B1k/mock_exam_diagnostic.md',
  './TELC_B1_Preparation/mock_exam_final.md',
  './TELC_B1_Haz%C4%B1rl%C4%B1k/mock_exam_final.md',
  './TELC_B1_Preparation/example_exams_resources.md',
  './TELC_B1_Haz%C4%B1rl%C4%B1k/example_exams_resources.md',
  './TELC_B1_Preparation/vocab_part1_verbs_adjectives.md',
  './TELC_B1_Haz%C4%B1rl%C4%B1k/vocab_part1_fiiller_sifatlar.md',
  './TELC_B1_Preparation/vocab_part2_nouns_themes.md',
  './TELC_B1_Haz%C4%B1rl%C4%B1k/vocab_part2_isimler_temalar.md'
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
  const url = new URL(event.request.url);

  // Navigation requests: Network first with cache fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request) || caches.match('./index.html'))
    );
    return;
  }

  // External CDN libraries (marked, mermaid, fonts): Cache-first with dynamic caching
  if (url.origin !== self.location.origin) {
    if (url.hostname.includes('jsdelivr.net') || url.hostname.includes('googleapis.com') || url.hostname.includes('gstatic.com') || url.hostname.includes('flagcdn.com')) {
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
