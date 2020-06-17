
// ue: register serviceWorker
if(
  navigator.serviceWorker
  && /https/i.test(location.protocol)
){
  const service_version= (new Date).getTime()
  const sw_file= '/cdll.sw.js'
  // window.fetch(`${sw_file}?${service_version}`)
  // .then((res)=> res.text())
  // .then((res)=> {
  //   const md5= imports('md5')
  //   return md5
  // })
  // .then((mod)=> {
  //   console.info({mod}, {res})
  //   let service_version= md5(res.data)
  //   return service_version
  // })
  // .then((service_version)=> {
    navigator.serviceWorker.getRegistration()
    .then((res)=> {
      if(res) {
        res.onupdatefound= function(){
          res.unregister()
          console.warn('~cdll.sw.js unregisted~')
        }
      }
      else navigator.serviceWorker.register(`${sw_file}?v=${service_version}`)
    })
  // })
}

Promise.all([
  imports('riotc')
  ,imports('axios')
  .then((mod)=> {
    // console.info({axios})
    axios.defaults.timeout= 6666
    return axios
  })
  ,imports('mdl')
  .then((mod) => {
    console.info({mod})
    window.MDL= {
      MaterialMenu
    }
    return window.MDL
  })
  // ,imports('apollo')
])
.then((ress)=>{
  console.info({ress})
  // component: app
  const compilingApp= new Promise((resolve)=> {
    riot.compile('/src/es/riot-app.tag', function(tag){
      window.app= riot.mount('main', {
        mainComp: 'github-repo'
        ,onMount (data) {
          console.info({data})
          new MDL.MaterialMenu('header')
          this.update({
            isMounted: true
          })
        }
      })[0]
      riot.compile("/src/es/github-repo.tag", function(tag){
        resolve(window.app)
      })
      riot.compile('/src/es/friend-link.tag', function(tag){
        riot.mount('friend-link', {})
      })
    })
  })
  // ajax:
  const pendingRepos= Promise.resolve()
  .then(()=> {
    return axios({
      url: "https://api.github.com/users/cdll"
    })
    .catch((err)=> ({
      data: {}
    }))
    .then((res)=> {
      // console.info(res.data, res.data.repos_url)
      return axios({
        url: "https://api.github.com/users/cdll/repos"
      })
      .catch((err)=> axios({
        url: './api/github-repo.json'
      }))
    })
  })
  // main:
  Promise.all([
    compilingApp
    ,pendingRepos
  ])
  .then((ress)=> {
    console.info({ress})
    const res= ress[1]
    riot.mount("github-repo", {
      repos: res.data
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
})
