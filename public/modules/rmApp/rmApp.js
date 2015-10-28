(function(){
'use strict';

var app = angular.module('rmApp', ['ngMaterial', 'rmDisplay', 'rmData']);

app.config(function($mdIconProvider, $mdThemingProvider){
	$mdIconProvider
		.iconSet('navigation','/img/icons/svg-sprite-navigation.svg');

	$mdThemingProvider
		// Palette created at http://mcg.mbitson.com/#/ using 500 = #336699
		.definePalette('reddit', {'50':'#e0ebf5','100':'#a7c4e2','200':'#7da8d4','300':'#4785c2','400':'#3b75b0','500':'#336699','600':'#2b5782','700':'#24476b','800':'#1c3854','900':'#14293d','A100':'#e0ebf5','A200':'#a7c4e2','A400':'#3b75b0','A700':'#24476b'})
		.theme('reddit')
		;
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