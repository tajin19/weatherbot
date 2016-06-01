module.exports = function zipFilter(){

  return function(input, index, delimiter) {

    if(!delimiter)
      delimiter = ',';

    return input.split(delimiter)[index];

  };

};