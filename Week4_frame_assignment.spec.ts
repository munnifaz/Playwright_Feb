import test, { expect } from "@playwright/test";

test('Handling Frames', async({page,context})=>{

await page.goto("https://dev83844.service-now.com/login.do");

await page.locator("//input[@id='user_name']").fill("Admin");

await page.locator("//input[@id='user_password']").fill("Jaharas@440");

await page.locator("//button[@id='sysverb_login']").click();

await page.waitForLoadState('load');

await page.getByText('All',{exact:true}).click();

await page.waitForLoadState('load');

const filter= page.locator("input[id='filter']")

await page.waitForTimeout(7000)

await page.getByPlaceholder("Filter").fill("Service Catalog");

await page.getByPlaceholder("Filter").focus();

await page.keyboard.press('Enter');

//await page.locator("a:has-text('Service Catalog')").click({force:true});
//await page.getByRole('link', { name:'Service Catalog',exact:true}).click();

const frame=page.frameLocator("#gsft_main");

await frame.locator("//a[text()='Mobiles']").click();

 await frame.getByRole('link', { name: 'Apple iPhone 13 pro' }).click();

 await page.waitForTimeout(3000);

const ele1=frame.locator("//input[@class='cat_item_option radio'][@value='yes']");

ele1.check({force:true});

await frame.locator("//input[@class='cat_item_option sc-content-pad form-control']").fill("99");

await frame.locator("//select[@class='form-control cat_item_option ']").selectOption({value:"unlimited"})

await frame.locator("//input[@class='cat_item_option radio'][@value='green'][@type='radio']").check();

const GBselection=frame.locator("//input[@class='cat_item_option radio sc-radio'][@value='512']");

GBselection.check({force:true});

await frame.locator('#oi_order_now_button').click({force:true});

const expectedmsg= await frame.locator("//span[text()='Thank you, your request has been submitted']").innerText();

console.log(expectedmsg);
 expect(expectedmsg).toContain("Thank you, your request has been submitted");


})