angular.module('uctc').factory('caLogic', function(constants){
    var caLogic = {};

    //returns data of unit.
    caLogic.returnUnitData = function(unit){
      for(var i =0;i<constants.unitCostTimeTable.length;i++){
        if(constants.unitCostTimeTable[i].Unit==unit){
          return constants.unitCostTimeTable[i];
        }
      }
    };

    //takes unit, number of facilities, returns villager number/type required
    caLogic.requiredForUnit = function(unit, noFac){
      var unitCosts = this.returnUnitData(unit);
      //resourceCost/(timeToBuild*resourceCollectionRate)
      var villPerResource = {"W":0,"F":0,"G":0};
      angular.forEach(villPerResource, function(key,val){
        val = (unitCosts.key/(unitCosts.Time*constants.collectionRate.key));
        val = Math.ceil(val);
        val = val*noFac;
      });
      villPerResource.Unit = unit;
      return villPerResource;
    };
});
