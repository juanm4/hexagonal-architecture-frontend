const { aliasWebpack } = require('react-app-alias-ex');

const aliasMap = {
    '@domain': '../../../domain',
    '@infrastructure': '../../../infrastructure',
    '@mocks': '../../../mocks'
};

module.exports = aliasWebpack({
    alias: aliasMap
});
