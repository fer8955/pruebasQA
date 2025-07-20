import { expect, Page } from '@playwright/test';
import { LoginLocator } from '../locators/login.locator';

export class LoginPage {

    readonly page: Page;
    readonly loginLocator: LoginLocator;

    constructor(page: Page) {
        this.page = page;
        this.loginLocator = new LoginLocator(page);
    }

    async navigateToUrl(url: string) {
        await this.page.goto(url);
    }

    async enterUsername(username: string) {
        await this.loginLocator.usernameBox.fill(username);
    }

    async enterPassword(password: string) {
        await this.loginLocator.passwordBox.fill(password);
    }

    async clickOnEntrar() {
        await this.loginLocator.entrarBtn.click();
    }

    async validateTitle(title: string) {
        await expect(this.loginLocator.pageTitle).toHaveText(title);
    }

    async validateUserLocked(message: string) {
        await expect(this.loginLocator.errorMessage).toHaveText(message);
    }

};