(function () {
'use strict';

var toBuyList = [
 {
    name: "Cookies",
    quantity: "10"
 },
 {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies2",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

var alreadyBoughtList = [];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlredyBoughtController', AlredyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemToBuy = this;

  itemToBuy.itemName = "";
  itemToBuy.itemQuantity = "";

  itemToBuy.addItem = function () {
    ShoppingListCheckOffService.addItem(itemToBuy.itemName, itemToBuy.itemQuantity);
  }
}


AlredyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var AlredyBoughtList = this;

  alredyBoughtList.items = ShoppingListCheckOffService.getItems();

  alredyBoughtList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


function ShoppingListCheckOffService() {
  var service = this;

/*
  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };
}

})();
*/