//load angular dependencies
var jQuery = require('jquery');
var angular = require('angular');
var uiRouter = require('angular-ui-router');

//load angular pieces
var rootCtrl = require('./controllers/rootCtrl');
var searchCtrl = require('./controllers/searchCtrl');
var weatherCtrl = require('./controllers/weatherCtrl');


var weatherApiService = require('./services/weatherApiService');
var kelvinFilter = require('./filters/kelvinConverter');
var speedFilter = require('./filters/speedFilter');
var zipFilter = require('./filters/zipFilter');
var todayResult = require('./components/todayResult');
var forecastResult = require('./components/forecastResult');

var appConfig = require('./appConfig');

//var logger = require('./logger');

//load templates and place in ng-cache
//once app becomes very large we might want to lazy load
require('ng-cache!./templates/search.html');
require('ng-cache!./templates/weather.html');
require('ng-cache!./templates/todayResult.html');
require('ng-cache!./templates/forecastResult.html');


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
  .component('todayResult', todayResult)
  .component('forecastResult', forecastResult)

  .filter('kelvin', kelvinFilter)
  .filter('speed', speedFilter)
  .filter('zip', zipFilter)
  .controller('rootCtrl', rootCtrl)
  .controller('searchCtrl', searchCtrl)
  .controller('weatherCtrl', weatherCtrl)
  .service('weatherApiService', weatherApiService);