import { test as base, createBdd } from 'playwright-bdd';
import { Page } from '@playwright/test';
import { readdirSync } from 'fs';
import { resolve, join, basename } from 'path';
import { config } from 'dotenv';

config({ path: 'playwright.env' });
const pagesDir = resolve(__dirname, '../pages');

type PageConstructor = new (page: Page) => any;
type PageInstances = {
    [key: string]: InstanceType<PageConstructor>;
};

const loadPageClasses = async (): Promise<Record<string, PageConstructor>> => {
    const files = readdirSync(pagesDir).filter((file) => file.endsWith('.page.ts'));
    const pageClasses: Record<string, PageConstructor> = {};

    for (const file of files) {
        const modulePath = join(pagesDir, file);
        const module = require(modulePath);
        const exportedClass = module[Object.keys(module)[0]];

        if (typeof exportedClass === 'function') {
            const pageName = basename(file, '.page.ts');
            pageClasses[pageName] = exportedClass;
        } else {
            console.error(`Error: ${file} no exporta una clase válida.`);
        }
    }
    
    return pageClasses;
};

export const test = base.extend<{ pages: PageInstances }>({
    pages: async ({ page }, use) => {
        const pageClasses = await loadPageClasses();
        const loadedPages: PageInstances = {};

        for (const [key, PageClass] of Object.entries(pageClasses)) {
            loadedPages[key] = new PageClass(page);
        }
        await use(loadedPages);
    },
});

export const { Given, When, Then } = createBdd(test);

export const env = (name: string) => {
    let env = process.env.STAGING
    if (!env) { env = 'CERT' }
    return process.env[env+'_'+name];
}