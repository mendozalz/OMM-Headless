import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import fontPicker from "astro-font-picker";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [tailwind(), react(), fontPicker()],
  output: 'hybrid' // Es necesario aplicar para que las single psot o cpt-post puedan ser renderizadas
});