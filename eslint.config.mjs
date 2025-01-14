import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Ignore the warning about <img> usage in Next.js
      "@next/next/no-img-element": "off",
      // Allow usage of 'any' type
      "@typescript-eslint/no-explicit-any": "off",
    },
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
          // Additional TypeScript-specific rules can go here
          "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        },
      },
    ],
    ignores: ["node_modules", ".next", "dist"], // Ignore common directories
  },
];

export default eslintConfig;
