const rimraf = require("rimraf");
const fs = require('fs');
const mkdirp = require('mkdirp');
//const report = require('multiple-cucumber-html-reporter');

function deleteDirectory(dirPath) {
    rimraf.sync(dirPath);
}
function createDirectory(dir) {
    if (!fs.existsSync(dir)) {
        mkdirp.sync(dir);
    }
}

module.exports = {
    deleteDirectory: deleteDirectory,
    createDirectory :createDirectory,

};