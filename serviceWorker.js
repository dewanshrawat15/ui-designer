const staticDevCoffee = "ui-designer-v1";
const assets = [
	"/",
	"/index.html",
	"/styles.css",
	"/sw.js",
	"/manifest.json",
	"/favicon.ico",
	"/robots.txt",
	"/logo192.png",
	"/logo512.png",
	"/images/about-sm.png",
	"/images/contact-sm.png",
	"/images/contact-sm-mob.png",
	"/images/hello-sm.png",
	"/images/portfolio-sm.png",
	"/images/portfolio-sm-down.png",
	"/images/portfolio/polydian.jpg",
	"/images/portfolio/portfolio.jpg",
	"/images/portfolio/promptia.jpg",
	"/images/portfolio/thoughts.jpg"
]

self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(staticDevCoffee).then(cache => {
			cache.addAll(assets)
		})
	)
})

self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request)
		})
	)
})