module.exports = function speedFilter(){

  return function(input, mode) {

    return (mode === 'c')
      ? 3.6 * input
      : 2.23694 * input;

  };

};