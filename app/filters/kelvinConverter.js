module.exports = function kelvinConverter(){

  return function(input, mode) {

    if(mode === 'c'){
      return input - 273.15;
    }else{
      return input * (9/5) - 459.67;
    }

  };

};