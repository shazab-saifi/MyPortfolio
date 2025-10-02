
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "indent": ["error", 2],
      "space-before-function-paren": ["error", "always"],
      "react/react-in-jsx-scope": "off",
    }
  },
  {
    ignores: [".next/**", "next-env.d.ts"]
  }
];

export default eslintConfig;
