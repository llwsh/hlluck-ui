/*
 * @Author: https://wangshuhao.com
 * @Date: 2020-07-06 00:07:57
 * @LastEditors: llwsh
 * @LastEditTime: 2020-07-08 00:49:45
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
  rules: {
    // 用 typescript 语法编写 react 组件
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
  },
  settings: {
    // 允许使用注释的 .json 文件
    "json/json-with-comments-files": [],
    // 路径别名解析配置
    "import/resolver": {
      alias: {
        map: [["@components", "./src/components"]],
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
