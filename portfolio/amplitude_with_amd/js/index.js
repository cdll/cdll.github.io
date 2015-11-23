avalon.config({
//  debug: 0,
  paths: {
    amplitude: 'https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-2.6.1-min.gz.js'
  },
  shim: {
  }
})

require(['avalon'], function($){
  console.info($.version)
})
require(['amplitude'], function(amplitude){
  console.info(amplitude)
//  amplitude.init("YOUR_API_KEY_HERE");
})
