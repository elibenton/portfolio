<script>
	export let stories, hoveredSlug;

	$: activeStory = stories.find((story) => story.slug === hoveredSlug);
	$: activeSlug = activeStory?.slug ?? 'home';
	$: activeAlt = activeStory
		? `${activeStory.title} project image`
		: 'Eli Cohen in desert';
</script>

<div class="home-image-rail hidden border-l border-black md:block">
	<img
		class="home-image"
		src={`/home-photos/${activeSlug}.webp`}
		alt={activeAlt}
		decoding="async"
		loading="eager"
		fetchpriority={activeSlug === 'home' ? 'high' : 'auto'}
	/>
</div>
