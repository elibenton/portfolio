import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter(),
			// The whole stylesheet is ~17 KB, so inline it instead of a render-blocking request
			inlineStyleThreshold: 25_000,
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
		})
	]
});
