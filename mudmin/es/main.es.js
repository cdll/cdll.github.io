
// import 'muse-ui/dist/muse-ui.css'
// import 'muse-ui/dist/theme-dark.css'
// import museui from 'muse-ui'

// const Vue= require('vue')
// const VueRouter= require('https://system-unsafe-production.jspm.io/vue-router@3')
Promise.all([
  System.import('vue')
  ,System.import('https://system-unsafe-production.jspm.io/muse-ui@3').then(museUI=> museUI.default)
  // ,System.import('es/store.es.js')
])
.then(([
  Vue
  ,MuseUI
  // ,stores
])=>{
  console.info(MuseUI)
  Vue.use(MuseUI)
  return Promise.all([
    System.import('vue-router')
      .then(VueRouter=> System.import('es/routes.es.js')
      .then(routes=>{
        Vue.use(VueRouter)
        return new VueRouter(routes)
      }))
  ])
  .then(([
    routes
  ])=>{
    window.vm= new Vue({
      routes
      // ,stores
      ,components: {
        // App: resolve=> System.import('pages/app.vue').then(resolve)
      }
      // ,template: `<App />`
    }).$mount('#app')
  })
})

