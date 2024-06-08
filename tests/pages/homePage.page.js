const BasePage = require("./basePage.page")

class HomePage extends BasePage {
    constructor(page) {
        super(page)
        this.headerContainer = page.locator('.header_secondary_container');
        this.productsSubHeader = this.headerContainer.locator('span', { hasText: 'Products' });
        this.productsInventoryContainer = this.page.locator(".inventory_container")
        this.productsInventoryList = this.productsInventoryContainer.locator(".inventory_list")
        this.productInventoryItem = this.productsInventoryList.locator(".inventory_item")

        this.backpackAddToCartButton = this.page.locator("#add-to-cart-sauce-labs-backpack")

        // Mapeamento dos botões de adicionar itens ao carrinho
        this.addToCartButtons = {
            backpack: page.locator('#add-to-cart-sauce-labs-backpack'),
            bikeLight: page.locator('#add-to-cart-sauce-labs-bike-light'),
            boltTShirt: page.locator('#add-to-cart-sauce-labs-bolt-t-shirt'),
            fleeceJacket: page.locator('#add-to-cart-sauce-labs-fleece-jacket'),
            onesie: page.locator('#add-to-cart-sauce-labs-onesie'),
            // testAllTheThingsTShirt: page.locator('#add-to-cart-test.allthethings()-t-shirt-(red)')
        };
    }

    async clickItemByName(itemName) {
        await this.productsInventoryList.locator(`.inventory_item_name:has-text("${itemName}")`).click()
    }

    // Esse método não pode ser removido, pois o elemento é diferente entre as pages home e pdp. Ambas usam o mesmo metodo da base page (addItemToCart), porém com localizadores diferentes.
    async addItemToCart() {
        await this.backpackAddToCartButton.click()
    }

    async findItemByName(itemName) {
        // Encontra o elemento pelo texto fornecido e retorna
        return this.productsInventoryList.locator(`.inventory_item_name:has-text("${itemName}")`)
    }

    async addAllItemsToCart() {
        for (let item in this.addToCartButtons) {
            await this.addToCartButtons[item].click();
        }
    }
}

module.exports = HomePage