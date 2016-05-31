module.exports = function searchCtrl($scope, $q, $sce, $state, weatherApiService){

  $scope.searchPlaceHolder = "ZIP1, ZIP2...";
  $scope.searchInput = null;

  //ng-pattern="^\d{5}(?:-\d{4})?(?:,\s*\d{5}(?:-\d{4})?)+$"

  $scope.performSearch = function performSearch(){

    debugger;
    //TODO: check searchInput for validity
    var zipCodes = $scope.searchInput.split(',');
    var fetchZipCodes = [];

    zipCodes.forEach(function(zipCode){
      fetchZipCodes.push(weatherApiService.getWeatherByZip(zipCode));
    });

    $q.all(fetchZipCodes)
      .then(function(response){
        //hand data off to next controller
        $state.go('current',{ weatherIndices: response });
      }, function(err){
        console.log(err);
      });
  };

};