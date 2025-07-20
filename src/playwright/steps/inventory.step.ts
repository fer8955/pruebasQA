import { expect } from '@playwright/test';
import { Given, When, Then } from '../util/playwright-bdd';

Then('I am on the Inventory page', async ({ pages }) => {
    await pages.inventory.validateTitle();
});

When('I add the following {string} to the cart', async ({ pages }, product: string) => {
    await pages.inventory.addToCart(product);
});

When('I navigate to the cart page', async ({ pages }) => {
    await pages.inventory.goToCart();
});





