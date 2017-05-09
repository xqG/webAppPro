
(function (angular) {
    "use strict";

    angular.module('app').controller('detailController',['$scope','$stateParams',function ($scope,$stateParams) {
       var item = $scope.data.posts[$stateParams.id];
        $scope.content = item.content;
    }]);
})(angular);