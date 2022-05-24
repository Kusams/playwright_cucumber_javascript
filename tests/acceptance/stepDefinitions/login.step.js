const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");
const {LoginPage} = require('../page_object/login.page')


const loginpage = new LoginPage();

Given('I login as {string} into Mercury Tours application', async(typeOfLogin)=>{
    await loginpage.goto();
    return console.log(' login as '+typeOfLogin);

});

When("I enter the {string} credentials and click login", async function (typeOfLogin) {
    await loginpage.login(typeOfLogin);
});

Then("I verify the home page displayed", async function (){
    await loginpage.homePageDisplayed();
});