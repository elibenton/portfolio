<script>
	import { fade } from 'svelte/transition';

	export let stories, hoveredTab;

	const colors = {
		'New York Times': 'bg-yellow-200',
		Radiolab: 'bg-red-200',
		'New Yorker': 'bg-blue-200',
		Freelance: 'bg-green-200',
		NPR: 'bg-purple-200'
	};
</script>

<div transition:fade>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-missing-attribute -->
	{#each stories as { title, roles, year, org, description, slug }}
		<a
			href={slug}
			class="home-card group transition-all duration-300 ease-out hover:-translate-y-6 sm:hover:-translate-y-10"
			on:mouseenter={() => (hoveredTab = title)}
			on:mouseleave={() => (hoveredTab = 'home')}
		>
			<div>
				<h1 class="relative font-sohn text-2xl font-medium md:text-4xl">
					{title}
				</h1>
				<span class="relative p-1 font-mono text-sm">
					{year} &bull; {roles instanceof Array ? roles.join(', ') : roles}
				</span>
				<div
					class="max-h-0 w-2/3 overflow-hidden p-1 transition-all duration-200 ease-in-out md:duration-500"
				>
					<ul>
						{#each description as bullet}
							<li>{bullet}</li>
						{/each}
					</ul>
				</div>
			</div>
			<div class="shrink-0">
				<p class={`${hoveredTab === title ? 'opacity-100' : 'opacity-0'}`}>
					Read More ↴
				</p>
				<span
					class={`${hoveredTab === title ? 'opacity-0' : 'opacity-100'} ${colors[org]} org-button`}
				>
					{org}
				</span>
			</div>
		</a>
	{/each}
</div>
