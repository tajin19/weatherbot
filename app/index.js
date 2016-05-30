var angular = require('angular');
var uiRouter = require('angular-ui-router');
var rootCtrl = require('./controllers/rootCtrl');
var weatherApiService = require('./services/weatherApiService');

var env = process.env.NODE_ENV || 'dev';
var mainConfig = require('json!../config/' + env + '.json');

var config = {
  weatherApi: mainConfig.weatherApi
};

var ngModule = angular.module('app', ['ui.router'])
  .constant('config', config)
  .config(appConfig)
  .controller('rootCtrl', rootCtrl)
  .service('weatherApiService', weatherApiService);


function appConfig($stateProvider, $urlRouterProvider, $locationProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/home',
      templateUrl: 'app/templates/home.html'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
      url: '/about',
      templateUrl: 'app/templates/about.html'
    });

  $locationProvider.html5Mode(true);

  //$locationProvider.html5Mode({
  //  enabled: true,
  //  requireBase: false
  //});
}


//console.log(weatherApiService);
//console.log(weatherApiService.getGreeting);