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

if(navigator.serviceWorker instanceof Object){
  let service_version= '0.0.5'
  // let _worker= new Worker()
  navigator.serviceWorker.register(`/cdll.sw.js?v=${service_version}`)
  navigator.serviceWorker.getRegistration().then(res=>{
    // console.info(window.rr= res)
    if(res) res.onupdatefound= function(){
      res.unregister()
      console.info(233)
    }
  })
}

let mdl= require('mdl')
// let ajax= require('qwest')

console.info(mdl)
// ajax.get(
//   'https://api.github.com/users/cdll/repos'
//   ,{}
//   ,{
//     cache: true
//   }
// )
// .then(function(xhr, res){
//   console.info(res)
// }, function(xhr, res, err){
//   console.warn(err)
// })

window.riot= require('riot')

let axios= require('axios')
axios({
  // url: "https://api.github.com/users/cdll/repos"
  // url: "https://api.github.com/users/cdll"
  url: "/github.json"
  // ,params: {}
  // ,options: {
  //   header: {
  //     cache: false
  //   }
  // }
})
.then(res=>{
  console.info(res.data)

  riot.compile("src/mod/github-repo.tag", tag=>{
    // riot.mount("*", {
    //   repos: res.data
    // })
  })
}, err=>{
  return axios({
    url: "/bower.json"
  })
  .then(res=>{
    console.info(res)

    riot.compile("src/mod/github-repo.tag", tag=>{
      riot.mount("*", {
        repos: res.data.dependencies
      })
    })
  })
})
