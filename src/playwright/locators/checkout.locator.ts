import { Page } from "@playwright/test";

export class CheckoutLocator {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    get nameBox() {
        return this.page.getByRole('textbox', { name: 'First Name' });
    }

    get lastNameBox() {
        return this.page.getByRole('textbox', { name: 'Last Name' });
    }

    get postalCodeBox() {
        return this.page.getByRole('textbox', { name: 'Zip/Postal Code' });
    }

    get continueBtn() {
        return this.page.getByRole('button', { name: 'Continue' });
    }

    productByNameOverview(productName: string){
        return this.page.locator('.inventory_item_name', { hasText: productName });
    }

    get finishBtn() {
        return this.page.getByRole('button', { name: 'Finish' });
    }

    get completeTitle() {
        return this.page.locator('.complete-header'); 
    }

}