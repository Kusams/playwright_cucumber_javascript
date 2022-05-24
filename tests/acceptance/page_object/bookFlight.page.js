const {expect} = require("chai");

const {test} = require('@playwright/test');
const testData = require('../support/test_data.json');

async function waitForLoadingTheElement(timeOut){
    await setTimeout(() => {console.log("waited for "+timeOut+ "seconds")}, timeOut);
}

exports.bookTicketPage = class bookTicketPage {

    // /**
    //  * @param {import('@playwright/test').Page} page
    //  */

    async selectSideMenu(sideMenu) {
        await page.locator('text='+sideMenu).click();
    }

    async selectFromFlight(fromFlight) {
        await page.locator('select[name="fromPort"]').selectOption(fromFlight);
    }

    async selectToFlight(toFlight) {
        await page.locator('select[name="toPort"]').selectOption(toFlight);
    }

    async selectFromMonth(fromMonth) {
        await page.locator('select[name="fromMonth"]').selectOption(fromMonth);
    }
    async selectToMonth(toMonth) {
        await page.locator('select[name="toMonth"]').selectOption(toMonth);
    }

    async selectAirLines(selectAirlines) {
        await page.locator('select[name="airline"]').selectOption(selectAirlines);
    }
    async clickFindFlightButton() {
        await page.locator('input[name="findFlights"]').click();
    }

    async flightPageIsDisplayed() {
        await page.locator('select[name="fromPort"]').waitFor();
    }

    async destinationPageIsDisplayed() {
        await page.locator('text=SIGN-ON REGISTER SUPPORT CONTACT This section of our web site is currently under >> img').nth(1).click();
    }
}



// /
//     // Click text=Destinations
//     await page.locator('text=Destinations').click();
// await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/login_sucess.php#google_vignette');
// // Click [aria-label="Close ad"]
// await page.frameLocator('[aria-label="Advertisement"]').frameLocator('iframe[name="ad_iframe"]').locator('[aria-label="Close ad"]').click();
// await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/support.php');
// // Click text=SIGN-ON REGISTER SUPPORT CONTACT This section of our web site is currently under >> img >> nth=3
// await page.locator('text=SIGN-ON REGISTER SUPPORT CONTACT This section of our web site is currently under >> img').nth(3).click();
// await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/index.php');
// // Click text=Flights
// await page.locator('text=Flights').click();
// await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/reservation.php');
// // Click text=Destinations
// await page.locator('text=Destinations').click();
// await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/support.php');
// // Click text=SIGN-ON REGISTER SUPPORT CONTACT This section of our web site is currently under >> img >> nth=1
// await page.locator('text=SIGN-ON REGISTER SUPPORT CONTACT This section of our web site is currently under >> img').nth(1).click();
// // Click text=SIGN-ON REGISTER SUPPORT CONTACT This section of our web site is currently under >> img >> nth=3
// await page.locator('text=SIGN-ON REGISTER SUPPORT CONTACT This section of our web site is currently under >> img').nth(3).click();
// await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/index.php');
// // Click text=your destination
// await page.locator('text=your destination').click();
// await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/index.php');
// // Click text=Register here
// await page.locator('text=Register here').click();
// await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/register.php');
// // Click input[name="firstName"]
// await page.locator('input[name="firstName"]').click();
// // Fill input[name="firstName"]
// await page.locator('input[name="firstName"]').fill('name');
// // Click text=REGISTER
// await page.locator('text=REGISTER').click();
// await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/register.php');
// });