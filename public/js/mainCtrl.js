(function() {
	'use strict';

	angular
	  .module('ecomApp')
	  .controller('mainCtrl', mainCtrl);

	mainCtrl.$inject = ['$scope', 'allData'];

	function mainCtrl($scope, allData) {
		$scope.allData = allData;
	}
})();