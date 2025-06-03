/** @type {import('prettier').Config} */
export default {
	trailingComma: 'all',
	semi: true,
	singleQuote: true,
	endOfLine: 'lf',
	tabWidth: 2,
	useTabs: true,
	overrides: [
		{
			files: ['*.yml', '*.yaml', '*.css'],
			options: {
				singleQuote: false,
			},
		},
		{
			files: ['package.json'],
			options: {
				useTabs: false,
				singleQuote: false,
			},
		},
	],
};
