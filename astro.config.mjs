import { defineConfig } from 'astro/config';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroImageTools]
});