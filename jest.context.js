const glob = require('glob');

require('./app/bower_components/angular/angular.js');
require('./app/bower_components/angular-route/angular-route.js');
require('./app/bower_components/angular-mocks/angular-mocks.js');

glob.sync('./app/components/**/*.js').forEach(file => require(file));
glob.sync('./app/view*/**/*.js').forEach(file => require(file));
