
import { test, expect,chromium } from '@playwright/test';
import { Actual_Login } from './methods.spec';
import { Login_data } from './test_data';


test.beforeAll(async () => {
  
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
 
  
   
  });


  let login_data =new Login_data

  test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/'); 
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(login_data.username);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(login_data.password);
    await page.locator('[data-test="login-button"]').click();
   

  
})


test('Checkout', async ({ page }) => {

 


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

test('add to cart', async ({ page }) => {

  




  
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('a').filter({ hasText: '1' }).click();

  await expect(page.locator('[class="inventory_item_name"]')).toHaveText('Sauce Labs Backpack');

  // ---------------------

});




test('Remove from cart', async ({ page }) => {

  
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

 

});




  
test('Validate:Sort:Z to A',(async ({page}) => {
 
 

  await page.locator('[data-test="product_sort_container"]').click();
  await page.locator('[data-test="product_sort_container"]').selectOption('za');










}))



test('Validate :Sort:A to Z',(async ({page}) => {

  
 
  await page.locator('[data-test="product_sort_container"]').click();
  await page.locator('[data-test="product_sort_container"]').selectOption('az');  






}))



test('Sort:High to Low',(async ({page}) => {
  
 

  await page.locator('[data-test="product_sort_container"]').click();
  await page.locator('[data-test="product_sort_container"]').selectOption('hilo');







}))


test('Sort:Low To High',(async ({page}) => {



  await page.locator('[data-test="product_sort_container"]').click();
  await page.locator('[data-test="product_sort_container"]').selectOption('lohi');

  




}))


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