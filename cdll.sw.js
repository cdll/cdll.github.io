
importScripts('/bower_components/sw-toolbox/sw-toolbox.js')

toolbox.router.get(/\/$|\.html$/, self.toolbox.fastest, {
    cache: {
        name: "pages"
        ,maxEntries: 10
    }
})
toolbox.router.get(/\/bower_components\/[\S]+\.*$/, self.toolbox.fastest, {
    cache: {
        name: 'bowers'
        ,maxEntries: 10
    }
})
toolbox.router.get(/\/config\.js$|\/src\/[\S]+\.js$/, self.toolbox.fastest, {
    cache: {
        name: "scripts"
        ,maxEntries: 10
    }
})
toolbox.router.get(/\/cdll\.sw\.js$/, self.toolbox.networkFirst, {})
toolbox.router.get(/\.json$/, self.toolbox.fastest, {
    cache: {
        name: "datas"
        ,maxEntries: 10
    }
})
toolbox.router.get(/\/src[\S]+\.css$/, self.toolbox.fastest, {
    cache: {
        name: "styles"
        ,maxEntries: 10
    }
})
