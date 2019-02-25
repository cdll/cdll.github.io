
import Vue from 'Vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'hash'
  ,base: __dirname
  ,routes: [
    {
      path: '/'
      ,component: require('../pages/app.vue')
      ,children: [
        {
          path: 'default'
          ,component: require('../pages/home.vue')
        }
      ]
    }
  ]
})
