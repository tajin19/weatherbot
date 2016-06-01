module.exports = {
  templateUrl: 'indexResult.html',
  controller: function indexResultController(){
    this.innerProp = "inner";
  },
  controllerAs: 'irCtrl',
  bindings: {
    result: '=',
  }
};