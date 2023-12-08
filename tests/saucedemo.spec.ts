
import { test, expect,chromium } from '@playwright/test';
import { Login_data } from './test_data';
import { LoginPage } from '../pages/login';
import { Inventory } from '../pages/inventory';
import { Cart } from '../pages/cart';
test.beforeAll(async () => {
  
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
 
  
   
  });

  let credentials=new Login_data()

//   let login_data =new Login_data

  test.beforeEach(async({page})=>{
    const Login=new LoginPage(page)
    await Login.gotoLoginPage()
     await Login.login(credentials.username,credentials.password)
   

  
})


test('Checkout', async ({ page }) => {

 

const cart=new Cart(page)



await cart.checkout('Shreyansh','Tripathi','226028')





});

test.only('add to cart', async ({ page }) => {


  const cart=new Cart(page)

await cart.addToCart()


  
  // await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // await page.locator('a').filter({ hasText: '1' }).click();

  // await expect(page.locator('[class="inventory_item_name"]')).toHaveText('Sauce Labs Backpack');

  // ---------------------

});




test.only('Remove from cart', async ({ page }) => {

  
  const invent=new Inventory(page)

  await invent.addToCart()
 
  await invent.removeFromCart()

 

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