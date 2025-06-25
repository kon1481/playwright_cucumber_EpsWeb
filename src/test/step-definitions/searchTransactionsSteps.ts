import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import * as fs from 'fs';
import { SearchTransactions } from '../../pages/searchTransactionsPage';

let searchTransactions: SearchTransactions;

Then('verify the dropdown values should match the below expected list', async function (table) {
    searchTransactions = new SearchTransactions(this.page);
    const actualDivisions = new Set(await searchTransactions.validateDivisions());
    const expectedDivisions = new Set(table.rows().flat());
    expect(new Set(actualDivisions)).toEqual(new Set(expectedDivisions));
});

Then('the EntryMode dropdown values should match the expected values', async function (table) {
    searchTransactions = new SearchTransactions(this.page);
    const actualEntryModes = new Set(await searchTransactions.validateEntryMode());
    const expectedEntryModes = new Set(table.rows().flat());
    expect(actualEntryModes).toEqual(expectedEntryModes);
});

Then('I verify the stores for each division', { timeout: 120000 }, async function () {
    searchTransactions = new SearchTransactions(this.page);
    const jsonFilePath = './Data/StoresData.json';
    const expectedData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
    for (const division in expectedData) {
        console.log(`Verifying stores for division: ${division}`);
        const actualStores = await searchTransactions.validateStores(division);
        const expectedStores = expectedData[division];
        const expectedSet = new Set(expectedStores);
        const actualSet = new Set(actualStores);
        try {
            expect(actualSet).toEqual(expectedSet);
        } catch (e) {
            console.error(`Mismatch for division "${division}"`);
            console.error('Expected:', [...expectedSet]);
            console.error('Actual:', [...actualSet]);
            throw e;
        }
    }
});

Then('the Register number values should match the expected values', async function (table) {
    searchTransactions = new SearchTransactions(this.page);
    const actualRegisterNumbers = Array.from(await searchTransactions.validateRegisterNumbers());
    const expectedRegisterNumbers = table.rows().flat() as string[];
    const normalize = (arr: string[]) => arr.map(s => s.trim()).sort();
    expect(normalize(actualRegisterNumbers)).toEqual(normalize(expectedRegisterNumbers));
});

Then('verify the force post values should match the below expected list', async function (table) {
    searchTransactions = new SearchTransactions(this.page);
    const actualForcePost = new Set(await searchTransactions.validateForcePost());
    const expectedForcePost = new Set(table.rows().flat());
    expect(actualForcePost).toEqual(expectedForcePost);
});

Then('I verify DL states on search Transactions Page', async function (table) {
    searchTransactions = new SearchTransactions(this.page);
    const actualDLState = new Set(await searchTransactions.validateDLState());
    const expectedDLState = new Set(table.rows().flat());
    expect(actualDLState).toEqual(expectedDLState);
});

Then('I verify the Transaction Codes on search Transactions Page', { timeout: 120000 }, async function () {
    searchTransactions = new SearchTransactions(this.page);
    const jsonFilePath = './Data/TranCodes.json';
    const expectedData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
    for (const TranCode in expectedData) {
        console.log(`Verifying TranCodes : ${TranCode}`);
        const actualTranCodes = await searchTransactions.validateTranCode(TranCode);
        const expectedTranCodes = expectedData[TranCode];
        const expectedSet = new Set(expectedTranCodes);
        const actualSet = new Set(actualTranCodes);
        try {
            expect(actualSet).toEqual(expectedSet);
        } catch (e) {
            console.error(`Mismatch for TranCode "${TranCode}"`);
            console.error('Expected:', [...expectedSet]);
            console.error('Actual:', [...actualSet]);
            throw e;
        }
    }
});

Then('I verify Card Type on search Transactions Page', async function (table) {
    searchTransactions = new SearchTransactions(this.page);
    const actualCardTypes = new Set(await searchTransactions.validateCardType());
    const expctedCardTypes = new Set(table.rows().flat());
    expect(actualCardTypes).toEqual(expctedCardTypes);

});

