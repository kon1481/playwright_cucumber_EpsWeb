import { searchTransactionPage } from '../../locators/searchTransactionPage';
import { transactionDetailsPage } from '../../locators/transactionDetailsPage';
import { Page, Locator, expect } from '@playwright/test';

export class SearchTransactions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async validateDivisions(): Promise<string[]> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(searchTransactionPage.division_dropdown).click();
        const dropdownOptions = await frame.locator(searchTransactionPage.division_dropdown_Options).all();
        return await Promise.all(dropdownOptions.map(async (option) => (await option.textContent())?.trim() || ''));
    }

    async validateEntryMode(): Promise<string[]> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);

        const dropdown = frame.locator(searchTransactionPage.entryMode);
        await dropdown.waitFor({ state: 'visible', timeout: 10000 });
        await dropdown.click();

        const options = frame.locator(searchTransactionPage.entryMode_Options);
        await options.first().waitFor({ state: 'visible', timeout: 10000 });

        const dropdownOptions = await options.all();
        return await Promise.all(
            dropdownOptions.map(async (option) =>
                (await option.textContent())?.trim().replace('\u200b', '') || ''
            )
        );
    }


    async validateStores(divisionName: string): Promise<string[]> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);

        // Open the division dropdown
        await frame.locator(searchTransactionPage.division_dropdown).click();
        const dropdownOptions = await frame.locator(searchTransactionPage.division_dropdown_Options).all();

        let found = false;
        for (const option of dropdownOptions) {
            const text = (await option.textContent())?.trim();
            if (text === divisionName) {
                console.log(`Selecting division: ${text}`);
                await option.click();
                found = true;
                await this.page.waitForTimeout(1000); // Let the stores dropdown update
                break;
            }
        }

        if (!found) {
            throw new Error(`Division "${divisionName}" not found in dropdown options.`);
        }

        // Open the store dropdown
        await frame.locator(searchTransactionPage.store_dropdown).click();

        const storeOptionsLocator = frame.locator(searchTransactionPage.store_dropdown_options);
        await storeOptionsLocator.first().waitFor({ state: 'visible', timeout: 10000 });

        const storeOptions = await storeOptionsLocator.all();
        const storeNames = await Promise.all(
            storeOptions.map(async (option) => (await option.textContent())?.trim() || '')
        );

        //console.log(`Stores for division "${divisionName}":`, storeNames);
        return storeNames;
    }



    async validateRegisterNumbers(): Promise<string[]> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(searchTransactionPage.register_dropdown).click();
        await frame.locator(searchTransactionPage.register_dropdown_options).first().waitFor({ state: 'visible' });
        const dropdownOptions = await frame.locator(searchTransactionPage.register_dropdown_options).all();
        console.log('Dropdown option count:', dropdownOptions.length);
        const values = await Promise.all(dropdownOptions.map(async (option) => {
            const text = (await option.textContent())?.trim() || '';
            console.log('Option Text:', text);
            return text;
        }));

        return values;
    }

    async validateForcePost(): Promise<string[]> {
        await this.page.waitForTimeout(1000);
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        const forcepost = frame.locator(searchTransactionPage.forcePost)
        await forcepost.waitFor({ state: 'visible', timeout: 30000 });
        await forcepost.click();
        const forcePostOptions = await frame.locator(searchTransactionPage.forcePost_options).all();
        return await Promise.all(forcePostOptions.map(async (option) => (await option.textContent())?.trim() || ''));
    }

    async validateDLState(): Promise<string[]> {
        await this.page.waitForTimeout(1000);
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        const DLState = frame.locator(searchTransactionPage.DLState)
        await DLState.waitFor({ state: 'visible', timeout: 30000 });
        await DLState.click();
        await frame.locator(searchTransactionPage.DLStateOptions).first().waitFor({ state: 'visible' });
        const DLStateOptions = await frame.locator(searchTransactionPage.DLStateOptions).all();
        const values = Promise.all(DLStateOptions.map(async (option) => (await option.textContent())?.trim() || ''));
        return values;
    }

    async validateTranCode(TranCode: string): Promise<string[]> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(searchTransactionPage.TranCode).click();
        await frame.locator(searchTransactionPage.TranCodeOptions).first().waitFor({ state: 'visible', timeout: 10000 });
        const TranCodeOptions = await frame.locator(searchTransactionPage.TranCodeOptions).all();
        const dropdownTexts = await Promise.all(
            TranCodeOptions.map(async (opt) => (await opt.textContent())?.trim())
        );
        console.log('Available TranCode dropdown options:', dropdownTexts);
        let found = false;
        for (const option of TranCodeOptions) {
            const text = (await option.textContent())?.trim();
            if (text?.toLowerCase() === TranCode.toLowerCase()) {
                console.log(`Selecting TranCode: ${text}`);
                await option.click();
                found = true;
                await this.page.waitForTimeout(1000);
                break;
            }
        }
        if (!found) {
            throw new Error(`TranCode "${TranCode}" not found in dropdown options.`);
        }
        await frame.locator(searchTransactionPage.TranSubCodes).click();
        const TranSubCodesLocator = frame.locator(searchTransactionPage.TranSubCodeOptions);
        await TranSubCodesLocator.first().waitFor({ state: 'visible', timeout: 10000 });
        const TranSubCodeOptions = await TranSubCodesLocator.all();
        const TranCodeNames = await Promise.all(
            TranSubCodeOptions.map(async (option) => (await option.textContent())?.trim() || '')
        );
        return TranCodeNames;
    }

    async validateCardType(): Promise<string[]> {
        await this.page.waitForTimeout(1000);
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        const cardType = frame.locator(searchTransactionPage.cardType)
        await cardType.waitFor({ state: 'visible', timeout: 30000 });
        await cardType.click();
        await frame.locator(searchTransactionPage.cardTypeOptions).first().waitFor({ state: 'visible' });
        const cardTypeOptions = await frame.locator(searchTransactionPage.cardTypeOptions).all();
        const values = Promise.all(cardTypeOptions.map(async (option) => (await option.textContent())?.trim() || ''));
        return values;
    }

    async validateOffline() {
        await this.page.waitForTimeout(1000);
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        const offlineValues = frame.locator(searchTransactionPage.offlineValues)
        await offlineValues.waitFor({ state: 'visible', timeout: 30000 });
        await offlineValues.click();
        await frame.locator(searchTransactionPage.OfflineValuesOptions).first().waitFor({ state: 'visible' });
        const OfflineValuesOptions = await frame.locator(searchTransactionPage.OfflineValuesOptions).all();
        const values = Promise.all(OfflineValuesOptions.map(async (option) => (await option.textContent())?.trim() || ''));
        return values;
    }

    async ValidateModule() {
        await this.page.waitForTimeout(1000);
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        const moduleValues = frame.locator(searchTransactionPage.moduleValues)
        await moduleValues.waitFor({ state: 'visible', timeout: 30000 });
        await moduleValues.click();
        await frame.locator(searchTransactionPage.moduleValuesOptions).first().waitFor({ state: 'visible' });
        const moduleValuesOptions = await frame.locator(searchTransactionPage.moduleValuesOptions).all();
        const values = Promise.all(moduleValuesOptions.map(async (option) => (await option.textContent())?.trim() || ''));
        return values;
    }

    async ValidateProductGroup() {
        await this.page.waitForTimeout(1000);
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        const productGroup = frame.locator(searchTransactionPage.productGroup)
        await productGroup.waitFor({ state: 'visible', timeout: 30000 });
        await productGroup.click();
        await frame.locator(searchTransactionPage.productGroupOptions).first().waitFor({ state: 'visible' });
        const productGroupOptions = await frame.locator(searchTransactionPage.productGroupOptions).all();
        const values = Promise.all(productGroupOptions.map(async (option) => (await option.textContent())?.trim() || ''));
        return values;
    }

    async ValidateReversal() {
        await this.page.waitForTimeout(1000);
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        const reversal = frame.locator(searchTransactionPage.reversal)
        await reversal.waitFor({ state: 'visible', timeout: 30000 });
        await reversal.click();
        await frame.locator(searchTransactionPage.reversalOptions).first().waitFor({ state: 'visible' });
        const reversalOptions = await frame.locator(searchTransactionPage.reversalOptions).all();
        const values = Promise.all(reversalOptions.map(async (option) => (await option.textContent())?.trim() || ''));
        return values;
    }

    async validateReturnCode(returnCode: string): Promise<string[]> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(searchTransactionPage.returnCode).click();
        await frame.locator(searchTransactionPage.returnCodeOptions).first().waitFor({ state: 'visible', timeout: 10000 });
        const returnCodeOptions = await frame.locator(searchTransactionPage.returnCodeOptions).all();
        const dropdownTexts = await Promise.all(
            returnCodeOptions.map(async (opt) => (await opt.textContent())?.trim())
        );
        console.log('Available returnCode dropdown options:', dropdownTexts);
        let found = false;
        for (const option of returnCodeOptions) {
            const text = (await option.textContent())?.trim();
            if (text?.toLowerCase() === returnCode.toLowerCase()) {
                console.log(`Selecting ReturnCode: ${text}`);
                await option.click();
                found = true;
                await this.page.waitForTimeout(1000);
                break;
            }
        }
        if (!found) {
            throw new Error(`ReturnCode "${returnCode}" not found in dropdown options.`);
        }
        await frame.locator(searchTransactionPage.returnCodeSubCodes).click();
        const returnCodesSubLocator = frame.locator(searchTransactionPage.returnCodeSubOptions);
        await returnCodesSubLocator.first().waitFor({ state: 'visible', timeout: 60000 });
        const returnCodeSubOptions = await returnCodesSubLocator.all();
        const returnCodeNames = await Promise.all(
            returnCodeSubOptions.map(async (option) => (await option.textContent())?.trim() || '')
        );
        return returnCodeNames;
    }

    async validateSwitchValues(switchValue: string): Promise<string[]> {

        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(searchTransactionPage.switchValue).waitFor({ state: 'visible', timeout: 60000 });
        await frame.locator(searchTransactionPage.switchValue).click();
        await frame.locator(searchTransactionPage.switchOptions).first().waitFor({ state: 'visible', timeout: 10000 });
        const switchOptions = await frame.locator(searchTransactionPage.switchOptions).all();
        const dropdownTexts = await Promise.all(
            switchOptions.map(async (opt) => (await opt.textContent())?.trim())
        );
        console.log('Available returnCode dropdown options:', dropdownTexts);
        let found = false;
        for (const option of switchOptions) {
            const text = (await option.textContent())?.trim();
            if (text?.toLowerCase() === switchValue.toLowerCase()) {
                console.log(`Selecting switchValue: ${text}`);
                await option.click();
                found = true;
                await this.page.waitForTimeout(1000);
                break;
            }
        }
        if (!found) {
            throw new Error(`switchValue "${switchValue}" not found in dropdown options.`);
        }
        await frame.locator(searchTransactionPage.switchSub).click();
        const switchSubLocator = frame.locator(searchTransactionPage.switchSubOptions);
        await switchSubLocator.first().waitFor({ state: 'visible', timeout: 60000 });
        const switchSubOptions = await switchSubLocator.all();
        const switchNames = await Promise.all(
            switchSubOptions.map(async (option) => (await option.textContent())?.trim() || '')
        );
        return switchNames;
    }

    async clickonStartDate(): Promise<void> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(searchTransactionPage.startDate).waitFor({ state: 'visible', timeout: 5000 });
        frame.locator(searchTransactionPage.startDate).click();
        await frame.locator(searchTransactionPage.clickSelectDate).waitFor({ state: 'visible', timeout: 5000 });
        frame.locator(searchTransactionPage.clickSelectDate).click();
    }

    async selectCardType(cardType: string): Promise<void> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(searchTransactionPage.clickCardType).waitFor({ state: 'visible', timeout: 10000 });
        frame.locator(searchTransactionPage.clickCardType).click();
        const locatorOption = frame.locator(searchTransactionPage.selectCardType(cardType));
        await locatorOption.waitFor({ state: 'visible', timeout: 5000 });
        locatorOption.click();
    }

    async clickOnSearchButton(): Promise<void> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(searchTransactionPage.searchButton).waitFor({ state: 'visible', timeout: 60000 });
        frame.locator(searchTransactionPage.searchButton).click();
    }

    async clickOnTransaction(): Promise<void> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(transactionDetailsPage.selectTransaction).waitFor({ state: 'visible', timeout: 60000 });
        frame.locator(transactionDetailsPage.selectTransaction).click();
        await this.page.waitForTimeout(5000);
        
    }
    async clickOnMoreDetailsButton(): Promise<void> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(transactionDetailsPage.moreDetailsButton).waitFor({ state: 'visible', timeout: 10000 });
        await frame.locator(transactionDetailsPage.moreDetailsButton).click();
    }

    async clickonStartDateEndDate(): Promise<void> {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(searchTransactionPage.ClickOndatePicker).waitFor({ state: 'visible', timeout: 5000 });
        frame.locator(searchTransactionPage.ClickOndatePicker).click();
        await this.page.waitForTimeout(3000);

        await frame.locator(searchTransactionPage.previousMonthButton).waitFor({ state: 'visible', timeout: 10000 });
        frame.locator(searchTransactionPage.previousMonthButton).click();
        await this.page.waitForTimeout(3000);

        await frame.locator(searchTransactionPage.selectPreviousMonthstartDate).waitFor({ state: 'visible', timeout: 10000 });
        frame.locator(searchTransactionPage.selectPreviousMonthstartDate).click();
        await this.page.waitForTimeout(3000);

        await frame.locator(searchTransactionPage.ClickOnEndDate).waitFor({ state: 'visible', timeout: 5000 });
        frame.locator(searchTransactionPage.ClickOnEndDate).click();
        await this.page.waitForTimeout(3000);

        await frame.locator(searchTransactionPage.previousMonthButton).waitFor({ state: 'visible', timeout: 10000 });
        frame.locator(searchTransactionPage.previousMonthButton).click();
        await this.page.waitForTimeout(3000);

        await frame.locator(searchTransactionPage.selectPreviousMonthEndDate).waitFor({ state: 'visible', timeout: 10000 });
        frame.locator(searchTransactionPage.selectPreviousMonthEndDate).click();
        
    }
    


}
