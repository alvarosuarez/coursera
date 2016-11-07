(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService','items'];
function CategoriesController(MenuDataService,items) {
  var list = this;
  list.categories = items;
  // MenuDataService.getAllCategories();

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
