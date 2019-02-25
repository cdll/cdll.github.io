
  <my-tag >
    <style scoped>
      :scope{
        background: lightcyan;padding: 1em;
      }
      h3{
        color: red;
      }
      dl{
        line-height: 1.5em;
      }
    </style>

    <h3>Tag layout</h3>
    <center class='' riot-click='{logger}'>{ dude }</center>
    <dl class=''>
      <dd class='' each='{v, k in todos}' riot-click='{ranText}'>{k}: {v}</dd>
    </dl>

    <script>
      var axios= (typeof window === 'object')? window.axios: require('axios')

      this.on('before-mount', undefined=>{
        var _list= []
        Array.apply(null, { length: 10 }).forEach((el, i)=>{
          _list.push(`clickme: ${i}`)
        })
        this.update({
          dude: 'halo'
          ,todos: _list//opts.todos
        })
        axios({
          method: 'get'
          ,url: '/bower.json'
          ,headers: {
            version: 1
          }
        })
        .then(res=>{
          setTimeout(undefined=>{
          this.update({
            dude: res.data.name
            ,todos: res.data.dependencies
          })
          }, 1000)
        }, err=>console.warn(err))
      })
      this.logger= function(){
        console.info(event.target)
      }
      this.ranText= function(){
        console.info(event.item)
        event.item.el= (new Date())
      }
    </script>
  </my-tag>