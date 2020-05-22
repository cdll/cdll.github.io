
var config = {
  "baseUrl": ".",
  "bundles": {
    "vueApp.min.js": [
      "admin/src/vueApp.js"
    ]
  },
  "transpiler": "babel",
  "map": {
    "traceur": "https://system-unsafe-production.jspm.io/traceur",
    "babel": "https://system-unsafe-production.jspm.io/babel-core"
  },
  "meta": {},
  "paths": {
    "mdl": "https://cdn.bootcss.com/material-design-lite/1.3.0/material.min.js",
    "Mock": "https://cdn.bootcss.com/Mock.js/1.0.1-beta3/mock-min.js",
    "vuejs": "https://cdn.bootcss.com/vue/1.0.28/vue.min.js",
    "vue": "https://cdn.bootcss.com/vue/2.6.8/vue.min.js",
    "vue-router": "https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js",
    "vue-mdl": "https://system-unsafe-production.jspm.io/vue-mdl",
    "axios": "https://cdn.bootcss.com/axios/0.18.0/axios.min.js",
    "riot": "https://cdn.bootcss.com/riot/3.13.2/riot.min.js",
    "riotc": "https://cdn.bootcss.com/riot/3.13.2/riot+compiler.min.js",
    "swiper": "https://cdn.bootcss.com/Swiper/3.4.2/js/swiper.min.js",
    "md5": "https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js",
    "apollo": "https://system-unsafe-production.jspm.io/apollo"
  },
  "packages": {}
}

if(window.System&& window.System.config){
  window.System.config(config)
}
else if(typeof exports=== 'object') module.exports= config
