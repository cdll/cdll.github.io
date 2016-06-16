
if(!!window.angular){
  angular.module('admin')
  .controller('loginCtrl', [
    '$scope'
    ,function($scope){
      console.info($scope)
      $scope.randomColor= '#'+Math.floor(Math.random() * 0xFFFFFF).toString(16)|| '#'+(~~(Math.random()*(1<<24))).toString(16)
    }
  ])
}
