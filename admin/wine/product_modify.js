var app = angular.module('admin', []);
app.controller('product_modify', function($scope, $http) {
	if (getTel().length == 0) {
		location.href = "login.html";
		return;
	}
	
	$scope.pid = GetQueryString("id");
	$http.get(getHeadUrl() + "product_detail?id=" + $scope.pid).success(function(response) {
		$scope.json = response.data;
	});
	
	$scope.modify = function() {
		var formdata = new FormData(document.getElementById("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "product_modify.a",
			data: formdata,
			headers: {
				'Content-Type': undefined
			},
			transformRequest: angular.identity
		}).success(function(response) {
			$scope.result = response;
		});
	}
});