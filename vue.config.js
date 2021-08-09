// vue.config.js
//为了后端可以访问到前端的资源，配置跨域支持
module.export = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}

