var app = angular.module("admin", []);
app.controller("user", function($scope, $http) {
	if (getTel().length == 0) {
		location.href = "login.html";
		return;
	}
	
	$http.get(getHeadUrl() + "user").success(function(response) {
		$scope.json = response.data;
	});
});