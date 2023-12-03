import {test,expect}from '@playwright/test';
// using any object property
test('Selectors demo',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
     await page.pause();
     await page.click('id=user-name');
    await page.locator('id=user-name').fill('standard_user');
    // await expect(page).toHaveTitle('swag Labs')
    await page.locator('id=password').fill('secret_sauce');
   
    // await page.locator('id=login-button').click();
    // using css selector
    // await page.locator('#login-button').click()
// using xpah
    // await page.locator('xpath=//input[@name="login-button"]').click();


    // using text
    // await page.locator('text=LOGIN').click();
await page.locator('input:has-text("LOGIN")').click();

});

