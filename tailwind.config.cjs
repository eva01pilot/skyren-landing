/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily:{
			'Montserrat': ['Montserrat', 'sans-serif'],
			'Montserrat-bold': ['Montserrat', 'sans-serif']
		}
	},
	plugins: [],
}
