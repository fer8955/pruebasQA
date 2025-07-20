import { expect } from '@playwright/test';
import { Given, When, Then } from '../util/playwright-bdd';

When('I complete the purchase with the information {string} {string} {string}', async ({ pages }, name: string, lastName: string, postalCode: string) => {
    await pages.checkout.enterInformation(name, lastName, postalCode);
    await pages.checkout.clickContinue();
});

When('I validate the selected {string} is present in the page Overview', async ({ pages }, product: string) => {
    await pages.checkout.validateProduct(product);
    await pages.checkout.clickFinish();
});

Then('I should see the purchase confirmation message {string}', async ({ pages }, message: string) => {
    await pages.checkout.validateMessagePurchase(message);
});








