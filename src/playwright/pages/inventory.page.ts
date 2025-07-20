import { expect, Page } from '@playwright/test';
import { InventoryLocator } from '../locators/inventory.locator';

export class InventoryPage {

    readonly page: Page;
    readonly inventoryLocator: InventoryLocator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryLocator = new InventoryLocator(page);
    }

    async validateTitle() {
        await expect(this.inventoryLocator.swagLabsLogo).toHaveText('Swag Labs');
    }

    async addToCart(product: string){
        await this.inventoryLocator.addToCartBtn(product).click();
    }

    async goToCart() {
        await this.inventoryLocator.cartBtn.click();
    }
    
};