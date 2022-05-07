const common = [
    'tests/acceptance/features/*.feature',
    '--require runner/assertions.js',
    '--require tests/acceptance/support/hooks.js',
    '--require tests/acceptance/stepDefinitions/login.step.js'
].join(' ');


module.exports = {
    default: common
};