let proxyObj={} //定义代理对象

proxyObj['/']={//所有'/'都代理
    //websocket
    ws: false,
    //目标地址
    target:'http://localhost:8181',
    //开启跨域8080->8181
    changeOrigin: true,
    //不重写地址
    pathRewrite: {
        '^/':'/'
    }

}


module.exports ={
    devServer: {
        host:'localhost',
        port: 8080,//8080通过代理转发到8181
        proxy: proxyObj

        // 另一种配置方式
        // proxy: {
        //     '/api' : {
        //         target: 'http://localhost:8181/',
        //         security: false, //如果收https接口，需要配置该参数
        //         ws: true,//是否代理websockets
        //         changeOrigin: true,//启用跨域
        //         pathRewrite: {
        //             '^api' : '/api'
        //         }
        //     }
        // }
    }
}