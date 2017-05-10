
importScripts('/bower_components/sw-toolbox/sw-toolbox.js')

toolbox.router.get("/", self.toolbox.fastest, {
    cahce: {
        name: "index"
        ,maxEntries: 10
    }
})
toolbox.router.get(/\.html$/, self.toolbox.fastest, {
    cache: {
        name: "pages"
        ,maxEntries: 100
    }
})
toolbox.router.get(/\/bower_components\/[\S]+\.*$/, self.toolbox.fastest, {
    cache: {
        name: 'bower_components'
        ,maxEntries: 10
    }
})
toolbox.router.get(/\/config\.js$|\/src\/[\S]+\.js$/, self.toolbox.fastest, {
    cache: {
        name: "scripts"
        ,maxEntries: 10
    }
})
toolbox.router.get(/cdll\.sw\.js$/, self.toolbox.networkfirst, {})
toolbox.router.get(/\.json$/, self.toolbox.fastest, {
    cache: {
        name: "datas"
        ,maxEntries: 10
    }
})
toolbox.router.get(/\.css$/, self.toolbox.fastest, {
    cache: {
        name: "styles"
        ,maxEntries: 10
    }
})
