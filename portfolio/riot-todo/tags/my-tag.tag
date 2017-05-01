
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
      <dd class='' each='{k, v in todos}' riot-click='{ranText}'>{v}: {k}</dd>
    </dl>

    <script>
      var axios= (typeof window === 'object')? window.axios: require('axios')

      this.on('before-mount', undefined=>{
        var _list= []
        Array.apply(null, { length: 10 }).forEach((el, i)=>{
          _list.push('clickme')
        })
        this.update({
          dude: 'halo'
          ,todos: opts.todos
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
            ,todos: res.data.ignore
          })
          }, 1000)
        }, err=>console.warn(err))
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