var app = angular.module("admin", []);
app.controller("order", function($scope, $http) {
	if (getTel().length == 0) {
		location.href = "login.html";
		return;
	}
	
	$scope.id = GetQueryString("id");
	$scope.uid = GetQueryString("uid");
	$scope.order_num = GetQueryString("order_num");
	$scope.json = [];
	if ($scope.uid != undefined && $scope.uid.length > 0) {
		$http.get(getHeadUrl() + "order?uid=" + $scope.uid).success(function(response) {
			$scope.json = response.data;
		});
	} else if ($scope.order_num != undefined && $scope.order_num.length > 0) {
		$http.get(getHeadUrl() + "order?order_num=" + $scope.order_num).success(function(response) {
			$scope.row = response.data;
		});
	} else if ($scope.id != undefined && $scope.id.length > 0) {
		$http.get(getHeadUrl() + "order?id=" + $scope.id).success(function(response) {
			$scope.row = response.data;
		});
	} else {
		$http.get(getHeadUrl() + "order").success(function(response) {
			$scope.json = response.data;
		});	
	}
});