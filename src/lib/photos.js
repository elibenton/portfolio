export const fallbackPhoto = '/home-photos/home.webp';

/**
 * Returns the story's photo URL, or the home photo if the story has none.
 * Pages are prerendered, so this check runs once at build time.
 * @param {typeof fetch} fetch the `fetch` passed to a load function
 * @param {string} slug
 */
export async function storyPhoto(fetch, slug) {
	const photo = `/home-photos/${slug}.webp`;
	const response = await fetch(photo);
	return response.ok ? photo : fallbackPhoto;
}
