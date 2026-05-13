const CACHE = 'pharmace-v1';
const ASSETS = ['/', '/index.html', '/quiz.html', '/admin.html', '/css/style.css', '/js/app.js', '/js/quiz.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
