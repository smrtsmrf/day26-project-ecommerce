(function() {
	'use strict';

	angular
	  .module('ecomApp')
	  .controller('adminCtrl', adminCtrl);

	adminCtrl.$inject = ['$scope', 'service'];

	function adminCtrl($scope, service) {
		$scope.method = 'POST';
		$scope.apiCall = function (method, value) {
			service.apiCall(method, value).then(function (res) {
				console.log($scope.method, 'done');
			});
		}
	}
})();