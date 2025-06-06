import { searchTransactionPage } from '../../locators/searchTransactionPage';
import { transactionDetailsPage } from '../../locators/transactionDetailsPage';
import { Page, Locator, expect } from '@playwright/test';
import { SearchTransactions } from './searchTransactions_page';

export class SearchTransactionDetails {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }


async validateWICtab(): Promise<void> {
    const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    await frame.locator(transactionDetailsPage.cardTypeTab).waitFor({ state: 'visible', timeout: 10000 });
    frame.locator(transactionDetailsPage.cardTypeTab).click();
    const wicFields = {
        'Status Code': transactionDetailsPage.StatusCodeWIC,
        'Merchant Number': transactionDetailsPage.merchantNumberWIC,
        'Coupon Discount Amount': transactionDetailsPage.CouponDiscountAccount,
        'Settlement Amount': transactionDetailsPage.settlementAmount,
        'Receipt Data': transactionDetailsPage.ReceiptData,
        'Expiration Date': transactionDetailsPage.expirationDate
    }
    for (const [fieldName, xpath] of Object.entries(wicFields)) {
        const element = frame.locator(`xpath=${xpath}`);
        await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 5000 });
    }
}

async validateStoreTotalstab(): Promise<void> {
    const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    await frame.locator(transactionDetailsPage.cardTypeTab).waitFor({ state: 'visible', timeout: 5000 });
    frame.locator(transactionDetailsPage.cardTypeTab).click();
    const StoreTotalsFields = {
        'StoreTotalType': transactionDetailsPage.StoreTotalType,
        'StoreTotalsAmount': transactionDetailsPage.StoreTotalsAmount,
        'StoreTotalsCount': transactionDetailsPage.StoreTotalsCount,
    }
    for (const [fieldName, xpath] of Object.entries(StoreTotalsFields)) {
        const element = frame.locator(`xpath=${xpath}`);
        await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
    }
}

async validateFleetTab(): Promise<void> {
    const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    await frame.locator(transactionDetailsPage.FleetCardType).waitFor({ state: 'visible', timeout: 5000 });
    frame.locator(transactionDetailsPage.FleetCardType).click();
    console.log("clicked on fleet Tab");
    const fleetFields = {
        'DateTimeStamp': transactionDetailsPage.DateTimeStamp,
        'GrossNonFuelAmount': transactionDetailsPage.GrossNonFuelAmount,
        'NetNonFuelAmount': transactionDetailsPage.NetNonFuelAmount,
        'MerchantDiscountAmount': transactionDetailsPage.MerchantDiscountAmount,
        'GrossFuelAmount': transactionDetailsPage.GrossFuelAmount,
        'Department': transactionDetailsPage.Department,
        'DriverNumber': transactionDetailsPage.DriverNumber,
        'RestrictionCode': transactionDetailsPage.RestrictionCode,
        'VendorDataTimestamp': transactionDetailsPage.VendorOdometerPrompt,
        'DriverPin': transactionDetailsPage.DriverNumber,
        'ServiceLevelCode': transactionDetailsPage.ServiceLevelCode,
        'ProviderCode': transactionDetailsPage.ProviderCode,
        'OilCompanyNameCode': transactionDetailsPage.OilCompanyNameCode,
        'PromptCode': transactionDetailsPage.PromptCode,
        'OdometerReading': transactionDetailsPage.OdometerPrompt,
        'VehicleNumber': transactionDetailsPage.VehicleNumber,
        'VehicleID': transactionDetailsPage.VehicleID,
        'JobNumber': transactionDetailsPage.JobNumber,
        'PumpNumber': transactionDetailsPage.PumpNumber,
        'SettlementIndicator': transactionDetailsPage.SettlementIndicator,
        'OdometerPrompt': transactionDetailsPage.OdometerPrompt,
        'VendorOdometerPrompt': transactionDetailsPage.VendorOdometerPrompt,
        'ProductCodeSet': transactionDetailsPage.ProductCodeSet
    }
    for (const [fieldName, xpath] of Object.entries(fleetFields)) {
        const element = frame.locator(`xpath=${xpath}`);
        await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
    }
}

