<script>
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
		// {
		// 	name: 'Betteridge Bot',
		// 	roles: ['code'],
		// 	year: '2024',
		// 	location: 'Berkeley, CA.'
		// },
		{
			name: 'Watson Fellowship',
			roles: ['reporting'],
			year: '2019 -> 2020',
			location: ['India, Myanmar']
		}
	];

	let hoverStates = {}; // Object to track hover states

	$: console.log(hoverStates);

	function handleMouseEnter(event, name) {
		hoverStates[name] = {
			width: event.target.offsetWidth
		};
		hoverStates[name] = { active: true };
	}

	function handleMouseMove(event, name) {
		if (hoverStates[name]) {
			hoverStates[name].width = event.pageX - event.target.getBoundingClientRect().left;
		}
	}

	function handleMouseLeave(name) {
		hoverStates[name] = { width: 0 }; // Reset the state for this item
		hoverStates[name] = { active: false };
	}
</script>

<div class="flex">
	<div
		class="p-2 sm:p-4 flex flex-col justify-between min-h-screen w-full bg-white sm:w-3/5 shrink-0"
	>
		<div class="my-8 mx-2">
			<h1 class="text-7xl font-medium">ELI BENTON COHEN</h1>
			<h2 class="textl-2xl font-mono p-2">Multimedia Journalist</h2>
		</div>
		<ul>
			{#each jobs as { id, name, roles, year, location }}
				<li
					class="relative pb-4 border-t border-black -mx-4 px-4 pt-2"
					on:mouseenter={(event) => handleMouseEnter(event, name)}
					on:mousemove={(event) => handleMouseMove(event, name)}
					on:mouseleave={() => handleMouseLeave(name)}
				>
					<div
						class="absolute top-0 left-0 h-full bg-yellow-400"
						style={`width: ${hoverStates[name]?.width}px; transform: translateX(0px); transition: transform 0.7s ease-out;`}
					></div>
					<h1 class="text-2xl sm:text-5xl font-medium relative">{name.toUpperCase()}</h1>
					<span class="font-mono text-sm relative p-1">
						{year} &bull; {location instanceof Array ? location.join(', ') : location}
					</span>
				</li>
			{/each}
		</ul>
	</div>
	<div class="hidden sm:block border-l border-black">
		<img class="home-image" src="/eli.jpg" alt="Eli Cohen in the desert holding a microphone" />
		<img
			class={`home-image ${hoverStates['The New York Times']?.active ? 'opacity-100' : 'opacity-0'}`}
			src="/nyt.jpg"
			alt="The entrance ot the New York Times Building"
		/>
		<img
			class={`home-image ${hoverStates['Radiolab']?.active ? 'opacity-100' : 'opacity-0'}`}
			src="/raven.jpg"
			alt="Cover art of Radiolab episode. Illustrated raven holding a red key."
		/>
		<img
			class={`home-image ${hoverStates['Mars College']?.active ? 'opacity-100' : 'opacity-0'}`}
			src="/salton.jpg"
			alt="Swing in the middle of the lake with two people silhouetted by the sunset."
		/>
	</div>
</div>
