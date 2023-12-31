const BasePage = require("./basePage.page")

class HomePage extends BasePage {
    constructor(page) {
        super(page)
        this.headerLabel = this.page.locator(".app_logo")
        this.productsInventoryContainer = this.page.locator(".inventory_container")
        this.productsInventoryList = this.productsInventoryContainer.locator(".inventory_list")
        this.productInventoryItem = this.productsInventoryList.locator(".inventory_item")
    }

    async clickItemByName(itemName) {
        await this.productsInventoryList.locator(`.inventory_item_name:has-text("${itemName}")`).click()
    }

    // async addItemToCart() {
    //     await this.sauceLabsBackpackItemAddToCartButton.click()
    // }

    // async goToCart() {
    //     await this.cartIcon.click()
    // }

    async findItemByName(itemName) {
        // Encontra o elemento pelo texto fornecido e retorna
        return this.productsInventoryList.locator(`.inventory_item_name:has-text("${itemName}")`)
    }
}

module.exports = HomePage