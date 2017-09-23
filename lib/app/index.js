const electron = require('electron');
const {app, BrowserWindow} = require('electron');

/**
  * Loads the browser window when the app is
  * ready to load the browser window.
*/
app.on('ready', () => {
  /* Sets the display size based on the args passed in startup */
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;

  /* Loads the browser window */
  let win = new BrowserWindow({
    width,
    height
  });

  /* Sets the title of the new window */
  win.setTitle('Trading Info Panel');

  /* Loads the startpage */
  win.loadURL('file://' + __dirname + '/../../views/index.html');
});

/**
  * Function to change the page.
  * @param The new page.
  * @return NULL
*/
function set_window_page(page){
  if(page){
    win.loadUrl(__dirname + '/../../views/' + page);
  }
}
