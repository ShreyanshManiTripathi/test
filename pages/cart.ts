import { expect, type Locator, type Page } from '@playwright/test';
export class Cart {

    page: Page
    add_item: Locator
    first_name: Locator
    last_name: Locator
    checkout_button: Locator
cart_button:Locator
zip_code:Locator
continue_buttton:Locator
finish_button:Locator

    constructor(page: Page) {
        this.page = page
        this.add_item=page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.first_name=page.locator('[data-test="firstName"]')
        this.last_name=page.locator('[data-test="lastName"]')
        this.checkout_button=  page.locator('[data-test="checkout"]')
this.cart_button=page.locator('a').filter({ hasText: '1' })
this.zip_code=page.locator('[data-test="postalCode"]')
this.continue_buttton=page.locator('[data-test="continue"]')
this.finish_button=page.locator('[data-test="finish"]')

}


async checkout(first_name:string,last_name:string,zipcode:string){
    await this.add_item.click()
    await this.cart_button.click()
    await this.checkout_button.click()
    await this.first_name.fill(first_name)
    await this.last_name.fill(last_name)
    await this.zip_code.fill(zipcode)
    await this.continue_buttton.click()
    await this.finish_button.click()

}

async gotoLoginPage(){
    await this.page.goto('https://www.saucedemo.com/');
}



async addToCart(){
    await this.add_item.click()
    await this.cart_button.click()
    await expect(this.page.locator('[class="inventory_item_name"]')).toHaveText('Sauce Labs Backpack');

}

}