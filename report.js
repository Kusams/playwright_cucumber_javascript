// const reporter = require("cucumber-html-reporter")
// const options ={
//      theme:'bootstrap',
//      jsonFile:'report/report.json',
//      output:'report/cucumber-html-report.html',
//      reportSuiteAsScenaros:true,
//      testFailureIgnore: false,
//      launchReport:false,
//      open: 'never',
//      metadata: {
//           'App Version': '0.3.2',
//           'Test Environment': 'STAGING',
//           'Browser': 'Chrome  54.0.2840.98',
//           'Platform': 'Windows 10',
//           'Parallel': 'Scenarios',
//           'Executed': 'Remote'
//      }
// }
// reporter.generate(options)


const report = require('multiple-cucumber-html-reporter');
report.generate({
    displayDuration: true,
    testFailureIgnore: false,
    jsonDir:'report/',
    reportPath:'report/',
    metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
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