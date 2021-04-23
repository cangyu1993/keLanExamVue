// vue.config.js
const BaseUrl = require("./src/axios/config.js")
module.exports = {
    devServer: {
        proxy: {
            [BaseUrl.ROOT]: {
                target: BaseUrl.URL,
                changeOrigin: true,
                logLevel: 'debug',
                ws: true,
                pathRewrite: {
                    [`^${BaseUrl.ROOT}`]: ""
                }
            }
        }
    }
}
