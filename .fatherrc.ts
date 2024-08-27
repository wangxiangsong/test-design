import { defineConfig } from 'father';

// more father config: https://github.com/umijs/father/blob/master/docs/config.md
export default defineConfig({
  esm: {
    output: 'dist', // 输出目录，存放 ES Module 格式的代码
  },

  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, // 如果需要引入 less 文件可以设置为 true
      },
    ],
  ],
});
