(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
  var list = this;
  list.categories = ['cat1','cat2']
  // MenuDataService.getAllCategories();

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
