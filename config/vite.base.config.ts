import path from 'path';
import { UserConfig } from 'vite';
import autoExternal from 'rollup-plugin-auto-external';

const pkg = require(path.resolve(__dirname, '../package.json'));

const config: UserConfig = {
  plugins: [
    autoExternal({
      packagePath: pkg,
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
  build: {
    cssCodeSplit: false,
    assetsDir: '',
    emptyOutDir: false,
    outDir: './dist',
  },
};

export default config;
