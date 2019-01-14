module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',

    //不配置默认也是dist
    // outputDir: 'dist',  
    
    lintOnSave: false,
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: false, // 生产环境的 source map
  
    // where to put static assets (js/css/img/font/...)
    // assetsDir: 'assets',

    // whether to use eslint-loader for lint on save.
    // valid values: true | false | 'error'
    // when set to 'error', lint errors will cause compilation to fail.
    // lintOnSave: true,

    // devServer:{
    //     proxy:{
    //         '/api':{
    //             target:'https://wxcs.nuoweibd.com/augury/',
    //             ws:true,
    //             changeOrigin:true
    //         }
    //     }
    // }

}