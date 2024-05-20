import { vuelessPreset } from "vueless/preset.tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/vueless/**/*.{js,vue,ts}",
  ],
  presets: [vuelessPreset],
};
