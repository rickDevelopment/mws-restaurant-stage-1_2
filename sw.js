var CACHE_NAME="mws-restaurant-stage-1-cache-v1";
var urlsToCache = [
  '/',
  '/css/styles.js',
  '/js/main.js',
];

self.addEventListener('install',function(event){
  // perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache){
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});