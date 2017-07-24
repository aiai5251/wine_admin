var app = angular.module("admin", []);
app.controller("user", function($scope, $http) {
	$http.get(getHeadUrl() + "user").success(function(response) {
		$scope.json = response.data;
	});
});