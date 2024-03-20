import test, { expect } from "@playwright/test";
test.only('leaftaps automation', async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator("#username").fill('demoSalesManager');

await page.fill("#password","crmsfa");

 await page.locator(".decorativeSubmit").click();

 console.log(await page.title());

 await page.locator("a:has-text('CRM/SFA')").click();
 //await page.locator("div[id='label']").click();

 await page.locator("//a[text()='Leads']").click();

 await page.locator("//a[text()='Create Lead']").click();

 await page.locator('#createLeadForm_companyName').fill("GRV");
 await page.locator('#createLeadForm_firstName').fill("MM")
 await page.locator('#createLeadForm_lastName').fill("Shaik");

 //await page.getByRole("link").filter({ hasText: 'Create Lead' }).click();

 await page.locator("//input[@name='submitButton']").click();

 await page.locator("//a[text()='Edit']").click();
 await page.locator('#updateLeadForm_companyName').fill("Woodside Energy");

 await page.locator("//input[@value='Update']").click();

 //#viewLead_companyName_sp

 const editlead= await page.locator('#viewLead_companyName_sp').innerText();

 console.log(editlead);

 expect(editlead).toContain("Woodside Energy");
 
         }
)
