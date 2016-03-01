var config= {
  debug: 0
  ,baseUrl: '/'
  ,paths: {
    avalon: '/bower_components/avalon/dist/avalon.min'
    ,qwest: "/bower_components/qwest/qwest.min"
    ,mock: "/bower_components/mockjs/dist/mock-min"
    ,bs: "/bower_components/bootstrap/bootstrap-3.3.6/dist/js/bootstrap.min"
    ,jquery: '/bower_components/jquery/dist/jquery.min'
  }
  ,shim: {
    jquery: {
      exports: 'jquery'
    }
    ,bs: {
      exports: 'bs'
      ,deps: ['jquery']
    }
  }
}
//event: AMD shim
if(typeof require== 'function'&& define.amd){
  define('config', function(config){
    return this.config
  })
}
