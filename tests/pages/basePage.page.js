
class BasePage {
    constructor(page) {
        this.page = page
        // o elemento abaixo só precisa estar em sua determinada page, nesse caso, esse ficou na pdp page:
        // this.addToCartButton = this.page.locator(".inventory_details_desc_container .btn_inventory")
        this.cartIcon = this.page.locator("#shopping_cart_container a")
    }

    async addItemToCart(ItemName) {
        try {
            switch (ItemName) {
                case 'backpack':
                    await this.addToCartButton.waitFor({ state: 'visible', timeout: 5000 });
                    await this.addToCartButton.click();
                    console.log("Backpack added to cart successfully.");
                    break;
                case 'boltTShirt':
                    await this.boltTShirtButton.waitFor({ state: 'visible', timeout: 5000 });
                    await this.boltTShirtButton.click();
                    console.log("Bolt T-Shirt added to cart successfully.");
                    break;
                default:
                    throw new Error(`Elemento desconhecido: ${ItemName}`);
            }
        } catch (error) {
            console.error(`Erro ao adicionar ${ItemName} ao carrinho:`, error);
        }
    }

    async goToCart() {
        try {
            await this.cartIcon.waitFor({ state: 'visible', timeout: 5000 });
            await this.cartIcon.click();
            console.log("Navigated to cart successfully.");
        } catch (error) {
            console.error('Erro ao navegar para o carrinho:', error);
        }
    }
}

module.exports = BasePage;
