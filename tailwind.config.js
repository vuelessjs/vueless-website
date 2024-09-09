const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "rightToLeft": "rightToLeft 180s linear infinite",
        "leftToRight": "leftToRight 180s linear infinite",
      },
      keyframes: {
        rightToLeft: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-50%, 0)" },
        },
        leftToRight: {
          "0%": { transform: "translate(-50%, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
    },
  },
  plugins: [],
}
