(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

// LIST #1 - controller

MenuSearchService.$inject = ['$http'];
NarrowItDownController.$inject = ['$scope','MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var list = this;
  $scope.term = "";

  list.found = [];

  list.searchTerm = function () {
    if($scope.term==''){
      $scope.message = "Nothing found";
      return;
    }
      list.found = MenuSearchService.getMatchedMenuItems($scope.term);
      console.log(list.found);
  };
}

function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {

    return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function (result) {
        // process result and only keep items that match
      var foundItems = []
      angular.forEach(result.data.menu_items, function(value, key) {

        if(new RegExp(searchTerm, "i").test(value.description)) {
          foundItems.push(value.description);
        }
      });
        // return processed items
        return foundItems;
    });

  };
}

})();
