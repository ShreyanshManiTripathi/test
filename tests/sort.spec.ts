
import { test, expect,chromium } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');


const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  

  
await page.goto('https://www.saucedemo.com/');
await page.locator('[data-test="username"]').click();
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').click();
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();


await page.pause();

await page.locator('[data-test="product_sort_container"]').click();
await page.locator('[data-test="product_sort_container"]').selectOption('za');


await page.pause();

await page.getByText('Name (Z to A)Name (A to Z)').click();
await page.locator('[data-test="product_sort_container"]').selectOption('az');  


await page.pause();

await page.locator('[data-test="product_sort_container"]').click();
await page.locator('[data-test="product_sort_container"]').selectOption('hilo');


await page.pause();

await page.locator('[data-test="product_sort_container"]').click();
await page.locator('[data-test="product_sort_container"]').selectOption('lohi');



await page.pause();

});
