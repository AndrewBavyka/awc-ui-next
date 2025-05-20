import path from 'path';

import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'AwcUI',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd', 'iife'],
    },
    rollupOptions: {
      output: {
        extend: true,
        assetFileNames: (assetInfo) => {
          const assetName = assetInfo.names?.[0] || 'asset';
          if (assetName === 'global.css') {
            return 'styles/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
    cssMinify: 'esbuild',
    outDir: 'dist',
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'src/assets/sprites/*', dest: 'sprites' },
        { src: 'src/docs/manifests/*', dest: 'docs/manifests' },
        // { src: "src/tests/*", dest: "tests" },
      ],
    }),
  ],
});
