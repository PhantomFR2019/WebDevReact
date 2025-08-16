// This is my ESLint configuration for keeping my code clean and consistent.
// It helps me avoid common mistakes and keeps everything readable!

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignore build output
  globalIgnores(['dist']),
  {
    // Lint all JS and JSX files
    files: ['**/*.{js,jsx}'],
    // Use recommended settings for JS, React Hooks, and React Fast Refresh
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Warn about unused variables, but ignore those starting with uppercase or underscore
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

// Thanks for checking out my ESLint setup!
// If you have feedback or want to collaborate, reach out!
