const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const { chromium } = require('playwright');
const { Browser } = require('puppeteer');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.google.com',
      show: true,
      windowSize: '1200x900',
      Browser: 'chronium',
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'TestingJS'
}