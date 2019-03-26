
var _paths= (function(){
  var libpaths= {
    avalon: {
      prd: '//cdn.bootcss.com/avalon.js/1.5.9/avalon.shim.min'
      ,dev: '/bower_components/avalon/dist/avalon.shim.min'
    }
    ,mmRouter: {
      prd: "//cdn.bootcss.com/mmRouter/0.3/mmRouter"
      ,dev: "/bower_components/mmRouter/mmRouter"
    }
    ,mmHistory: {
      prd: '//cdn.bootcss.com/mmRouter/0.3/mmHistory'
      ,dev: "/bower_components/mmRouter/mmHistory"
    }
    ,mmState: {
      prd: "/bower_components/mmRouter/mmState"
    }
    ,mmPromise: {
      prd: "/bower_components/mmRouter/mmPromise"
    }
    ,qwest: {
      prd: '//cdn.bootcss.com/qwest/4.4.5/qwest.min'
      ,dev: "/bower_components/qwest/qwest.min"
    }
    ,mock: {
      prd: "//cdn.bootcss.com/Mock.js/1.0.0/mock-min"
      ,dev: "/bower_components/mockjs/dist/mock-min"
    }
    ,bsn: {
      prd: '//cdn.bootcss.com/bootstrap.native/1.1.0/bootstrap-native.min'
    }
    ,bs: {
      prd: '//cdn.bootcss.com/twitter-bootstrap/3.3.7/js/bootstrap.min'
    }
    ,jquery: {
      prd: '//cdn.bootcss.com/jquery/1.12.4/jquery.min'
    }
    ,mdl: {
      prd: '//cdn.bootcss.com/material-design-lite/1.3.0/material.min'
      ,dev: "/bower_components/material-design-lite/material.min"
    }
    ,vue: {
      prd: '//cdn.bootcss.com/vue/2.2.1/vue.min'
      ,dev: '/bower_components/vue/dist/vue.min'
    }
  }
  function getPath(key){
    var res= {}
    for(var el in libpaths){
      res[el]= libpaths[el][key]|| libpaths[el]['prd']
    }
    return res
  }
  return getPath('prd')//: getPath('dev')
})()

var config= {
  debug: 0
  ,baseUrl: '/'
  ,map: {
    '*': {
      'css': '//cdn.bootcss.com/require-css/0.1.10/css.min.js'
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

