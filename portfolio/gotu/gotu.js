require.config({
  debug: 0
  ,baseUrl: '/'
  ,paths: {
    qwest: "/bower_components/qwest/qwest.min.js"
  }
})

var gotu= avalon.define({
  $id: 'gotu'
  ,input: ''
  ,test: 0
  ,list: [
    'AA'
    ,'BB'
    ,'CC'
    ,'DD'
    ,'EE'
    ,'FF'
    ,'EE'
    ,'GG'
    ,'HH'
    ,'II'
    ,'JJ'
    ,'KK'
    ,'LL'
    ,'MM'
    ,'NN'
    ,'OO'
    ,'PP'
    ,'QQ'
  ]
  ,selected: []
  ,running: 0
  ,compute: function(){
    if(!gotu.list.length) return false
    function ran(){
      gotu.test= Math.floor(Math.random()* (gotu.list.length||25))
    }
    if(gotu.running== 1){
      gotu.running= 0
      window.clearInterval(cc)
      gotu.selected.push(gotu.list.splice(gotu.test, 1))
    }
    else{
      cc= window.setInterval(ran, 100)
      gotu.running= 1
    }
  }
  ,addList: function(e){
    if(e.which== 13&& gotu.input.replace(/\s/g)){
      gotu.list.push(gotu.input)
      gotu.input= ''
    }
  }
})
avalon.scan()
