const {BeforeAll, Before, AfterAll, After, setDefaultTimeout, HookScenarioResult, Status ,world} = require ('@cucumber/cucumber')
const { Browser , chromium , playwright , browser , firefox ,webkit } = require('playwright');
const fs = require ('fs')
const path = require('path');
const { test, expect , base} = require('@playwright/test');
const debug = require('debug');
//const cucumber = require('cucumber');


setDefaultTimeout(60000)

// launch the browser
BeforeAll(async function () {
    let page;
    // global.browser = await chromium.launch({
    // channel: 'msedge',
    // headless: false,
    // slowMo: 1000,
    // use: {
    // screenshot: 'only-on-failure',
    // trace: 'retain-on-failure',
    // },
    // });

    global.browser = await firefox.launch({
        headless: false,
        slowMo: 1000,
        // use: {
        // screenshot: 'only-on-failure',
        // trace: 'retain-on-failure',
        // },
        // fullyParallel: true,
    });

    // global.browser = await chromium.launch({
    // channel: 'chrome',
    // headless: false,
    // slowMo: 1000,
    // use: {
    // screenshot: 'only-on-failure',
    // trace: 'retain-on-failure',
    // },
    // });
    // global.browser = await chromium.launch({
    // headless: false,
    // slowMo: 1000,
    // use: {
    // screenshot: 'only-on-failure',
    // trace: 'retain-on-failure',
    // },
    // });
    // global.browser = await webkit.launch({
    // headless: false,
    // slowMo: 1000,
    // use: {
    // screenshot: 'only-on-failure',
    // trace: 'retain-on-failure',
    // },
    // });

});
//
// // close the browser
// AfterAll(async function () {
//
// await global.browser.close();
// });
//
// // Create a new browser context and page per scenario
// Before(async function () {
// global.context = await global.browser.newContext();
// global.page = await global.context.newPage();
// });
//
// // Cleanup after each scenario
// After(async function () {
//
// await global.page.screenshot({ path: 'screenshot.png' });
// await global.page.close();
// await global.context.close();
// });
// // After(async function (this: World, scenario) {
// // if (scenario.result?.status === Status.PASSED) {
// // const screenShot = await browser.takeScreenshot();
// // this.attach(screenShot , "image/png");
// // }
// // });
//
//




// Launch options.
// const options = {
// headless: true,
// slowMo: 100
// };





// BeforeAll(async () => {
// browser = await chromium.launch({ headless: false });
// page = await browser.newPage();
// });

// Create a global browser for the test session.
// BeforeAll(async () => {
// console.log('before all ...');
// global.browser = await firefox.launch(options);
// });

AfterAll(async () => {
    await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async () => {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

// close the page and context after each test.
After(async () => {
    await global.page.close();
    await global.context.close();
});


// After(async function (scenario) {
// if (scenario.result.status === Status.FAILED) {
// console.log('Take a screenshot!!');
// var buffer = await global.page.screenshot({ path: `reports/${scenario.pickle.name}.png`, fullPage: true })
// this.attach(buffer, 'image/png');
// }
// });
After(async function (scenario) {
    let world = this;
    await takeScreenShotOnFailure(world, scenario);
});


async function takeScreenShotOnFailure(world, scenario) {
    if (scenario.result.status !== Status.FAILED) {
        return;
    }
    //browser.screenshot
    console.log('Take a screenshot!!');
    return page.screenshot({ path: 'screenshot.png' });
}
