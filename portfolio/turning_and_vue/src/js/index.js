require.config({
  paths: {
    Ajax: '/bower_components/ajax/dist/ajax.min'
  },
  shim: {
    Ajax: {
      exports: 'Ajax'
    }
  }
})
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
        if(e.which== 13&& !!this.input.trim()){
          require(['Ajax'], function(Ajax){
            var ajax= new Ajax();
            ajax.get('http://www.tuling123.com/openapi/api?key='+ vm.$data.turning_key+ '&info='+ vm.$data.input)
            .done(function(res, xhr){
              vm.$data.status= res.code
              switch(vm.$data.status){
                case 100000:
                  //文本类数据
                  vm.$data.result= res
                  break;
                case 200000:
                  //网址
                  vm.$data.result= res
                  break;
                case 302000:
                  //新闻
                  vm.$data.result= res
                  break;
                case 305000:
                  //列车
                  vm.$data.result= res
                  break;
                case 308000:
                  //菜谱、视频、小说
                  vm.$data.result= res
                  break;
                default:
                  vm.$data.status= 100000
                  console.warn(vm.$data.result= 'robot resting...')
              }
            })
          })
        }
      }
    }
  })
})