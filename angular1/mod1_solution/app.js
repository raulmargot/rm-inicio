(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  
  $scope.lunchString = "";
  $scope.lastCalc = "";

  $scope.howMuch = function () {
    var text = "";
  	if ($scope.lunchString.length == 0) {
  		text = "Please enter data first";
  	} else {
  	   var count = $scope.lunchString.split(",").filter(ne).length;
       if (count > 3) {
      	text = "Too much!";
       } else if (count >0) {
    	text = "Enjoy!";
       } else {
    	text = "Empty list";
       }
   }
    $scope.lastCalc = text
    return text;
  };

 function ne(item) {
    return item.trim().length > 0 ;
 }

} 

})();
