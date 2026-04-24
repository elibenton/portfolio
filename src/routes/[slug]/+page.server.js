import { storiesBySlug } from '$lib/stories';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const story = storiesBySlug[params.slug];

	if (!story) throw error(404);

	return {
		story
	};
}
