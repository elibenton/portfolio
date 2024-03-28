<script>
	export let data;
	let { title, slug, roles, year, description } = data.story;
</script>

<h1>{title}</h1>
<p>{@html description}</p>