async validateChecktab(): Promise<void> {
    const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    await frame.locator(transactionDetailsPage.CheckCardType).waitFor({ state: 'visible', timeout: 5000 });
    frame.locator(transactionDetailsPage.CheckCardType).click();
    const CheckTabFields = {
        'MICRNumber': transactionDetailsPage.MICRNumber,
        'IssueDate': transactionDetailsPage.IssueDate,
        'ActionCode': transactionDetailsPage.ActionCode,
        'DLNumber': transactionDetailsPage.DLNumber,
        'CheckNumber': transactionDetailsPage.CheckNumber,
        'DLEntryMode': transactionDetailsPage.DLEntryMode,
        'CheckType': transactionDetailsPage.CheckType

    }
    for (const [fieldName, xpath] of Object.entries(CheckTabFields)) {
        const element = frame.locator(`xpath=${xpath}`);
        await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
    }
}

async validateIncommHealthtab(): Promise<void> {
    const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    await frame.locator(transactionDetailsPage.HealthCareTab).waitFor({ state: 'visible', timeout: 5000 });
    frame.locator(transactionDetailsPage.HealthCareTab).click();
    const HealthCareTabFields = {
        'recordId1': transactionDetailsPage.recordId1,
        'PurseDescription': transactionDetailsPage.PurseDescription,
        'PurchasePurseID': transactionDetailsPage.PurchasePurseID,
        'RemianingBalance': transactionDetailsPage.RemianingBalance,
        'ApprovedAmount': transactionDetailsPage.ApprovedAmount,
        'ResponseCode': transactionDetailsPage.ResponseCode,
        'recordId2': transactionDetailsPage.recordId2,
        'ItemCode' : transactionDetailsPage.ItemCode,
        'ItemQuantity': transactionDetailsPage.ItemQuantity,
        'LSEligibilityFlag' : transactionDetailsPage.LSEligibilityFlag,
        'RedemptionRequestedAmount': transactionDetailsPage.RedemptionRequestedAmount,
        'AdjustmentPrice' : transactionDetailsPage.AdjustmentPrice,
        'ReferenceNumbers': transactionDetailsPage.ReferenceNumbers,
        'ItemPurseID' : transactionDetailsPage.ItemPurseID
    }
    for (const [fieldName, xpath] of Object.entries(HealthCareTabFields)) {
        const element = frame.locator(`xpath=${xpath}`);
        await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
    }

}

async validateTabsForFISHealthcare(): Promise<void> {
    const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    const HealthCareTabs= {
        'Card': transactionDetailsPage.Card_FIS,
        'PinPad': transactionDetailsPage.PinPad_FIS,
        'Other': transactionDetailsPage.Other_FIS,
        'Healthcare': transactionDetailsPage.HealthCare_FIS,
    }
    for (const [fieldName, xpath] of Object.entries(HealthCareTabs)) {
        const element = frame.locator(`xpath=${xpath}`);
        await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
    }
}


async validateFISHealthcareTab(): Promise<void> {
    const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    await frame.locator(transactionDetailsPage.HealthCare_FIS).waitFor({ state: 'visible', timeout: 5000 });
    frame.locator(transactionDetailsPage.HealthCare_FIS).click();
    const HealthCareTabFields = {
        'recordId1': transactionDetailsPage.recordId1_FIS,
        'BenefitType': transactionDetailsPage.BenefitType_FIS,
        'ApprovedAmount': transactionDetailsPage.ApprovedAmount_FIS,
        'recordId2': transactionDetailsPage.recordID2_FIS,
        'ItemCode' : transactionDetailsPage.ItemCode_FIS,
        'ItemQuantity': transactionDetailsPage.ItemQuantity_FIS,
        'ActionCode' : transactionDetailsPage.ActionCode_FIS,
        'RequestedAmount': transactionDetailsPage.RequestedAmount_FIS,
        'PurseType' : transactionDetailsPage.PurseType_FIS,
        
    }
    for (const [fieldName, xpath] of Object.entries(HealthCareTabFields)) {
        const element = frame.locator(`xpath=${xpath}`);
        await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
    }
}

