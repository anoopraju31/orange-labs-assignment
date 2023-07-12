const puppeteer = require('puppeteer')

;(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		defaultViewport: false,
		slowMo: 100,
	})
	const page = await browser.newPage()
	await page.goto('https://swap.defillama.com/')

	// select chain
	await page.type('#react-select-2-input', 'Arbitrum One')
	await page.keyboard.press('Enter')
})()
