'use strict';

import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      ...prettierPlugin.configs.recommended.rules,
      'max-lines': ['warn', { max: 124 }],
      "no-unused-vars": "off",
      "no-undef": "off",
      "max-params": "off",
      "prefer-const": "off",
      "no-const-assign": "off",
      "no-useless-escape": "off",
    },
    ignores: ['node_modules', 'coverage', 'eslint.config.js'],
  },
];
