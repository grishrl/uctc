angular.module('uctc').directive('rowTemplate',function(){
  var directive = {};
   directive.templateUrl = 'rowTemplate.html';
   directive.restrict = 'E';
   directive.controller = 'rowTemplateController';
   directive.controllerAs = 'ctrl';
  //  directive.transclude = false;
  //   directive.scope = {
  //      label : '@',
  //      queryObject: '@',
  //      searchModel: '='
  //    };
       //
      //  directive.link = function(scope, element, attrs) {
       //
      //  };

       return directive;
});
angular.module('uctc').controller('rowTemplateController',function(constants, caLogic, $scope){
  $scope.unitList = constants.unitList;
  var numberToShow = 10;
  var arrayToShow = [];
  for(var i = 0; i<numberToShow; i++){
    arrayToShow.push(i+1);
  }
  $scope.numbers = arrayToShow;

  $scope.addRow=function(){
    $scope.$emit('addRow');
  };
});
