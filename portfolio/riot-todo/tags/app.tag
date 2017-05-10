<app>
  <style>
    :scope{
      border: .9px solid lightpink;
      margin: 1rem;
    }
  </style>

  <div class="" data-is='{app}'>loading...</div>

  <script>
    //console.info(333, this)
    function App(){
      riot.observable(this)
      self.app= 'my-tag'
      this.on('bootstrap', ()=>{
        console.info('bs', this)
route('/', (group, module, action)=>{
  console.info('/')
  route('/index', null, true)
})
// route('/index', ()=>{
//   console.info('index')
//   riot.compile('tags/my-tag.tag.html')
// })
// route('/login', ()=>{
//   console.info('login')
// })
// route('/search..', ()=>{
//   console.info('search', route.query())
// })
// route('/*', (group, module, action)=>{
//   console.warn(404, group, module, action)
//   riot.compile('tags/not-found.tag.html')
// })
// route.start(true)

// riot.mount('*')
      })
    }

    var app= new App()
    app.trigger('bootstrap')
  </script>
</app>