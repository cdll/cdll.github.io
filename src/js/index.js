require(['/loaderConfig'], function(cfg){
  require.config(cfg)

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

  require(['qwest', 'mdl'], function(ajax){
    console.log(ajax)
  })
})
