(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<'
    }
  };

  return ddo;
}

MenuSearchService.$inject = ['$http'];
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.term = "";
  list.message = "";
  list.found =[];

  list.searchTerm = function () {
    if(list.term!=''){
      var promise = MenuSearchService.getMatchedMenuItems(list.term);

      promise.then(function (response) {
        list.found = response;
        if(list.found.length == 0){
            list.message = "Nothing found";
        }

      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    } else{
        list.message = "Nothing found";
    }
  };

  list.removeItem = function (itemIndex) {
    var found = list.found;
    found.splice(itemIndex, 1);
  };
}

function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {


    return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function (result) {
        // process result and only keep items that match
      var foundItems =[];
      angular.forEach(result.data.menu_items, function(value, key) {

        if(new RegExp(searchTerm, "i").test(value.description)) {
          var item = {id:value.id,short_name:value.short_name,description:value.description};
          foundItems.push(item);
        }
      });
        // return processed items
        return foundItems;
    });

  };
}

})();
