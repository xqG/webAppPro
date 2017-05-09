/**
 * Created by Administrator on 2017/5/9.
 */

(function (angular) {
    "use strict";
    /*创建应用导航指令*/
    angular.module('app').directive('tabbar',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/tabbar_tpl.html',
        }
    });
})(angular);