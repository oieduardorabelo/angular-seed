//
// angular-mocks on line 2731, try to find jasmineOrMocha
// in the window object, so, we need to load this asset here,
// because, in this moment, Jest has installed the test framework environment
//
// also, we can't use just "module", to mock the angular modules,
// we need to explicit point to "window.module", where angular-mocks
// will publish the mock object
//
require('angular/angular')
require('angular-route/angular-route')
require('angular-mocks/angular-mocks');

//
// Jest doesn't support glob in the "setupFiles" key
//
const glob = require('glob');
glob.sync('./app/components/**/*.js').forEach(file => require(file));
glob.sync('./app/view*/**/*.js').forEach(file => require(file));
