import {test,expect,chromium,Page}from '@playwright/test';
// using any object property
import {  Actual_Login, Assertion, Login} from './methods.spec';
import { Login_data } from './test_data';
import { LoginPage } from '../pages/login';


// test.beforeAll(async () => {
  
//     const browser = await chromium.launch({
//       headless: false
//     });
//     const context = await browser.newContext();
      
    
     
//     });

    // test.beforeEach(async({page})=>{
    //     await page.goto('https://www.saucedemo.com/');
      
    //   })
      

    const credentials=new Login_data()





test('Login using correct username and correct password', async ({ page }) => {
      const Login=new LoginPage(page)
 await Login.gotoLoginPage()
  await Login.login(credentials.username,credentials.password)
 

});




test('Login using correct username and incorrect password', async ({ page }) => {
  const Login=new LoginPage(page)

await Login.gotoLoginPage()
await Login.login(credentials.username,credentials.incorrect_password)
await expect(page.locator('[data-test="error"]')).toHaveCount(1);

});

   

test('Login using incorrect username and correct password', async ({ page }) => {
  const Login=new LoginPage(page)

await Login.gotoLoginPage()
await Login.login(credentials.incorrect_User_name,credentials.password)
await expect(page.locator('[data-test="error"]')).toHaveCount(1);

});   



test('Login using incorrect username and incorrect password', async ({ page }) => {
  const Login=new LoginPage(page)

await Login.gotoLoginPage()
await Login.login(credentials.incorrect_User_name,credentials.incorrect_password)
await expect(page.locator('[data-test="error"]')).toHaveCount(1);

});
//       let login_data=new Login_data

  

   
//       // Login using no username and no password
      
//        Login('Login using no username and no password',login_data.no_username,login_data.no_password,Assertion)
   
    


//        // Login using correct username and incorrect password
//  Login('Login using correct username and incorrect password',login_data.username,login_data.incorrect_password,Assertion)


       

//  // Login using incorrect username and correct password
//  Login('Login using incorrect username and correct password',login_data.incorrect_User_name,login_data.password,Assertion)

 
// // Login using incorrect username and incorrect password

// Login('Login using incorrect username and incorrect password',login_data.incorrect_User_name,login_data.incorrect_password,Assertion)


// // Login using Correct username and correct password

// Actual_Login('Login using Correct username and correct password',login_data.username,login_data.password)


  test.afterAll(async () => {
    
  
  
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    
  
    console.log('Done with tests');
  
    await context.close();
    await browser.close();
    
    
  });
