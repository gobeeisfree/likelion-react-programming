import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  resolve: {
    // alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    alias: {
      // '@': resolve(__dirname, './src'),
      '@': '/src',
    },
  },
});
