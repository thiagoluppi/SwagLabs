const { test, expect } = require('@playwright/test')
require('dotenv').config()

const LoginPage = require("./pages/loginPage.page")
const credencials = require("./fixtures/credentials.json")

const BASE_URL = process.env.BASE_URL

test.describe("Login", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL)
  })

  test('login with standart user @regression', async ({ page }) => {
    const loginPage = new LoginPage(page)

    const userName = credencials.standard_user.userName
    const userPassword = credencials.standard_user.userPassword

    await loginPage.fillLogin(userName, userPassword)
    expect(loginPage.loginButton).not.toBeVisible()
    // await page.waitForTimeout(5000)
  })

  test('login with locked out user @temp @regression', async ({ page }) => {
    const loginPage = new LoginPage(page)

    const userName = credencials.locked_out_user.userName
    const userPassword = credencials.locked_out_user.userPassword
    await loginPage.fillLogin(userName, userPassword)

    const checkErrorMessage = await loginPage.checkErrorMessage()
    expect(checkErrorMessage).toBe(true)
    // await page.waitForTimeout(5000)
  })
})


