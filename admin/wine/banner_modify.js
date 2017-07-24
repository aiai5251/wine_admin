var app = angular.module('admin', []);
app.controller('banner_modify', function($scope, $http) {
	$scope.modify = function() {
		var formdata = new FormData(document.getElementById("form_modify"));
		$http({
			method: 'POST',
			url: getHeadUrl() + "banner_modify",
			data: formdata,
			headers: {
				'Content-Type': undefined
			},
			transformRequest: angular.identity
		}).success(function(response) {
			$scope.json = response.data;
		});
	}
});