Then('I verify the offline values on search Transactions Page', async function (table) {
    searchTransactions = new SearchTransactions(this.page);
    const actualValues = new Set(await searchTransactions.validateOffline());
    const expectedValues = new Set(table.rows().flat());
    expect(actualValues).toEqual(expectedValues);
});

Then('I verify the Module values on search Transactions Page', async function (table) {
    searchTransactions = new SearchTransactions(this.page);
    const actualValues = new Set(await searchTransactions.ValidateModule());
    const expectedValues = new Set(table.rows().flat());
    expect(actualValues).toEqual(expectedValues);
});


Then('I verify the Product Group values on search Transactions Page', async function (table) {
    searchTransactions = new SearchTransactions(this.page);
    const actualValues = new Set(await searchTransactions.ValidateProductGroup());
    const expectedValues = new Set(table.rows().flat());
    expect(actualValues).toEqual(expectedValues);
});

Then('I verify the Reversal values on search Transactions Page', async function (table) {
    searchTransactions = new SearchTransactions(this.page);
    const actualValues = new Set(await searchTransactions.ValidateReversal());
    const expectedValues = new Set(table.rows().flat());
    expect(actualValues).toEqual(expectedValues);
});

Then('I verify the Return Codes on search Transactions Page', async function () {
    searchTransactions = new SearchTransactions(this.page);
    const jsonFilePath = './Data/ReturnCodes.json';
    const expectedData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
    for (const returnCode in expectedData) {
        console.log(`Verifying ReturnCodes : ${returnCode}`);
        const actualReturnCodes = await searchTransactions.validateReturnCode(returnCode);
        const expectedReturnCodes = expectedData[returnCode];
        const expectedSet = new Set(expectedReturnCodes);
        const actualSet = new Set(actualReturnCodes);
        try {
            expect(actualSet).toEqual(expectedSet);
        } catch (e) {
            console.error(`Mismatch for TranCode "${returnCode}"`);
            console.error('Expected:', [...expectedSet]);
            console.error('Actual:', [...actualSet]);
            throw e;
        }
    }
});

Then('I verify the Switch Codes on search Transactions Page', async function () {
    searchTransactions = new SearchTransactions(this.page);
    const jsonFilePath = './Data/SwitchCodes.json';
    const expectedData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
    for (const switchValue in expectedData) {
        console.log(`Verifying switchValues : ${switchValue}`);
        const actualswitchValues = await searchTransactions.validateSwitchValues(switchValue);
        const expectedswitchValues = expectedData[switchValue];
        const expectedSet = new Set(expectedswitchValues);
        const actualSet = new Set(actualswitchValues);
        try {
            expect(actualSet).toEqual(expectedSet);
        } catch (e) {
            console.error(`Mismatch for switchValues "${switchValue}"`);
            console.error('Expected:', [...expectedSet]);
            console.error('Actual:', [...actualSet]);
            throw e;
        }
    }
});

Then('I select the start date', async function () {
    searchTransactions = new SearchTransactions(this.page);
    await searchTransactions.clickonStartDate();
});

Then('I select the Card Type {string}', async function (cardType: string) {
    searchTransactions = new SearchTransactions(this.page);
    await searchTransactions.selectCardType(cardType);
});

Then('I click on search button', async function () {
    searchTransactions = new SearchTransactions(this.page);
    await searchTransactions.clickOnSearchButton();
});

Then('I click on the Transaction', async function () {
    searchTransactions = new SearchTransactions(this.page);
    await searchTransactions.clickOnTransaction();
});

Then('I click on more Details button', async function () {
    searchTransactions = new SearchTransactions(this.page);
    await searchTransactions.clickOnMoreDetailsButton();
});

When('I select the start date and End date', async function () {
    searchTransactions = new SearchTransactions(this.page);
    await searchTransactions.clickonStartDateEndDate();
  });


