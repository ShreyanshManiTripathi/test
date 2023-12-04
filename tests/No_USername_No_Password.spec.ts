
import { test, expect,chromium } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  
  const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    
    await page.locator('[data-test="login-button"]').click();
    // await page.pause();
    
    await expect(page.locator('[data-test="error"]')).toHaveCount(1);
  // ---------------------
  await context.close();
  await browser.close();

});