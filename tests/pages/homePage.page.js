// const BasePage = require("./basePage.page")

class HomePage {
    constructor(page) {
        this.page = page
        this.headerLabel = this.page.locator(".app_logo")
        this.productsInventoryContainer = this.page.locator(".inventory_container")
        this.productsInventoryList = this.productsInventoryContainer.locator(".inventory_list")
        this.productInventoryItem = this.productsInventoryList.locator(".inventory_item")
        // this.sauceLabsBackpackItem = this.page.locator("")
        this.sauceLabsBackpackItemAddToCartButton = this.page.locator("#add-to-cart-sauce-labs-backpack")
        this.cartIcon = this.page.locator("#shopping_cart_container a")
    }

    async clickItemByName(itemName) {
        await this.productsInventoryList.locator(`.inventory_item_name:has-text("${itemName}")`).click()
    }

    async addItemToCart() {
        await this.sauceLabsBackpackItemAddToCartButton.click()
    }

    async goToCart() {
        await this.cartIcon.click()
    }

    async findItemByName(itemName) {
        // Encontra o elemento pelo texto fornecido e retorna
        return this.productsInventoryList.locator(`.inventory_item_name:has-text("${itemName}")`)
    }
}

module.exports = HomePage