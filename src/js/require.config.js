
var _paths= (function(){
  var libpaths= {
    avalon: {
      dev: '/bower_components/avalon/dist/avalon.shim.min'
      ,prd: '//cdn.staticfile.org/avalon.js/1.5.9/avalon.shim.min'
    }
    ,mmRouter: {
      dev: "/bower_components/mmRouter/mmRouter"
      ,prd: "//cdn.staticfile.org/mmRouter/0.3/mmRouter"
    }
    ,mmHistory: {
      dev: "/bower_components/mmRouter/mmHistory"
      ,prd: '//cdn.staticfile.org/mmRouter/0.3/mmHistory'
    }
    ,mmState: {
      dev: "/bower_components/mmRouter/mmState"
      ,prd: "/bower_components/mmRouter/mmState"
    }
    ,mmPromise: {
      dev: "/bower_components/mmRouter/mmPromise"
      ,prd: "/bower_components/mmRouter/mmPromise"
    }
    ,qwest: {
      dev: "/bower_components/qwest/qwest.min"
      ,prd: '//cdn.staticfile.org/qwest/4.4.5/qwest.min'
    }
    ,mock: {
      dev: "/bower_components/mockjs/dist/mock-min"
      ,prd: "/bower_components/mockjs/dist/mock-min"
    }
    ,bsn: {
      dev: '//cdn.staticfile.org/bootstrap.native/1.1.0/bootstrap-native.min'
    }
    ,bs: {
      dev: "/bower_components/bootstrap/bootstrap-3.3.6/dist/js/bootst  ,prdrap.min"
      ,prd: '//cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min'
    }
    ,jquery: {
      dev: '/bower_components/jquery/dist/jquery.min'
      ,prd: '//cdn.staticfile.org/jquery/1.12.4/jquery.min'
    }
    ,mdl: {
      dev: "/bower_components/material-design-lite/material.min"
      ,prd: '//cdn.staticfile.org/material-design-lite/1.3.0/material.min'
    }
    ,vue: {
      dev: '/bower_components/vue/dist/vue.min'
      ,prd: '//cdn.staticfile.org/vue/2.2.1/vue.min'
    }
  }
  function getPath(key){
    var res= {}
    for(var el in libpaths){
      res[el]= libpaths[el][key]
    }
    return res
  }
  return location.href.match(/\.com|\.io/i)? getPath('prd'): getPath('dev')
})()

var config= {
  debug: 0
  ,baseUrl: '/'
  ,map: {
    '*': {
      'css': '/bower_components/require-css/css.min.js'
    }
  }
  ,paths: _paths
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
      ,deps: ['css!mdl']
    }
    ,mmState: {
      deps: ['avalon', 'mmRouter', 'mmHistory', 'mmPromise']
    }
  }
}

//event: amd loader fix
if(typeof require== 'function'&& define.amd){
  define(function(){
    return config
  })
}
//event: cmd loader fix
else if(typeof exports== 'object'){
  module.exports= config
}

