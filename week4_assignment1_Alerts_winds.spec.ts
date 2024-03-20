import test from "@playwright/test";

test('Handling Alerts', async({page,context})=>{

await page.goto("http://leaftaps.com/opentaps/control/login");


await page.locator("#username").fill('demoSalesManager');
await page.fill("#password","crmsfa");
await page.locator(".decorativeSubmit").click();
await page.locator("a:has-text('CRM/SFA')").click();
await page.locator("//a[text()='Contacts']").click();
await page.locator("//a[text()='Merge Contacts']").click();

const newpage1=context.waitForEvent('page');   //event

await page.locator("(//img[@src='/images/fieldlookup.gif'])[1]").click();
const newtab1=await newpage1; 
await newtab1.locator("//a[text()='DemoCustomer']").click({force:true});

await page.waitForTimeout(10000);
//await page.bringToFront()
const newpage2=context.waitForEvent('page'); 
await page.locator("(//img[@src='/images/fieldlookup.gif'])[2]").click();

const newtab2=await newpage2; //resolving event
await newtab2.locator("//a[text()='EuroCustomer']").click({force:true});

page.once('dialog',async alertType=>{
   // console.log(alertType.type())
    const msg=alertType.message();
    console.log(msg);
    await alertType.accept();
})

await page.locator("//a[text()='Merge']").click();



})