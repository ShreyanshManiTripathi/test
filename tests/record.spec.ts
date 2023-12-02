// const { chromium } = require('playwright');
import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';
test('record2',async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Ope Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // ---------------------
  await context.close();
  await browser.close();
});