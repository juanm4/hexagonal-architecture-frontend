/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const extraNodeModules = {
    '@': path.resolve(__dirname, './src'),
    '@domain': path.resolve(__dirname, '../../../domain'),
    '@infrastructure': path.resolve(__dirname, '../../../infrastructure'),
    '@mocks': path.resolve(__dirname, '../../../mocks')
};
const watchFolders = [
    path.resolve(__dirname, '.'),
    path.resolve(__dirname, '../../../domain'),
    path.resolve(__dirname, '../../../infrastructure/http'),
    path.resolve(__dirname, '../../../infrastructure/repositories'),
    path.resolve(__dirname, '../../../infrastructure/instances'),
    path.resolve(__dirname, '../../../mocks')
];

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false
            }
        })
    },
    resolver: {
        extraNodeModules: new Proxy(extraNodeModules, {
            get: (target, name) =>
                //redirects dependencies referenced from common/ to local node_modules
                name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`)
        })
    },
    watchFolders
};