async selectTranCode(TranCode: string): Promise<void> {
    const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    await frame.locator(searchTransactionPage.TranCode).waitFor({ state: 'visible', timeout: 10000 });
    frame.locator(searchTransactionPage.TranCode).click();
    const locatorOption = frame.locator(searchTransactionPage.selectCardType(TranCode));
    await locatorOption.waitFor({ state: 'visible', timeout: 5000 });
    locatorOption.click();
}

async selectSubTranCode(TranSubCodes: string): Promise<void> {
    const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    await frame.locator(searchTransactionPage.TranSubCodes).waitFor({ state: 'visible', timeout: 10000 });
    frame.locator(searchTransactionPage.TranSubCodes).click();
    const locatorOption = frame.locator(searchTransactionPage.selectCardType(TranSubCodes));
    await locatorOption.waitFor({ state: 'visible', timeout: 5000 });
    locatorOption.click();
}
async validateValueCardTabs() {
const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    const GiftcardTabs= {
        'Card_VC': transactionDetailsPage.Card_VC,
        'PinPad_VC': transactionDetailsPage.PinPad_VC,
        'Other_VC': transactionDetailsPage.Other_VC,
        'ValueCards_VC': transactionDetailsPage.ValueCards_VC,
    }
    for (const [fieldName, xpath] of Object.entries(GiftcardTabs)) {
        const element = frame.locator(`xpath=${xpath}`);
        await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
    }
}

