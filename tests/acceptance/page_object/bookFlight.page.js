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
}



//
// Record
//
//
//
//
// Target:
//
//     Playwright Test
//
// import { test, expect } from '@playwright/test';
// test('test', async ({ page }) => {
//     // Go to https://demo.guru99.com/test/newtours/index.php
//     await page.goto('https://demo.guru99.com/test/newtours/index.php');
//     // Click input[name="userName"]
//     await page.locator('input[name="userName"]').click();
//     // Fill input[name="userName"]
//     await page.locator('input[name="userName"]').fill('Traveler');
//     // Click input[name="password"]
//     await page.locator('input[name="password"]').click();
//     // Fill input[name="password"]
//     await page.locator('input[name="password"]').fill('My');
//     // Click input[name="userName"]
//     await page.locator('input[name="userName"]').click();
//     // Click form table tbody tr:nth-child(4) td table tbody tr:nth-child(2) td:nth-child(2)
//     await page.locator('form table tbody tr:nth-child(4) td table tbody tr:nth-child(2) td:nth-child(2)').click();
//     // Click input[name="userName"]
//     await page.locator('input[name="userName"]').click();
//     // Press ArrowRight
//     await page.locator('input[name="userName"]').press('ArrowRight');
//     // Press ArrowRight
//     await page.locator('input[name="userName"]').press('ArrowRight');
//     // Fill input[name="userName"]
//     await page.locator('input[name="userName"]').fill('Traveler');
//     // Click input[name="password"]
//     await page.locator('input[name="password"]').click();
//     // Fill input[name="password"]
//     await page.locator('input[name="password"]').fill('Myfirsttour');
//     // Click text=Submit
//     await page.locator('text=Submit').click();
//     await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/login_sucess.php');
//     // Click text=Flights
//     await page.locator('text=Flights').click();
//     await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/login_sucess.php#google_vignette');
//     // Click [aria-label="Close ad"]
//     //await page.frameLocator('[aria-label="Advertisement"]').frameLocator('iframe[name="ad_iframe"]').locator('[aria-label="Close ad"]').click();
//     await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/reservation.php');
//     // Select Sydney
//     await page.locator('select[name="fromPort"]').selectOption('Sydney');
//     // Select 12
//     await page.locator('select[name="fromMonth"]').selectOption('12');
//     // Select 18
//     await page.locator('select[name="fromDay"]').selectOption('18');
//     // Select Zurich
//     await page.locator('select[name="toPort"]').selectOption('Zurich');
//     // Select 2
//     await page.locator('select[name="toMonth"]').selectOption('2');
//     // Select 9
//     await page.locator('select[name="fromMonth"]').selectOption('9');
//     // Select 12
//     await page.locator('select[name="toMonth"]').selectOption('12');
//     // Select Blue Skies Airlines
//     await page.locator('select[name="airline"]').selectOption('Blue Skies Airlines');
//     // Click input[name="findFlights"]
//     await page.locator('input[name="findFlights"]').click();
//     await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/reservation2.php');
//     // Click text=SIGN-ON REGISTER SUPPORT CONTACT After flight finder - No Seats Avaialble Please >> img >> nth=1
//     await page.locator('text=SIGN-ON REGISTER SUPPORT CONTACT After flight finder - No Seats Avaialble Please >> img').nth(1).click();
//     await expect(page).toHaveURL('https://demo.guru99.com/test/newtours/index.php');
// });