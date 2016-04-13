
basket.require({
//  url: '/bower_components/material-design-lite/material.min.js'
//},{
  url: "/bower_components/angular/angular.min.js"
},{
  url: "/bower_components/angular-route/angular-route.min.js"
},{
  url: "/bower_components/ng-mdl/dist/ng-mdl.min.js"
})
.then(function(){
  console.info(ngMdl)
  var admin= angular.module('admin', [
    'ngRoute'
    ,'ng.mdl'
  ])
  //data: admin config
  .constant('adminConfig', {
    nav: [
      { url: '/home', name: 'Overview' }
      ,{ url: '/group/admin/ctrl/index/action/feature', name: 'Features' }
      ,{ url: '/group/admin/ctrl/index/action/detail', name: 'Details' }
      ,{ url: '/group/user/ctrl/index/action/tech', name: 'Technology' }
      ,{ url: '/group/user/ctrl/index/action/faq', name: 'FAQ' }
      ,{ url: '/login', name: 'Login' }
    ]
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('httpAlert');
  })
  //data: router config
  .config(function($locationProvider){
    $locationProvider.html5Mode({
      enabled: false
      ,requireBase: false
      ,rewriteLinks: false
    });
  })
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
    .when('/home', {
      templateUrl: './src/view/200.html'
      ,controllerUrl: './src/controller/homeCtrl'
//      ,controller: 'homeCtrl'
    })
    .when('/login', {
      templateUrl: './src/view/login.html'
      ,controller: 'loginCtrl'
    })
    .when('/group/:group/ctrl/:ctrl/action/:action', {
      templateUrl: './src/view/module.html'
      ,controller: 'mdlCtrl'
    })
    .otherwise({
      templateUrl: '/admin/src/view/404.html'
    })
  })
  .run([
    '$rootScope'
    ,'$location'
    ,'adminConfig'
    ,function(vm, $location, Config){
      vm.navbarList= Config.nav
      vm.currentNav= undefined
      vm.$on('$locationChangeStart', function(eve, next, curr){
//        console.warn($location, location)
        vm.navbarList.forEach(function(nav, index){
          if($location.path().match(nav.url)){
            vm.currentNav= index
            console.info(vm.currentNav)
          }
        })
      })
    }
  ])
  //data: index ctrl
  .controller('homeCtrl', [
    '$scope'
    ,function(vm){
      console.info('home:', vm)
    }
  ])
  //data: login ctrl
  .controller('loginCtrl', [
    '$scope'
    ,function(vm){
//      console.info('login:', vm)
    }
  ])
  //data: modules ctrl
  .controller('mdlCtrl', [
    '$scope'
    ,'$location'
    ,function(vm, $location){
//      console.info('module:', vm)
//      console.info($location, location)
    }
  ])
  .factory('Alert', [
    '$timeout'
    ,function($timeout) {
      var alertService, alerts;
      alerts = [];
      return alertService = {
        getAlerts: function() {
          return alerts;
        },
        addAlert: function(alert, timeout) {
          alerts.push(alert);
          if (timeout != null) {
            $timeout(function() {
              var index;
              index = alerts.indexOf(alert);
              if (index > -1) {
                return alerts.splice(index, 1);
              }
            }, timeout);
          }
          return function() {
            var index;
            index = alerts.indexOf(alert);
            if (index > -1) {
              return alerts.splice(index, 1);
            }
          };
        },
        removeAlert: function(index) {
          if (index >= 0 && index < alerts.length) {
            return alerts.splice(index, 1);
          }
        }
      };
    }
  ])
  .factory('httpAlert', [
    '$q'
    ,'Alert'
    ,function($q, Alert) {
      var interceptor, isTemplate, removeAlert, verboseMsg;
      isTemplate = function(url) {
        var pos, suffix;
        if (url.indexOf('/') === -1) {
          return true;
        }
        suffix = 'html';
        pos = url.indexOf(suffix);
        if ((pos !== -1) && (pos + suffix.length === url.length)) {
          return true;
        }
        return false;
      };
      verboseMsg = function(method) {
        var verboseMethods;
        verboseMethods = {
          'POST': '更新/上传成功',
          'PUT': '创建成功',
          'DELETE': '删除成功'
        };
        return verboseMethods[method];
      };
      removeAlert = {};
      return interceptor = {
        request: function(config) {
          var nounce;
          if (isTemplate(config.url)) {
            config.silent = true;
          }
          if (!config.silent) {
            nounce = Math.ceil(Math.random() * 1e6);
            removeAlert[nounce] = Alert.addAlert({
              type: 'info',
              msg: '加载中'
            });
            config.nounce = nounce;
          }
          return config;
        },
        response: function(response) {
          var msg, nounce;
          nounce = response.config.nounce;
          if (typeof removeAlert[nounce] === "function") {
            removeAlert[nounce]();
          }
          msg = verboseMsg(response.config.method);
          if (response.config.verbose || msg) {
            Alert.addAlert({
              type: 'success',
              msg: msg
            }, 1000);
          }
          return response;
        },
        requestError: function(rejection) {
          var nounce;
          if (!rejection.config.silent) {
            nounce = rejection.config.nounce;
            if (typeof removeAlert[nounce] === "function") {
              removeAlert[nounce]();
            }
            Alert.addAlert({
              type: 'danger',
              msg: '发生错误，错误信息：' + JSON.stringify(rejection)
            });
          }
          return $q.reject(rejection);
        },
        responseError: function(rejection) {
          var nounce;
          if (!rejection.config.silent) {
            nounce = rejection.config.nounce;
            if (typeof removeAlert[nounce] === "function") {
              removeAlert[nounce]();
            }
            Alert.addAlert({
              type: 'danger',
              msg: '发生错误，错误信息：' + rejection.statusText + '(' + rejection.status + ')' + JSON.stringify(rejection.data)
            }, 10000);
          }
          return $q.reject(rejection);
        }
      };
    }
  ])

//  angular.bootstrap(document, ['admin'])//ng-app='admin'
})
