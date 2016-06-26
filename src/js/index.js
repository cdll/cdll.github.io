'use strict'

//let Mock= require('/bower_components/mockjs/dist/mock-min.js')
//console.info(Mock)
//var data= Mock.mock({
//  'list|1-10': [
//    {
//      'id|+1': 1
//    }
//  ]
//})
//console.log(JSON.stringify(data))

let mdl= require('mdl')
let ajax= require('qwest')
console.info(ajax.xhr2, mdl)
//ajax.get(
//  'https://api.github.com/users/cdll/repos'
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
  let Vue= require('vue')

  console.info('Vue:', Vue.version)
}, 1000)
