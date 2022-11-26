import { PlaywrightTestConfig } from '@playwright/test';
import base from './playwright.config';

const config: PlaywrightTestConfig = {
  ...base,  
  workers: 1,
  retries: 0,
  use: {
    ...base.use,
    headless: false,
    viewport: null,
    ignoreHTTPSErrors: true,
    launchOptions: {
      slowMo: 250,
      channel: 'chrome',
      args: [
        //'--proxy-server=188.40.84.200:9999', // free proxies http://free-proxy.cz/en/proxylist/country/all/all/ping/all
        '--start-maximized',
        '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"',
        '--disable-extensions',
        '--incognito',
        '--no-sandbox',
        '--test-type=browser',
        '--disable-dev-shm-usage'
      ],
      logger: {
        isEnabled: (name, severity) => true,
        log: (name, severity, message, args) => console.log(name ,severity, message, args)
      }
    }
  },
};
export default config;