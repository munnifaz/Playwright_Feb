
import test from "@playwright/test";
import login from "./"
test.only('salesforce automation', async({page})=>{
    await page.goto("https://login.salesforce.com/")
    console.log(page.url());
   
    await page.fill("#username","munni.shaik@gmail.com");
    await page.fill("#password","Jaharas@440");
    await page.locator("#Login").click();
    //test.setTimeout(40000);
    //await page.waitForSelector("//div[@title='Setup Home']");
    //const titlep= await page.title();
    //console.log(titlep);
    //console.log(page.url());
    await  page.locator("//div[@class='slds-icon-waffle']").click();
    await page.locator("//button[@aria-label='View All Applications']").click();
    await page.locator("//p[text()='Sales']").click();
    await page.locator("(//span[text()='Leads'])[1]").click();
   // await page.locator("//button[text()='New']").click();
   await page.locator("//div[text()='New']").click();
    //await page.getByRole('button').
    await page.locator("//button[@name='salutation']").click();
   await page.locator("//span[@class='slds-media__figure slds-listbox__option-icon']//following::span[text()='Mr.']").click();
    await page.locator("//input[@name='lastName']").fill("Shaik");
    await page.locator("//input[@name='Company']").fill("GRV");
    await page.locator("(//button[text()='Save'])[2]").click();

   const createdlead= await page.locator("//slot[@name='primaryField']").innerText();
   if(createdlead=="Mr. Shaik"){
    console.log("Successfuly new lead has been created")}
    else{
        console.log("ERROR")
    }
    }
)
