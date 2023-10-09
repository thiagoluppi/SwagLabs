
class CheckoutPage {
    constructor(page) {
        this.page = page
        this.nameField = this.page.locator("#first-name")
        this.lastNameField = this.page.locator("#last-name")
        this.postalCodeField = this.page.locator("#postal-code")
        this.continueButton = this.page.locator("#continue")
        this.finishButton = this.page.locator("#finish")
        this.orderMessage = this.page.locator("#checkout_complete_container h2[class='complete-header']")
    }

    async fillYourInformation(name, lastName, postalCode) {
        await this.nameField.fill(name)
        await this.lastNameField.fill(lastName)
        await this.postalCodeField.fill(postalCode)
        await this.continueButton.click()
        await this.finishButton.click()
        return this.orderMessage
    }
}

module.exports = CheckoutPage