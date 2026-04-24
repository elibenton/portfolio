<script>
	export let href = null;
	export let label = 'Home';
	export let className = '';
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	aria-label={href ? label : undefined}
	class={`eli-logo group ${className}`.trim()}
>
	<img
		src="/E.webp"
		alt=""
		class="absolute left-0 top-0 group-hover:-translate-y-1 group-hover:-rotate-6"
	/>
	<img
		src="/L.webp"
		alt=""
		class="absolute left-0 top-0 group-hover:-translate-y-2 group-hover:rotate-2"
	/>
	<img
		src="/I.webp"
		alt=""
		class="absolute left-0 top-0 group-hover:translate-y-0.5 group-hover:rotate-6"
	/>
</svelte:element>
