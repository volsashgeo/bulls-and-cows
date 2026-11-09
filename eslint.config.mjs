// @ts-check

import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig(
    // Явные глобальные игноры — через globalIgnores, а не голый ignores
    globalIgnores(['dist/**', 'node_modules/**', 'coverage/**']),

    // Базовые рекомендованные правила ESLint для JS
    js.configs.recommended,

    // Рекомендованные правила typescript-eslint для TS
    tseslint.configs.recommended,

    // Отключаем правила, конфликтующие с Prettier — всегда последним
    eslintConfigPrettier,

    // Свои правила поверх
    {
        files: ['**/*.ts'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'prefer-const': 'error',
            eqeqeq: ['error', 'always'],
        },
    },

    // Послабления для тестов
    {
        files: ['tests/**/*.ts'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    }
);
