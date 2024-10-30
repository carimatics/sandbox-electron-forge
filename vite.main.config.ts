import { defineConfig } from 'vite';
import path from 'node:path';

// https://vitejs.dev/config
export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, '.vite', 'build'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/main/index.ts',
      },
    },
  },
});
