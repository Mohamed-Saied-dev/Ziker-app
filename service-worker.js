self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("zikr-cache").then(function (cache) {
      return cache.addAll([
        "/Ziker-app/",
        "/Ziker-app/index.html",
        "/Ziker-app/main.css",
        "/Ziker-app/script.js",
        "/Ziker-app/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
