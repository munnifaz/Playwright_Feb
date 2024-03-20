/* Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * Enter the username vidyar@testleaf.com
 * Enter the password Testleaf@1234
 * Click Login button
 * Verify the title of the page (using page.title() method)
 * 
 */// Try Implementing Fixtures in the above testcase 

 import  { test, expect } from "@playwright/test";

 test.only('salesforce automation', async({page})=>{
    await page.goto("https://login.salesforce.com/")
    console.log(page.url());
    
    await page.fill("#username","munni.shaik@gmail.com");
    await page.fill("#password","Jaharas@440");
    await page.locator("#Login").click();
    await page.waitForLoadState('load');
    await page.pause()
    //await page.waitForTimeout(3000);
    await page.waitForSelector("//div[@title='Setup Home']");
   const titlep= await page.title();
   const ExpectedTitle='Salesforce';
   console.log(titlep);
    console.log(page.url());
    expect(titlep).toContain("adfsdfds")  



 }
  )