import { expect, type Locator, type Page } from '@playwright/test';
export class Inventory {

    page: Page
    add_item: Locator
cart_button:Locator
remove_button:Locator

    constructor(page: Page) {
        this.page = page
        this.add_item=page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.cart_button=page.locator('a').filter({ hasText: '1' })
        this.remove_button= page.locator('[data-test="remove-sauce-labs-backpack"]')
}



// async gotoLoginPage(){
//     await this.page.goto('https://www.saucedemo.com/');
// }



async addToCart(){
    await this.add_item.click()
    await this.cart_button.click()
    await expect(this.page.locator('[class="inventory_item_name"]')).toHaveText('Sauce Labs Backpack');

}


async removeFromCart(){
    await this.remove_button.click();
}

}