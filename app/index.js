var angular = require('angular');
var rootCtrl = require('./controllers/rootCtrl');
var weatherApiService = require('./services/weatherApiService');

var ngModule = angular.module('app', [])
  .controller('rootCtrl', rootCtrl)
  .service('weatherApiService', weatherApiService);

//console.log(weatherApiService);
//console.log(weatherApiService.getGreeting);