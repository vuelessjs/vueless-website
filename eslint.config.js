// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
    rules: {
        "quotes": ["warn", "double"],
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
        "vue/max-len": ["error", { code: 120, template: 960, ignoreComments: true, ignoreUrls: true }],
        "vue/padding-line-between-blocks": ["error", "always"],
        "vue/no-v-html": "off",
        "tailwindcss/no-custom-classname": "off",
        "vue/html-self-closing": ["error", { html: { void: "always", normal: "always", component: "always" } }],
    },
});

