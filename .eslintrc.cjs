/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    // 浏览器环境
    browser: true,
    // Node环境
    node: true,
    // 启用除了modules以外的所有 ECMAScript 6 特性
    es2021: true
  },
  root: true,
  extends: [
    './.eslintrc-auto-import.json',
    // ESLint Vue3 插件扩展
    'plugin:vue/vue3-essential',
    // ESLint 官方扩展
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    // '@vue/eslint-config-prettier/skip-formatting'
    // Prettier NPM 扩展
    '@vue/eslint-config-prettier'
  ],
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['warn', 'never'], // 禁止尾部使用分号
    'no-debugger': 'warn' // 禁止出现 debugger
  }
}
