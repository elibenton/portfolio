<script>
	import stories from '$lib/stories.json';
	import HomeLogo from '../components/homeLogo.svelte';
	import PhotoViewer from '../components/photoViewer.svelte';

	const colors = {
		'New York Times': 'bg-yellow-200',
		Radiolab: 'bg-red-200',
		'New Yorker': 'bg-blue-200',
		Freelance: 'bg-green-200',
		NPR: 'bg-purple-200'
	};

	let clickedTab = 'home';
	let hoveredTab = 'home';

	$: console.log(hoveredTab);
</script>

<div class="flex overflow-clip">
	<div
		class="px-4 sm:p-4 flex flex-col justify-between h-screen w-full bg-slate-100 lg:w-3/5">
		<HomeLogo />
		<div class="translate-y-4">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-missing-attribute -->
			{#each stories as { story, roles, year, org, description }}
				<a
					class="home-card hover:-translate-y-6 sm:hover:-translate-y-10 transition-all duration-300 ease-out group"
					on:click={() => (clickedTab = story)}
					on:mouseenter={() => (hoveredTab = story)}
					on:mouseleave={() => ((clickedTab = 'home'), (hoveredTab = 'home'))}>
					<div>
						<h1 class="text-2xl md:text-4xl font-medium font-sohn relative">
							{story}
						</h1>
						<span class="font-mono text-sm relative p-1">
							{year} &bull; {roles instanceof Array ? roles.join(', ') : roles}
						</span>
						<div
							class={`${clickedTab === story ? 'max-h-60' : 'max-h-0'} p-1 w-2/3 transition-all duration-200 md:duration-500 ease-in-out overflow-hidden`}>
							<ul>
								{#each description as bullet}
									<li>{bullet}</li>
								{/each}
							</ul>
						</div>
					</div>
					<div class="shrink-0">
						<p
							class={`${hoveredTab === story && clickedTab !== story ? 'opacity-100' : 'opacity-0'}`}>
							Read More ↴
						</p>
						<span
							class={`${hoveredTab === story && clickedTab !== story ? 'opacity-0' : 'opacity-100'} text-sm border border-black font-mono ${colors[org]} rounded-full h-full py-1 px-2`}>
							{org}
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<PhotoViewer {stories} {hoveredTab} />
</div>
<!-- <p class="fixed top-20 -left-16 z-10 transform rotate-[270deg]">
	About Contact Source
</p> -->
