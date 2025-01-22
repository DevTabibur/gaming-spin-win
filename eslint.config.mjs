/* eslint-disable prettier/prettier */
/* eslint-disable import/no-anonymous-default-export */
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next/core-web-vitals'
  ),
  {
    plugins: {
      prettier,
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        React: true,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "@typescript-eslint/no-unsafe-declaration-merging": "off",
      "@next/next/no-duplicate-head": "off",
      'prettier/prettier': 'off',
      'no-unused-vars': 'off', // Disable the base rule
      '@typescript-eslint/no-unused-vars': 'off', // Disable the TypeScript-specific rule
      'prefer-const': 'error',
      'no-unused-expressions': 'error',
      'no-unreachable': 'error',
      'no-undef': 'error',
      'no-console': 'warn',
    },
  },
]
