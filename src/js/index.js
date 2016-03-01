require(['/loaderConfig'], function(config){
  avalon.config(config)
  
  require(['mock'], function(Mock){
    var data= Mock.mock({
      'list|1-10': [
        {
          'id|+1': 1
        }
      ]
    })
    console.log(JSON.stringify(data))
  })
  
  require(['qwest', 'bs'], function(ajax){
    console.log(ajax, $)
  })
})
