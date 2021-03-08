// ue: register serviceWorker
if (
  navigator.serviceWorker
  && /https/i.test(location.protocol)
) {
  const service_version = (new Date).getTime()
  const sw_file = '/cdll.sw.js'
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
    .then((res) => {
      if (res) {
        res.onupdatefound = function () {
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
  ,imports('riotRoute')
  ,imports('./src/util/api.js')
  ,imports('mdl')
    .then((globalMDL) => {
      window.MDL = {
        MaterialMenu
      }
      return window.MDL
    })
])
  .then((ress) => {
    console.info({
      ...ress
    })
    route.base('/')
    route('/index.html..', (group, id, action) => {
      // component: App
      riot.compile('/src/es/App.html', function (tag) {
        window.app = riot.mount('main', 'app', {})[0]
      })
    })
    route('/', (group, id, action) => {
      route('/index.html', null, true)
    })
    route('/post.html..', (group, id, action) => {
      const query = route.query()
      console.info({
        query,
        group, id, action
      })
      riot.compile('/src/es/Post.html', function (tag) {
        window.post = riot.mount('main', 'post', {})[0]
      })
    })
    route((to, action, params) => {
      console.info({
        to
        ,action
        ,params
      })
    })
    route.start(true)
  })
