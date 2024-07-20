/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		"./base.js",
		"./typescript.js",
		"plugin:tailwindcss/recommended",
		"./react.js",
	],
	settings: {
		tailwindcss: {
			callees: ["classnames", "clsx", "ctl", "cn"],
		},
	},
};
