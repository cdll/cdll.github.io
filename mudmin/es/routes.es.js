
const routes= {
  mode: 'hash'
  ,base: __dirname
  ,routes: [
    {
      path: '/'
      ,component: resolve=> System.import('pages/app.vue').then(resolve)
      ,children: [
        {
          path: 'default'
          ,component: resolve=> System.import('pages/home.vue').then(resolve)
        }
      ]
    }
  ]
}

if(typeof exports=== 'object') module.exports= routes
