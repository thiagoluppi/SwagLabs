const BasePage = require("./basePage.page")

class PDPPage extends BasePage {
    constructor(page) {
        super(page)
        this.backToProductsButton = this.page.locator("#back-to-products")
    }
}

module.exports = PDPPage