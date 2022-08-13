/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			blue: '#574AE8',
			white: '#FFFFFF',
			gray: '#717171',
			dark: '#1A202C',
			grayLight: '#F3F5F7',
		},
	},
	plugins: [],
};
