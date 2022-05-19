const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");
const {bookTicketPage} = require('../page_object/bookFlight.page')


const bookFlightTicketPage = new bookTicketPage();

Given('I select {string} from side menu navigation', async(Flights)=> {
    await bookFlightTicketPage.selectSideMenu(Flights);
    // await page.frameLocator('[aria-label="Advertisement"]').frameLocator('iframe[name="ad_iframe"]').locator('[aria-label="Close ad"]')._isPresent().then(async function (){
    //     await page.frameLocator('[aria-label="Advertisement"]').frameLocator('iframe[name="ad_iframe"]').locator('[aria-label="Close ad"]').click();
    // });
});

When("I wait for flight page to be displayed", async()=>{
    await bookFlightTicketPage.flightPageIsDisplayed();
});

When("I select the flight from {string} to {string}", async function (fromFlight,toFlight) {
    await bookFlightTicketPage.selectFromFlight(fromFlight);
    await bookFlightTicketPage.selectToFlight(toFlight);
});

Then('I select the travel date from {string} to {string}', async function (fromMonth,toMonth) {
    await bookFlightTicketPage.selectFromMonth(fromMonth);
    await bookFlightTicketPage.selectToMonth(toMonth);
});

Then('I select the {string} airlines and click find flight button', async function (selectAirlines) {
    await bookFlightTicketPage.selectAirLines(selectAirlines);
    await bookFlightTicketPage.clickFindFlightButton();
});