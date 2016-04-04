if(!!window.avalon){
  define(['avalon'], ()=>{
    var vm= avalon.define({
      $id: 'login'
      ,user: ''
      ,psw: ''
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
