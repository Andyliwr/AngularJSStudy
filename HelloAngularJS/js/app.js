/**
 * Created by andyliwr on 16-7-16.
 */
angular.module('todoList', [])
    .controller('TaskCtrl', function ($scope) {
        $scope.task = "";
        $scope.tasks = [];
        $scope.add = function () {
            $scope.tasks.push($scope.task);
        }
    });