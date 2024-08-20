module.exports = {
  root: true, // 确保 ESLint 从项目根目录读取配置
  parser: '@typescript-eslint/parser', // 使用 TypeScript ESLint 解析器
  parserOptions: {
    ecmaVersion: 2020, // 允许使用 ECMAScript 2020 语法
    sourceType: 'module' // 允许使用 ES 模块
  },
  extends: [
    'eslint:recommended', // 使用 ESLint 推荐的规则
    'plugin:@typescript-eslint/recommended', // 使用 TypeScript ESLint 推荐的规则
    'prettier', // 关闭与 Prettier 冲突的 ESLint 规则
    'plugin:prettier/recommended' // 使用 Prettier 插件的推荐设置
  ],
  plugins: [
    '@typescript-eslint', // 启用 TypeScript ESLint 插件
    'prettier' // 启用 Prettier 插件
  ],
  rules: {
    // TypeScript 规则
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 根据需要关闭强制函数返回类型
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 禁用未使用的变量（忽略以 _ 开头的参数）
    '@typescript-eslint/explicit-function-return-type': 'off', // 关闭强制函数返回类型

    // Prettier 规则
    'prettier/prettier': ['error', { singleQuote: true, printWidth: 80 }], // 强制 Prettier 格式化规则

    // 其他 ESLint 规则
    'no-console': 'warn', // 警告使用 console
    'no-unused-vars': 'off', // 关闭默认的未使用变量规则，由 TypeScript 规则处理
    'no-undef': 'off' // 关闭未定义变量规则，由 TypeScript 规则处理
  }
};
