/**
  * Appends the root directory to the process.
*/
process.env.root_dir = __dirname;

/**
  * Check if we need to run in small screen mode
*/
if(process.argv.small && process.argv.small == 'true'){
  process.env.start_small_screen = true;
}
else{
  process.env.start_small_screen = false;
}

/**
  * Runs the main application
*/
require('./lib')
