<script>
	// import { fade } from 'svelte/transition';

	export let stories, hoveredTab;

	let filteredStores = stories.filter((stories) => stories.publish);

	const colors = {
		'The New York Times': 'bg-yellow-200',
		Radiolab: 'bg-red-200',
		'The New Yorker': 'bg-green-200',
		Freelance: 'bg-orange-200',
		'SF Chronicle': 'bg-purple-200',
		NPR: 'bg-purple-200',
		KALW: 'bg-blue-200'
	};
</script>

<div class="sm:translate-y-4">
	{#each filteredStores as { title, roles, year, org, slug }}
		<a
			href={slug}
			class="home-card group"
			on:mouseenter={() => (hoveredTab = title)}
			on:mouseleave={() => (hoveredTab = 'home')}
			on:focus={() => (hoveredTab = title)}
			on:blur={() => (hoveredTab = 'home')}
		>
			<div>
				<h2
					class="font-sohn text-[1.125rem] font-medium sm:text-[1.35rem] md:text-[2.025rem]"
				>
					{title}
				</h2>
				<span class="block translate-y-1 px-1 pb-1 font-mono text-[0.79rem]">
					{year} &bull; {roles instanceof Array ? roles.join(', ') : roles}
				</span>
			</div>
			<div class="shrink-0">
				{#if hoveredTab === title}
					<p class="text-[0.9rem]">Click for more →</p>
				{:else}
					<span class={`${colors[org]} org-button`}>
						{org}
					</span>
				{/if}
			</div>
		</a>
	{/each}
</div>
