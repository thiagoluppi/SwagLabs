const { test, expect } = require('@playwright/test')

require('dotenv').config()

const BASE_URL = process.env.BASE_URL

test('has title @temp', async ({ page }) => {
  await page.goto(BASE_URL)
  await page.pause()
})
