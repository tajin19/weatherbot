var angular = require('angular');
var rootCtrl = require('./rootCtrl');
var weatherApiService = require('./weatherApiService');

var ngModule = angular.module('app', [])
  .controller('rootCtrl', rootCtrl)
  .service('weatherApiService', weatherApiService);

//console.log(weatherApiService);
//console.log(weatherApiService.getGreeting);