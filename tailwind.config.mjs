/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				sans: ["Poppins", "sans-serif"],
				cinzel: ["Cinzel", "sans-serif"],
				irregardless: ["Irregardless", "sans-serif"]
			},
			colors: {
				'verde-claro': '#bbd1d5',
				'verde-medio': '#698084',
				'verde-oscuro': '#064f5e',
				'verde-dark': '#002b37',
				'marron-claro': '#767573',
				'marron-oscuro': '#303030'
			  },
			  maxWidth: {
				'container': '85vw',
			  },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	  ],
});
