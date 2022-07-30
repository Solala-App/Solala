module.exports = {
  extends: ["universe/native", "universe/web"],
  ignorePatterns: ["**/*.test.js", "**/*.test.ts"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  rules: {
    "import/namespace": "off",
  },
};
