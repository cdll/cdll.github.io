
System.config({
  baseUrl: "./"
  ,bundles: {
    "vueApp.min.js": [
      "admin/src/vueApp.js"
    ]
  }
  ,transpiler: 'traceur'
  ,map: {
    traceur: 'https://system-unsafe-production.jspm.io/traceur'
  }
  ,meta: {
  }
  ,paths: {
    mdl: "https://cdn.staticfile.org/material-design-lite/1.3.0/material.min.js"
    ,Mock: "https://cdn.staticfile.org/Mock.js/1.0.1-beta3/mock-min.js"
    // ,qwest: "https://cdn.staticfile.org/qwest/4.4.6/qwest.min.js"
    ,vue: "https://cdn.staticfile.org/vue/1.0.28/vue.min.js"
    ,axios: "https://cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js"
    ,riot: "https://system-unsafe-production.jspm.io/riot@3"
    ,riotc: "https://system-unsafe-production.jspm.io/riot@3/riot+compiler"
    ,swiper: 'https://cdn.staticfile.org/Swiper/3.4.2/js/swiper.min.js'
    ,md5: 'npm:js-md5'
  }
})
