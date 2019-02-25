
var gulp= require('gulp')

gulp.task('jspm', [], function(){
  var jspm= require('gulp-jspm-build')
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
    // baseUrl: '/'
    }
  })
  .pipe(gulp.dest('./admin/src'))
})

gulp.task('serve', [], function(){
  var browserSync= require('browser-sync').create()
  var reload= browserSync.reload
  browserSync.init({
    server: './'
  })
  gulp.watch('**/*.html')
  .on('change', reload)
})
