const { test, expect } = require('@playwright/test')
require('dotenv').config()

const LoginPage = require("./pages/loginPage.page")
const HomePage = require("./pages/homePage.page")
const CartPage = require("./pages/cartPage.page")
const PDPPage = require("./pages/pdpPage.page")
const CheckoutPage = require("./pages/checkoutPage.page")

const credencials = require("./fixtures/credentials.json")
const items = require("./fixtures/productContainerTexts.json")
const exp = require('constants')

const BASE_URL = process.env.BASE_URL

test.describe("Customer Buys a Product", () => {

    test.describe("Customer Puts a Product in the Cart", () => {

        test.beforeEach(async ({ page }) => {
            await page.goto(BASE_URL)

            const loginPage = new LoginPage(page)

            const userName = credencials.standard_user.userName
            const userPassword = credencials.standard_user.userPassword

            await loginPage.fillLogin(userName, userPassword)
            expect(loginPage.loginButton).not.toBeVisible()
        })

        test('Going to the PDP of a product and Add the product to the Cart @regression', async ({ page }) => {
            const homePage = new HomePage(page)
            const cartPage = new CartPage(page)
            const pdpPage = new PDPPage(page)

            expect(homePage.headerLabel).toBeVisible()

            const elementText = items[0]

            const itemElement = await homePage.findItemByName(elementText)
            expect(itemElement).toBeVisible()

            await homePage.clickItemByName(elementText)

            expect(pdpPage.backToProductsButton).toBeVisible()

            await pdpPage.addItemToCart("add-to-cart-sauce-labs-backpack")

            await pdpPage.goToCart()

            const cartItem = await cartPage.checkCartItemByName(elementText)
            expect(cartItem).toBeVisible()
        })

        test('Adding a product to the cart throught the Home Page @regression', async ({ page }) => {
            const homePage = new HomePage(page)
            const cartPage = new CartPage(page)

            const elementText = items[0]

            expect(homePage.headerLabel).toBeVisible()

            await homePage.addItemToCart("add-to-cart-sauce-labs-backpack")
            await homePage.goToCart()

            const cartItem = await cartPage.checkCartItemByName(elementText)
            expect(cartItem).toBeVisible()
        })
        // ... Customer Puts a Product in the Cart ...
    })

    test.describe("Customer checkouts a Product", () => {

        test.beforeEach(async ({ page }) => {
            await page.goto(BASE_URL)

            const loginPage = new LoginPage(page)

            const userName = credencials.standard_user.userName
            const userPassword = credencials.standard_user.userPassword

            await loginPage.fillLogin(userName, userPassword)
            expect(loginPage.loginButton).not.toBeVisible()


            // Putting a product in the cart:

            const homePage = new HomePage(page)
            const cartPage = new CartPage(page)

            const elementText = items[0]

            expect(homePage.headerLabel).toBeVisible()

            await homePage.addItemToCart("add-to-cart-sauce-labs-backpack")
            await homePage.goToCart()

            const cartItem = await cartPage.checkCartItemByName(elementText)
            expect(cartItem).toBeVisible()
        })

        test('Checking out a product @regression @temp', async ({ page }) => {
            const checkoutPage = new CheckoutPage(page)
            const cartPage = new CartPage(page)

            await cartPage.proceedToCheckout()

            const messageElement = await checkoutPage.fillYourInformation("Carl", "Sagan", "12345678")
            expect(messageElement).toBeVisible()
        })
    })
})
