// https://unpkg.com/basket.js@0.5.2/dist/basket.full.min.js
/*global document, XMLHttpRequest, localStorage, cellar, Promise*/
;(function (window, document) {
  'use strict'

  var head = document.head || document.getElementsByTagName('head')[0]
  var storagePrefix = 'cellar-'
  var defaultExpiration = 5000
  var inCellar = []

  function addLocalStorage (key, storeObj) {
    try {
      localStorage.setItem(storagePrefix + key, JSON.stringify(storeObj))
      return true
    } catch (e) {
      if (e.name.toUpperCase().indexOf('QUOTA') >= 0) {
        var item
        var tempScripts = []

        for (item in localStorage) {
          if (item.indexOf(storagePrefix) === 0) {
            tempScripts.push(JSON.parse(localStorage[item]))
          }
        }

        if (tempScripts.length) {
          tempScripts.sort(function (a, b) {
            return a.stamp - b.stamp
          })

          cellar.remove(tempScripts[0].key)

          return addLocalStorage(key, storeObj)

        } else {
          // no files to remove. Larger than available quota
          return
        }

      } else {
        // some other error
        return
      }
    }

  }

  function getUrl (url) {
    var promise = new Promise(function (resolve, reject) {

      var xhr = new XMLHttpRequest()
      xhr.open('GET', url)

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if ((xhr.status === 200) ||
            ((xhr.status === 0) && xhr.responseText)) {
            resolve({
              content: xhr.responseText,
              type: xhr.getResponseHeader('content-type')
            })
          } else {
            reject(new Error(xhr.statusText))
          }
        }
      }

      // By default XHRs never timeout, and even Chrome doesn't implement the
      // spec for xhr.timeout. So we do it ourselves.
      setTimeout(function () {
        if (xhr.readyState < 4) {
          xhr.abort()
        }
      }, cellar.timeout)

      xhr.send()
    })

    return promise
  }

  function saveUrl (obj) {
    return getUrl(obj.url).then(function (result) {
      var storeObj = wrapStoreData(obj, result)

      if (!obj.skipCache) {
        addLocalStorage(obj.key, storeObj)
      }

      return storeObj
    })
  }

  function wrapStoreData (obj, data) {
    var now = +new Date()
    obj.data = data.content
    obj.originalType = data.type
    obj.type = obj.type || data.type
    obj.skipCache = obj.skipCache || false
    obj.stamp = now
    obj.expire = now + ((obj.expire || defaultExpiration) * 60 * 60 * 1000)

    return obj
  }

  function isCacheValid (source, obj) {
    return !source ||
      source.expire - +new Date() < 0 ||
      obj.unique !== source.unique ||
      (cellar.isValidItem && !cellar.isValidItem(source, obj))
  }

  function handleStackObject (obj) {
    var source, promise, shouldFetch

    if (!obj.url) {
      return
    }

    obj.key = (obj.key || obj.url)
    source = cellar.get(obj.key)

    obj.execute = obj.execute !== false

    shouldFetch = isCacheValid(source, obj)

    if (obj.live || shouldFetch) {
      if (obj.unique) {
        // set parameter to prevent browser cache
        obj.url += ((obj.url.indexOf('?') > 0) ? '&' : '?') + storagePrefix+ 'unique=' + obj.unique
      }
      promise = saveUrl(obj)

      if (obj.live && !shouldFetch) {
        promise = promise
          .then(function (result) {
            // If we succeed, just return the value
            return result
          }, function () {
            return source
          })
      }
    } else {
      source.type = obj.type || source.originalType
      source.execute = obj.execute
      promise = new Promise(function (resolve) {
        resolve(source)
      })
    }

    return promise
  }

  function injectScript (obj) {
    var script = document.createElement('script')
    script.defer = true
    // Have to use .text, since we support IE8,
    // which won't allow appending to a script
    script.text = obj.data
    head.appendChild(script)
  }

  var handlers = {
    'default': injectScript
  }

  function execute (obj) {
    if (obj.type && handlers[obj.type]) {
      return handlers[obj.type](obj)
    }

    return handlers['default'](obj)  // 'default' is a reserved word
  }

  function performActions (resources) {
    return resources.map(function (obj) {
      if (obj.execute) {
        execute(obj)
      }

      return obj
    })
  }

  function fetch () {
    var i, l, promises = []

    for (i = 0, l = arguments.length; i < l; i++) {
      promises.push(handleStackObject(arguments[i]))
    }

    return Promise.all(promises)
  }

  /**
   * @function thenRequire
   * @param {Null}
   * @return {Promise}
   */
  function thenRequire () {
    var resources = fetch.apply(null, arguments)
    var promise = this.then(function () {
      return resources
    }).then(performActions)
    promise.thenRequire = thenRequire
    return promise
  }

  function require () {
    if (typeof arguments[0] === 'string') {
      arguments[0] = {
        url: arguments[0]
      }
    }
    for (var a = 0, l = arguments.length; a < l; a++) {
      arguments[a].execute = arguments[a].execute !== false

      if (arguments[a].once && inCellar.indexOf(arguments[a].url) >= 0) {
        arguments[a].execute = false
      } else if (arguments[a].execute !== false && inCellar.indexOf(arguments[a].url) < 0) {
        inCellar.push(arguments[a].url)
      }
    }

    var promise = fetch.apply(null, arguments).then(performActions)

    promise.thenRequire = thenRequire
    return promise
  }

  window.cellar = require
  cellar.__proto__= {
    require,

    remove: function (key) {
      localStorage.removeItem(storagePrefix + key)
      return this
    },

    get: function (key) {
      var item = localStorage.getItem(storagePrefix + key)
      try {
        return JSON.parse(item || 'false')
      } catch (e) {
        return false
      }
    },

    clear: function (expired) {
      var item, key
      var now = +new Date()

      for (item in localStorage) {
        key = item.split(storagePrefix)[1]
        if (key && (!expired || this.get(key).expire <= now)) {
          this.remove(key)
        }
      }

      return this
    },

    isValidItem: null,

    timeout: 5000,

    addHandler: function (types, handler) {
      if (!Array.isArray(types)) {
        types = [types]
      }
      types.forEach(function (type) {
        handlers[type] = handler
      })
    },

    removeHandler: function (types) {
      cellar.addHandler(types, undefined)
    }
  }

  // delete expired keys
  cellar.clear(true)

})(this, document)