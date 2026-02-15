import adapter from '@sveltejs/adapter-cloudflare';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['self'],
				'base-uri': ['self'],
				'frame-ancestors': ['none'],
				'object-src': ['none'],
				'form-action': ['self'],
				'img-src': ['self', 'data:', 'https:'],
				'font-src': ['self'],
				'script-src': ['self'],
				'style-src': ['self', 'unsafe-inline'],
				'connect-src': ['self']
			}
		}
	},
	preprocess: vitePreprocess()
};

export default config;
