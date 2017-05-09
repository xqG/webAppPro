/**
 * Created by Administrator on 2017/5/9.
 */
(function (angular) {
    "use strict";
    angular.module('app').controller('homeController',['$scope','$http',function ($scope,$http) {

        console.log('homeController');
        /*请求数据*/
        $http({
            url:'http://localhost/api/home.php',
            method:'jsonp'//必须得要使用jsonp
        }).then(function (res) {
           console.log(res.data);
        }).catch(function (err) {

        });

    }]);
})(angular);