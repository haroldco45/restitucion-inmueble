// Service worker — Restitución de inmueble arrendado (Biblioteca Legal Colombiana)
const CACHE = "ley820-restitucion-v1";
const BASE = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "og.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Red primero para la página (siempre trae la versión nueva); caché como respaldo sin conexión
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) {
    // Fotos y fuentes externas: caché si ya se vieron, si no, red
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
      const copia = res.clone();
      caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
      return res;
    }).catch(() => r)));
    return;
  }
  e.respondWith(fetch(req).then(res => {
    const copia = res.clone();
    caches.open(CACHE).then(c => c.put(req, copia));
    return res;
  }).catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
});
