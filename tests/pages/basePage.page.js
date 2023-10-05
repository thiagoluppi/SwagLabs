
class BasePage {
    constructor(page) {
        this.page = page
        this.sauceLabsBackpackItemAddToCartButton = this.page.locator("#add-to-cart-sauce-labs-backpack")
        this.cartIcon = this.page.locator("#shopping_cart_container a")
    }

    async addItemToCart() {
        await this.sauceLabsBackpackItemAddToCartButton.click()
    }

    async goToCart() {
        await this.cartIcon.click()
    }
}

module.exports = BasePage