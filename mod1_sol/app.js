(function () {
  'use strict';
  angular.module('Module1', [])

  .controller('Module1Controller', Module1Controller);

  Module1Controller.$inject = ['$scope'];

  function Module1Controller($scope) {
    $scope.entries = '';

    $scope.message = '';

    $scope.checkIfTooMuch = function () {
        var list = $scope.entries.split(',');

        $scope.items =[];

        for (var i =0; i< list.length; i++) {
          if ((list[i].trim()).replace(/ /g,'')) {
            $scope.items.push(list[i]);
          }
        }

        if ($scope.items.length > 3) {
          $scope.message = 'Too much!';
        } else if ($scope.items.length < 4 && $scope.items.length > 0) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Please enter data first';
        }
      }
    };


})();
