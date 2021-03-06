module.exports = {
	env: {
		es2021: true,
		browser: true,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"no-console": "warn",
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/no-unescaped-entities": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
	},
};
