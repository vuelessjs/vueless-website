const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
}
