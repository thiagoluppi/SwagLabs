const { test, expect } = require('@playwright/test')
require('dotenv').config()
const BASE_URL = process.env.BASE_URL

const LoginPage = require("./pages/loginPage.page")

test.describe("Login", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('login with standart user @regression', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await loginPage.fillLogin("standard_user", "secret_sauce")
    expect(loginPage.loginButton).not.toBeVisible()
    // await page.waitForTimeout(5000)
  })
})


