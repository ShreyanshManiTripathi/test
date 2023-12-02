import {test,expect}from '@playwright/test';

test('Selectors demo',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
     await page.click('id=user-name');
    await page.locator('id=user-name').fill('standard_user');
    await page.locator('id=password').fill('secret_sauce');
    // await page.pause();
    await page.locator('id=login-button').click();
    
});