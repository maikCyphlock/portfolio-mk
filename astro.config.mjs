import { defineConfig } from 'astro/config';
import lighthouse from 'astro-lighthouse';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind(), lighthouse()]
});