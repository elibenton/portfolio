<script>
	// import { fade } from 'svelte/transition';

	export let stories, hoveredTab;

	const colors = {
		'New York Times': 'bg-yellow-200',
		Radiolab: 'bg-red-200',
		'New Yorker': 'bg-blue-200',
		Freelance: 'bg-green-200',
		NPR: 'bg-purple-200'
	};
</script>

<div class="translate-y-4">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-missing-attribute -->
	{#each stories as { title, roles, year, org, description, slug }}
		<a
			href={slug}
			class="home-card group"
			on:mouseenter={() => (hoveredTab = title)}
			on:mouseleave={() => (hoveredTab = 'home')}>
			<div>
				<h1 class="font-sohn text-2xl font-medium md:text-4xl">
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
