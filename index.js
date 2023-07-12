const puppeteer = require('puppeteer')

;(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: false,
		slowMo: 100,
	})
	const page = await browser.newPage()
	await page.goto('https://swap.defillama.com/')
})()
