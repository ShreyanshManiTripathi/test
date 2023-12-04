
import { test, expect,chromium } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');



const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('a').filter({ hasText: '1' }).click();

  await expect(page.locator('[class="inventory_item_name"]')).toHaveText('Sauce Labs Backpack');

  // ---------------------
  await context.close();
  await browser.close();

});