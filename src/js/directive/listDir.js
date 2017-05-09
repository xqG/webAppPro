/**
 * Created by Administrator on 2017/5/9.
 */

(function (angular) {
    "use strict";
    /*创建应用导航指令*/
    angular.module('app').directive('list',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/list_tpl.html',
            /*指令修饰符三种
            * @：外界传值时必须得要使用{{}}  list="{{data.posts}}"
            * =：不需要使用{{}} 直接传递数据 list = "data.posts"
            * &：要求传入的是一个方法名称show() list="show()"
            * */
            scope:{
                listItem:"="
            }
        }

    });
})(angular);