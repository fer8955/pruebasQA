import { Page } from "@playwright/test";

export class CartLocator {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    productByName(productName: string){
        return this.page.locator('.inventory_item_name', { hasText: productName });
    }

    get checkoutBtn(){
        return this.page.getByRole('button', { name: 'Checkout' });
    }
}