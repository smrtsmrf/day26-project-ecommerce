'use strict';

(function () {
	'use strict';

	angular.module('ecomApp', ['ui.router']).config(NameConfiguration);

	NameConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

	function NameConfiguration($stateProvider, $urlRouterProvider) {
		$stateProvider.state('landing', {
			url: '/',
			templateUrl: '/views/home.html',
			resolve: {
				allData: function allData(service) {
					return service.getData();
				}
			},
			controller: 'mainCtrl'
		}).state('admin', {
			url: '/admin',
			templateUrl: '/views/admin.html',
			controller: 'adminCtrl'
		});

		$urlRouterProvider.otherwise('/');
	}
})();
(function () {
	'use strict';

	angular.module('ecomApp').controller('adminCtrl', adminCtrl);

	adminCtrl.$inject = ['$scope', 'service'];

	function adminCtrl($scope, service) {
		$scope.method = 'POST';
		$scope.apiCall = function (method, value) {
			service.apiCall(method, value).then(function (res) {
				console.log($scope.method, 'done');
			});
		};
	}
})();
(function () {
	'use strict';

	angular.module('ecomApp').controller('mainCtrl', mainCtrl);

	mainCtrl.$inject = ['$scope', 'allData'];

	function mainCtrl($scope, allData) {
		$scope.allData = allData;
	}
})();
(function () {
	'use strict';

	angular.module('ecomApp').service('service', service);

	service.$inject = ['$http'];

	function service($http) {
		this.getData = function () {
			return $http.get('http://localhost:3000/api/products').then(function (response) {
				return response.data;
			});
		};

		this.apiCall = function (method, value) {
			console.log(value);
			var obj = {};
			obj.method = method;
			obj.url = value.id ? 'http://localhost:3000/api/products/' + value.id : 'http://localhost:3000/api/products/';
			obj.data = value.req;

			return $http(obj);
		};
	}
})();