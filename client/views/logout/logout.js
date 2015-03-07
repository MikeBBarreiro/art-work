(function(){
  'use strict';

  angular.module('mean-template')
  .controller('LogoutCtrl', ['$location', 'User', function($location, User){
    User.logout().then(function(){
      toastr.success('Successful logout, hope to see you soon!');
      $location.path('/');
    });
  }]);
})();
