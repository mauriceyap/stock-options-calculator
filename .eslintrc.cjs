module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@cspell/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [["", "./public"]],
      },
    },
  },
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", "internal", "sibling"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          {
            pattern: "../../../../../**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "../../../../**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "../../../**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "../../**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "../**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "./**",
            group: "sibling",
            position: "after",
          },
        ],
      },
    ],
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "react-refresh/only-export-components": [
      "error",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      { allowNumber: true },
    ],
    "@cspell/spellchecker": [
      "error",
      {
        cspell: {
          // God save the King!
          language: "en-GB",
          words: [
            "badr", // Business Asset Disposal Relief
            "hmrc", // HM Revenue & Customs
            "corepack",
          ],
        },
      },
    ],
  },
};
