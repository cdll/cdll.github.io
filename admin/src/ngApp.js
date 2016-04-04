
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
  .constant('adminConfig', {
    nav: [
      { url: '/admin', name: 'Overview' }
      ,{ url: '/admin/#/group/admin/ctrl/home/action/feature', name: 'Features' }
      ,{ url: '/admin/#/group/admin/ctrl/home/action/detail', name: 'Details' }
      ,{ url: '/admin/#/group/home/ctrl/home/action/tech', name: 'Technology' }
      ,{ url: '/admin/#/group/home/ctrl/home/action/faq', name: 'FAQ' }
      ,{ url: '/admin/#/login', name: 'Login' }
    ]
  })
  .config(function($locationProvider){
    $locationProvider.html5Mode(false)
  })
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: '/admin/src/view/login.html'
      ,controllerUrl: '/admin/src/controller/login.js'
    })
    .when('/login', {
      templateUrl: '/admin/src/view/login.html'
      ,controllerUrl: '/admin/src/controller/login.js'
    })
    .when('/admin/group/:group/ctrl/:ctrl/action/:action', {
      templateUrl: '/admin/src/view/200.html'
      ,controllerUrl: '/admin/src/controller/login.js'
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
    ,function($rootScope, $location, $http){
      $rootScope.$on('$routeChangeStart', function(eve, next, curr){
        console.info( next)
      })
    }
  ])
  .controller('navCtrl', [
    '$scope'
    ,'$location'
    ,'adminConfig'
    ,function($scope, $location, Config){
      $scope.navbarList= Config.nav
      $scope.currentNav= 0
      $scope.navbarList.forEach(function(nav, index){
//        console.info(index, $location, nav.url)
        if($location.path().match(nav.url)){
          $scope.currentNav= index
        }
      })
    }
  ])
  angular.bootstrap(document, ['admin'])
})
