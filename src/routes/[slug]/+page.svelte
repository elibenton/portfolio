<script>
	export let data;
	let { title, slug, roles, year, description, works } = data.story;
</script>

<svelte:head>
	<title>{title} | Eli Cohen</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="m-2 grid grid-cols-1 gap-4 sm:m-8 sm:grid-cols-2">
	<div>
		<h1 class="text-4xl font-semibold">{title}</h1>
		<p>{roles}</p>
		<p>{year}</p>
		<p>{description}</p>
	</div>
	<div>
		{#if works}
			<h2>Selected Works</h2>
			<ul>
				{#each works as { title, date, description, link }}
					<li>
						<a href={link}>{title}</a>
						<p>{date}</p>
						<p>{description}</p>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
