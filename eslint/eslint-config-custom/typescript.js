import { resolve } from "node:path";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

const project = resolve(process.cwd(), "tsconfig.json");

export default tseslint.config(
	{
		name: "Parser options for Typescript",
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
				project,
				tsconfigRootDir: process.cwd(),
			},
		},
	},

	tseslint.configs.recommendedTypeChecked,
	{
		name: "Typescript ESlint rules",
		files: ["**/*.{ts,tsx,mts,cts}"],
		rules: {
			/* Allow hoisting for functions for better code readability */
			"@typescript-eslint/no-use-before-define": "off",
			/* There are several cases that we need to use a promise as a callback */
			"@typescript-eslint/no-misused-promises": [
				"error",
				{
					checksVoidReturn: {
						attributes: false,
					},
				},
			],
			/* This rule is too restrictive */
			"@typescript-eslint/return-await": "off",
			/* Disable unused-vars error when need to omit a field from object, { omittedField, ...params } = obj */
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					ignoreRestSiblings: true,
				},
			],
			/* Require only objects to convert to string */
			"@typescript-eslint/restrict-template-expressions": "error",
			/* Allow leading underscore for apollo gql __typename and lodash - already is allowed */
			"@typescript-eslint/naming-convention": [
				"error",
				{
					leadingUnderscore: "allow",
					selector: "default",
					format: null,
				},
			],
			/* Prevent checking wrong entry of an object */
			"@typescript-eslint/no-unnecessary-condition": "warn",
			/* Allow using namespaces */
			"@typescript-eslint/no-namespace": "off",
		},
	},
	{
		name: "Typescript ESlint rules (ignore .d.ts)",
		ignores: ["**/*.d.ts"],
		rules: {
			/* Restrict declaring types only as types (interfaces error) */
			"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
		},
	},

	{
		name: "Import",
		files: ["**/*.{ts,tsx,mts,cts}", "**/*.{js,jsx,mjs,cjs}"],
		plugins: { import: importPlugin },
		rules: importPlugin.configs.typescript.rules,
		settings: {
			...importPlugin.configs.typescript.settings,
			"import/resolver": {
				...importPlugin.configs.typescript.settings["import/resolver"],
				typescript: { project },
			},
		},
	},
	{ name: "Prettier", ...prettier },
);
