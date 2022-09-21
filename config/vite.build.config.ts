import { defineConfig } from 'vite';
import viteBaseConfig from './vite.base.config';
import path from 'path';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  ...viteBaseConfig,
  plugins: [
    ...(viteBaseConfig.plugins || []),
    // 开发环境下vite使用esbuild降级语法，此时降级程度很轻，提升速度。到了生产环境，需要用babel降级语法，提升兼容性
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: /node_modules/,
      babelHelpers: 'runtime',
      configFile: path.resolve(__dirname, './config/babel.config.js'),
    }),
  ],
  // 生产环境舍弃esbuild transpile，防止多次转换浪费时间
  esbuild: false,
  mode: 'production',
  build: {
    ...viteBaseConfig.build,
    sourcemap: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        exports: 'named',
      },
    },
    lib: {
      entry: path.resolve(__dirname, '../src/index.ts'),
      name: 'index',
      fileName: (format) => (format === 'cjs' ? 'index.cjs.js' : 'index.esm.js'),
      formats: ['cjs', 'es'],
    },
  },
});
