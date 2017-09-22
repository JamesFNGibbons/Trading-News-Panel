const fs = require('fs');

/* Gets the root dir from the process. */
let dir = process.env.root_dir;

let helpers = {};

/**
  * Loads the workers from the workers folder.
*/
for(let file in fs.readdirSync(dir + '/lib/workers')){
  file = fs.readdirSync(dir + '/lib/workers')[file];
  helpers[file.split('.')[0]] = require(dir + '/lib/workers/' + file);
}

/** Load the application process only0 if we are not
  * running in the browser window.
*/
if(typeof window == 'undefined'){
  require('./app');
}
