<script>
	// import { fade } from 'svelte/transition';

	export let stories, hoveredTab;

	let filteredStores = stories.filter((stories) => stories.publish);

	const colors = {
		'The New York Times': 'bg-yellow-200',
		Radiolab: 'bg-red-200',
		'The New Yorker': 'bg-green-200',
		Freelance: 'bg-orange-200',
		NPR: 'bg-purple-200',
		KALW: 'bg-blue-200'
	};
</script>

<div class="sm:translate-y-4">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-missing-attribute -->
	{#each filteredStores as { title, roles, year, org, description, slug }}
		<a
			href={slug}
			class="home-card group pointer-events-none sm:pointer-events-auto"
			on:mouseenter={() => (hoveredTab = title)}
			on:mouseleave={() => (hoveredTab = 'home')}>
			<div>
				<h1 class="font-sohn text-xl font-medium sm:text-2xl md:text-4xl">
					{title}
				</h1>
				<span class="p-1 font-mono text-sm">
					{year} &bull; {roles instanceof Array ? roles.join(', ') : roles}
				</span>
			</div>
			<div class="shrink-0">
				{#if hoveredTab === title}
					<p>Click for more →</p>
				{:else}
					<span class={`${colors[org]} org-button`}>
						{org}
					</span>
				{/if}
			</div>
		</a>
	{/each}
</div>
