import { dev } from '$app/environment';

const contentSecurityPolicy = [
	"default-src 'self'",
	"base-uri 'self'",
	"frame-ancestors 'none'",
	"object-src 'none'",
	"form-action 'self'",
	"img-src 'self' data: https:",
	"font-src 'self'",
	"script-src 'self'",
	"style-src 'self' 'unsafe-inline'",
	"connect-src 'self'"
].join('; ');

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

	if (!dev) {
		response.headers.set('content-security-policy', contentSecurityPolicy);
	}

	if (!dev && event.url.protocol === 'https:') {
		response.headers.set(
			'strict-transport-security',
			'max-age=31536000; includeSubDomains; preload'
		);
	}

	return response;
};
