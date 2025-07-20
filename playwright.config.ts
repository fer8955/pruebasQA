import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';
import { env } from './src/playwright/util/playwright-bdd';

const testDir = defineBddConfig({
	featuresRoot: './src/resources/features/',
	steps: './src/playwright/steps/*.step.ts',
	outputDir: './target/playwright-test',
	importTestFrom: './src/playwright/util/playwright-bdd.ts',
	disableWarnings: {
		importTestFrom: true
	}
})

export default defineConfig({
	testDir,
	outputDir: './target/generated-test-sources',
	fullyParallel: true,
	workers: process.env.CI ? 1 : undefined,
	reporter: [
		cucumberReporter('json', { outputFile: './target/cucumber-reports/cucumber.json' }),
		['list', { printSteps: true }],
		['html', { outputFolder: './target/playwright-reports' }]
	],
	use: {
		baseURL: env("BASEURL"),
		trace: {mode: 'on'},
		video: "on",
		screenshot: 'on'
	},
	projects: [
		{name:'setup', testMatch: 'auth.setup.ts'},
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome']
			}
		}
	]
});
