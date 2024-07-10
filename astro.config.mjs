import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from '@astrojs/netlify';

import fontPicker from "astro-font-picker";

// https://astro.build/config
export default defineConfig({
  site: "http://omm-headless.vercel.app",
  integrations: [tailwind(), react(), fontPicker()],
  output: 'hybrid', // Es necesario aplicar para que las single post o cpt-post puedan ser renderizadas
  adapter: netlify({
    cacheOnDemandPages: true,
  }),
});