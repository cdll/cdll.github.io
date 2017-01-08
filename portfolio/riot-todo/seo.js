
'use strict'

var riot= require('riot')

var fs = require('fs')
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
var res= riot.render(tag, {
  name: 'cdll'
})
console.info(res)
return res
