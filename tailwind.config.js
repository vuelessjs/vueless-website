import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
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
