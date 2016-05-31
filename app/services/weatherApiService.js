module.exports = function weatherApiService($http, $q, config){

  return {
    getWeatherByZip: getWeatherByZip,
    getFiveDayByCityId: getFiveDayByCityId
  };


  function getWeatherByZip(zip){

    var url = "http://api.openweathermap.org/data/2.5/weather";

    return $http({
      method: 'GET',
      url: url,
      params: {
        zip: zip + ',' + 'us',
        APPID: config.weatherApi.key
      }
    });
  }

  function getFiveDayByCityId(cityId){

    var url = "http://api.openweathermap.org/data/2.5/forecast";

    return $http({
      method: 'GET',
      url: url,
      params: {
        id: cityId,
        APPID: config.weatherApi.key
      }
    });

  }
};