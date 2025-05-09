import { LoginPage } from "../../pages/loginPage"; 
import {Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";


let browser: Browser;
let page: Page;
let loginPage : LoginPage
setDefaultTimeout(60000);



Given("I navigate to the EPS Web PowerApps", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToEPS();
});

When("I enter username and password", async function (){
  await loginPage.enterCredentials("s17603EPSWebViewerD@kroger.com", "CL6qbSKxr7");
});

Then("I should see the EPS Web PowerApps page", async function () {
  await loginPage.verifyEpsWebPage();
});

Then("I click on skip popup", async function () {
  await loginPage.clickOnSkipPopup();
});

Then("I click on preview button", async function ()  {
  await loginPage.clickOnPreviewButton();
});


