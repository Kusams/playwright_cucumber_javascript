const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");
const {LoginPage} = require('../page_object/login.page')


const loginpage = new LoginPage();

Given('I am an authenticated Mercury Tours user', async()=>{
    await loginpage.goto();

});

When("I enter the {string} credentials and click login", async function (typeOfLogin) {
    await loginpage.login(typeOfLogin);
});

Then("I verify the {string} home page displayed", async function (typeOfLogin){
    await loginpage.homePageDisplayed(typeOfLogin);
});