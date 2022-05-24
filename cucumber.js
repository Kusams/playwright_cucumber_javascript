const common = [
    'tests/acceptance/**/*.feature',
    '--require runner/assertions.js',
    '--require tests/acceptance/support/hooks.js',
    '--require tests/acceptance/**/*.step.js',
    '--format json:build/json/cucumber_report.json',
    '--format html:build/report/index.html',
    '--format summary',
].join(' ');


module.exports = {
    default: common
};