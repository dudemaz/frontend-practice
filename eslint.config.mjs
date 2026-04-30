import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      // parser: tseslint.parser,
      parserOptions: {
        // project: true,
      },
    },
    rules: {
      "no-console": "warn",
      eqeqeq: "warn",
      curly: "warn",
      "no-else-return": "warn",

      "@typescript-eslint/no-explicit-any": "warn", 
    },
  },
  {
    ignores: ["dist/", "node_modules/"]
  }
);