module.exports = function appConfig($stateProvider, $urlRouterProvider, $locationProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      views:{
        '': {
          templateUrl: 'home.html'
        }
      }
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('current', {
      url: '/current',
      views:{
        '': {
          templateUrl: 'indexResults.html'
        }
      }
    });

  $locationProvider.html5Mode(true);

  //$locationProvider.html5Mode({
  //  enabled: true,
  //  requireBase: false
  //});
};