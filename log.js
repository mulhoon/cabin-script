;(function(window) {
	// Kill requests from bots and spiders
	if (window.navigator.userAgent.search(/(bot|spider|crawl)/gi) > -1) {
		return
	}
	// set data package
	const data = {
		r: window.document.referrer,
		w: window.screen.width,
		h: window.screen.height,
		t: Intl.DateTimeFormat().resolvedOptions().timeZone
	}

	const params = Object.keys(data)
		.map(key => `${key}=${encodeURIComponent(data[key])}`)
		.join('&')

	const img = new Image()
	img.src = `https://cabin.now.sh/hi.gif?${params}`
	// img.src = `http://localhost:3000/hi.gif?${params}`
})(window)
