if(!!window.avalon){
  define(['/bower_components/material-design-lite/material.min.js'], ()=>{
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
