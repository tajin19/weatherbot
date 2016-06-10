module.exports = function weatherCtrl($scope, $q, $sce, $state, weatherApiService){

  $scope.currentUnit = 'f';
  $scope.todayShowHeader = false;
  $scope.forecastShowHeader = true;
  $scope.weatherIndicesFiveDay = [ [], [], [], [], [] ];

  $scope.weatherIndices = $state.params.weatherIndices;

  //
  $scope.weatherIndices.forEach(function(item){
    item.forecastOn = false;
  });

  //TODO: implement F/C toggle
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

    //toggle state
    $scope.weatherIndices[index].forecastOn = !$scope.weatherIndices[index].forecastOn;

    //if turning forecast off, delete from records and we are done. no need to call weatherApiService.
    if(!$scope.weatherIndices[index].forecastOn){
      $scope.weatherIndicesFiveDay[index] = [];
      return;
    }

    var currentCityId = $scope.weatherIndices[index].data.id;
    var currentDate = new Date($scope.weatherIndices[index].data.dt * 1000);

    weatherApiService.getFiveDayByCityId(currentCityId)
    .then(function(response){

        //TODO: this function should be broken up for testability
        var raw = [ [],[],[],[],[],[],[] ];
        var day = 0;

        //add js date property to each item and group by day
        response.data.list.forEach(function(item){
          //create javascript dates
          item.date = new Date(item.dt * 1000);

          //group temps by day
          if(raw[day].length > 0 && item.date.getDay() != raw[day][raw[day].length - 1].date.getDay()) {
            day++;
          }

          raw[day].push(item);
        });

        //we are not interested in days where no forecasts are made or our current date
        raw = raw.filter(function(temps){
          return temps && temps.length > 0 && temps[0].date.getDay() != currentDate.getDay();
        });

        raw.forEach(function(item){

          //average numbers for given day
          var reducedDate = item.reduce(function(prev, curr){
            curr.main.temp = (curr.main.temp + prev.main.temp) / 2;
            curr.main.temp_min = (curr.main.temp_min + prev.main.temp_min) / 2;
            curr.main.temp_max = (curr.main.temp_max + prev.main.temp_max) / 2;
            curr.main.pressure = (curr.main.pressure + prev.main.pressure) / 2;
            curr.main.humidity = (curr.main.humidity + prev.main.humidity) / 2;
            curr.wind.deg = (curr.wind.deg + prev.wind.deg) / 2;
            curr.wind.speed = (curr.wind.speed + prev.wind.speed) / 2;

            return curr;
          });

          $scope.weatherIndicesFiveDay[index].push(reducedDate);
        });

      }, function(err){
          console.log(err);
      });
  };
};