/**
 * Created by andyliwr on 16-7-16.
 */
angular.module('app', [])
    .controller('MyCtrl', function ($scope) {
        $scope.msg = "I love AngularJS!";
    })
    .controller('login', function ($scope) {
        $scope.user = {
            username: '',
            password: ''
        };
        $scope.login = function () {
            console.log("你提交的参数为："+$scope.user);
        };
    });