import stories from '$lib/stories.json';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const story = stories.find((story) => story.slug === params.slug);

	if (!story) throw error(404);

	return {
		story
	};
}
