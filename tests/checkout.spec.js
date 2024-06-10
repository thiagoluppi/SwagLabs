const { test, expect } = require('@playwright/test')
require('dotenv').config()

const LoginPage = require("./pages/loginPage.page")
const HomePage = require("./pages/homePage.page")
const CartPage = require("./pages/cartPage.page")
const CheckoutPage = require("./pages/checkoutPage.page")

const credencials = require("./fixtures/credentials.json")
const items = require("./fixtures/productContainerTexts.json")

const BASE_URL = process.env.BASE_URL

test.describe("Customer Buys a Product", () => {

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

            expect(homePage.productsSubHeader).toBeVisible()

            await homePage.addItemToCart("backpack")
            await homePage.goToCart()

            const cartItem = await cartPage.checkCartItemByName(elementText)
            expect(cartItem).toBeVisible()
        })

        test('Checking out a product @regression', async ({ page }) => {
            const checkoutPage = new CheckoutPage(page)
            const cartPage = new CartPage(page)

            await cartPage.proceedToCheckout()

            const messageElement = await checkoutPage.fillYourInformation("Carl", "Sagan", "12345678")
            expect(messageElement).toBeVisible()
        })
    })
})
