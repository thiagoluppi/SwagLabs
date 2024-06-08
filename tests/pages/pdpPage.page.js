const BasePage = require("./basePage.page")

class PDPPage extends BasePage {
    constructor(page) {
        super(page)
        this.backToProductsButton = this.page.locator("#back-to-products")
        // o localizador que antes ficava na base page foi mudado para ficar em sua propria page, deixando o código assim mais organizado:
        this.addToCartButton = this.page.locator(".inventory_details_desc_container .btn_inventory")
    }
}

module.exports = PDPPage