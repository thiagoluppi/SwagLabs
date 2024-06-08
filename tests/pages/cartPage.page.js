class CartPage {
    constructor(page) {
        this.page = page;
        this.continueShoppingButton = page.locator("#continue-shopping");
        this.checkoutButton = this.page.locator("#checkout");
        this.cartList = this.page.locator(".cart_list");

        // Mapeamento dos botões de remover itens do carrinho
        this.backpackButton = this.page.locator("#remove-sauce-labs-backpack");
        this.bikeLightButton = this.page.locator("#remove-sauce-labs-bike-light");
        this.boltTShirtButton = this.page.locator("#remove-sauce-labs-bolt-t-shirt");
        this.fleeceJacketButton = this.page.locator("#remove-sauce-labs-fleece-jacket");
        this.onesieButton = this.page.locator("#remove-sauce-labs-onesie");
        // this.testAllTheThingsTShirtButton = this.page.locator("#remove-test.allthethings()-t-shirt-(red)");
    }

    async checkCartItemByName(itemName) {
        return this.cartList.locator(`.inventory_item_name:has-text("${itemName}")`);
    }

    async clickContinueShoppingBt() {
        await this.continueShoppingButton.click();
    }

    async clickCheckoutBt() {
        await this.checkoutButton.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    async removeItemFromCart(elementName) {
        switch (elementName) {
            case 'backpack':
                await this.backpackButton.click();
                break;
            case 'bikeLight':
                await this.bikeLightButton.click();
                break;
            case 'boltTShirt':
                await this.boltTShirtButton.click();
                break;
            case 'fleeceJacket':
                await this.fleeceJacketButton.click();
                break;
            case 'onesie':
                await this.onesieButton.click();
                break;
            case 'testAllTheThingsTShirt':
                await this.testAllTheThingsTShirtButton.click();
                break;
            default:
                throw new Error(`Elemento desconhecido: ${elementName}`);
        }
    }

    async clearCart() {
        // Loop para continuar removendo itens enquanto houverem no carrinho
        while (await this.cartList.locator('.cart_item').count() > 0) {
            // Tenta remover cada tipo de item do carrinho
            try {
                await this.removeItemFromCart('backpack');
            } catch (e) {
                console.log('Backpack not found, trying next item...');
            }
            try {
                await this.removeItemFromCart('bikeLight');
            } catch (e) {
                console.log('Bike Light not found, trying next item...');
            }
            try {
                await this.removeItemFromCart('boltTShirt');
            } catch (e) {
                console.log('Bolt T-Shirt not found, trying next item...');
            }
            try {
                await this.removeItemFromCart('fleeceJacket');
            } catch (e) {
                console.log('Fleece Jacket not found, trying next item...');
            }
            try {
                await this.removeItemFromCart('onesie');
            } catch (e) {
                console.log('Onesie not found, trying next item...');
            }
            try {
                await this.removeItemFromCart('testAllTheThingsTShirt');
            } catch (e) {
                console.log('Test.allTheThings() T-Shirt not found, trying next item...');
            }
        }
    }
}

module.exports = CartPage;
