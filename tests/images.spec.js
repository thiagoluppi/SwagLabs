const { test, expect } = require('@playwright/test')
require('dotenv').config()

const LoginPage = require("./pages/loginPage.page")
const HomePage = require("./pages/homePage.page")

const credencials = require("./fixtures/credentials.json")
const itemsNames = require("./fixtures/productNames.json")
const itemsSrcText = require("./fixtures/imagesSrcItemsText.json")

const BASE_URL = process.env.BASE_URL

test.describe("Customer can see the products images in the home page, pdp page...", () => {

    test.describe("Customer sees the image of a product in the home page", () => {

        test.beforeEach(async ({ page }) => {
            await page.goto(BASE_URL)

            const loginPage = new LoginPage(page)

            const userName = credencials.standard_user.userName
            const userPassword = credencials.standard_user.userPassword

            await loginPage.fillLogin(userName, userPassword)
            expect(loginPage.loginButton).not.toBeVisible()
        })

        test('Checking out the image of a product in the home page @regression', async ({ page }) => {
            const homePage = new HomePage(page)

            const namesOfItems = itemsNames[0]
            const itemsSrcNames = itemsSrcText[0]

            expect(homePage.productsSubHeader).toBeVisible()

            const imageSrcAttributeValue = await homePage.checkItemImage(namesOfItems)

            expect(imageSrcAttributeValue).toContain(itemsSrcNames)
        })

        test('Checking out the image of all product in the home page @regression', async ({ page }) => {
            const homePage = new HomePage(page)

            const namesOfItems = itemsNames
            const itemsSrcNames = itemsSrcText

            expect(homePage.productsSubHeader).toBeVisible()

            for (let i = 0; i < namesOfItems.length; i++) {
                const imageSrcAttributeValue = await homePage.checkItemImage(itemsNames[i])
                expect(imageSrcAttributeValue).toContain(itemsSrcNames[i])
            }
        })
    })
})
