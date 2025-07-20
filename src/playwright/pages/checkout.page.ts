import { expect, Page } from '@playwright/test';
import { CheckoutLocator } from '../locators/checkout.locator';

export class CheckoutPage {

    readonly page: Page;
    readonly checkoutLocator: CheckoutLocator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutLocator = new CheckoutLocator(page);
    }

    async enterInformation(name: string, lastName: string, postalCode: string){
        await this.checkoutLocator.nameBox.fill(name);
        await this.checkoutLocator.lastNameBox.fill(lastName);
        await this.checkoutLocator.postalCodeBox.fill(postalCode);
    }

    async clickContinue(){
        await this.checkoutLocator.continueBtn.click();
    }

    async validateProduct(product: string){
        await expect(this.checkoutLocator.productByNameOverview(product)).toBeVisible();
    }

    async clickFinish(){
        await this.checkoutLocator.finishBtn.click();
    }

    async validateMessagePurchase(message: string) {
        await expect(this.checkoutLocator.completeTitle).toHaveText(message);
    }

};