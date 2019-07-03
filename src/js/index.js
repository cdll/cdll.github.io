
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

Promise.all([
  imports('riotc')
  // .then(res=>{
  //   debugger
  // })
  ,imports('axios')
  // .then(res=>{
    //   console.info(res)
    // })
  ,imports('mdl')
  // ,imports('apollo')
])
.then((res)=>{
  console.info(res)
  axios.defaults.timeout= 5000
  
  window.MDL= {
    MaterialMenu
  }
  
  riot.compileFromUrl('/src/es/riot-app.tag')
  .then(function(tag){
    console.info(tag)
    window.app= riot.component(tag)(document.querySelector('[data-is=app]'), {
      mainComp: 'github-repo'
    })//[0]
    console.info(app)
    riot.mount('[data-is=app]', app)
    // app.on('mount', function(opts){
    //   console.info(opts)
    //   new mdl.MaterialMenu('header')
    //   this.update({
    //     isMounted: true
    //   })
    // })
    axios({
      url: "https://api.github.com/users/cdll"
    })
    .then(res=>{
      //   console.info(res.data)
      axios({
        // url: "https://api.github.com/users/cdll/repos"
        url: '/github-repo.json'|| res.data.repos_url
      })
      .then(res=>{
        // setTimeout(function(){
        //   riot.compile("src/es/github-repo.tag", function(tag){
        //     riot.mount("github-repo", {
        //       repos: res.data
        //     })
        //   })
        // }, 300)
      })
    }, err=> console.warn(err) )
    // riot.compile('src/es/friend-link.tag', function(tag){
    //   riot.mount('friend-link', {})
    // })
  }, err=>{
    console.warn(err)
  })
})

/*
axios({
  method: 'get'
  ,url: `http://ip.taobao.com/service/getIpInfo.php?ip=${'115.156.238.114'}`
  ,headers: {
    mode: 'no-cors'
    ,cache: 'default'
    ,credentials: "include"
  }
})
*/
