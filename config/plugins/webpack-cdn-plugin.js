module.exports = {
    modules: [
        {
            name: 'vue',
            var: 'Vue',
            path: 'dist/vue.runtime.min.js'
        },
        {
            name: 'vue-router',
            var: 'VueRouter',
            path: 'dist/vue-router.min.js'
        },
        {
            name: 'vuex',
            var: 'Vuex',
            path: 'dist/vuex.min.js'
        }
    ],
    publicPath: '/node_modules'
}