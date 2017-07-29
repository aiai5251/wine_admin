var app = angular.module('admin', []);
app.controller('coupon', function($scope, $http) {
	if (getTel().length == 0) {
		location.href = "login.html";
		return;
	}
	
	$http.get(getHeadUrl() + "coupon").success(function(response) {
		$scope.json = response.data;
	});
	
	$scope.deleteRow = function(row) {
		$http.get(getHeadUrl() + "coupon_delete?id=" + row.id).success(function(response) {
			window.location.reload();
		});
	}
	
});
