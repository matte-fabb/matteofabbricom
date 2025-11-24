import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', // FONDAMENTALE: Dice ad Astro di non fare solo HTML statico
  adapter: node({
    mode: 'standalone'
  }),
});