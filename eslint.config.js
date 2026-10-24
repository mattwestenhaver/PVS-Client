const js = require('@eslint/js');
const globals = require('globals');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const prettier = require('eslint-config-prettier');

module.exports = [
    { ignores: ['build/**'] },
    js.configs.recommended,
    {
        files: ['src/**/*.{js,jsx}'],
        languageOptions: {
            ...react.configs.flat.recommended.languageOptions,
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.jest, process: 'readonly' },
        },
        plugins: { react, 'react-hooks': reactHooks },
        settings: { react: { version: 'detect' } },
        rules: {
            ...react.configs.flat.recommended.rules,
            ...react.configs.flat['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            'one-var': ['error', 'never'],
            // Most files still import React, so count JSX as a use of it
            'react/jsx-uses-react': 'error',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'off',
        },
    },
    {
        files: ['eslint.config.js'],
        languageOptions: { sourceType: 'commonjs', globals: globals.node },
    },
    prettier,
];
