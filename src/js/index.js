//require(['/loaderConfig'], function(cfg){
//  require.config(cfg)
//
//  require(['mock'], function(Mock){
//    var data= Mock.mock({
//      'list|1-10': [
//        {
//          'id|+1': 1
//        }
//      ]
//    })
//    console.log(JSON.stringify(data))
//  })

//  require(['RSVP', 'basket'], function(RSVP){
    basket.require({
      url: "/bower_components/material-design-lite/material.min.js"
    })
    .then(function(){
      console.info(RSVP, basket)
    })
//  })

//  require(['qwest', 'mdl'], function(ajax){
//    ajax.get(
//      'https://api.github.com/users/cdll/repos'
//      ,null
//      ,{
//        headers: {
//          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
//          ,'Upgrade-Insecure-Requests': 1
//        }
//        ,dataType: 'application/jsonp'
//      }
//    )
//    .then(function(xhr, res){
//      console.info(xhr, res)
//    })
//    .catch(function(xhr, res, err){
//      console.warn(xhr, res, err)
//    })
//  })
//})
