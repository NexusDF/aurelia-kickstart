import { defineConfig } from 'vite';
import { fileURLToPath, URL } from "url";
import aurelia from '@aurelia/vite-plugin';

export default defineConfig({
  plugins: [aurelia({
    useDev: true,
    hmr: false
  })],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
    ]
  }
});