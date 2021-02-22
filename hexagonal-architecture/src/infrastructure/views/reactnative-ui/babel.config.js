module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '@domain': './../../../domain',
                    '@infrastructure': './../../../infrastructure',
                    '@mocks': './../../../mocks',
                    '@': './src'
                }
            }
        ]
    ]
};
