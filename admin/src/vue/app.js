
//import Vue from '//cdn.bootcss.com/vue/dist/vue.min.js';
// const Vue= require('//cdn.bootcss.com/vue/2.6.8/vue.min.js')
const Vue= require('vue')
//const mdl= require('//cdn.bootcss.com/vue-mdl/dist/vue-mdl.min.js')
// require('//cdn.bootcss.com/vue-mdl/dist/vue-mdl.min.js')
require('vue-mdl')
//require("//cdn.bootcss.com/material-design-lite/material.min.js")

const router= require('./router.js')

console.info(Vue.version)

let nav= new Vue({
  el: 'app'
  // template: document.querySelector('.vue-nav')
  ,data: function() {
    return {
      navbarList: [
        { url: '/home', name: 'Overview' }
        ,{ url: '/group/admin/ctrl/index/action/feature', name: 'Features' }
        ,{ url: '/group/admin/ctrl/index/action/detail', name: 'Details' }
        ,{ url: '/group/user/ctrl/index/action/tech', name: 'Technology' }
        ,{ url: '/group/user/ctrl/index/action/faq', name: 'FAQ' }
        ,{ url: '/login', name: 'Login' }
      ]
    }
  }
  ,components: {}
  ,methods: {
    pop: ()=>{
      console.info(nav.navbarList)
    }
  }
})
nav.pop()

// let home= Vue.extend({
//   template: '<center class="">Home</center>'
// })

// let demo= Vue.extend({
//   template: '<h3 class="center-block text-center">Demo</h3>'
// })

// let login= Vue.extend({
//   template: '<h3 class="center-block text-center">login</h3>'
//   ,data: {
//     time: (new Date()).toLocaleTimeString()
//   }
//   ,methods: {
//   }
//   ,created: function(){
//     console.info((new Date()).toLocaleTimeString())
//   }
// })

// let Admin= Vue.extend({})
