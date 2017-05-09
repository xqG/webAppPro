
(function (angular) {
    "use strict";
    /*创建应用导航指令*/
    angular.module('app').directive('nav',function () {
       return {
           restrict:'EA',
           templateUrl:'../view/tpl/nav_tpl.html',
           link:function ($scope,ele,attr) {
               //监听标题的变化
               $scope.$on('titleChange',function (e,args) {
                   /*获取标题span*/
                   /*更改标题*/
                   ele.find('span').html(args.title);
               });
           }
       }
    });
})(angular);