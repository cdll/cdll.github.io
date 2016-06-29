//import Vue from '/bower_components/vue/dist/vue.min.js';
const Vue= require('/bower_components/vue/dist/vue.min.js')
const VueRouter= require('/bower_components/vue-router/dist/vue-router.min.js')
//const VueRouter= require('https://cdn.jsdelivr.net/vue.router/0.7.12/vue-router.min.js')
const mdl= require('/bower_components/vue-mdl/dist/vue-mdl.min.js')
//require('/bower_components/vue-mdl/src/vue-mdl.js')
require("/bower_components/material-design-lite/material.min.js")

//console.info(Vue.version)

let nav= new Vue({
  el: 'body'
//  template: document.querySelector('.vue-nav')
  ,data: {
    navbarList: [
      { url: '/home', name: 'Overview' }
      ,{ url: '/group/admin/ctrl/index/action/feature', name: 'Features' }
      ,{ url: '/group/admin/ctrl/index/action/detail', name: 'Details' }
      ,{ url: '/group/user/ctrl/index/action/tech', name: 'Technology' }
      ,{ url: '/group/user/ctrl/index/action/faq', name: 'FAQ' }
      ,{ url: '/login', name: 'Login' }
    ]
  }
})

let home= Vue.extend({
  template: '<center class="">Home</center>'
})

let demo= Vue.extend({
  template: '<h3 class="center-block text-center">Demo</h3>'
})

let login= Vue.extend({
  template: '<h3 class="center-block text-center">login</h3>'
  ,data: {
  }
  ,methods: {
  }
})

let Admin= Vue.extend({})

Vue.use(VueRouter)
let router= new VueRouter()

router.beforeEach((data)=>{
  setTimeout(()=>{
    console.info(data, router.app.$route)
  }, 0)
})
//.afterEach((data)=>{
//  console.log(data, router.app)
//})
.map({
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
})
.redirect({
  '/': '/home'
  ,'*': '/notfound'
})
.on('/home', {
  component: home
//  ,subRoutes: {
//    '/login': {
//      component: login
//    }
//  }
})
.on('/group/:g/ctrl/:c/action/:a', {
  component: demo
})
.on('/login', {
  component: login
})
.on('/notfound', {
  component: demo
})
.start(Admin, '[ng-view]')
