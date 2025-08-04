self.addEventListener('push', function (event) {
	if (event.data) {
		console.log('HELLO')
		const data = event.data.json()
		const options = {
			body: data.body,
			icon: data.icon || '/icon.png',
			badge: '/badge.png',
			vibrate: [100, 50, 100],
			data: {
				dateOfArrival: Date.now(),
				primaryKey: '2',
			},
		}
		event.waitUntil(self.registration.showNotification(data.title, options))
	}
})

self.addEventListener('install', (event) => {
	event.waitUntil(cacheCoreAssets())
	// self.skipWaiting() гарантирует, что новый Service worker активируется сразу после установки, минуя фазу ожидания.
	self.skipWaiting()
})

self.addEventListener('activate', (event) => {
	event.waitUntil(clearOldCaches())
	// Метод self.clients.claim() гарантирует, что новый Service worker получит контроль над всеми страницами, как только активируется.
	self.clients.claim()
})
