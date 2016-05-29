module.exports = function weatherApiService($http, $q){

  return {
    getWeatherByZip: getWeatherByZip

  };



  function getWeatherByZip(zip){

    var url = "http://api.openweathermap.org/data/2.5/weather";

    return $http({
      method: 'GET',
      url: url,
      params: {
        zip: zip + ',' + 'us',
        APPID: '233b5ba211fdca8e85bf56a79411b928'
      }
    });
  }
};