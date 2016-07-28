(function() {
	'use strict';

	angular
	  .module('ecomApp')
	  .service('service', service);

	service.$inject = ['$http'];

	function service($http) {
		this.getData = function () {
			return $http.get('http://localhost:3000/api/products')
			.then(function (response) {
				return response.data;
			});
		}

		this.apiCall = function (method, value) {
			console.log(value);
			var obj = {};
			obj.method = method;
			obj.url = value.id ? 'http://localhost:3000/api/products?id=' + value.id :'http://localhost:3000/api/products/';
			console.log(obj.url);
			obj.data = value.req;

			return $http(obj)
		}
	}
})();