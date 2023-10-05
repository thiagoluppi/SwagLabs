const { test, expect } = require('@playwright/test')
require('dotenv').config()

const LoginPage = require("./pages/loginPage.page")
const HomePage = require("./pages/homePage.page")
const CartPage = require("./pages/cartPage.page")
const PDPPage = require("./pages/pdpPage.page")

const credencials = require("./fixtures/credentials.json")
const items = require("./fixtures/productContainerTexts.json")

const BASE_URL = process.env.BASE_URL

test.describe("Check Out", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(BASE_URL)

        const loginPage = new LoginPage(page)

        const userName = credencials.standard_user.userName
        const userPassword = credencials.standard_user.userPassword

        await loginPage.fillLogin(userName, userPassword)
        expect(loginPage.loginButton).not.toBeVisible()
    })

    test('Going to the PDP of a product @temp', async ({ page }) => {
        const homePage = new HomePage(page)
        const pdpPage = new PDPPage(page)

        expect(homePage.headerLabel).toBeVisible()

        const elementText = items[0]

        // await page.pause()

        const itemElement = await homePage.findItemByName(elementText)
        expect(itemElement).toBeVisible()

        await homePage.clickItemByName(elementText)

        expect(pdpPage.backToProductsButton).toBeVisible()
    })

    test('Adding a product to the cart throught the Home Page @regressive', async ({ page }) => {
        const homePage = new HomePage(page)
        const cartPage = new CartPage(page)

        const elementText = items[0]

        expect(homePage.headerLabel).toBeVisible()

        await homePage.addItemToCart("add-to-cart-sauce-labs-backpack")
        await homePage.goToCart()

        const cartItem = await cartPage.checkCartItemByName(elementText)
        expect(cartItem).toBeVisible()
    })
})
