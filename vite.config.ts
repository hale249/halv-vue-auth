import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    target: 'esnext',
    // minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueAuth',
      fileName: 'vue-auth',
      formats: ['es', 'cjs', 'iife', 'umd'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        'vue-router',
        'axios',
        'pinia',
        'lodash.get',
        'lodash.merge',
        'secure-ls',
        'jwt-decode',
        'js-cookie',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
