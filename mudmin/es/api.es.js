
require('es6-promise').polyfill()
const axios= require('axios')

module.exports= {
  getUserInfo: obj=>{
    return axios({
      url: ''
    })
  }
  ,saveUserInfo: obj=>{
    return axios({
      method: 'post'
      ,url: ''
    })
  }
  ,getPostList: obj=>{
    return axios({
      url: ''
    })
  }
}
