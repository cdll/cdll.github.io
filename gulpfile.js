
var gulp= require('gulp')

var jspm= require('gulp-jspm-build')
gulp.task('jspm', [], function(){
  return jspm({
    bundles: [
      {
        src: './admin/src/vueApp.js'
        ,dst: 'vueApp.min.js'
      }
    ]
    ,bundleOptions: {
      minify: false
      ,mangle: false
    }
    ,systemSfx: true
    ,configOverride:{
//      baseUrl: '/'
    }
  })
  .pipe(gulp.dest('./admin/src'))
})

var browserSync= require('browser-sync').create()
var reload= browserSync.reload
gulp.task('serve', [], function(){
  browserSync.init({
    server: './'
  })
  gulp.watch('**/*.html')
  .on('change', reload)
})