async validateValueCardTabColumns() {
    const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    await frame.locator(transactionDetailsPage.ValueCards_VC).waitFor({ state: 'visible', timeout: 5000 });
    frame.locator(transactionDetailsPage.ValueCards_VC).click();
    const ValueCardsFields = {
        'AccountNumber_VC': transactionDetailsPage.AccountNumber_VC,
        'HostDateTime_VC': transactionDetailsPage.HostDateTime_VC,
        'POSDateTime_VC': transactionDetailsPage.POSDateTime_VC,
        'Type_VC': transactionDetailsPage.Type_VC,
        'EntryMode_VC' : transactionDetailsPage.EntryMode_VC,
        'Response_VC': transactionDetailsPage.Response_VC,
        'RequestAmount_VC' : transactionDetailsPage.RequestAmount_VC,
        'ApprovedAmount_VC': transactionDetailsPage.ApprovedAmount_VC,
        'Product_VC' : transactionDetailsPage.Product_VC,
        
    }
    for (const [fieldName, xpath] of Object.entries(ValueCardsFields)) {
        const element = frame.locator(`xpath=${xpath}`);
        await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
    }

}

    async ValidateOtherOrderTab() {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    const OtherOrderTabs= {
        'Card_GC': transactionDetailsPage.Card_GC,
        'PinPad_GC': transactionDetailsPage.PinPad_GC,
        'Other_GC': transactionDetailsPage.Other_GC,
        'OtherOrder_GC': transactionDetailsPage.OtherOrder_GC,
    }
    for (const [fieldName, xpath] of Object.entries(OtherOrderTabs)) {
        const element = frame.locator(`xpath=${xpath}`);
        await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
    }

    }

    async ValidateOtherOrderTabColumns() {
    const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
    await frame.locator(transactionDetailsPage.OtherOrder_GC).waitFor({ state: 'visible', timeout: 5000 });
    frame.locator(transactionDetailsPage.OtherOrder_GC).click();
    const ValueCardsFields = {
        'AccountNumber_GC': transactionDetailsPage.AccountNumber_GC,
        'HostDateTime_GC': transactionDetailsPage.HostDateTime_GC,
        'POSDateTime_GC': transactionDetailsPage.POSDateTime_GC,
        'Type_GC': transactionDetailsPage.Type_GC,
        'EntryMode_GC' : transactionDetailsPage.EntryMode_GC,
        'Response_GC': transactionDetailsPage.Response_GC,
        'RequestAmount_GC' : transactionDetailsPage.RequestAmount_GC,
        'ApprovedAmount_GC': transactionDetailsPage.ApprovedAmount_GC,
        
    }
    for (const [fieldName, xpath] of Object.entries(ValueCardsFields)) {
        const element = frame.locator(`xpath=${xpath}`);
        await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
    }
    }

    async ValidateCardTabColumns() {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(transactionDetailsPage.Card).waitFor({ state: 'visible', timeout: 5000 });
        frame.locator(transactionDetailsPage.Card).click();
        const CardTabFields = {
            'Provider_Card': transactionDetailsPage.Provider_Card,
            'CardExpirationDate_Card': transactionDetailsPage.CardExpirationDate_Card,
            'Network_Card': transactionDetailsPage.Network_Card,
            'Product_Card': transactionDetailsPage.Product_Card,
            'ProductionDescription_Card' : transactionDetailsPage.ProductionDescription_Card,
            'ProductProvider_card': transactionDetailsPage.ProductProvider_card,
            
        }
        for (const [fieldName, xpath] of Object.entries(CardTabFields)) {
            const element = frame.locator(`xpath=${xpath}`);
            await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
        }
        } 
        
    async ValidatePinPadTabColumns() {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(transactionDetailsPage.PinPad).waitFor({ state: 'visible', timeout: 5000 });
        frame.locator(transactionDetailsPage.PinPad).click();
        const PinPadTabFields = {
            
            'SerialNumber_PinPad': transactionDetailsPage.SerialNumber_PinPad,
            'DeviceName_PinPad': transactionDetailsPage.DeviceName_PinPad,
            'MACAddress_PinPad': transactionDetailsPage.MACAddress_PinPad,
            'Security_PinPad': transactionDetailsPage.Security_PinPad,
            'IPAddress_PinPad' : transactionDetailsPage.IPAddress_PinPad,
            'KSNNumber_PindPad': transactionDetailsPage.KSNNumber_PindPad,
        }
        for (const [fieldName, xpath] of Object.entries(PinPadTabFields)) {
            const element = frame.locator(`xpath=${xpath}`);
            await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
        }

    }

    async ValidateOtherTabColumns () {
        const frame = this.page.frameLocator(searchTransactionPage.embeddedFrame);
        await frame.locator(transactionDetailsPage.Other).waitFor({ state: 'visible', timeout: 5000 });
        frame.locator(transactionDetailsPage.Other).click();
        const OtherTabFields = {
            'EFTStoreNumber_Other': transactionDetailsPage.Provider_Card,
            'Merchant_Other': transactionDetailsPage.CardExpirationDate_Card,
            'Processor_Other': transactionDetailsPage.Network_Card,
            'TermSeqNumber_Other': transactionDetailsPage.Product_Card,
            'TerminalId_Other' : transactionDetailsPage.ProductionDescription_Card,
            'RetrievalNbr_Other': transactionDetailsPage.ProductProvider_card,
            'PinCapable_Other': transactionDetailsPage.PinCapable_Other,
            'Source_Other' : transactionDetailsPage.Source_Other,
            'RemoteResponseTime_other': transactionDetailsPage.RemoteResponseTime_other,
            'CVVResponse_Other' : transactionDetailsPage.CVVResponse_Other,
            'PinlessDebit_Other': transactionDetailsPage.PinlessDebit_Other,
            'SettlementRespnse_Other': transactionDetailsPage.SettlementRespnse_Other,
            'WorldPayAPITransactionId_Other' : transactionDetailsPage.WorldPayAPITransactionId_Other,
            'ChaseMaerchantID_Other' : transactionDetailsPage.ChaseMerchantID_Other,
            'ForcePost_Other' : transactionDetailsPage.ForcePost_Other,
            'TransRespTime_Other': transactionDetailsPage.TransRespTime_Other,
            'DebitOptimization_Other' : transactionDetailsPage.DebitOptimization_Other,
            'OriginalTerminalID_Other': transactionDetailsPage.OriginalTerminalID_Other,
            'ClientIPAddress_Other' : transactionDetailsPage.ClientIPAddress_Other,
            'SalesTax_Other' :transactionDetailsPage.SalesTax_Other
        }
        for (const [fieldName, xpath] of Object.entries(OtherTabFields)) {
            const element = frame.locator(`xpath=${xpath}`);
            await expect(element, `${fieldName} should be visible`).toBeVisible({ timeout: 20000 });
        }

    }
 }






