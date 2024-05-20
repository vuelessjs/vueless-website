import { defineNuxtPlugin } from "nuxt/app";
import { createVueless } from "vueless";

export default defineNuxtPlugin(({ vueApp }) => {
  const vueless = createVueless();

  vueApp.use(vueless);
});
