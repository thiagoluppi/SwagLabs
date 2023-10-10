
class BasePage {
    constructor(page) {
        this.page = page
        this.backpackAddToCartButton = this.page.locator("#add-to-cart-sauce-labs-backpack")
        this.cartIcon = this.page.locator("#shopping_cart_container a")
    }

    async addItemToCart(elementName) {
        switch (elementName) {
            case 'backpack':
                await this.backpackAddToCartButton.click()
                break
            case 'boltTShirt':
                // await this.boltTShirtButton.click()
                break
            default:
                throw new Error(`Elemento desconhecido: ${elementName}`)
        }
    }

    async goToCart() {
        await this.cartIcon.click()
    }
}

module.exports = BasePage