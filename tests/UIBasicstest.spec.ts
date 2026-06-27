import { test, expect } from '@playwright/test';


test('First Playwright test', async ({ browser }) => {
    //chrome - plugin /cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    const cardTitle = await page.locator(".card-body a");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.getByLabel('Admin').click();
    await page.locator('#signInBtn').click();

    // console.log(await cardTitle.first().textContent());
    // console.log(await cardTitle.nth(1).textContent());
    const allTitle = await cardTitle.allTextContents();
    console.log(allTitle);


    // console.log(await expect(page.locator('.alert-danger')).toContainText('Incorrect'));
    // console.log(await expect(page.locator('.alert-danger')).toHaveText('Incorrect username and password'));

});

test('Second Playwright test', async ({ page }) => {
    await page.goto('https://google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});


test.only('UI controls', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    const userName = await page.locator('#username').fill('rahulshettyacademy');
    const password = await page.locator('#password').fill('Learning@830$3mK2');
    const dropdown = await page.locator("select.form-control");
    await dropdown.selectOption('consult');
    await page.locator(".radiotextsty").last().click();
    await page.locator('#okayBtn').click();


});
