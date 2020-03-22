const Vue= require('vue')
const VueRouter= require('vue-route')

Vue.use(VueRouter)
let router= new VueRouter()

router.beforeEach((data)=>{
  console.info(data.to)//.app.$route.matched[0].params)
})
//.afterEach((data)=>{
//  console.log(data)
//})
//.map({
//  '/home': {
//    component: home
//  }
//  ,'/demo': {
//    component: demo
//  }
//  ,'/group/:group/ctrl/:ctrl/action/:action': {
//    component: demo
//  }
//  ,'/login': {
//    component: login
//  }
//})
.redirect({
  '/': '/home'
  ,'*': '/notfound'
})
//.on('/home', {
//  component: home
////  ,subRoutes: {
////    '/login': {
////      component: login
////    }
////  }
//})
//.on('/group/:g/ctrl/:c/action/:a', {
//  component: demo
//})
//.on('/login', {
//  component: login
//})
//.on('/notfound', {
//  component: demo
//})
.start(Admin, document.querySelector('body'))

export default router
