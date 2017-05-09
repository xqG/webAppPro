/**
 * Created by Administrator on 2017/5/9.
 */
(function (angular) {
    "use strict";
    angular.module('app').controller('homeController',['$scope','xmgHttp','$state',function ($scope,xmgHttp,$state) {
        console.log('homeController');
        $state.go('app.index');
        /*请求数据*/
       xmgHttp.getData(function (data) {
           console.log(data);
           $scope.data = data;
       },function (error) {

       });
    }]);
})(angular);