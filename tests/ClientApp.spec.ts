import { test, expect } from '@playwright/test';


test.only('First Playwright test', async ({ browser }) => {
    //chrome - plugin /cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    const cardTitle = await page.locator(".card-body a");
    await page.goto('https://rahulshettyacademy.com/client/');
    console.log(await page.title());
    await page.locator('#userEmail').fill('abcd@df.com');
    await page.locator('#userPassword').fill('P@ssword1');
    await page.locator('#login').click();
    //await page.waitForLoadState('networkidle'); //sometimes its flaky, so we can use waitForSelector instead of waitForLoadState
    await page.locator('.card-body b').first().waitFor();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);


    // console.log(await expect(page.locator('.alert-danger')).toContainText('Incorrect'));
    // console.log(await expect(page.locator('.alert-danger')).toHaveText('Incorrect username and password'));

});
