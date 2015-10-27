(function(){
	'use strict';

	var rmMarkdown = angular.module('rmMarkdown', []);

	rmMarkdown.directive('rmMarkdown', [function(){
		return {
			restrict: 'E',
			scope: {
				content: '=',
			},
			controller: ['$scope', function($scope){
				$scope.parse = function(string){
					// Begin by sanitizing string (remove any existing HTML)

					console.log('String: ' + string);
					var escMap = {
						'&': '&amp;',
						'<': '&lt;',
						'>': '&gt',
						'"': '&quot',
						'\'': '&#39;',
						'/': '&#x2F;',
					};
					string = string.replace(/[&<>"'/]/g, function(match){return escMap[match];});
					console.log('Sanitized: ' + string);

					// Raw links
					string = string.replace(/(http:\/\/|www\.)[\w\.]+/ig, function(match){
						return '<a href="' + match + '">' + match + '</a>';
					});

					return string;
				};
			}],
			template: '<div style="overflow:wrap" ng-bind-html="parse(content)"></div>',
		};
	}]);
})();