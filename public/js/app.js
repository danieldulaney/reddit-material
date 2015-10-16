(function(){
'use strict';

var app = angular.module('App', ['ngMaterial']);

app.config(function($mdIconProvider){
	$mdIconProvider
		.iconSet('navigation','/img/icons/svg-sprite-navigation.svg');
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 
}]);
})();