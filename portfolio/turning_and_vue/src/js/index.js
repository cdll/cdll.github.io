
require(['/require.config.js'], function(config){
  require.config(config)

  require([
    'vue'
    ,"qwest"
  ], function(Vue, ajax){
    var vm= new Vue({
      el: '.robot',
      data: {
        turning_key: '9a0fce02fe4282343c2d3a38a035be50'
        ,input: ''
        ,status: 0
        ,result: ''
        ,ipinfo: {}
      }
      ,methods: {
        enterSearch: function(e){
          if(e.which== 13&& !!vm.input.trim()){
            require(["qwest"], function(ajax){
              ajax.map('options', 'https://www.tuling123.com/openapi/api?key='+ vm.$data.turning_key+ '&info='+ vm.input)
              .then(function(res, xhr){
                vm.status= res.code
                switch(vm.status){
                  case 100000:
                    //文本类数据
                    vm.result= res
                    break;
                  case 200000:
                    //网址
                    vm.result= res
                    break;
                  case 302000:
                    //新闻
                    vm.result= res
                    break;
                  case 305000:
                    //列车
                    vm.result= res
                    break;
                  case 308000:
                    //菜谱、视频、小说
                    vm.result= res
                    break;
                  default:
                    vm.status= 100000
                    console.warn(vm.result= 'robot resting...')
                }
              })
              .catch(function(err, xhr, res){
                console.warn(err, xhr, res)
              })
            })
          }
        }
        ,getIPinfo: function(){
          return ajax.get(
            'http://ipinfo.io'
            ,''
            ,{
              dataType: 'json'
            }
          )
          .then(function(xhr, res){
      //      vm.ipinfo= res
            console.info(res)
          })
        }
      }
    })
  })
})
