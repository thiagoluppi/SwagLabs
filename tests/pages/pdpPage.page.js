
class PDPPage {
    constructor(page) {
        this.page = page
        this.backToProductsButton = this.page.locator("#back-to-products")
        this.sauceLabsBackpackItemAddToCartButton = this.page.locator("#add-to-cart-sauce-labs-backpack")
        
    }

}

module.exports = PDPPage