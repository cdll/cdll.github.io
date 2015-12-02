require(['loaderConfig'], function(config){
  console.info(config)
  avalon.config(config)
  console.clear()
  
  require(['mock'], function(Mock){
    var data= Mock.mock({
      'list|1-10': [
        {'id|+1': 1}
      ]
    })
    console.log(JSON.stringify(data))
  })
  
  require(['bs'], function(){
    console.log('bs')
  })
})
