<script>
	export let jobs, hoveredTab;
</script>

<div class="hidden md:block border-l border-black">
	{#each jobs as { name }}
		<img
			class={`home-image ${hoveredTab === name ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in-out`}
			src={`/home-photos/${name.toLowerCase().replace(/\s/g, '-')}.webp`}
			alt={name} />
	{/each}
	<img
		class={`home-image ${hoveredTab === 'home' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-in-out`}
		src={`/home-photos/home.webp`}
		alt="Eli cohen in desert" />
</div>
