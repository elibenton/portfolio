<script>
	import EliLogo from '../../components/eliLogo.svelte';

	let { data } = $props();
	let { title, org, roles, year, description, works } = $derived(data.story);

	let descriptionItems = $derived(
		Array.isArray(description)
			? description.filter(Boolean)
			: description
				? [description]
				: []
	);

	let selectedWorks = $derived(
		Array.isArray(works)
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
			: []
	);

	let byline = $derived(Array.isArray(roles) ? roles.join(', ') : roles);
</script>

<svelte:head>
	<title>{title} | Eli Cohen</title>
	<meta
		name="description"
		content={descriptionItems[0] ||
			`${title} — reporting and production by Eli Benton Cohen.`}
	/>
</svelte:head>

<main class="flex overflow-clip">
	<div
		class="flex h-screen w-full flex-col overflow-y-auto bg-stone-50 px-4 pt-4 pb-16 sm:px-6 sm:pb-20 lg:w-3/5 lg:px-8"
	>
		<header class="mb-8 pt-5 sm:mb-10 sm:pt-6">
			<div class="mb-8 flex items-start justify-between gap-6">
				<div class="layered-image -mt-4 -ml-2">
					<EliLogo href="/" label="Back home" />
				</div>
			</div>

			<h1
				class="max-w-3xl font-sohn text-3xl leading-tight font-medium sm:text-4xl md:text-5xl"
			>
				{title}
			</h1>
			<p
				class="mt-3 flex items-baseline gap-3 font-sohn text-lg leading-tight text-black sm:text-xl"
			>
				<span>{org}</span>
				<span aria-hidden="true">&bull;</span>
				<span>{year}</span>
				<span aria-hidden="true">&bull;</span>
				<span>{byline}</span>
			</p>
		</header>

		<article class="max-w-2xl space-y-5 text-base leading-relaxed sm:text-lg">
			{#if descriptionItems.length > 1}
				{#each descriptionItems.slice(1) as paragraph, i (i)}
					<p>{paragraph}</p>
				{/each}
			{:else if descriptionItems.length}
				{#each descriptionItems as paragraph, i (i)}
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
					{#each selectedWorks as work, i (i)}
						<li class="space-y-1">
							{#if work.link}
								<!-- External article link, so resolve() doesn't apply -->
								<!-- eslint-disable svelte/no-navigation-without-resolve -->
								<a
									href={work.link}
									target="_blank"
									rel="noopener noreferrer"
									class="font-sohn text-xl underline sm:text-2xl"
								>
									{work.title}
								</a>
								<!-- eslint-enable svelte/no-navigation-without-resolve -->
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

	<div class="home-image-rail hidden border-l border-black md:block">
		<!-- The rail is hidden on phones; the media query keeps them from downloading the photo -->
		<picture class="contents">
			<source media="(min-width: 768px)" srcset={data.photo} />
			<img
				class="home-image"
				src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
				alt={`${title} project image`}
				decoding="async"
				fetchpriority="high"
			/>
		</picture>
	</div>
</main>
