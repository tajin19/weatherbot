module.exports = function weatherCtrl($scope, $q, $sce, $state, weatherApiService){

  $scope.currentUnit = 'f';
  $scope.weatherIndices = $state.params.weatherIndices;
  $scope.weatherIndicesFiveDay = [];

  $scope.forecastOn = false;

  $scope.todayShowHeader = false;
  $scope.forecastShowHeader = true;

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


    $scope.forecastOn = !$scope.forecastOn;

    if(!$scope.forecastOn){
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