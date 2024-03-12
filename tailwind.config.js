/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				timezone: ['timezone-regular', 'ui-sans-serif', 'system-ui'],
				'timezone-italic': ['timezone-italic', 'ui-sans-serif', 'system-ui'],
				'timezone-monospace': [
					'timezone-monospace',
					'ui-sans-serif',
					'system-ui'
				],
				sohn: ['sohn-buch', 'ui-sans-serif']
			},
			keyframes: {
				rotate: {
					from: {
						transform: 'rotate(0deg)'
					},
					to: {
						transform: 'rotate(360deg)'
					}
				}
			},
			animation: {
				rotate: 'rotate 20s linear infinite'
			}
		}
	},
	plugins: []
};
