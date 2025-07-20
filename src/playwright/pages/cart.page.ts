import { expect, Page } from '@playwright/test';
import { CartLocator } from '../locators/cart.locator';

export class CartPage {

    readonly page: Page;
    readonly cartLocator: CartLocator;

    constructor(page: Page) {
        this.page = page;
        this.cartLocator = new CartLocator(page);
    }

    async validateProduct(product: string){
        await expect(this.cartLocator.productByName(product)).toBeVisible();
    }

    async goToCheckout(){
        await this.cartLocator.checkoutBtn.click();
    }

};