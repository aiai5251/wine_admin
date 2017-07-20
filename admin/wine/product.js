var app = angular.module('admin', []);
app.controller('product', function($scope, $http) {
	$http.get(getHeadUrl() + "product").success(function(response) {
		$scope.json = response.productList;
	});
});