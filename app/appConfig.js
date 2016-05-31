module.exports = function appConfig($stateProvider, $urlRouterProvider, $locationProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url: '/',
      views:{
        '': {
          templateUrl: 'search.html'
        }
      },
      controller: 'searchCtrl'
    })

    .state('current', {
      url: '/current-weather',
      params: {
        weatherIndices: null
      },
      views:{
        '': {
          templateUrl: 'weather.html'
        }
      },
      controller: 'weatherCtrl'
    });

  $locationProvider.html5Mode(true);

};