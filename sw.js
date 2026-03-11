// Service Worker básico para PWA - "Gera" o app e salva os dados no aparelho
var cacheName = 'meu-congelador-app-v15';
var filesToCache = [
  '/',
  'index.html',
  'manifest.json',
  'app-icon.png' // Lembre-se de colocar as imagens cortadas nas dimensões corretas aqui se mudar os nomes
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
