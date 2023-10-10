
class CartPage {
    constructor(page) {
        this.page = page
        this.continueShoppingButton = page.locator("#continue-shopping")
        this.checkoutButton = this.page.locator("#checkout")
        this.cartList = this.page.locator(".cart_list")
        this.checkoutButton = this.page.locator("#checkout")
        this.backpackButton = this.page.locator("#remove-sauce-labs-backpack")
        this.boltTShirtButton = this.page.locator("#remove-sauce-labs-bolt-t-shirt")
    }

    async checkCartItemByName(itemName) {
        return this.cartList.locator(`.inventory_item_name:has-text("${itemName}")`)
    }

    async clickContinueShoppingBt() {
        await this.continueShoppingButton.click()
    }

    async clickCheckoutBt() {
        await this.checkoutButton.click()
    }

    async proceedToCheckout() {
        await this.checkoutButton.click()
    }

    async removeItemFromCart(elementName) {
        switch (elementName) {
            case 'backpack':
                await this.backpackButton.click()
                break
            case 'boltTShirt':
                await this.boltTShirtButton.click()
                break
            default:
                throw new Error(`Elemento desconhecido: ${elementName}`)
        }
    }
}

module.exports = CartPage