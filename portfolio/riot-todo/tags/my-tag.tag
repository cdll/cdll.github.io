
  <my-tag >
    <style scoped>
      h3{
        color: red;
      }
    </style>

    <h3>Tag layout</h3>
    <div class='' onclick='{logger}'>{ dude }</div>
    <dl class=''>
      <dd class='' each='{el in todos}' onclick='{ranText}'>{el}</dd>
    </dl>

    <inline-tag/>
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
          //,todos: _list
        })
        axios('./bower.json', {
          method: 'get'
        })
        .then((res)=>{
          self.update({
            dude: res.data.name
            ,todos: res.data.ignore
          })
        }, (err)=>{
          console.warn(err)
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