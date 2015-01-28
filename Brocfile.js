/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');


var app = new EmberApp({
  'ember-cli-bootstrap': {
    'importBootstrapJS': false
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('bower_components/webcomponentsjs/webcomponents.js');
app.import('bower_components/underscore/underscore.js');
app.import('bower_components/underscore-contrib/dist/underscore-contrib.js');
app.import('bower_components/polymer/polymer.js');
app.import('bower_components/polymer/layout.html');
app.import('bower_components/polymer/polymer.html');
app.import('bower_components/flag-icon/flag-icon.html');

var extraAssets = pickFiles('bower_components/flag-icon', {
  srcDir: '/',
  files: ['**/*.gif', '**/*.png'],
  destDir: '/flag-icon'
});

module.exports = app.toTree(extraAssets);
