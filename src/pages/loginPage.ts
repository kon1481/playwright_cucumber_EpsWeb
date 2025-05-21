import { Locator } from '@playwright/test';
import { Page } from 'playwright';
import { searchTransactionPage } from '../../locators/searchTransactionPage';

export class LoginPage {
  private page: Page;
  private url: string;

  constructor(page: Page) {
    this.page = page;
    this.url =
      'https://make.powerapps.com/e/6ef1213c-2114-effe-8dc0-3863c3df5d0d/canvas/?action=edit&app-id=%2Fproviders%2FMicrosoft.PowerApps%2Fapps%2F69161ae2-9cec-4979-b04c-8fb6606cdf9c';
  }

  async navigateToEPS(): Promise<void> {   
  await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });  
  await this.page.waitForLoadState('networkidle'); // ✅ Ensure the page is fully loaded
  await this.page.locator(searchTransactionPage.username).waitFor({ state: 'visible', timeout: 60000 });
  }

  async enterCredentials(username: string, password: string): Promise<void> {
    await this.page.locator(searchTransactionPage.username).fill(username);
    await this.page.locator(searchTransactionPage.nextButton).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator(searchTransactionPage.password).waitFor({ state: 'visible' });
    await this.page.locator(searchTransactionPage.password).fill(password);
    await this.page.locator(searchTransactionPage.signInButton).click();
    await this.page.waitForTimeout(15000);
  }

  async verifyEpsWebPage(): Promise<void> {
    await this.page.locator(searchTransactionPage.titleLogo).waitFor({ state: 'visible' });
  }

  async clickOnSkipPopup(): Promise<void> {
    await this.page
      .frameLocator(searchTransactionPage.embeddedFrame)
      .locator(searchTransactionPage.skipPopup)
      .click();
  }

  async clickOnPreviewButton(): Promise<void> {
    await this.page.frameLocator(searchTransactionPage.embeddedFrame).locator(searchTransactionPage.previewButton).click();
  }
}
