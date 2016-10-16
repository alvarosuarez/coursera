(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
 function LunchCheckController($scope, $filter) {
   $scope.items = "";
   $scope.state = "";

  $scope.checkItems = function () {

    if($scope.items != ""){
      var count = countItems();
      var message = "Enjoy!"
      if(count >3){
        message = "Too much!";
      }
      $scope.messageClass = "green";
      $scope.inputClass = "greenBorder";
      $scope.message = message;

    }else{
      $scope.messageClass = "red";
      $scope.inputClass = "redBorder";
      $scope.message = "Please enter data first";
    }
  };

  function countItems(){
    var items = $scope.items.split(';');
    var count = 0;
    angular.forEach(items, function(value, key) {
      var currentValue = value.trim();
      if(currentValue!=''){
        count++;
      }
    });
    return count;

  }


}

})();
