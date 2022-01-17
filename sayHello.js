var colors = require('colors');
var now = new Date().toLocaleTimeString();

console.log(`Hello ${process.env.npm_package_config_name}`.italic.cyan);
console.log(`started at ${now}`.bold.cyan);

// var lodash = require('lodash');
// var output = lodash.assign('Ebrahim','ali');
// console.log(`${output}`);