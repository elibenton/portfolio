<script>
	export let stories, hoveredTab;
</script>

<div class="hidden border-l border-black md:block">
	{#each stories as { slug, title }}
		<img
			class={`home-image ${hoveredTab === title ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in-out`}
			src={`/home-photos/${slug}.webp`}
			alt={slug}
		/>
	{/each}
	<img
		class={`home-image ${hoveredTab === 'home' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in-out`}
		src={`/home-photos/home.webp`}
		alt="Eli cohen in desert"
	/>
</div>
