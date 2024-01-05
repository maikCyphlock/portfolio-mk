import { defineConfig } from 'astro/config';
import lighthouse from 'astro-lighthouse';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),lighthouse()]
});