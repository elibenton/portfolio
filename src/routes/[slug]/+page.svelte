<script>
	import EliLogo from '../../components/eliLogo.svelte';

	export let data;
	let { title, slug, org, roles, year, description, works } = data.story;

	let imageSrc = `/home-photos/${slug}.webp`;

	const descriptionItems = Array.isArray(description)
		? description.filter(Boolean)
		: description
			? [description]
			: [];

	const selectedWorks = Array.isArray(works)
		? works
				.map((work) => {
					if (typeof work === 'string') {
						return {
							title: 'External Link',
							date: '',
							description: '',
							link: work
						};
					}

					return {
						title: work.title || 'Untitled',
						date: work.date || '',
						description: work.description || '',
						link: work.link || ''
					};
				})
				.filter((work) => work.title !== 'Series Page')
		: [];

	const byline = Array.isArray(roles) ? roles.join(', ') : roles;
</script>

<svelte:head>
	<title>{title} | Eli Cohen</title>
	<meta
		name="description"
		content={descriptionItems[0] ||
			`${title} — reporting and production by Eli Benton Cohen.`}
	/>
</svelte:head>

<div class="flex overflow-clip">
	<div
		class="flex h-screen w-full flex-col overflow-y-auto bg-stone-50 px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:w-3/5 lg:px-8"
	>
		<header class="mb-8 pt-5 sm:mb-10 sm:pt-6">
			<div class="mb-8 flex items-start justify-between gap-6">
				<div>
					<EliLogo href="/" label="Back home" className="story-home-button" />
				</div>
				<div class="max-w-xl pt-2 text-right">
					<p
						class="font-mono text-xs uppercase tracking-[0.18em] text-black/70 sm:text-sm"
					>
						{org}
					</p>
					<p class="mt-1 font-mono text-xs text-black/70 sm:text-sm">
						{year} &bull; {byline}
					</p>
				</div>
			</div>

			<h1
				class="max-w-3xl font-sohn text-3xl font-medium leading-tight sm:text-4xl md:text-5xl"
			>
				{title}
			</h1>
		</header>

		<article class="max-w-2xl space-y-5 text-base leading-relaxed sm:text-lg">
			{#if descriptionItems.length > 1}
				{#each descriptionItems.slice(1) as paragraph}
					<p>{paragraph}</p>
				{/each}
			{:else if descriptionItems.length}
				{#each descriptionItems as paragraph}
					<p>{paragraph}</p>
				{/each}
			{:else}
				<p>
					Story notes coming soon. This page layout is ready for full text,
					context, and reporting details.
				</p>
			{/if}
		</article>

		{#if selectedWorks.length > 1}
			<section class="mt-10 max-w-2xl border-t border-black pt-6">
				<h2 class="font-sohn text-2xl font-medium sm:text-3xl">
					Selected Works
				</h2>
				<ul class="mt-4 space-y-6">
					{#each selectedWorks as work}
						<li class="space-y-1">
							{#if work.link}
								<a
									href={work.link}
									target="_blank"
									rel="noopener noreferrer"
									class="font-sohn text-xl underline sm:text-2xl"
								>
									{work.title}
								</a>
							{:else}
								<p class="font-sohn text-xl sm:text-2xl">{work.title}</p>
							{/if}

							{#if work.date}
								<p class="font-mono text-xs sm:text-sm">{work.date}</p>
							{/if}

							{#if work.description}
								<p class="text-sm sm:text-base">{work.description}</p>
							{/if}
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	</div>

	<div class="hidden border-l border-black md:block">
		<img
			class="home-image"
			src={imageSrc}
			alt={`${title} project image`}
			decoding="async"
			loading="eager"
			on:error={() => (imageSrc = '/home-photos/home.webp')}
		/>
	</div>
</div>
