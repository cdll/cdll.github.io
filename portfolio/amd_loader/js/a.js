//require(['./js/b.js'], function(){
//  document.write(query)
//})
require.config({
  baseUrl: '/',
  paths:{
    jquery: '/bower_components/jquery/dist/jquery.min',
    ajax: "/bower_components/ajax/dist/ajax.min"
  },
  shim:{
    jquery:{
      exports: 'jquery'
    },
    ajax:{
      exports: 'Ajax'
    }
  },
  timeout: 5
})
//require(['jquery'], function($){
//  //todo 获取index.json中的json数据
//  $.getJSON('./index.json', function(res){
//    console.info(res)
//  })
//})

require(['ajax'], function(){
  var ajax= new Ajax()
  console.info(ajax)
})
