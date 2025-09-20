import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import queryPlugin from '@tanstack/eslint-plugin-query';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...queryPlugin.configs['flat/recommended'],
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.config({
    extends: ['next', 'prettier'],
    rules: { ...jsxA11yPlugin.flatConfigs.recommended.rules },
  }),
];

export default eslintConfig;
