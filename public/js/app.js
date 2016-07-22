(function() {
	'use strict';

	angular
	  .module('ecomApp', ['ui.router'])
	  .config(NameConfiguration);

	NameConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function NameConfiguration($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('landing', {
			url: '/',
			templateUrl: '/views/home.html',
			resolve: {
				allData: function (service) {
					return service.getData()
				}
			},
			controller: 'mainCtrl'
		})
		.state('admin', {
			url: '/admin',
			templateUrl: '/views/admin.html',
			controller: 'adminCtrl'
		})

		$urlRouterProvider.otherwise('/')
	}
})();