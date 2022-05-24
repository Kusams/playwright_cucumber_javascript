const {expect} = require("chai");

const {test} = require('@playwright/test');
const testData = require('../support/test_data.json')
getUsername = function (typeOfLogin) {
    return testData[typeOfLogin].Username;
};
getPassword = function (typeOfLogin) {
    return testData[typeOfLogin].Password;
};

async function waitForLoadingTheElement(timeOut){
    await setTimeout(() => {console.log("waited for "+timeOut+ "seconds")}, timeOut);
}
async function waitForAngular(page) {
    await page.evaluate(async () => {
        // @ts-expect-error
        if (window.getAllAngularTestabilities) {
            // @ts-expect-error
            await Promise.all(window.getAllAngularTestabilities().map(whenStable));
            // @ts-expect-error
            async function whenStable(testability) {
                return new Promise((res) => testability.whenStable(res) );
            }
        }
    });
}

exports.LoginPage = class LoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    async goto() {
        await page.goto('https://demo.guru99.com/test/newtours/index.php', {waitUntil: 'networkidle'});
    }

    async login(typeOfLogin) {
        await page.locator('input[name="userName"]').fill(getUsername(typeOfLogin));
        await page.locator('input[name="password"]').fill(getPassword(typeOfLogin));
        await page.locator('text=Submit').click();
    }

    async homePageDisplayed() {
             const successfullLoginMessage = page.locator('text=Login Successfully');
            // //await page.waitForLoadState('networkidle'); // This resolves after 'networkidle'
            await successfullLoginMessage.waitFor();

    }
}