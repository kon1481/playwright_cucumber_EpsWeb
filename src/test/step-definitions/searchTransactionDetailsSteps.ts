import { Then, When } from "@cucumber/cucumber";
import { SearchTransactionDetails } from "../../pages/searchDetailsPage";


Then('I verify the columns on the WIC tab', async function () {
  const searchTransactionDetails = new SearchTransactionDetails(this.page);
  await searchTransactionDetails.validateWICtab();
});

Then('I verify the columns on the Store Totals tab', async function () {
  const searchTransactionDetails = new SearchTransactionDetails(this.page);
  await searchTransactionDetails.validateStoreTotalstab();
});

Then('I verify the columns on the fleet tab', async function () {
  const searchTransactionDetails = new SearchTransactionDetails(this.page);
  await searchTransactionDetails.validateFleetTab();
});

Then('I verify the columns on the Check tab', async function () {
  const searchTransactionDetails = new SearchTransactionDetails(this.page);
  await searchTransactionDetails.validateChecktab();
});

Then('I verify the columns on the Incomm HealthCare tab', async function () {
  const searchTransactionDetails = new SearchTransactionDetails(this.page);
  await searchTransactionDetails.validateIncommHealthtab();
});

Then('I verify the tabs for the FIS Healthcare transaction', async function () {
  const searchTransactionDetails = new SearchTransactionDetails(this.page);
  await searchTransactionDetails.validateTabsForFISHealthcare();

});

Then('I verify the columns on the FIS health Care tab', async function () {
  const searchTransactionDetails = new SearchTransactionDetails(this.page);
  await searchTransactionDetails.validateFISHealthcareTab();
});

Then('I verify the tabs for the ValueCard transaction', async function () {
  const searchTransactionDetails = new SearchTransactionDetails(this.page);
  await searchTransactionDetails.validateValueCardTabs();
});

Then('I verify the columns on the  Value Cards tab', async function () {
  const searchTransactionDetails = new SearchTransactionDetails(this.page);
  await searchTransactionDetails.validateValueCardTabColumns();
});

When('I select the transaction code {string}', async function (TranCode :string) {
    const searchTransactionsDetails = new SearchTransactionDetails(this.page);
      await searchTransactionsDetails.selectTranCode(TranCode);
});

When('I select the Sub transaction code as {string}', async function (TranSubCodes :string) {
  const searchTransactionsDetails = new SearchTransactionDetails(this.page);
  await searchTransactionsDetails.selectSubTranCode(TranSubCodes);
});

Then('I verify the tabs for the GC Reimbursed transaction', async function () {
  const searchTransactionsDetails = new SearchTransactionDetails(this.page);
  await searchTransactionsDetails.ValidateOtherOrderTab();
});

Then('I verify the columns on the Other orders tab', async function () {
  const searchTransactionsDetails = new SearchTransactionDetails(this.page);
  await searchTransactionsDetails.ValidateOtherOrderTabColumns();
});

Then('I verify the columns on the Card tab', async  function () {
  const searchTransactionsDetails = new SearchTransactionDetails(this.page);
  await searchTransactionsDetails.ValidateCardTabColumns();
});

Then('I verify the columns on the PinPad tab', async function () {
  const searchTransactionsDetails = new SearchTransactionDetails(this.page);
  await searchTransactionsDetails.ValidatePinPadTabColumns();
});

Then('I verify the columns on the Other Tab', async function () {
  const searchTransactionsDetails = new SearchTransactionDetails(this.page);
  await searchTransactionsDetails.ValidateOtherTabColumns();
});


Then('I verify the columns on the Soda tab', async function () {
  const searchTransactionsDetails = new SearchTransactionDetails(this.page);
  await searchTransactionsDetails.ValidateSodaTab();
});
