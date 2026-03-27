const CACHE_NAME = 'telc-b1-v1';
const ASSETS = [
  './',
  './index.html',
  './icon-192.png',
  './manifest.json',
  './TELC_B1_Preparation/telc_b1_exam_guide.md',
  './TELC_B1_Hazırlık/telc_b1_exam_guide.md'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
