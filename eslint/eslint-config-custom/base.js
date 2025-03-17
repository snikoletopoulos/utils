import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import json from "eslint-plugin-json";
import turbo from "eslint-plugin-turbo";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{
		name: "Main options",
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: globals.node,
		},
		linterOptions: { reportUnusedDisableDirectives: false },
	},
	{ name: "ESlint recommended rules", ...eslint.configs.recommended },
	{
		name: "ESlint rules",
		files: ["**/*.{ts,tsx,mts,cts}", "**/*.{js,jsx,mjs,cjs}"],
		rules: {
			/* Enforce camelCase */
			camelcase: "error",
			/* We allow console for debug and error reporting */
			"no-console": "error",
			/* Allow void for async functions */
			"no-void": ["error", { allowAsStatement: true }],
			/* Disabled this rule since it doesn't allow re-exporting default from index files */
			"no-restricted-exports": "off",
			/* Restrict function syntax */
			"func-style": ["error", "declaration", { allowArrowFunctions: true }],
			/* Restrict function syntax in objects */
			"object-shorthand": "error",
			/* Restrict callbacks to arrow functions */
			"prefer-arrow-callback": "warn",
			/* Make arrow functions omit braces if not needed */
			"arrow-body-style": ["warn", "as-needed"],
			/* Make sure there are no spaces before and after comments */
			"spaced-comment": ["error", "always", { markers: ["/", "!", "?"] }],
		},
	},
	{
		name: "Import",
		files: ["**/*.{ts,tsx,mts,cts}", "**/*.{js,jsx,mjs,cjs}"],
		plugins: { import: importPlugin },
		rules: {
			...importPlugin.configs.recommended.rules,
			/* Duplicate from typescript */
			"import/named": "off",
			/* Duplicate from typescript */
			"import/namespace": "off",
			/* Duplicate from typescript */
			"import/default": "off",
			/* Duplicate from typescript */
			"import/no-named-as-default-member": "off",
			/* Duplicate from typescript */
			"import/no-unresolved": "off",
			/* Prevent cyclic imports */
			"import/no-cycle": "error",
			/* Allow default export of anonymous objects */
			"import/no-anonymous-default-export": [
				"error",
				{ allowObject: true, allowArray: true },
			],
			/* Allow default naming be the same as exported variables */
			"import/no-named-as-default": "off",
		},
	},
	{
		name: "JSON",
		files: ["**/*.{json,jsonc}"],
		plugins: { json },
		rules: json.configs["recommended"].rules,
	},
	turbo.configs["flat/recommended"],
	{ name: "Prettier", ...prettier },
);
