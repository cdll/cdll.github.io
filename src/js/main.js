
var dataMain = '/src/js/index.js'//this.getAttribute("data-main")
var expire = 1
cellar({
  url: "/jspm.config.js"
  // url: "/package.json"
  // ,expire
  , skipCache: true
})
  .then(function (res) {
    // console.info({res}, {config}, config.paths)
    //function: global thenable imports method
    window.imports = function (url) {
      if (typeof url === "object") {
        return cellar(url)
      }
      else if (typeof url === "string") {
        if (config.paths[url]) url = config.paths[url]
        return cellar({
          url
          // ,expire
          ,skipCache: true
        })
      }
      else console.warn(typeof url)
    }
    // event: main
    return imports({
      url: dataMain
      ,skipCache: true
    })
  })
  .catch(function (err) {
    console.trace({ err })
    cellar.clear()
  })