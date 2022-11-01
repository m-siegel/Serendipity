module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ["eslint:recommended", "prettier"],
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      indent: ["error", 2, { SwitchCase: 1 }],
      "linebreak-style": ["error", "window"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-console": 1,
    },
  };