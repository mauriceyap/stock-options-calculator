import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/dist"],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "prettier",
      "plugin:import/errors",
      "plugin:import/typescript",
      "plugin:@typescript-eslint/strict-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
      "plugin:@cspell/recommended"
    )
  ).map((config) => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"],
  })),
  {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
      "react-refresh": reactRefresh,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        project: [
          "./tsconfig.json",
          "./tsconfig.node.json",
          "./tsconfig.app.json",
        ],
        tsconfigRootDir: "/Users/mauriceyap/stock-options-calculator",
      },
    },

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

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },

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

      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true,
        },
      ],

      "react-refresh/only-export-components": [
        "error",
        {
          allowConstantExport: true,
        },
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
        {
          allowNumber: true,
        },
      ],

      "@cspell/spellchecker": [
        "error",
        {
          cspell: {
            language: "en-GB",
            words: ["badr", "hmrc", "corepack"],
          },
        },
      ],
    },
  },
];
