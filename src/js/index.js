
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
  //   .then((mod)=> {
  //     console.info({mod}, {res})
  //     let service_version= md5(res.data)

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
  //   })
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

  riot.compile('/src/es/riot-app.tag', function(tag){
    window.app= riot.mount('body', {
      mainComp: 'github-repo'
    })[0]
    app.on('mount', function(opts){
      console.info(opts)
      new MDL.MaterialMenu('header')
      this.update({
        isMounted: true
      })
    })
    axios({
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
      .then((res)=> {
        riot.compile("src/es/github-repo.tag", function(tag){
          riot.mount("github-repo", {
            repos: res.data
          })
        })
      })
    }, (err)=> console.warn(err) )
    riot.compile('src/es/friend-link.tag', function(tag){
      riot.mount('friend-link', {})
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
