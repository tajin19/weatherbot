module.exports = function rootCtrl($scope, $q, $sce, $state, weatherApiService){

  //$scope.currentUnit = 'f';
  //
  //var units = {
  //  'f': {
  //    name: '&#8457;'
  //  },
  //  'c':{
  //    name: '&#8451;'
  //  }
  //};

  //$scope.unitName = $sce.trustAsHtml(units[$scope.currentUnit].name);

  //$scope.searchPlaceHolder = "ZIP1, ZIP2...";
  //$scope.searchInput = null;
  //$scope.weatherIndices = [];
  //ng-pattern="^\d{5}(?:-\d{4})?(?:,\s*\d{5}(?:-\d{4})?)+$"

  //$scope.performSearch = function performSearch(){
  //  //TODO: check searchInput for validity
  //  var zipCodes = $scope.searchInput.split(',');
  //  var fetchZipCodes = [];
  //
  //  zipCodes.forEach(function(zipCode){
  //    fetchZipCodes.push(weatherApiService.getWeatherByZip(zipCode));
  //  });
  //
  //  $q.all(fetchZipCodes)
  //    .then(function(response){
  //      $scope.weatherIndices = response;
  //      $state.go('current');
  //    }, function(err){
  //      console.log(err);
  //    });
  //};

  //$scope.toggleMeasurement = function toggleMeasurement(){
  //  $scope.currentUnit = ($scope.currentUnit === 'c') ? 'f' : 'c';
  //  $scope.unitName = $sce.trustAsHtml(units[$scope.currentUnit].name);
  //};

  //weatherApiService.getFiveDayByCityId()
  //.then(function(response){
  //
  //  }, function(err){
  //
  //
  //  });

};