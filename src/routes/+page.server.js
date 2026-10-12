import { publishedStories } from '#lib/stories.js';
import { storyPhoto } from '#lib/photos.js';

export async function load({ fetch }) {
	const photos = await Promise.all(
		publishedStories.map((story) => storyPhoto(fetch, story.slug))
	);

	return {
		photos: Object.fromEntries(
			publishedStories.map((story, i) => [story.slug, photos[i]])
		)
	};
}
