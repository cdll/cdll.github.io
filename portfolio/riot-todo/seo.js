
'use strict'

var riot= require('riot')

var fs = require('fs')
var axios= require('axios')
// require.extensions['.tag.html'] = function (module, filename) {
//   module.exports = fs.readFileSync(filename, 'utf8')
// }
// var tag= requireTagHTML('./tags/my-tag.tag.html')

// var requireTagHTML= (filePath)=>{
//   return fs.readFileSync(filePath, {
//     encoding: 'utf8'
//   })
// }
// var tag= requireTagHTML('./tags/my-tag.tag.html')

var tag= require('./tags/my-tag.tag')
// var tag= riot.compile('./tags/my-tag.tag')
var tag= riot.compile(tag)
return tag
// axios('http://localhost/api/discover/guayouhui', {
//   method: 'get'
//   ,headers: {
//     version: 1
//   }
// })
// .then((res)=>{
//   // console.info(res.data)
//   var html= riot.render(tag, {
//     dude: res.data.code
//     ,todos: res.data.data
//   })
//   console.info(html)
//   return html
// }, (xhr, err)=>{
//   console.warn(23333, xhr)
// })
