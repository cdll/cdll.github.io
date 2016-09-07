
var Hapi= require('hapi')
var Path= require('path')

var server= new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '/')
      }
    }
  }
})
server.connection({
  port: 3000
})
server.start((err)=>{
  if(err){
    throw err
  }
  console.info(`Server 's running @ ${server.info.uri}`)
})
server.route({
  method: 'get'
  ,path: '/{params*}'
  ,handler: {
    directive: {
      path: '/'
      ,listing: true
    }
  }
})
server.route({
  method: 'get'
  ,path: '/{filename}'
  ,handler: {
    file: function(req){
      return req.params.filename
    }
  }
})