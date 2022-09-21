import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import path from 'path';

export default defineConfig({
  input: path.resolve(__dirname, '../src/index.ts'),
  output: [
    {
      file: path.resolve(__dirname, '../dist/index.d.ts'),
      format: 'es',
    },
  ],
  external: [/\.less$/],
  plugins: [
    dts(),
  ],
});
