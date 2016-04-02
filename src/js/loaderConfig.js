var config= {
  debug: 0
  ,baseUrl: '/'
  ,paths: {
    avalon: '/bower_components/avalon/dist/avalon.min'
    ,qwest: "/bower_components/qwest/qwest.min"
    ,mock: "/bower_components/mockjs/dist/mock-min"
    ,bs: "/bower_components/bootstrap/bootstrap-3.3.6/dist/js/bootstrap.min"
    ,jquery: '/bower_components/jquery/dist/jquery.min'
    ,mdl: "/bower_components/material-design-lite/material.min.js"
    ,mdlcss: "/bower_components/material-design-lite/material.min.css"
    ,rsvp: "/bower_components/rsvp/rsvp.min.js"
    ,basket: '/bower_components/basket.js/dist/basket.js'
  }
  ,shim: {
    jquery: {
      exports: 'jquery'
    }
    ,bs: {
      exports: 'bs'
      ,deps: ['jquery']
    }
    ,mdl: {
      exports: 'mdl'
      ,deps: ['css!mdlcss']
    }
    ,basket: {
      exports: 'basket'
//      ,deps: ['css!mdlcss']
    }
  }
}
//event: avalon loader fix
if(window.avalon&& typeof window.avalon.require== 'function'){
  define('config', function(){
    return config
  })
}
//event: amd loader fix
else if(typeof require== 'function'&& define.amd){
  define(config);
}
//event: cmd loader fix
else if(typeof exports== 'object'){
  module.exports= config;
}
