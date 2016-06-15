
//require(['/require.config.js'], function(cfg){
//  require.config(cfg)
//
//  require(['mock'], function(Mock){
//    var data= Mock.mock({
//      'list|1-10': [
//        {
//          'id|+1': 1
//        }
//      ]
//    })
//    console.log(JSON.stringify(data))
//  })

//  require(['qwest', 'mdl'], function(ajax){
//    ajax.get(
//      'https://api.github.com/users/cdll/repos'
//      ,null
//      ,{
//        headers: {
//          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
//          ,'Upgrade-Insecure-Requests': 1
//        }
//        ,dataType: 'application/jsonp'
//      }
//    )
//    .then(function(xhr, res){
//      console.info(xhr, res)
//    })
//    .catch(function(xhr, res, err){
//      console.warn(xhr, res, err)
//    })
//  })
//})

let Mock= require('/bower_components/mockjs/dist/mock-min.js')
console.info(Mock)
//var data= Mock.mock({
//  'list|1-10': [
//    {
//      'id|+1': 1
//    }
//  ]
//})
//console.log(JSON.stringify(data))

let avalon= require('/bower_components/avalon/dist/avalon.shim.min.js')
let ajax= require('/bower_components/qwest/qwest.min.js')
let mdl= require('/bower_components/material-design-lite/material.min.js')

console.info(avalon.version, ajax.xhr2, mdl)
//ajax.map(
//  'get'
//  ,'https://api.github.com/users/cdll/repos'
//  ,null
//  ,{
//    headers: {
//      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
//      ,'Upgrade-Insecure-Requests': 1
//      ,nonce: (new Date()).getTime()
//    }
//    ,dataType: 'application/jsonp'
//  }
//)
//.then(function(xhr, res){
//  console.info(xhr, res)
//})
//.catch(function(xhr, res, err){
//  console.warn(xhr, res, err)
//})

setTimeout(()=>{
  let Vue= require('/bower_components/vue/dist/vue.min.js')

  console.info('Vue:', Vue.version)
}, 1000)
