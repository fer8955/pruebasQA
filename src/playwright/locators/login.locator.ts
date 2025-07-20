import { Page } from "@playwright/test";

export class LoginLocator {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    get usernameBox() {
        return this.page.getByRole('textbox', { name: 'Username' });
    }

    get passwordBox() {
        return this.page.getByRole('textbox', { name: 'Password' });
    }

    get entrarBtn() {
        return this.page.getByRole('button', { name: 'Login' });
    }
        
    get pageTitle(){
        return this.page.locator('.title');
    }

    get errorMessage(){
            return this.page.getByRole('heading', { level: 3, name: 'Epic sadface: Sorry, this user has been locked out.' });

    }

}
