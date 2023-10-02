

class LoginPage {
    constructor(page) {
        this.page = page
        this.userNameField = this.page.locator("#user-name")
        this.userPasswordField = this.page.locator("#password")
        this.loginButton = this.page.locator("#login-button")
    }

    

    async fillLogin(userName, userPassword) {
        await this.userNameField.fill(userName)
        await this.userPasswordField.fill(userPassword)
        await this.loginButton.click()
    }

}

module.exports = LoginPage