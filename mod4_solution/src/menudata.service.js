(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q','$http']
function MenuDataService($q,$http) {
  var service = this;

  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    var deferred = $q.defer();

    $http.get('https://davids-restaurant.herokuapp.com/categories.json').then(function (result) {
      var categories = []

      angular.forEach(result.data, function(value, key) {
          var category = {id:value.id,short_name:value.short_name,name:value.name,special_instructions:value.special_instructions,url:value.url};
          categories.push(category);
      });
      deferred.resolve(categories);
    });

    return deferred.promise;
  };

  // Returns a promise, NOT items array directly
  service.getItemsForCategory = function (categoryShortName) {
    var deferred = $q.defer();

    $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName).then(function (result) {
        deferred.resolve(result);
    });

    return deferred.promise;
  };

}

})();
