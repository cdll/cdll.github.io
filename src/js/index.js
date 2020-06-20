
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

function getUserInfo () {
  return axios({
    url: "https://api.github.com/users/cdll"
  })
  .catch((err)=> ({
    data: {}
  }))
}

Promise.all([
  imports('riotc')
  ,imports('axios')
  .then((globalAxios)=> {
    // console.info({axios})
    axios.defaults.timeout= 6666
    return axios
  })
  ,imports('mdl')
  .then((globalMDL) => {
    window.MDL= {
      MaterialMenu
    }
    return window.MDL
  })
])
.then((ress)=>{
  console.info({ress})
  // component: app
  riot.compile('/src/es/App.html', function(tag){
    window.app= riot.mount('main', {})[0]
  })
})

function getIPinfo () {
  return axios({
    method: 'get'
    ,url: `http://ip.taobao.com/service/getIpInfo.php?ip=${'115.156.238.114'}`
    ,headers: {
      mode: 'no-cors'
      ,cache: 'default'
      ,credentials: "include"
    }
  })
}
