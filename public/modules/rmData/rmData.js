(function(){
'use strict';

var rmData = angular.module('rmData', ['ngResource']);

rmData.controller('apiCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.apiRes = {status: 'loading'};

	// For some reason $location.url doesn't work
	// Using a horrible regex hack instead
	var re1='.*?';	// Non-greedy match on filler
	var re2='(?:\\/[\\w\\.\\-]+)+';	// Uninteresting: unixpath
	var re3='.*?';	// Non-greedy match on filler
	var re4='((?:\\/[\\w\\.\\-]+)+)';	// Unix Path 1

	var p = new RegExp(re1+re2+re3+re4,['i']);
	var m = p.exec($location.absUrl());

	var apiCall = m[1];

	$http({
		method: 'GET',
		url: 'https://api.reddit.com' + apiCall,
	}).then(function(response){
		$scope.apiRes = response;
	}, function(response){
		$scope.apiRes = response;
	});/**/
}]);

})();