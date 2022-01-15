var npmDemo = Require('npm-demp-pkg');
var colors = Require('colors');

exports.printMsg = () => {
  console.log(`Hello ${process. env.npm_package_config_name}`.red); 
}