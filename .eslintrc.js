module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-console":  "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "semi": "off",
    // "semi": ["off", "always"],
    // "indent": ["error", 4],
    // "quotes": [2, 'single'] // 强制单引号， prittier 默认要双引号引号，冲突
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
