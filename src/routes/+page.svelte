<script>
	import TextSpinner from '../components/textSpinner.svelte';

	let colors = {
		production: 'bg-yellow-300',
		reporting: 'bg-red-400',
		photography: 'bg-blue-500',
		code: 'bg-green-500'
	};

	let jobs = [
		{
			name: 'The New York Times',
			roles: ['production'],
			year: '2023',
			location: 'New York City, NY'
		},
		{
			name: 'The New Yorker',
			roles: ['production'],
			year: '2022 -> 2023',
			location: 'New York City, NY'
		},
		{
			name: 'Radiolab',
			roles: ['production', 'reporting'],
			year: '2021 -> 2023',
			location: 'Kazakhstan'
		},
		{
			name: 'Mars College',
			roles: ['photography'],
			year: '2022',
			location: 'Bombay Beach, CA'
		},
		// // {
		// // 	name: 'Betteridge Bot',
		// // 	roles: ['code'],
		// // 	year: '2024',
		// // 	location: 'Berkeley, CA.'
		// // },
		{
			name: 'Watson Fellowship',
			roles: ['reporting', 'photography'],
			year: '2019 -> 2020',
			location: ['India, Myanmar']
		}
	];

	let hoverStates = {}; // Object to track hover states

	$: console.log(hoverStates['The New York Times']?.active);

	function handleMouseEnter(name) {
		hoverStates[name] = { active: true };
	}

	function handleMouseLeave(name) {
		hoverStates[name] = { active: false };
	}
</script>

<div class="flex">
	<div
		class="p-2 sm:p-4 flex flex-col justify-between h-[96vh] w-full bg-white lg:w-3/5 shrink-0">
		<img
			src="/ELI.webp"
			alt="Eli written in squiggly ink"
			class="max-w-64 sm:w-48 sm:h-48 m-4 self-center sm:self-start" />
		<ul class="translate-y-10">
			{#each jobs as { name, roles, year, location }}
				<li
					class={`relative pb-6 pt-3 px-3 border-t border-black -mx-4 -mb-[3.65rem] hover:-translate-y-10 flex justify-between bg-white transition-transform duration-100 ease-in-out`}
					on:mouseenter={() => handleMouseEnter(name)}
					on:mouseleave={() => handleMouseLeave(name)}>
					<div>
						<h1
							class="text-2xl md:text-4xl lg:text-5xl font-medium font-sohn relative">
							{name.toUpperCase()}
						</h1>
						<span class="font-mono text-sm relative p-1">
							{year} &bull; {location instanceof Array
								? location.join(', ')
								: location}
						</span>
					</div>
					<div class="hidden lg:block space-x-2 transform -translate-y-6">
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
			src="/eli.jpg"
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
