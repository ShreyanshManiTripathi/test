
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



  test.beforeEach(async({page})=>{
    const Login=new LoginPage(page)
    await Login.gotoLoginPage()
     await Login.login(credentials.username,credentials.password)
   

  
})


test('Checkout', async ({ page }) => {

 

const cart=new Cart(page)



await cart.checkout('Shreyansh','Tripathi','226028')





});

test('add to cart', async ({ page }) => {


  const cart=new Cart(page)

await cart.addToCart()


  

});




test('Remove from cart', async ({ page }) => {

  
  const invent=new Inventory(page)

  await invent.addToCart()
 
  await invent.removeFromCart()

 

});




  
test('Validate:Sort:Z to A',(async ({page}) => {
 
const invent=new Inventory(page) 

invent.sortNameZtoA()

}))



test('Validate :Sort:A to Z',(async ({page}) => {

  const invent=new Inventory(page) 

invent.sortNameAtoZ()






}))



test('Sort:High to Low',(async ({page}) => {
  
 
  const invent=new Inventory(page) 

  invent.sortPriceHighToLow()







}))


test.only('Sort:Low To High',(async ({page}) => {


  const invent=new Inventory(page) 

  invent.sortPriceLowToHigh()


  




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