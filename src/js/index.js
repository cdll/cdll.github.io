'use strict'

// const Mock= require('Mock')
// console.info(Mock)
// var data= Mock({
//  'list|1-10': [
//    {
//      'id|+1': 1
//    }
//  ]
// })
// console.log(JSON.stringify(data))

window.riot= require('riot')

const axios= require('axios')

if(navigator.serviceWorker instanceof Object){
  let swFile= '/cdll.sw.js'
  axios(`${swFile}?${new Date().getTime()}`)
  .then(res=>{
    const md5= require('md5')
    let service_version= md5(res.data)

    navigator.serviceWorker.register(`${swFile}?v=${service_version}`)
    navigator.serviceWorker.getRegistration().then(res=>{
      if(res) res.onupdatefound= function(){
        res.unregister()
        console.warn('~cdll.sw.js unregisted~')
      }
    })
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
