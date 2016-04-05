
require(['/src/js/loaderConfig.js'], function(){
  require.config(config)
  require(['/bower_components/material-design-lite/material.min.js'], function(){
  })
  require(['mmState'], function(){
    var vm= avalon.define({
      $id: 'root'
      ,navbarList: [
        { url: '/', name: 'Overview' }
        ,{ url: '/group/admin/ctrl/home/action/feature', name: 'Features' }
        ,{ url: '/group/admin/ctrl/home/action/detail', name: 'Details' }
        ,{ url: '/group/home/ctrl/home/action/tech', name: 'Technology' }
        ,{ url: '/group/home/ctrl/home/action/faq', name: 'FAQ' }
        ,{ url: '/login', name: 'Login' }
      ]
      ,currentNav: 0
      ,updateParams: function(){
        location.__proto__.query= this.params
        vm.navbarList.forEach(function(nav){
          for(k in location.query){
            console.info(k, ':', location.query[k])
          }
        })
        avalon.scan()
      }
      ,toggleNav: function(i){
        vm.currentNav= i
      }
    })
//    console.info('a.v:', avalon.version)
    avalon.state('index', {
      url: '/'
      ,views: {
        '': {
          templateUrl: './src/view/200.html'
          ,controllerUrl: ''
        }
      }
      ,onEnter: vm.updateParams
    })
    .state('login', {
      url: '/login'
      ,views: {
        '': {
          templateUrl: './src/view/login.html'
          ,controllerUrl: './src/controller/login.js'
        }
      }
      ,onEnter: vm.updateParams
    })
    .state('module', {
      url: '/group/:group/ctrl/:ctrl/action/:action'
      ,views: {
        '': {
          templateUrl: './src/view/404.html'
          ,controllerUrl: ''
        }
      }
      ,onEnter: vm.updateParams
    })
    .state('null', {
      url: '/nice'
      ,views: {
        '': {
          templateUrl: './src/view/200.html'
        }
      }
      ,onEnter: vm.updateParams
      ,abstract: '/'
    })
    avalon.history.start({
      basepath: "/admin"
      ,html5Mode: 0
    })
//    avalon.scan()
  })
})
