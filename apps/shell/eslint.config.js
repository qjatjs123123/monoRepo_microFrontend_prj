import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import {
  defineConfig,
  globalIgnores
} from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [{
            group: ['../*', '../../*'], // 상위 폴더 상대 경로 금지
            message: '상대 경로 import 금지! workspace 패키지 이름을 사용하세요.'
          }]
        }
      ]
    },
    parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: __dirname,
    }
  }
])