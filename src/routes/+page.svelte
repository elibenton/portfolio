<script>
	import jobs from '$lib/jobs.json';
	import HomeLogo from '../components/homeLogo.svelte';
	import PhotoViewer from '../components/photoViewer.svelte';

	const colors = {
		producer: 'bg-yellow-300',
		reporter: 'bg-red-400',
		photographer: 'bg-blue-500',
		developer: 'bg-green-500'
	};

	let clickedTab = 'home';
	let hoveredTab = 'home';

	$: console.log(hoveredTab);
</script>

<div class="flex overflow-clip">
	<div
		class="p-2 sm:p-4 flex flex-col justify-between h-screen w-full bg-slate-100 lg:w-3/5">
		<HomeLogo />
		<div class="translate-y-4">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-missing-attribute -->
			{#each jobs as { name, roles, year, location }}
				<a
					class="home-card hover:-translate-y-10 transition-all duration-300 ease-out"
					on:click={() => (clickedTab = name)}
					on:mouseenter={() => (hoveredTab = name)}
					on:mouseleave={() => ((clickedTab = 'home'), (hoveredTab = 'home'))}>
					<div>
						<h1
							class="text-2xl md:text-4xl lg:text-5xl font-medium font-sohn relative">
							{name}
						</h1>
						<span class="font-mono text-sm relative p-1">
							{year} &bull; {location instanceof Array
								? location.join(', ')
								: location}
						</span>
						<div
							class={`${clickedTab === name ? 'max-h-60' : 'max-h-0'} p-1 w-2/3 transition-all duration-500 ease-in-out overflow-hidden`}>
							I'm baby narwhal prism DSA biodiesel marfa sartorial tofu,
							stumptown raw denim tbh fashion axe cold-pressed lyft. Narwhal
							fanny pack williamsburg sriracha blog, twee ennui DIY.
							Dreamcatcher cliche chicharrones la croix tonx yuccie sus wolf
							bodega boys hell of ethical try-hard post-ironic. I'm baby narwhal
							prism DSA biodiesel marfa sartorial tofu, stumptown raw denim tbh
							fashion axe cold-pressed lyft. Narwhal fanny pack williamsburg
							sriracha blog, twee ennui DIY. Dreamcatcher cliche chicharrones la
							croix tonx yuccie sus wolf bodega boys hell of ethical try-hard
							post-ironic. I'm baby narwhal prism DSA biodiesel marfa sartorial
							fashion axe cold-pressed lyft. Narwhal fanny pack williamsburg
							sriracha blog, twee ennui DIY. Dreamcatcher cliche chicharrones la
							croix tonx yuccie sus wolf bodega boys hell of ethical try-hard
							post-ironic.
						</div>
					</div>
					<div class="hidden lg:contents space-x-2">
						{#each roles as role}
							<span
								class={`text-sm border border-black font-mono ${colors[role]} rounded-full h-full py-1 px-2`}>
								{role}
							</span>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</div>
	<PhotoViewer {jobs} {hoveredTab} />
</div>
<p class="fixed top-20 -left-16 z-10 transform rotate-[270deg]">
	About Contact Source
</p>
