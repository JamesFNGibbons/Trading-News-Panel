const fs = require('fs');

module.exports = {
  get_header_helper: () => {
    document.write("<html ng-app='app'>");

    document.write("<head>");
    let dir = __dirname;

    /* Import bootstrap css libary */
    document.write(`<link rel='stylesheet' type='text/css' href='../dist/bootstrap/bootstrap.min.css'>`);

    /* Import custom css libary */
    document.write(`<link rel='stylesheet' type='text/css' href='../assets/css/app.css'>`);

    //maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>`);
    window.jQuery = require('jquery');
    window.$ = window.jQuery;

    window.bootstrap = require('bootstrap');

    /* Import Highstocks */
    document.write(`<script src="https://cdnjs.cloudflare.com/ajax/libs/highstock/5.0.14/highstock.js" onload="window.Highcharts = module.exports;"></script>`);

    /* Import angularjs */
    document.write(`<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min.js"></script>`);

    let root_dir = process.env.root_dir;

    /* Define the angular module */
    document.write('<script>angular.module("app", []);</script>');

    /* Import all the controllers from the controllers file */
    for(let file in fs.readdirSync(root_dir + '/lib/controllers')){
      file = fs.readdirSync(root_dir + '/lib/controllers')[file];
      document.write(`<script src='${root_dir}/lib/controllers/${file}'></script>`);
    }

    document.write('</head>');
  }

}
