<script>
	import { browser } from '$app/env';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';

	let { stories, hoveredSlug = $bindable() } = $props();

	let enablePreviewInteractions = false;
	let previewMediaQuery;

	const colors = {
		'New York Times': 'bg-yellow-200',
		Radiolab: 'bg-red-200',
		'The New Yorker': 'bg-green-200',
		'SF Chronicle': 'bg-purple-200',
		NPR: 'bg-purple-200',
		KALW: 'bg-blue-200',
		'SF Standard': 'bg-orange-200'
	};

	const updatePreviewMode = () => {
		enablePreviewInteractions = previewMediaQuery?.matches ?? false;
		if (!enablePreviewInteractions) hoveredSlug = 'home';
	};

	const showPreview = (slug) => {
		if (!enablePreviewInteractions) return;
		hoveredSlug = slug;
	};

	const clearPreview = () => {
		if (!enablePreviewInteractions) return;
		hoveredSlug = 'home';
	};

	onMount(() => {
		if (!browser) return;
		previewMediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
		updatePreviewMode();
		previewMediaQuery.addEventListener('change', updatePreviewMode);
		return () =>
			previewMediaQuery.removeEventListener('change', updatePreviewMode);
	});
</script>

<div class="sm:translate-y-4">
	{#each stories as { title, roles, year, org, slug } (slug)}
		<a
			href={resolve('/[slug]', { slug })}
			class="home-card group"
			onmouseenter={() => showPreview(slug)}
			onmouseleave={clearPreview}
			onfocus={() => showPreview(slug)}
			onblur={clearPreview}
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
				{#if hoveredSlug === slug}
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
