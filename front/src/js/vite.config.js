import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: 'localhost',
    port: 5174,
    proxy: {
      '/admin': {
        target: 'https://oki-back.onrender.com/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
s