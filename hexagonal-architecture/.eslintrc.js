module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    ],
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
            arrowFunctions: true,
        },
        project: './tsconfig.json',
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                paths: ['./src'],
            },
        },
    },
    rules: {
        'linebreak-style': 'off',
        'prettier/prettier': 'warn',
        "no-unused-vars": 'off',
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^ignored?$" }],
        "@typescript-eslint/no-unused-vars-experimental": "off",
        'no-empty-function': 'warn',
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        // Existing rules
        'comma-dangle': ['warn', "never"], // https://eslint.org/docs/rules/comma-dangle
        'trailingComma': 'off',
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
    },
};
