import { expect } from '@playwright/test';
import { Given, When, Then } from '../util/playwright-bdd';


When('I validate the selected {string} is present in the cart', async ({ pages }, product: string) => {
    await pages.cart.validateProduct(product);
});

When('I proceed to checkout', async ({ pages }) => {
    await pages.cart.goToCheckout();
});






