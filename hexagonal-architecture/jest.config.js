module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
    globals: { 'ts-jest': { diagnostics: false } },
    transform: {}
};
