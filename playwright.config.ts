import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // test suites
  projects: [
    {
      name: 'template',
      testMatch: ['/tests/*.spec.ts']
    },
  ],
  timeout: 90000,
  expect: { 
    timeout: 90000 
  },
  reporter: [
    ['list'],
    // ['html', {
    //   open: 'never',
    //   outputFolder: 'html-report'
    // }],
  ],
  use: {
    actionTimeout: 90000,
    navigationTimeout: 90000,
    screenshot: 'off',
    video: {
      mode: 'off',
      size: {
        width: 1920,
        height: 1080
      }
    },
    trace: 'retain-on-failure',
    contextOptions: { // all context options https://playwright.dev/docs/api/class-browser
      recordVideo: {
        dir: './test-results/videos/',
        size: {
          width: 1920,
          height: 1080
        }
      },
      colorScheme: 'dark',
      serviceWorkers: 'allow'
    }
  }
};

export default config;