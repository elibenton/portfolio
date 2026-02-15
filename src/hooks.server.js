import { dev } from '$app/environment';

// CSP is now handled by SvelteKit's built-in kit.csp config in svelte.config.js,
// which automatically generates nonces for inline hydration scripts.

const securityHeaders = {
	'referrer-policy': 'strict-origin-when-cross-origin',
	'x-content-type-options': 'nosniff',
	'x-frame-options': 'DENY',
	'permissions-policy': 'camera=(), microphone=(), geolocation=(), payment=()'
};

export const handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	for (const [name, value] of Object.entries(securityHeaders)) {
		response.headers.set(name, value);
	}

	if (!dev && event.url.protocol === 'https:') {
		response.headers.set(
			'strict-transport-security',
			'max-age=31536000; includeSubDomains; preload'
		);
	}

	return response;
};
