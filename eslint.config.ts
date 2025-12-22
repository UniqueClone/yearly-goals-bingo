import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
    // Base JS / TS recommendations
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            // Prefer the TypeScript-aware rule when using TS
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["error"],
        },
    },
    // React recommended rules (for .jsx / .tsx)
    reactPlugin.configs.flat.recommended,
    {
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            // Using the new JSX transform, so React in scope isn't required
            "react/react-in-jsx-scope": "off",
        },
    },
    // React Hooks rules (including exhaustive-deps for useEffect)
    {
        plugins: {
            "react-hooks": reactHooksPlugin,
        },
        rules: {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
    },
]);
