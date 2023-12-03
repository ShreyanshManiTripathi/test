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
  await page.locator('[data-test="password"]').fill('sauce');
  await page.locator('[data-test="login-button"]').click();

  // ---------------------
  await context.close();
  await browser.close();

});