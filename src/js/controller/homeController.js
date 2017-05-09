/**
 * Created by Administrator on 2017/5/9.
 */
(function (angular) {
    "use strict";
    angular.module('app').controller('homeController',['$scope','xmgHttp',function ($scope,xmgHttp) {
        console.log('homeController');

        /*请求数据*/
       xmgHttp.getData(function (data) {
           console.log(data);
           $scope.data = data;
       },function (error) {

       });

    }]);
})(angular);