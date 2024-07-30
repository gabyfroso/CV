import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4321
  },
    resolve: {
        alias: {
          '@': path.resolve(new URL('./src/', import.meta.url).pathname),
          // Puedes agregar más alias aquí
        },
      },
});