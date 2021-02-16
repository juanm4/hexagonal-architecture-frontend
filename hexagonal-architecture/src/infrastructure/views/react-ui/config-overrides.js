const { aliasDangerous } = require('react-app-rewire-alias/lib/aliasDangerous');

const aliasMap = {
    '@domain': '../../../domain',
    '@infrastructure': '../../../infrastructure'
};

module.exports = aliasDangerous(aliasMap);
