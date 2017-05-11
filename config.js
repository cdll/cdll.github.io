
System.config({
  baseUrl: "./"
  ,bundles: {
    "vueApp.min.js": [
      "admin/src/vueApp.js"
    ]
  }
  ,map: {
  }
  ,meta: {
  }
  ,paths: {
    mdl: "/bower_components/material-design-lite/material.min.js"
    ,Mock: "/bower_components/mockjs/dist/mock-min.js"
    // ,qwest: "/bower_components/qwest/qwest.min.js"
    ,vue: "/bower_components/vue/dist/vue.min.js"
    ,axios: "/bower_components/axios/dist/axios.min.js"
    ,riot: "/bower_components/riot/riot+compiler.min.js"
    ,swiper: '/bower_components/Swiper/dist/js/swiper.min.js'
    ,md5: '/bower_components/js-md5/build/md5.min.js'
  }
})
