import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import tailwind from "eslint-plugin-tailwindcss";
import tseslint from "typescript-eslint";

import base from "./base.js";
import typescript from "./typescript.js";
import react from "./react.js";

export default tseslint.config(
	base,
	typescript,
	{
		files: ["**/*.{ts,tsx,mts,cts}", "**/*.{js,jsx,mjs,cjs}"],
		plugins: { "jsx-a11y": jsxA11yPlugin },
		rules: {
			"jsx-a11y/lang": "warn",
		},
	},
	{
		name: "Tailwind",
		settings: {
			tailwindcss: {
				callees: ["classnames", "clsx", "ctl", "cn"],
			},
		},
	},
	tailwind.configs["flat/recommended"],
	react,
);
