
class CartPage {
    constructor(page) {
        this.page = page
        this.continueShoppingButton = page.locator("#continue-shopping")
        this.checkoutButton = this.page.locator("#checkout")
        this.cartList = this.page.locator(".cart_list")
        this.checkoutButton = this.page.locator("#checkout")
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
}

module.exports = CartPage