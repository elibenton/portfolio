import js from '@eslint/js';
import globals from 'globals';
import svelte from 'eslint-plugin-svelte';

export default [
	{
		ignores: ['.svelte-kit/', 'build/', 'node_modules/', '.playwright-mcp/']
	},
	js.configs.recommended,
	...svelte.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				extraFileExtensions: ['.svelte']
			}
		}
	},
	{
		rules: {
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
		}
	}
];
