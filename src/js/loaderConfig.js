var config= {
  debug: 0,
  baseUrl: '/',
  paths: {
    mock: "/bower_components/mockjs/dist/mock-min.js",
    polymer: '',
    bs: "/bower_components/bootstrap/js/bootstrap.min.js",
    jquery: '/bower_components/jquery/dist/jquery.min.js',
  },
  shim: {
    jquery: {
      exports: 'jquery'
    },
    bs: {
      deps: ['jquery'],
      exports: 'bs'
    }
  }
}
if(typeof require== 'function'&& define.amd){
  define('config', function(config){
    return this.config
  })
}