<script>
	export let stories, hoveredTab;
</script>

<div class="hidden md:block border-l border-black">
	{#each stories as { story }}
		<img
			class={`home-image ${hoveredTab === story ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in-out`}
			src={`/home-photos/${story.toLowerCase().replace(/\s/g, '-')}.webp`}
			alt={story} />
	{/each}
	<img
		class={`home-image ${hoveredTab === 'home' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in-out`}
		src={`/home-photos/home.webp`}
		alt="Eli cohen in desert" />
</div>
