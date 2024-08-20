import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'design',
    footer: false,
  },
  alias: {
    '@': path.resolve(__dirname, '../src'),
  },
});
