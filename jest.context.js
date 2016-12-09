const glob = require('glob');

require('angular/angular.js');
require('angular-route/angular-route.js');
require('angular-mocks/angular-mocks.js');

glob.sync('./app/components/**/*.js').forEach(file => require(file));
glob.sync('./app/view*/**/*.js').forEach(file => require(file));
