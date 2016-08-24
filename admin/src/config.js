System.config({
    "baseUrl": "./",
    "bundles": {
        "vueApp.min.js": [
            "admin/src/vueApp.js",
            "vue"
        ]
    },
    "map": {
    },
    "meta": {
        "Mock": "/bower_components/mockjs/dist/mock-min.js"
    },
    "paths": {
        "mdl": "/bower_components/material-design-lite/material.min.js",
        "qwest": "/bower_components/qwest/qwest.min.js",
        "vue": "./bower_components/vue/dist/vue.min.js"
    }
});