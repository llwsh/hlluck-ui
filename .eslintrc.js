/*
 * @Author: https://wangshuhao.com
 * @Date: 2020-07-06 00:07:57
 * @LastEditors: llwsh
 * @LastEditTime: 2020-07-06 00:21:54
 * @FilePath: /hlluck-ui/.eslintrc.js
 * @Description: ESLint 配置
 */

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["json-format", "react", "@typescript-eslint"],
  rules: {},
};
