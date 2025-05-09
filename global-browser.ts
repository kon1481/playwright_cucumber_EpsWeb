import { Browser } from 'playwright';

let browserInstance: Browser | null = null;

export const setBrowser = (browser: Browser) => {
  browserInstance = browser;
};

export const getBrowser = () => browserInstance;
