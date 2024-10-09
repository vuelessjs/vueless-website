// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ["@nuxtjs/google-fonts", { families: { Montserrat: [500, 600, 700] } }],
    "@nuxt/eslint",
    "nuxt-mdi",
    "@vueless/module-nuxt",
  ],
  compatibilityDate: "2024-07-03",
});
