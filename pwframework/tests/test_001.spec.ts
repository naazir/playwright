import { test, expect } from "@playwright/test"
// import { only } from "node:test";

test.only('open and check title', async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/');

    await expect(page).toHaveTitle('Your Store');
})

test.only('register user ', async ({ page }) => {


    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    await page.locator('#input-firstname').fill('Naazir');
    await page.locator("input[name='lastname']").fill('Uddin');
    await page.locator('#input-email.form-control').fill('naazirus002@gmail.com');
    await page.locator('[type="tel"]').pressSequentially('9876543210', { delay: 100 });
    await page.locator('input[name="password"]').fill('password123');
    await page.locator('input[name="confirm"]').fill('password123');
    await page.locator('[class="custom-control-label"][for=input-newsletter-no]').click();
    await page.locator('[class="custom-control-label"][for="input-agree"]').click();
    await page.locator('[type="submit"][value="Continue"][class="btn btn-primary"]').click();

    // Account confirm page
    await expect(page).toHaveTitle('Your Account Has Been Created!');

    // Locate the element using its text
    const heading = page.locator('h1.page-title.my-3');
    // <h1 class="page-title my-3"><i class="fas fa-check-circle text-success"></i> Your Account Has Been Created!</h1>

    // Assert it contains the expected text
    await expect(heading).toHaveText('Your Account Has Been Created!');

})
