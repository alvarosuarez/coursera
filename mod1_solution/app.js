(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
 function LunchCheckController($scope, $filter) {
   $scope.items = "";
//   $scope.stateOfBeing = "hungry";
//   $scope.cookieCost = .45;
//
//   $scope.sayMessage = function () {
//     var msg = "Yaakov likes to eat healthy snacks at night!";
//     var output = $filter('uppercase')(msg);
//     return output;


  $scope.checkItems = function () {
    var message = "Please enter data first";

    if($scope.items != ""){

      var items = $scope.items.split(';');
      if(items.length >3){
        message = "Too much!";
      }else{
        message = "Enjoy!";
      }
      
    }

    $scope.message = message;
  };
}

})();
