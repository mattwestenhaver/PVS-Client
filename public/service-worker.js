// Older builds installed a service worker that cached the whole site, so returning
// visitors could keep seeing an old version. Browsers check this file for updates,
// so serving this version replaces the old worker: it clears its caches, removes
// itself and reloads open tabs so they get the current site.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
    event.waitUntil(
        caches
            .keys()
            .then(keys => Promise.all(keys.map(key => caches.delete(key))))
            .then(() => self.registration.unregister())
            .then(() => self.clients.matchAll({ type: 'window' }))
            .then(clients => clients.forEach(client => client.navigate(client.url))),
    );
});
