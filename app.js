angular.module('uctc');

angular.module('uctc').controller('ctrl',function(constants, caLogic, $scope){
  $scope.rows = [1];
  $scope.$on('addRow',function(){
    $scope.rows.push('x');
  });
});
