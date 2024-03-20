

import test, { expect } from "@playwright/test";
test.only('salesforce automation', async({page})=>{
    await page.goto("https://login.salesforce.com/")
    console.log(page.url());
    await page.fill("#username","munni.shaik@gmail.com");
    await page.fill("#password","Jaharas@440");
    await page.locator("#Login").click();
    await page.locator("//div[@class='slds-icon-waffle']").click();
    await page.locator("//button[@aria-label='View All Applications']").click();
    await page.locator("//p[text()='Individuals']").click();
    await page.locator("//div[@title='New']").click();
    await page.locator("//input[@placeholder='Last Name']").fill("Begum");
    await page.locator("//span[text()='Save & New']/following::span[text()='Save']").click();
    const newindividual= await page.locator("div[class='slds-page-header__title slds-m-right--small slds-align-middle clip-text slds-line-clamp']").innerText();
    console.log(newindividual);
    expect(newindividual).toContain("Begum");

})