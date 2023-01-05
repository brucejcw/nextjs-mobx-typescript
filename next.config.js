require('dotenv').config()
const { i18n } = require('./next-i18next.config')

module.exports = {
    lessVarsFilePathAppendToEndOfContent: false,
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {},
    compiler: {
        styledComponents: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: 'babel-loader',
                },
                {
                    loader: '@svgr/webpack',
                    options: {
                        babel: false,
                        icon: true,
                    },
                },
            ],
        })
        return config
    },
    i18n,
    compress: process.env.NODE_ENV !== 'development',
    env: {
        buildTimeEnv: process.env.NODE_ENV,
    },
}
