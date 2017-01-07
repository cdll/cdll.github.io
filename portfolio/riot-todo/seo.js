
'use strict'

var riot= require('riot')

// var fs = require('fs')
// require.extensions['.html'] = function (module, filename) {
//   module.exports = fs.readFileSync(filename, 'utf8')
// }

var tag= require('./modules/my-tag.tag')
// var tag= riot.compile('./modules/my-tag.tag')
var res= riot.render(tag, {
  name: 'cdll'
})
console.info(res)
return res
