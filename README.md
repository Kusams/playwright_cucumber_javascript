# Playwright_Cucumber_Javascript

Playwright end-to-end test automation with Cucumber
## Pre Requisites

* To install Playwright : npm install playwright --save-dev
* To install Cucumber : npm install cucumber --save-dev
* To install Junit Reporter : npm install cucumberjs-junitxml --save-dev
* To install Chai : npm install chai --save-dev


## Getting Started
To execute the tests

Define the scripts in package.json as follows :
```json
"scripts": {
    "test": "cucumber-js --parallel 1 -f json:report/report.json && node report.js && cat report/report.json | npx cucumber-junit > report/junitreport.xml"
  }
```
Execute the tests from command line `npm test`