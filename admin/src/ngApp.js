
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
      { url: '/', name: 'Overview' }
      ,{ url: '/group/admin/ctrl/home/action/feature', name: 'Features' }
      ,{ url: '/group/admin/ctrl/home/action/detail', name: 'Details' }
      ,{ url: '/group/home/ctrl/home/action/tech', name: 'Technology' }
      ,{ url: '/group/home/ctrl/home/action/faq', name: 'FAQ' }
      ,{ url: '/login', name: 'Login' }
    ]
  })
  //data: router config
  .config(function($locationProvider){
    $locationProvider.html5Mode(0)
  })
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: './src/view/200.html'
      ,controller: 'indexCtrl'
    })
    .when('/login', {
      templateUrl: './src/view/login.html'
      ,controller: 'loginCtrl'
    })
    .when('/admin/group/:group/ctrl/:ctrl/action/:action', {
      templateUrl: './src/view/404.html'
      ,controller: 'mdlCtrl'
    })
    .otherwise({
      templateUrl: '/admin/src/view/404.html'
//      redirectTo: '/admin/#/login'
    })
  })
  .run([
    '$rootScope'
    ,'$location'
    ,'$http'
    ,'$route'
    ,'adminConfig'
    ,function($scope, $location, $http, $route, Config){
      $scope.navbarList= Config.nav
      $scope.currentNav= ''
      $scope.$on('$routeChangeStart', function(eve, next, curr){
        console.info($location)
//        console.log(eve, next, curr)
        $scope.navbarList.forEach(function(nav, index){
          if($location.path().match(nav.url)){
            $scope.currentNav= index
          }
        })
      })
    }
  ])
  //data: index ctrl
  .controller('indexCtrl', [
    '$scope'
    ,function(vm){
      console.info(vm)
    }
  ])
  //data: login ctrl
  .controller('loginCtrl', [
    '$scope'
    ,function(vm){
      console.info(vm)
    }
  ])
  //data: modules ctrl
  .controller('mdlCtrl', [
    '$scope'
    ,function(vm){
      console.info(vm)
    }
  ])


//  angular.bootstrap(document, ['admin'])//ng-app='admin'
})
