let CACHE_NAME="mws-restaurant-stage-1-cache-v1";
let urlsToCache = [
  '/',
  '/css/',
  '/js'

];
/*===========Install Service worker======*/
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
/*===========Cache and return request===*/
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       }
//     )
//   );
// });