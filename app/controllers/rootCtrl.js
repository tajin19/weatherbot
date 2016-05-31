module.exports = function RootCtrl($scope, $q, weatherApiService){

  $scope.searchPlaceHolder = "ZIP1, ZIP2...";
  $scope.searchInput = null;

  //ng-pattern="^\d{5}(?:-\d{4})?(?:,\s*\d{5}(?:-\d{4})?)+$"

  $scope.performSearch = function performSearch(){

    //TODO: check searchInput for validity
    var zipCodes = $scope.searchInput.split(',');
    var fetchZipCodes = [];


    debugger;
    zipCodes.forEach(function(zipCode){
      fetchZipCodes.push(weatherApiService.getWeatherByZip(zipCode));
    });

    $q.all(fetchZipCodes)
      .then(function(response){

        debugger;
      }, function(err){


        debugger;
      });


    //weatherApiService.getWeatherByZip($scope.searchInput)
    //.then(function(response){
    //
    //    debugger;
    //  }, function(err){
    //
    //
    //    debugger;
    //  });


  };

  //weatherApiService.getWeatherByZip(30068)
  //.then(function(response){
  //
  //    debugger;
  //  }, function(err){
  //
  //
  //    debugger;
  //  });

};