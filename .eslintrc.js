module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'airbnb-typescript',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
		"indent": ["error", 2],
	},
	settings: {
		react: {
			version: 'detect',
		},
	}
};