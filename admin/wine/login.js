var app = angular.module("admin", []);
app.controller("login", function($scope, $http) {
	document.getElementById("tel").value = localStorage.getItem('tel');
	
	$scope.login = function() {
		var tel = document.getElementById("tel").value;
		if(tel.length != 11) {
			mui.toast("请输入手机号");
			return;
		}
		var password = document.getElementById("password").value;
		if(password.length == 0) {
			mui.toast("请输入密码");
			return;
		}
		 localStorage.setItem('tel', tel);
		 location.href = "home.html";
	}
});