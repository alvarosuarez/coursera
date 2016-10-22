(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;
  list.items = ShoppingListCheckOffService.getToBuyItems();

  list.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;
  list.items = ShoppingListCheckOffService.getBoughtItems();
  //
  // list.addItem = function () {
  //     shoppingList.addItem(list.item);
  // }
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems =[
    {name: "cookies", quantity: 10},
    {name: "apples", quantity: 2},
    {name: "oranges", quantity: 5},
    {name: "pies", quantity: 2},
    {name: "snacks", quantity: 22}];

  var boughtItems =[];

  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    boughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
};

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
