var app = angular.module('admin', []);
app.controller('product', function($scope, $http) {
	if (getTel().length == 0) {
		location.href = "login.html";
		return;
	}
	
	$http.get(getHeadUrl() + "product").success(function(response) {
		$scope.json = response.productList;
	});
});
