(function(){
'use strict';

var app = angular.module('rmApp', ['ngMaterial', 'rmDisplay', 'rmData']);

app.config(function($mdIconProvider){
	$mdIconProvider
		.iconSet('navigation','/img/icons/svg-sprite-navigation.svg');
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};
}]);

app.filter('timesince', function(){
	return function(input){
		return moment().to(input*1000);
	};
});

})();