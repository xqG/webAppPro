/**
 * Created by Administrator on 2017/5/9.
 */

(function (angular) {
    "use strict";
    /*创建应用导航指令*/
    angular.module('app').directive('detail',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/detail_tpl.html',
            link:function ($scope,ele,attr) {
                ele.html(attr.content);
             console.log(attr);
            }
        }
    });
})(angular);