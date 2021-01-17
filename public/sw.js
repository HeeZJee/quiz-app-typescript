console.log('started sw.js')

const cacheName = 'cache-v1'
const cachePath = [
    '/',
    'index.html',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap',
    'https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2',
    'sockjs-node',
    'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple',
    'manifest.json',
    'favicon.ico',
    'logo192.png',
    'logo512.png',
    'sw.js',
]

self.addEventListener('register', () => console.log('registered sw.js'))


self.addEventListener('install', e => {
    console.log('Service Worker install')
    e.waitUntil(
        caches.open(cacheName)
            .then(cache =>
                cache.addAll(cachePath))
            .catch(e => console.log('Service Worker install error', e))
    )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then((resp) => {
      return (
        resp ||
        fetch(e.request, {
          mode: "no-cors",
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
          body: null,
        }).then((response) => {
          return caches.open(cacheName).then((cache) => {
            console.log("fetching", cache);
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );
})
