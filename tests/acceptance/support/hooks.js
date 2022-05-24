const {BeforeAll, Before, AfterAll, After, setDefaultTimeout, HookScenarioResult, Status ,world, BeforeStep, AfterStep,HookParallelMode} = require ('@cucumber/cucumber')
const { Browser , chromium , playwright , browser , firefox ,webkit } = require('playwright');
const fs = require ('fs')
const path = require('path');
const { test, expect , base} = require('@playwright/test');
const debug = require('debug');
const rimraf =require('rimraf');
const automationUtils =require('../support/automationUtils')
const uaParser = require("ua-parser-js");

setDefaultTimeout(60000)


// Launch options.
const options = {
    headless: true,
    slowMo: 100,
    video: "off",
    trace: "on-first-retry",
    fullyParallel: true,

};

BeforeAll(async function () {

    const browserName = process.env.BROWSER || 'chromium'
    global.browser = await { chromium, webkit, firefox }[browserName].launch({
        headless: true,
        slowMo: 50,
        fullyParallel: true,
    })
    global.context = await global.browser.newContext({
        viewport: {
            width: 1660,
            height: 980,
        },
        recordVideo: {
            dir: './videos/'
        }
    });
    global.page = await global.context.newPage();
    const getUA = await global.page.evaluate(() => navigator.userAgent);
    const userAgentInfo = uaParser(getUA);
    const browserCapValues = {
        browserName: userAgentInfo.browser.name,
        browserVersion: userAgentInfo.browser.version,
        osName: userAgentInfo.os.name,
        osVersion: userAgentInfo.os.version
    };
    await fs.writeFileSync('browserCaps/browserCapValues.json', JSON.stringify(browserCapValues));


})

AfterAll(async () => {
    await global.page.close();
    await global.context.close();
    await global.browser.close();
});


After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenshot = await page.screenshot({ path: './screenshots/' + scenario.pickle.name + '.png', fullPage: true })
        this.attach(screenshot, 'image/png')
        console.log('[ FAILED ] Scenario : ' + scenario.pickle.name)
        await page.waitForTimeout(2000)
        const videoName = await page.video().path()
        fs.rename(videoName, 'videos/' + scenario.pickle.name + '.webm', (async () => await console.log('Video Taken')))
    }
})

Before(async function(){
    automationUtils.deleteDirectory('screenshots');
    automationUtils.deleteDirectory('videos');
    automationUtils.createDirectory('videos');
    automationUtils.createDirectory('screenshots');
})
