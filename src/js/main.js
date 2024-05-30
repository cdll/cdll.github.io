
setImmediate(() => {
  (function() {
    var _mtac = {"performanceMonitor":1,"senseQuery":1};
    var mta = document.createElement("script");
    mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "500723679");
    mta.setAttribute("cid", "500723680");
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
  })();
  
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "kppm8tcdka");
})

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
