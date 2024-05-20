module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  plugins: ["tailwindcss"],
  extends: [
    "@nuxtjs",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  rules: {
    "no-useless-escape": "off",
    "no-console": process.env.PROD ? "error" : "warn",
    "no-debugger": process.env.PROD ? "error" : "warn",
    "arrow-parens": ["error", "always"],
    curly: ["error", "multi-line"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "any", prev: "directive", next: "directive" },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "vue/multi-word-component-names": [
      "error",
      { ignores: ["index", "Component", "Modal", "Page", "default"] },
    ],
    "vue/max-len": ["error", { code: 120, template: 960, ignoreComments: true, ignoreUrls: true }],
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/no-v-html": "off",
    "tailwindcss/no-custom-classname": "off",
    "prettier/prettier": ["warn", { printWidth: 100, tabWidth: 2 }],
  },
  parserOptions: {
    ecmaVersion: "latest",
    module: "esnext",
  },
  /* webStorm performance issue fix */
  ignorePatterns: [
    "node_modules/",
    "**/node_modules/",
    "/**/node_modules/*",
    "storybook-static/",
    "dist/",
  ],
};
