module.exports = {
    root: true,
    extends: '@react-native-community',
    rules: {
        'linebreak-style': 'off',
        'prettier/prettier': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_', varsIgnorePattern: '^ignored?$'}],
        '@typescript-eslint/no-unused-vars-experimental': 'off',
        'no-empty-function': 'warn',
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        // Existing rules
        'comma-dangle': ['warn', 'never'], // https://eslint.org/docs/rules/comma-dangle
        trailingComma: 'off',
        'function-paren-newline': 'off', // https://eslint.org/docs/rules/function-paren-newline
        'global-require': 'off', // https://eslint.org/docs/rules/global-require
        'import/no-dynamic-require': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        'no-inner-declarations': 'off', // https://eslint.org/docs/rules/no-inner-declarations
        // New rules
        'class-methods-use-this': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react/no-unescaped-entities': 'warn',
        'react/prop-types': ['Off'],
        'jsx-quotes': ["warn", "prefer-single"],
        'react-hooks/exhaustive-deps': 'off'
    }
};
