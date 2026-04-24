import stories from './stories.json';

export const allStories = stories;
export const publishedStories = stories.filter((story) => story.publish);

export const storiesBySlug = Object.fromEntries(
	stories.map((story) => [story.slug, story])
);

export const publishedStoriesBySlug = Object.fromEntries(
	publishedStories.map((story) => [story.slug, story])
);
