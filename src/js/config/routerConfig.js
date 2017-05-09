/**
 * Created by Administrator on 2017/5/9.
 */
(function (angular) {
    "use strict";
    //路由配置
    angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        //配置主路由
        $stateProvider.state('app',{
           url:'/app',
            views:{
                home:{
                    templateUrl:'../view/home_tpl.html',
                    controller:'homeController'
                },
                author:{
                    template:"作者"
                },
                content:{
                    template:'栏目'
                },
                my:{
                    template:'我的'
                }
            }
        });
        /*设置默认跳转。*/
        $urlRouterProvider.otherwise('/app');
    }]);

})(angular);