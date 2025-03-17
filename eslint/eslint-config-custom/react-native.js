import { fixupPluginRules } from "@eslint/compat";
import reactNative from "eslint-plugin-react-native";
import tseslint from "typescript-eslint";

import base from "./base.js";
import react from "./react.js";
import typescript from "./typescript.js";

export default tseslint.config(
	base,
	typescript,
	react,
	{
		name: "React Native Typescript",
		rules: {
			/* Require imports are needed in React Native */
			"@typescript-eslint/no-require-imports": "off",
		},
	},
	{
		name: "React Native",
		plugins: { "react-native": fixupPluginRules(reactNative) },
		rules: {
			...reactNative.configs.all.rules,
			"react-native/sort-styles": "off",
			"react-native/no-raw-text": ["error", { skip: [] }],
		},
		languageOptions: {
			globals: reactNative.environments["react-native"].globals,
		},
		settings: {
			"import/resolver": {
				node: {
					extensions: [
						".js",
						".ios.js",
						".android.js",
						".ts",
						".tsx",
						".ios.tsx",
						".android.tsx",
						".json",
					],
				},
				"babel-module": {
					extensions: [
						".js",
						".ios.js",
						".android.js",
						".ts",
						".tsx",
						".ios.tsx",
						".android.tsx",
					],
				},
				typescript: {
					extensions: [
						".js",
						".ios.js",
						".android.js",
						".ts",
						".tsx",
						".ios.tsx",
						".android.tsx",
					],
					project: "tsconfig.json",
				},
			},
		},
	}
);
