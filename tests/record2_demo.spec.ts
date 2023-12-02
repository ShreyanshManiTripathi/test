// const { chromium } = require('playwright');
import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();