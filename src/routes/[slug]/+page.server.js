import { allStories, storiesBySlug } from '#lib/stories.js';
import { storyPhoto } from '#lib/photos.js';
import { error } from '@sveltejs/kit';

// Prerender every story, including unpublished ones that are only reachable by direct link
export function entries() {
	return allStories.map((story) => ({ slug: story.slug }));
}

export async function load({ params, fetch }) {
	const story = storiesBySlug[params.slug];

	if (!story) error(404);

	return {
		story,
		photo: await storyPhoto(fetch, story.slug)
	};
}
