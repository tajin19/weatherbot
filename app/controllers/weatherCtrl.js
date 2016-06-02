module.exports = function weatherCtrl($scope, $q, $sce, $state, weatherApiService){

  $scope.currentUnit = 'f';
  $scope.todayShowHeader = false;
  $scope.forecastShowHeader = true;
  $scope.weatherIndicesFiveDay = [];

  $scope.weatherIndices = $state.params.weatherIndices;

  //
  $scope.weatherIndices.forEach(function(item){
    item.forecastOn = false;
  });

  //TODO: Get unit swap working with components, will keep hidden for now
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


  $scope.getFiveDayForcast = function getFiveDayForcast(index){

    $scope.weatherIndices[index].forecastOn = !$scope.weatherIndices[index].forecastOn;

    if(!$scope.weatherIndices[index].forecastOn){
      $scope.weatherIndicesFiveDay[index] = [];
      return;
    }

    var cityId = $scope.weatherIndices[index].data.id;

    weatherApiService.getFiveDayByCityId(cityId)
    .then(function(response){

        $scope.weatherIndicesFiveDay[index] = response.data.list.slice(1,6);
        $scope.weatherIndicesFiveDay[index].forEach(function(item){
          //TODO: fix this date issue
          item.date = new Date(item.dt * 1000).toISOString();
        });

      }, function(err){
        //TODO: handle this condition
      });
  };
};