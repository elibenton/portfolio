<script>
	import { onMount } from 'svelte';
	import { fallbackPhoto } from '#lib/photos.js';

	let { stories, hoveredSlug, photos } = $props();

	let activeStory = $derived(
		stories.find((story) => story.slug === hoveredSlug)
	);
	let activePhoto = $derived(
		activeStory ? photos[activeStory.slug] : fallbackPhoto
	);
	let activeAlt = $derived(
		activeStory ? `${activeStory.title} project image` : 'Eli Cohen in desert'
	);

	// Warm the hover photos on desktop so previews swap instantly. Wait for the
	// first mouse movement after load, so they never compete with the main photo.
	onMount(() => {
		if (!matchMedia('(min-width: 768px) and (hover: hover)').matches) return;
		const warm = () => {
			for (const src of new Set(Object.values(photos))) new Image().src = src;
		};
		const onFirstMove = () =>
			window.addEventListener('pointermove', warm, { once: true });
		if (document.readyState === 'complete') onFirstMove();
		else window.addEventListener('load', onFirstMove, { once: true });
		return () => {
			window.removeEventListener('load', onFirstMove);
			window.removeEventListener('pointermove', warm);
		};
	});
</script>

<div class="home-image-rail hidden border-l border-black md:block">
	<!-- The rail is hidden on phones; the media query keeps them from downloading the photo -->
	<picture class="contents">
		<source media="(min-width: 768px)" srcset={activePhoto} />
		<img
			class="home-image"
			src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
			alt={activeAlt}
			decoding="async"
			fetchpriority={activeStory ? 'auto' : 'high'}
		/>
	</picture>
</div>
