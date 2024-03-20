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
    await page.locator("(//span[text()='Individuals'])[1]").click();
    await page.locator("input[name='Individual-search-input']").fill("Begum");
    await page.keyboard.press("Enter");
    await page.getByTitle('Begum',{exact:true}).click();
    await page.locator("//a[@title='Edit'][@class='forceActionLink']").click();
    await page.locator("div[class='salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu']").click();
    await page.locator("a[title='Dr.']").click();
    await page.locator("input[placeholder='First Name']").fill("FAZILL");
    await page.getByRole('button', { name: 'Save', exact: true}).click();
    await page.waitForTimeout(5000);

    const editinditext=await page.locator("div[class='slds-page-header__title slds-m-right--small slds-align-middle clip-text slds-line-clamp']").innerText();
    console.log(editinditext);
    expect(editinditext).toContain("FAZIL");



})  