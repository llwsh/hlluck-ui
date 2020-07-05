/*
 * @Author: https://wangshuhao.com
 * @Date: 2020-07-06 00:40:13
 * @LastEditors: llwsh
 * @LastEditTime: 2020-07-06 00:40:51
 * @FilePath: /hlluck-ui/.commitlintrc.js
 * @Description: CommitLint 配置
 */

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 必须说明本次提交影响范围
    "scope-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        // 修改构建系统
        "build",
        // 其他修改
        "chore",
        // 修改持续集成系统
        "ci",
        // 更新文档
        "docs",
        // 新增功能
        "feat",
        // 修复缺陷
        "fix",
        // 改善逻辑
        "improvement",
        // 提升交互或优化性能
        "perf",
        // 重构代码
        "refactor",
        // 回退版本
        "revert",
        // 不影响程序逻辑的修改
        "style",
        // 新增测试用例或更新现有测试用例
        "test",
      ],
    ],
  },
};
