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

	// adding amount to sell
	await page.click(
		'#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > div > input',
	)

	// deleting already present value in the input (10)
	await page.keyboard.press('Backspace')
	await page.keyboard.press('Backspace')

	// adding new value
	await page.type(
		'#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > div > input',
		'12',
	)

	// selecting selling token
	await page.click(
		'#__next > div > div > div.sc-889ee977-0.gCbopq > main > div.sc-55ee4011-1.cZHlms > div.sc-55ee4011-3.dlZmAt > div.sc-55ee4011-0.iXoIVV > div.css-1urcov8 > div:nth-child(1) > div.css-1k491an > button',
	)
})()
