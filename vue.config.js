let publicPath = process.env.NODE_ENV === 'production' ? '/MecanicaBeltran' : '/';
module.exports = {
    publicPath,
    lintOnSave: false,
    runtimeCompiler: true,
    configureWebpack: {
        //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
        resolve: {
            symlinks: false
        }
    },
    transpileDependencies: [
        '@coreui/utils'

    ]
}