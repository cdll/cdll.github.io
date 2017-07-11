
const path= require('path')
const webpack= require('webpack')

// https://github.com/rodzzlessa24/vue-webgulp/blob/master/webpack.config.js
module.exports= {
  entry: {
    app: `es/main.es.js`
  }
  ,output: {
    path: __dirname
    ,filename: '[name].js'
  }
  ,watch: false
  ,devtool: 'source-map'
  ,module: {
    loaders: [
      {
        test: /\.vue$/
        ,loader: 'vue-loader'
        ,options: {
          loaders: {
            pug: [require('pug')]
            ,postcss: [require('postcss')()]
            ,coffee: [require('coffeescript')]
          }
        }
      }
      ,{
        test: /\.es\.js$/
        ,loader: 'babel-loader'
        // ,exclude: /node_modules/
      }
      ,{
        test: /\.css$/
        ,loader: 'style-loader!css-loader'
      }
    ]
  }
  ,babel: {
    presets: ['es2015']
    // ,plugins: ['transform-runtime']
  }
  ,resolve: {
    modulesDirectories: [
      'node_modules'
      ,'.'
      ,'bower_components'
    ]
    ,alias: {
      'vue$': 'vue/dist/vue.min.js'
    }
  }
  ,plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"prod'
      }
    })
    ,new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
      ,compress: {
        warnings: false
      }
    })
  ]
}

// if(process.env.NODE_ENV=== 'prod'){
//   module.exports.devtool= '#source-map'
//   module.exports.plugins= (module.exports.plugins|| []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: 'prod'
//       }
//     })
//     ,new webpack.optimize.UglifyJsPlugin()
//     ,new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }

// config= {
//   build: {
//     env: 'prod'
//     ,index: path.resolve(__dirname, 'index.html')
//     ,assetsRoot: path.resolve(__dirname, './')
//     ,assetsPublicPath: './'
//     ,productionSourceMap: true
//   }
// }
