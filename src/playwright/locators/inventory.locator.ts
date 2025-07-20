import { Page } from "@playwright/test";

export class InventoryLocator {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    get swagLabsLogo() {
        return this.page.locator('.app_logo');
    }

    addToCartBtn(productName: string){
        return this.page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .locator('button:has-text("Add to cart")');
    }

    get cartBtn(){
        return this.page.locator('.shopping_cart_link');
    }
}