var app = angular.module('admin', []);
app.controller('product_add', function($scope, $http) {
	if (getTel().length == 0) {
		location.href = "login.html";
		return;
	}
	
	$scope.add = function() {
		var formdata = new FormData(document.getElementById("form_add"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "product_add.a",
			data: formdata,
			headers: {
				'Content-Type': undefined
			},
			transformRequest: angular.identity
		}).success(function(response) {
			$scope.json = response;
		});
	}
});