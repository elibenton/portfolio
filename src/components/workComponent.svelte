<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	// import { fade } from 'svelte/transition';

	export let stories, hoveredTab;

	let filteredStores = stories.filter((stories) => stories.publish);
	let enablePreviewInteractions = false;

	const colors = {
		'New York Times': 'bg-yellow-200',
		Radiolab: 'bg-red-200',
		'The New Yorker': 'bg-green-200',
		Freelance: 'bg-orange-200',
		'SF Chronicle': 'bg-purple-200',
		NPR: 'bg-purple-200',
		KALW: 'bg-blue-200'
	};

	const updatePreviewMode = () => {
		if (!browser) return;
		enablePreviewInteractions = window.matchMedia(
			'(hover: hover) and (pointer: fine)'
		).matches;
		if (!enablePreviewInteractions) hoveredTab = 'home';
	};

	const showPreview = (title) => {
		if (!enablePreviewInteractions) return;
		hoveredTab = title;
	};

	const clearPreview = () => {
		if (!enablePreviewInteractions) return;
		hoveredTab = 'home';
	};

	onMount(() => {
		updatePreviewMode();
		window.addEventListener('resize', updatePreviewMode);
		return () => window.removeEventListener('resize', updatePreviewMode);
	});
</script>

<div class="sm:translate-y-4">
	{#each filteredStores as { title, roles, year, org, slug }}
		<a
			href={slug}
			class="home-card group"
			on:mouseenter={() => showPreview(title)}
			on:mouseleave={clearPreview}
			on:focus={() => showPreview(title)}
			on:blur={clearPreview}
		>
			<div>
				<h2
					class="font-sohn text-[1.125rem] font-medium sm:text-[1.35rem] md:text-[2.025rem]"
				>
					{title}
				</h2>
				<span class="block translate-y-1 font-mono text-[0.79rem]">
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
