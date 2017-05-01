
import Vue from 'vue'


import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-dark.css'
import museui from 'muse-ui'
Vue.use(museui)


import routes from './routes.es.js'
import stores from './store.es.js'

import App from '../pages/app.vue'
new Vue({
  routes  
  ,stores
  ,components: {
    App
  }
  ,template: `<App />`
}).$mount('#app')
