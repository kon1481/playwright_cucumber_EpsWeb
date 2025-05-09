import { AfterAll, AfterStep, Before } from '@cucumber/cucumber';
import { Browser, chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { Page } from 'playwright';
import { getBrowser, setBrowser } from '../../../global-browser';


declare global {
  var page: Page;
}
const screenshotDir = path.join(__dirname, 'reports/screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}


let browserInstance: Browser | null = null; // Track the Playwright browser instance


Before(async function (this: any) {
  const executablePath = 'C:\\Users\\kon1481\\AppData\\Local\\chrome-win\\chrome.exe';

  console.log('🚀 Launching Playwright browser...');
  const browser = await chromium.launch({
    executablePath,
    headless: false,
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  this.page = page;
  globalThis.page = page;

  setBrowser(browser); // store the browser instance
});


// 🔹 This runs after each step
AfterStep(async function (this: any, { result }) {
  if (result?.status === 'PASSED') {  // ✅ Only for passed steps
    const screenshotPath = path.join(screenshotDir, `passed-${Date.now()}.png`);
    await this.page.screenshot({ path: screenshotPath });

    const imageBuffer = fs.readFileSync(screenshotPath);
    await this.attach(imageBuffer, 'image/png');  // ✅ Attach to report
    console.log('📸 Screenshot attached for passed step.');
  }
});

AfterAll(async function () {
  try {
    const browser = getBrowser();

    if (browser) {
      console.log('🧹 Closing Playwright Chromium browser...');
      await browser.close();
      console.log('✅ Browser closed.');
    } else {
      console.warn('⚠️ No Playwright browser instance to close.');
    }
  } catch (err) {
    console.error('❌ Failed to close browser:', err);
  }
});








