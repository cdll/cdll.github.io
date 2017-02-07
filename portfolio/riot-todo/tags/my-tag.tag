
  <my-tag >
    <style scoped>
      h3{
        color: red;
      }
    </style>

    <h3>Tag layout</h3>
    <div class='' onclick='{logger}'>{ dude }</div>
    <dl class=''>
      <dd class='' each='{el in todos}' onclick='{ranText}'>{el._id}</dd>
    </dl>

    <script>
      if(typeof window === 'object')
        var axios= window.axios
      else
        var axios= require('axios')
      this.on('mount', ()=>{
        var self= this
        var _list= []
        Array.apply(null, { length: 10 }).forEach((el, i)=>{
          _list.push('clickme')
        })
        this.update({
          dude: 'halo'
          ,todos: opts.todos
        })
        //- axios('./bower.json', {
        //-   method: 'get'
        //-   ,headers: {
        //-     version: 1
        //-   }
        //- })
        //- .then((res)=>{
        //-   self.update({
        //-     dude: res.data.name
        //-     ,todos: res.data.ignore
        //-   })
        //- }, (xhr, err)=>{
        //-   console.warn(xhr, err)
        //- })
axios('http://localhost/api/discover/guayouhui', {
  method: 'get'
  ,headers: {
    version: 1
  }
})
.then((res)=>{
  console.info(res.data)
  var html= riot.update({
    dude: res.data.code
    ,todos: res.data.data
  })
}, (xhr, err)=>{
  console.warn(666, xhr)
})
      })
      logger() {
        console.info(event.target)
      }
      ranText() {
        console.info(event.item)
        event.item.el= (new Date())
      }
    </script>
  </my-tag>