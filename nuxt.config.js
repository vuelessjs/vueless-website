import { fileURLToPath } from "node:url";

import { defineNuxtConfig } from "nuxt/config";
import { Vueless, VuelessUnpluginComponents } from "@vueless/plugin-vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [["@nuxtjs/eslint-module", { lintOnStart: false }]],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
  },
  vite: {
    optimizeDeps: {
      include: ["tailwindcss/colors.js", "tailwindcss/colors", "@tailwindcss/forms"],
    },
    plugins: [Vueless(), VuelessUnpluginComponents()],
  },
  build: {
    transpile: ["/vueless/"],
  },
});
