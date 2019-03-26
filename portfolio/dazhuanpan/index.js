require(['/require.config.js'], function(config){
  require.config(config)
  console.info(require.config.debug)
})
