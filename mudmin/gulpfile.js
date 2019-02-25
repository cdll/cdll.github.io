'use strict';

var gulp= require('gulp')
var plumber= require('gulp-plumber')

// https://github.com/rodzzlessa24/vue-webgulp/blob/master/gulpfile.js
gulp.task('wp', [
], ()=>{
  let genEnv= function(){
    if((/prod/i).test(gulp.env.e))
    process.env.NODE_ENV= 'production'
    return ''
  }()
  let webpack= require('webpack-stream')

  let webpackConfig= `./webpack.config.js`
  delete require.cache[require.resolve(webpackConfig)]
  return gulp.src('index.html')
  .pipe(plumber())
  .pipe(webpack(require(webpackConfig)))
  .pipe(gulp.dest('.'))
  .on('finish', ()=>{
    return gulp.watch([
      './es/*'
      ,'./pages/*'
    ], ['wp'])
  })
})

gulp.task('vue', [], ()=>{
  let del= require('del')
  let vueify= require('gulp-vueify')
  let rename= require('gulp-rename')
  // let rollup= require('gulp-rollup')
  let rollup= require('rollup-stream')
  let rollupSource= require('vinyl-source-stream')
  let buffer= require('vinyl-buffer')

  del([
    './app.js'
  ])
  // return gulp.src(['./es/main.es.js'])
  //.pipe(rollup({
  return rollup({
    entry: 'es/main.es.js'
    // ,dest: './app.js'
    // ,sourcemaps: true
    ,plugins: [
      require('rollup-plugin-vue2')()
      ,require('rollup-plugin-css-only')()
      ,require('rollup-plugin-postcss')()
    ]
  })
  .pipe(rollupSource('app.js'))
  .pipe(buffer())
  .pipe(vueify(require('./vue.config.js')))
  // .pipe(rename('app.js'))
  .pipe(gulp.dest('.'))
  .on('finish', ()=>{
    return gulp.watch([
      './es/*'
      ,'./pages/*.vue'
    ], ['vue'])
  })
})
