//require.config({
//  paths: {
//    Ajax: '/bower_components/ajax/dist/ajax.min'
//    ,qwest: 'xxxxxx'
//  },
//  shim: {
//    Ajax: {
//      exports: 'Ajax'
//    }
//  }
//})
require(['/src/js/loaderConfig.js'], function(cfg){
  require.config(cfg)
  require(['/bower_components/vue/dist/vue.min.js'], function(Vue){
    var vm= new Vue({
      el: '.robot',
      data: {
        turning_key: '9a0fce02fe4282343c2d3a38a035be50',
        input: '',
        status: 0,
        result: ''
      },
      methods: {
        enterSearch: function(e){
          if(e.which== 13&& !!vm.input.trim()){
            require(["/bower_components/qwest/qwest.min.js"], function(ajax){
              ajax.get('http://www.tuling123.com/openapi/api?key='+ vm.$data.turning_key+ '&info='+ vm.input)
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
            })
          }
        }
      }
    })
  })
})