import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'test-design',
  favicons: ['/head.png'],
  publicPath: '/test-design/',

  outputPath: 'docs-dist', // 文档打包输出路径

  // 主题配置
  themeConfig: {
    name: 'design', // 主题名称，可用于在文档页面中显示
    footer: false, // 是否展示底部内容
  },
  // 自定义别名
  alias: {
    '@/': 'src/',
  },

  // 自定义 less 配置
  lessLoader: {
    lessOptions: {
      javascriptEnabled: true, // 允许在 Less 文件中使用 JavaScript 表达式
    },
  },
  // Babel 插件配置
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd', // 按需加载 Ant Design 组件和样式
        libraryDirectory: 'es',
        style: true, // 使用 less 文件
      },
    ],
  ],

  inlineLimit: 10000, // 文件大小超过10000 才会被打包成文件 否则base64
  hash: true, // 为打包的资源添加 hash，防止缓存
  history: { type: 'hash' }, // 使用 hash 模式的路由
});
