/**
 * @function Ajax
 * @param {String} method 请求的类型；GET 或 POST
 * @param {String} url 请求的URL
 * @param {Boolean} async true(异步)或 false(同步)
 * @param {String} data
 * @param {String} type
 * @callback {Function} success
 * @return {Promise}
 * @resolve json, script
 * @author cdll
 */
function Ajax(method, url, data, success, type){
  if(type){
    if(type== 'script'){
      loadJS(url, success)
    }
    return false
  }
  // 创建一个兼容的XMLHttpRequest对象, 向服务器发送请求
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP')
  if(method.toUpperCase() == "GET" && data){
    url += "?" + data
  }
  xhr.open(method, url, true)
  if(method.toUpperCase() == 'POST'){
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    //string：仅用于 POST 请求
    xhr.send(data)
    /*
    在以下情况中，请使用 POST 请求：
    无法使用缓存文件（更新服务器上的文件或数据库）
    向服务器发送大量数据（POST 没有数据量限制）
    发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
    */
  }
  else{
    xhr.send()
  }
  //存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数
  xhr.onreadystatechange = function(){
    /**
     * 0: 请求未初始化
     * 1: 服务器连接已建立
     * 2: 请求已接收
     * 3: 请求处理中
     * 4: 请求已完成，且响应已就绪
     */
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        typeof success === 'function' && success(xhr.responseText)
      }
      else{
        console.warn(xhr.status, JSON.parse(xhr.responseText))
      }
    }
  }
  function loadJS(url, callback){
    var doc = document, script = doc.createElement('script'), body = doc.getElementsByTagName('body')[0]
    script.type = 'text/javascript'
    if (script.readyState) {
      script.onreadystatechange = function() {
        if ((/^(loaded|complete)$/ig).test(script.readyState)) {
          script.onreadystatechange = null
          typeof callback === 'function' && callback()
        }
      }
    }
    else{
      script.onload = function() {
        typeof callback === 'function' && callback()
      }
    }
    script.src = url
    body.appendChild(script)
  }
}
