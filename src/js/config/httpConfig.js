/**
 * Created by Administrator on 2017/5/9.
 */
(function (angular) {
    "use strict";

    /*设置白名单，允许哪些网址可以跨域*/
    angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://localhost/api/**'
        ]);
    }]);

})(angular);