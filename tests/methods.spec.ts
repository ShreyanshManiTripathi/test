import { test, expect } from '@playwright/test';



export  let Login=(testName:string,username:string,password:string,fn?:(a: string)=> void  )=>{

test(testName, async ({ page }) => {
    // await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill(username);
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill(password);
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toHaveCount(1);

      })

    }


    
    
    export  let Actual_Login=(testName:string,username:string,password:string  )=>{

        test(testName, async ({ page }) => {
            // await page.goto('https://www.saucedemo.com/');
                await page.locator('[data-test="username"]').click();
                await page.locator('[data-test="username"]').fill(username);
                await page.locator('[data-test="password"]').click();
                await page.locator('[data-test="password"]').fill(password);
                await page.locator('[data-test="login-button"]').click();

        
              })
        
            }

        export let Assertion=()=>{
            async ({ page }) => {

                    await page.locator('[data-test="login-button"]').click();
        
            
                  }
        }