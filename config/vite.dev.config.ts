import { defineConfig } from 'vite';
import viteBaseConfig from './vite.base.config';
import path from 'path';

export default defineConfig({
  ...viteBaseConfig,
  mode: 'development',
  build: {
    ...viteBaseConfig.build,
    sourcemap: true,
    watch: {
      buildDelay: 500,
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        exports: 'named',
      },
    },
    lib: {
      entry: path.resolve(__dirname, '../src/index.ts'),
      name: 'index',
      fileName: () => 'index.esm.js',
      formats: ['es'],
    },
  },
});
