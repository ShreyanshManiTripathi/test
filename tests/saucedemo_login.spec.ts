import {test,expect,chromium}from '@playwright/test';
// using any object property





test.beforeAll(async () => {
  
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
      
    
     
    });

    test.beforeEach(async({page})=>{
        await page.goto('https://www.saucedemo.com/');
      
      })
      



      test('no user and no password', async ({ page }) => {

  
        
        
          
          await page.locator('[data-test="login-button"]').click();
      
          
          await expect(page.locator('[data-test="error"]')).toHaveCount(1);
       
      
      });





test('Login with Right User Right Password', async ({ page }) => {



    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  
  });




  test('Login with Right user and Wrong password', async ({ page }) => {


    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveCount(1);
   

  
  });


  test('Login with wrong user and wrong password', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
  
  // await page.pause();
  
  const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveCount(1);
  
 
  });



  test('wrong user and right password', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
  

    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveCount(1);
  
  
  });



  test.afterAll(async () => {
    
  
  
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    
  
    console.log('Done with tests');
  
    await context.close();
    await browser.close();
    
    // ...
  });
