<script>
	import TextSpinner from '../components/textSpinner.svelte';
	import jobs from '$lib/jobs.json';

	let colors = {
		producer: 'bg-yellow-300',
		reporter: 'bg-red-400',
		photographer: 'bg-blue-500',
		developer: 'bg-green-500'
	};

	let hoverStates = {}; // Object to track hover states
	let clickedTab = '';

	function handleMouseEnter(name) {
		clickedTab = '';
		hoverStates[name] = { active: true };
	}

	function handleMouseLeave(name) {
		hoverStates[name] = { active: false };
	}

	function handleClick(name) {
		clickedTab = name;
	}

	function handleFocus(name) {
		clickedTab = name;
	}
</script>

<div class="flex">
	<div
		class="p-2 sm:p-4 flex flex-col justify-between h-[96vh] w-full bg-slate-100 lg:w-3/5 shrink-0 z-10">
		<a
			href="/"
			class="layered-image group *:transition-transform *:duration-200 :*ease-in-out">
			<img
				src="/E.webp"
				alt="Eli written in squiggly ink"
				class="absolute top-0 left-0 group-hover:-rotate-6 group-hover:-translate-y-1" />
			<img
				src="/L.webp"
				alt="Eli written in squiggly ink"
				class="absolute top-0 left-0 group-hover:rotate-2 group-hover:-translate-y-2" />
			<img
				src="/I.webp"
				alt="Eli written in squiggly ink"
				class="absolute top-0 left-0 group-hover:rotate-6 group-hover:translate-y-0.5" />
		</a>
		<ul class="translate-y-10">
			{#each jobs as { name, roles, year, location }}
				<li
					class="home-card"
					on:mouseenter={() => handleMouseEnter(name)}
					on:mouseleave={() => handleMouseLeave(name)}
					on:click={() => handleClick(name)}
					on:focus={() => handleFocus(name)}>
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
							class={`${clickedTab === name ? 'flex' : 'hidden'} p-1 w-2/3 transition-all`}>
							I'm baby narwhal prism DSA biodiesel marfa sartorial tofu,
							stumptown raw denim tbh fashion axe cold-pressed lyft. Narwhal
							fanny pack williamsburg sriracha blog, twee ennui DIY.
							Dreamcatcher cliche chicharrones la croix tonx yuccie sus wolf
							bodega boys hell of ethical try-hard post-ironic. Squid
						</div>
					</div>
					<div class="hidden lg:block space-x-2">
						{#each roles as role}
							<span
								class={`text-sm border border-black font-mono ${colors[role]} rounded-full h-full py-1 px-2`}>
								{role}
							</span>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	</div>
	<div class="hidden md:block border-l border-black">
		<img
			class="home-image"
			src="/eli-new.jpg"
			alt="Eli Cohen in the desert holding a microphone" />
		<img
			class={`home-image ${hoverStates['The New York Times']?.active ? 'opacity-100' : 'opacity-0'}`}
			src="/audio.jpg"
			alt="The entrance ot the New York Times Building" />
		<img
			class={`home-image ${hoverStates['Radiolab']?.active ? 'opacity-100' : 'opacity-0'}`}
			src="/raven.jpg"
			alt="Cover art of Radiolab episode. Illustrated raven holding a red key." />
		<img
			class={`home-image ${hoverStates['The New Yorker']?.active ? 'opacity-100' : 'opacity-0'}`}
			src="/newyorker.jpg"
			alt="Cover art of New Yorker Political Podcast. Four hands holding a sign with title." />
		<img
			class={`home-image ${hoverStates['Mars College']?.active ? 'opacity-100' : 'opacity-0'}`}
			src="/salton.jpg"
			alt="Swing in the middle of the lake with two people silhouetted by the sunset." />
		<img
			class={`home-image ${hoverStates['Watson Fellowship']?.active ? 'opacity-100' : 'opacity-0'}`}
			src="/train.jpg"
			alt="Men hanging out of an open air train in Mumbai." />
	</div>
</div>
<!-- <p class="fixed top-0 left-6 z-10">About Contact</p> -->
<p class="fixed top-20 -left-16 z-10 transform rotate-[270deg]">
	About Contact Source
</p>
