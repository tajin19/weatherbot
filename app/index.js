//load angular dependencies
var jQuery = require('jquery');
var angular = require('angular');
var uiRouter = require('angular-ui-router');

//load angular pieces
var rootCtrl = require('./controllers/rootCtrl');
var weatherApiService = require('./services/weatherApiService');
var kelvinFilter = require('./filters/kelvinConverter');
var appConfig = require('./appConfig');

//var logger = require('./logger');

//load templates and place in ng-cache
//once app becomes very large we might want to lazy load
var home = require('ng-cache!./templates/home.html');
var indexResults = require('ng-cache!./templates/indexResults.html');


var env = process.env.NODE_ENV || 'dev';
var mainConfig = require('json!../config/' + env + '.json');

//pass backend configuration to angular app
var config = {
  weatherApi: mainConfig.weatherApi
};

//bring it all together and create angular module
var app = angular.module('app', ['ui.router'])
  .constant('config', config)
  .config(appConfig)
  .filter('kelvin', kelvinFilter)
  .controller('rootCtrl', rootCtrl)
  .service('weatherApiService', weatherApiService);