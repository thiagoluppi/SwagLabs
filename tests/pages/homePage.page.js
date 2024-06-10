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

        // Mapeamento dos botões de adicionar itens ao carrinho:
        this.addToCartButtons = {
            backpack: page.locator('#add-to-cart-sauce-labs-backpack'),
            bikeLight: page.locator('#add-to-cart-sauce-labs-bike-light'),
            boltTShirt: page.locator('#add-to-cart-sauce-labs-bolt-t-shirt'),
            fleeceJacket: page.locator('#add-to-cart-sauce-labs-fleece-jacket'),
            onesie: page.locator('#add-to-cart-sauce-labs-onesie'),
            // testAllTheThingsTShirt: page.locator('#add-to-cart-test.allthethings()-t-shirt-(red)')
        };

        // Mapeamento das imagens dos itens de adicionar ao carrinho:
        this.itemsImages = {
            backpack: page.locator('.inventory_list img[alt="Sauce Labs Backpack"]'),
            bikeLight: page.locator('.inventory_list img[alt="Sauce Labs Bike Light"]'),
            boltTShirt: page.locator('.inventory_list img[alt="Sauce Labs Bolt T-Shirt"]'),
            fleeceJacket: page.locator('.inventory_list img[alt="Sauce Labs Fleece Jacket"]'),
            onesie: page.locator('.inventory_list img[alt="Sauce Labs Onesie"]')
        }
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

    async checkItemImage(itemName) {
        const itemImage = await this.itemsImages[itemName]
        const srcValue = await itemImage.getAttribute('src');
        return srcValue
    }
}
module.exports = HomePage
