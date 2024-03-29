
var config = {
  "baseUrl": ".",
  "bundles": {
    "vueApp.min.js": [
      "admin/src/vueApp.js"
    ]
  }
  // ,transpiler: 'traceur'
  ,transpiler: 'babel'
  ,map: {
    traceur: 'https://system-unsafe-production.jspm.io/traceur'
    // ,babel: 'https://cdn.bootcss.com/babel-polyfill/6.26.0/polyfill.min.js'
    ,babel: 'https://system-unsafe-production.jspm.io/babel-core'
  }
  ,meta: {
  }
  ,paths: {
    // mdl: "https://unpkg.com/material-design-lite@1.3.0/material.min.js"
    mdl: "https://cdn.bootcdn.net/ajax/libs/material-design-lite/1.3.0/material.min.js"
    // mdl: "https://ga.jspm.io/npm:material-design-lite@1.3.0/dist/material.min.js"
    ,Mock: "https://cdn.bootcss.com/Mock.js/1.0.1-beta3/mock-min.js"
    ,vuejs: "https://cdn.bootcss.com/vue/1.0.28/vue.min.js"
    ,vue: "https://cdn.bootcss.com/vue/2.6.8/vue.min.js"
    ,'vue-router': "https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js"
    ,'vue-mdl': 'https://system-unsafe-production.jspm.io/vue-mdl'
    ,axios: "https://unpkg.com/axios@0.18.1/dist//axios.min.js"
    ,riot: "https://unpkg.com/riot@3/riot.min.js"
    ,riotc: "https://unpkg.com/riot@3/riot+compiler.min.js"
    ,riotRoute: "https://unpkg.com/riot-route@3/dist/route.min.js"
    ,swiper: 'https://cdn.bootcss.com/Swiper/3.4.2/js/swiper.min.js'
    ,axios: "https://unpkg.com/axios@0.18.1/dist//axios.min.js"
    ,riot: "https://unpkg.com/riot@3.13.2/riot.min.js"
    ,riotc: "https://unpkg.com/riot@3.13.2/riot+compiler.min.js"
    // ,riot: "https://ga.jspm.io/npm:riot@3.13.2/riot.min.js"
    // ,riotc: "https://ga.jspm.io/npm:riot@3.13.2/riot+compiler.js"
    ,riotRoute: "https://unpkg.com/riot-route@3.1.4/dist/route.min.js"
    ,swiper: 'https://unpkg.com/swiper@3.4.2/dist/js/swiper.min.js'
    ,md5: 'https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js'
    ,md5: 'https://unpkg.com/md5@2.3.0/dist/md5.min.js'
    ,apollo: 'https://system-unsafe-production.jspm.io/apollo'
    ,apolloSDK: 'https://unpkg.com/browse/apollo-client@2.6.10/bundle.umd.js'
  }
  ,packages: {
  }
}

if(window.System&& window.System.config){
  window.System.config(config)
}
else if(typeof exports=== 'object') module.exports= config
