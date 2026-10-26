import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default [
    { ignores: ['build/**'] },
    js.configs.recommended,
    {
        files: ['src/**/*.{js,jsx}'],
        languageOptions: {
            ...react.configs.flat.recommended.languageOptions,
            sourceType: 'module',
            globals: globals.browser,
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
        files: ['public/service-worker.js'],
        languageOptions: { globals: globals.serviceworker },
    },
    {
        files: ['*.config.js'],
        languageOptions: { globals: globals.node },
    },
    prettier,
];
