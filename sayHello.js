var npmDemo = require('npm-demp-pkg');
var colors = require('colors');

exports.printMsg = () => {
  console.log(`Hello ${process. env.npm_package_config_name}`.red); 
}