module.exports = function weatherCtrl($scope, $q, $sce, $state, weatherApiService){

  $scope.currentUnit = 'f';
  $scope.weatherIndices = $state.params.weatherIndices;

  debugger;

  var units = {
    'f': {
      name: '&#8457;'
    },
    'c':{
      name: '&#8451;'
    }
  };

  $scope.unitName = $sce.trustAsHtml(units[$scope.currentUnit].name);

  $scope.toggleMeasurement = function toggleMeasurement(){
    $scope.currentUnit = ($scope.currentUnit === 'c') ? 'f' : 'c';
    $scope.unitName = $sce.trustAsHtml(units[$scope.currentUnit].name);
  };

  //weatherApiService.getFiveDayByCityId()
  //.then(function(response){
  //
  //  }, function(err){
  //
  //
  //  });

};