module.exports = function weatherApiService($http, $q, config){

  return {
    getWeatherByZip: getWeatherByZip
  };


  function getWeatherByZip(zip){

    var key = config.weatherApi.key;
    console.log(key);
    var url = "http://api.openweathermap.org/data/2.5/weather";

    return $http({
      method: 'GET',
      url: url,
      params: {
        zip: zip + ',' + 'us',
        APPID: key
      }
    });
  }
};