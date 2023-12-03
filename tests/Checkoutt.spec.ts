
import { test, expect,chromium } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

// await page.pause();

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
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Shreyansh Mani');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Tripathi');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('226028');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();



});

  

