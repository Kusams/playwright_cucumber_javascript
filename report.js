const browserCaps = require('./browserCaps/browserCapValues.json')
// const reporter = require("cucumber-html-reporter")
// const options ={
//      theme:'bootstrap',
//      jsonFile:'build/json/cucumber_report.json',
//      output:'build/report/cucumber-html-report.html',
//      reportSuiteAsScenaros:true,
//      testFailureIgnore: false,
//      launchReport:false,
//      open: 'never',
//      metadata: {
//           'App Version': '0.3.2',
//           'Test Environment': 'STAGING',
//           'Browser': browserCaps.browserName,
//           'BrowserVersion': browserCaps.browserVersion,
//           'OSName': browserCaps.osName,
//           'Parallel': 'Scenarios',
//           'Executed': 'Remote'
//      }
// }
// reporter.generate(options)

const report = require('multiple-cucumber-html-reporter');
report.generate({
    displayDuration: true,
    testFailureIgnore: false,
    jsonDir: ('build/json'),
    reportPath: `build/report`,
    metadata:{
        browser: {
            name: browserCaps.browserName,
            version: browserCaps.browserVersion
        },
        device: 'Local test machine',
        platform: {
            name: browserCaps.osName,
            version: browserCaps.osVersion
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Execution Date', value: new Date().toDateString()},
            {label: 'Execution Start Time', value: new Date().toLocaleTimeString()},
            {label: 'Execution End Time', value: new Date().toLocaleTimeString()}
        ]
    }
});


