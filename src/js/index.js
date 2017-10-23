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

// if(navigator.serviceWorker&& /https/i.test(location.protocol)){
//   let sw_file= '/cdll.sw.js'
//   axios(`${sw_file}?${new Date().getTime()}`)
//   .then(res=>{
//     const md5= require('md5')
//     let service_version= md5(res.data)

//     navigator.serviceWorker.getRegistration()
//     .then(res=>{
//       if(res) res.onupdatefound= function(){
//         res.unregister()
//         console.warn('~cdll.sw.js unregisted~')
//       }
//       else navigator.serviceWorker.register(`${sw_file}?v=${service_version}`)
//     })
//   })
// }

let mdl= require('mdl')
console.info(mdl)

// let ajax= require('qwest')
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

// riot.tag('friend-link', false, function(opts){
//   this.update({
//     friendlinks: [
//       {
//         name: 'Stefory'
//         ,url: 'http://stefory.github.io'
//       }
//       ,{
//         name: 'Mindfarer'
//         ,url: 'http://farer.org'
//       }
//       ,{
//         name: '大菜FE'
//         ,url: 'http://icaife.github.io'
//       }
//       ,{
//         name: 'Slarker'
//         ,url: 'http://slarker.me'
//       }
//       ,{
//         name: '司徒正美'
//         ,url: 'http://www.cnblogs.com/rubylouvre'
//       }
//     ]
//   })
// })
riot.compile('src/mod/friend-link.html', function(tag){
  riot.mount('friend-link', {})
  
  riot.tag('body', false, function(opts){
    console.warn(window.app= this)
    this.on('mount', res=>{
      this.update({
        isMounted: true
      })
    })
  })
  axios({
    // url: "https://api.github.com/users/cdll/repos"
    url: "https://api.github.com/users/cdll"
    // url: "/github.json"
    // ,params: {}
    // ,options: {
    //   header: {
    //     cache: false
    //   }
    // }
  })
  .then(res=>{
  //   console.info(res.data)
  //   axios({
  //     url: res.data.repos_url
  //   })
  //   .then(res=>{
  //     riot.mount('body', {
  //       mainComp: 'github-repo'
  //     })
  //     riot.compile("src/mod/github-repo.tag", function(tag){
  //       riot.mount("github-repo", {
  //         repos: res.data
  //       })
  //     })
  //   })
  // }, err=>{
    axios({
      url: "/bower.json"
    })
    .then(res=>{
      riot.mount('body', {
        mainComp: 'bower-deps'
      })
      
      riot.compile("src/mod/bower-dep.html", function(tag){
        riot.mount("bower-dep", {
          deps: res.data.dependencies
        })
      })
    }, err=>console.warn(err))
  })
})


// axios({
//   method: 'get'
//   ,url: `http://ip.taobao.com/service/getIpInfo.php?ip=${'115.156.238.114'}`
//   ,headers: {
//     mode: 'no-cors'
//     ,cache: 'default'
//     ,credentials: "include"
//   }
// })
