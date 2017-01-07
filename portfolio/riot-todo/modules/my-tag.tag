
  <my-tag >
    <style scoped>
      h3{
        color: red;
      }
    </style>

    <h3>Tag layout</h3>
    <div class='' onclick='{logger}'>{ dude }</div>
    <ul class=''>
      <li class='' each='{el in todos}' onclick='{ranText}'>{el.content}</li>
    </ul>

    <inline-tag/>
    <script>
      this.on('mount', ()=>{
        var _list= []
        Array.apply(null, { length: 10 }).forEach((el, i)=>{
          _list.push({
            _id: 's12s1s21'
            ,content: 'clickme'
          })
        })
        this.update({
          dude: 'halo'
          ,todos: _list
        })
      })
      this.logger= ()=>{
        console.info(event.target)
      }
      this.ranText= ()=>{
        console.info(event.item)
        event.item.el.content= (new Date())
      }
    </script>
  </my-tag>