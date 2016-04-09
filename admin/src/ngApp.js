
basket.require({
  url: '/bower_components/material-design-lite/material.min.js'
},{
  url: "/bower_components/angular/angular.min.js"
},{
  url: "/bower_components/angular-route/angular-route.min.js"
})
.then(function(){
  var admin= angular.module('admin', [
    'ngRoute'
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

//  angular.bootstrap(document, ['admin'])//ng-app='admin'
})
