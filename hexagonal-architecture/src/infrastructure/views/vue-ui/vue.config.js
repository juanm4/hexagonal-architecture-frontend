const path = require('path');
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('eslint')
            .use('eslint-loader')
            .tap(options => {
                options.configFile = path.resolve(__dirname, '.eslintrc.js');
                return options;
            });
    },
    css: {
        loaderOptions: {
            postcss: {
                config: {
                    path: __dirname
                }
            }
        }
    }
};
