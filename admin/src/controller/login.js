if(!!window.avalon){
  define([], function(){
    var vm= avalon.define({
      $id: 'login'
      ,user: ''
      ,psw: ''
      ,ranColor: '#'+Math.floor(Math.random() * 0xFFFFFF).toString(16)|| '#'+(~~(Math.random()*(1<<24))).toString(16)
    })
    return avalon.controller(vm)
  })
}
else if(!!window.angular){
  angular.module('admin')
  .controller('loginCtrl', [
    '$scope'
    ,function($scope){
      console.info($scope)
    }
  ])
}
