(function(){
'use strict';

var app = angular.module('rmApp', ['ngMaterial', 'rmDisplay', 'rmData']);

app.config(function($mdIconProvider){
	$mdIconProvider
		.iconSet('navigation','/img/icons/svg-sprite-navigation.svg')
		.iconSet('action', '/img/icons/svg-sprite-action.svg')
		.iconSet('content', '/img/icons/svg-sprite-content.svg')
		.icon('reddit:downvote', '/img/icons/reddit-downvote.svg')
		.icon('reddit:upvote', '/img/icons/reddit-upvote.svg')
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