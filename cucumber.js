const common = [
    'tests/acceptance/features/*.feature',
    '--require runner/assertions.js',
    '--require tests/acceptance/support/hooks.js',
    '--require tests/acceptance/stepDefinitions/login.step.js',
    '--format json:build/json/cucumber_report.json',
    '--format html:build/report/index.html',
    '--format summary',
    '--format progress-bar',
].join(' ');


module.exports = {
    default: common
};