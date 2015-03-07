(function(){
  'use strict';

  angular.module('mean-template')
  .controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      toastr.success('Welcome!');
      $location.path('/');
    }

    function failure(response){
      toastr.error('Yah dun goofed! Please try again. Check for spelling, or double check for password');
      $scope.user = {};
    }

    $scope.login = function(){
      User.login($scope.user).then(success, failure);
    };
  }]);
})();
