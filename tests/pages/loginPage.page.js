
class LoginPage {
    constructor(page) {
        this.page = page
        this.userNameField = this.page.locator("#user-name")
        this.userPasswordField = this.page.locator("#password")
        this.loginButton = this.page.locator("#login-button")
        this.errorMessage = this.page.locator(".error-message-container")
    }

    async fillLogin(userName, userPassword) {
        await this.userNameField.fill(userName)
        await this.userPasswordField.fill(userPassword)
        await this.loginButton.click()
    }

    async checkErrorMessage() {
        const textoErro = await this.errorMessage.innerText();
        return textoErro.includes("Epic sadface: Sorry, this user has been locked out.");
    }
}

module.exports = LoginPage