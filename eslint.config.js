import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: [
			'*.d.ts',
			'logs',
			'*.log',
			'*-debug.log*',
			'node_modules',
			'dist',
			'dist-ssr',
			'coverage',
		],
	},
	eslint.configs.recommended,
	tseslint.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2021,
			},
			parserOptions: {
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
	},
);
