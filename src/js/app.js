/**
 * Created by Administrator on 2017/5/9.
 */
(function (angular) {
    "use strict";
    /*创建模块*/
   var app =  angular.module('app',[]);
    /*创建控制器  行内式注入*/
    app.controller('appController',['$scope',function ($scope) {
        $scope.name =　"今日一刻";
    }]);

})(angular);