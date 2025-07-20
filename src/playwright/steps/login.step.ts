import { expect } from '@playwright/test';
import { Given, When, Then } from '../util/playwright-bdd';

Given('I navigate to Saucedemo', async ({ pages }) => {
    await pages.login.navigateToUrl("");
});

When('I enter username {string}', async ({ pages }, username: string) => {
    await pages.login.enterUsername(username);
});

When('I enter password {string}', async ({ pages }, password: string) => {
    await pages.login.enterPassword(password);
});

When('I click on Login button', async ({ pages }) => {
    await pages.login.clickOnEntrar();
});

//Metodo Reutilizable
When('I am on the {string} page', async ({ pages }, title: string) => {
    await pages.login.validateTitle(title);
});

Then('I should see an error message {string}', async ({ pages }, message: string) => {
    await pages.login.validateUserLocked(message);
});







