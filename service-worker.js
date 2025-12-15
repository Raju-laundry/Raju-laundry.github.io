const CACHE_NAME = "raju-laundry-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/css/style.css",
  "/manifest.json",
  "/service-worker.js",
  "/images/logo-192.png",
  "/images/logo-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
