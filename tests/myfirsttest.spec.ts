import { test, expect } from '@playwright/test';

// const{test,expect}=require('@playwright/test')

test('My first test',async({page})=>{
await page.goto('https://www.saucedemo.com/')
await expect(page).toHaveTitle('swag Labs')})