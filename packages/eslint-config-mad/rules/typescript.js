module.exports = {
	extends: ["plugin:@typescript-eslint/recommended", "plugin:import/typescript"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	settings: {
		"import/resolver": {
			typescript: true,
			node: true,
		},
	},
};
