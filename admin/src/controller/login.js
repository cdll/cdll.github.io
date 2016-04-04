if(avalon){
  define(['avalon'], function(){
    var vm= avalon.define({
      $id: 'vm'
      ,user: ''
      ,psw: ''
    })
    return vm
  })
}
if(angular){
  angular.module('admin')
  .controller('loginCtrl', [
    '$scope'
    ,function($scope){
      console.info($scope)
    }
  ])
}
