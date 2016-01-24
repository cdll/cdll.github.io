//require(['./js/b.js'], function(){
//  document.write(query)
//})
require.config({
  baseUrl: '/'
  ,paths:{
    jquery: '/bower_components/jquery/dist/jquery.min'
    ,ajax: "/bower_components/ajax/dist/ajax.min"
    ,qwest: "/bower_components/qwest/qwest.min.js"
  }
  ,shim:{
    jquery:{
      exports: 'jquery'
    }
    ,ajax:{
      exports: 'Ajax'
    }
  }
  ,timeout: 10
})

require(['qwest'], function(ajax){
  ajax.get(
    './index.json'
    ,''
    ,''
    ,''
  )
  .then(function(xhr, res){
    console.info(xhr, res)
  })
})
