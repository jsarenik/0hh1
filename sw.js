const CACHE_NAME = 'ohh1-v1'
const ASSETS = [
  '/js/jquery-2.1.0.min.js',
  '/js/0hh1.js',
  '/fonts/JosefinSans-Bold.ttf',
  '/fonts/Parisish.ttf',
  '/fonts/fonts.css',
  '/fonts/Molle-Regular.ttf',
  '/index.html',
  '/manifest.json',
  '/img/lock.png',
  '/img/gamecenter.png',
  '/img/controller-green.png',
  '/img/black/eye.png',
  '/img/black/facebook.png',
  '/img/black/lock.png',
  '/img/black/cog.png',
  '/img/black/arrow-right.png',
  '/img/black/gift.png',
  '/img/black/close.png',
  '/img/black/history.png',
  '/img/black/twitter.png',
  '/img/black/achievements.png',
  '/img/black/question.png',
  '/img/black/leaderboards.png',
  '/img/black/mobile.png',
  '/img/black/stopwatch.png',
  '/img/black/controller.png',
  '/img/black/play.png',
  '/img/black/checkmark.png',
  '/img/gamecenter_bw.png',
  '/img/icon-1024.png',
  '/img/filmgrain.png',
  '/img/white/eye.png',
  '/img/white/facebook.png',
  '/img/white/cog.png',
  '/img/white/arrow-right.png',
  '/img/white/gift.png',
  '/img/white/close.png',
  '/img/white/history.png',
  '/img/white/share.png',
  '/img/white/achievements.png',
  '/img/white/question.png',
  '/img/white/leaderboards.png',
  '/img/white/mobile.png',
  '/img/white/stopwatch.png',
  '/img/white/controller.png',
  '/img/white/play.png',
  '/img/white/checkmark.png',
  '/img/q42.png',
  '/css/theme3.css',
  '/css/theme5.css',
  '/css/theme2.css',
  '/css/theme4.css',
  '/css/style.css'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Event
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
