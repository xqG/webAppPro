/**
 * Created by Administrator on 2017/5/9.
 */
(function (angular) {
    "use strict";
    /*自定义服务三种方式:
    * service
    * factory
    * value
    * */
    angular.module('app').service('xmgHttp',['$http',function ($http) {

        this.getData = function (url,success,error) {
            /*请求数据*/
            $http({
                url:url,
                method:'jsonp'//必须得要使用jsonp
            }).then(function (res) {
                success(res.data);
            }).catch(function (err) {
                error(err);
            });
        };
        
    }]);

})(angular);