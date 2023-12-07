import { expect, type Locator, type Page } from '@playwright/test';
export class LoginPage {

    page: Page
    username: Locator
    password: Locator
    login_button: Locator

    constructor(page: Page) {
        this.page = page
        this.username=page.locator('[data-test="username"]')
        this.password=page.locator('[data-test="password"]')
        this.login_button=  page.locator('[data-test="login-button"]')
}


async login(username:string,password:string){
    await this.username.fill(username)
    await this.password.fill(password)
    await this.login_button.click()
}

async gotoLoginPage(){
    await this.page.goto('https://www.saucedemo.com/');
}


}