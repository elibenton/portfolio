<script>
	let { href = null, label = 'Home', className = '' } = $props();
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
		width="288"
		height="244"
		class="absolute top-0 left-0 group-hover:-translate-y-1 group-hover:-rotate-6"
	/>
	<img
		src="/L.webp"
		alt=""
		width="288"
		height="244"
		class="absolute top-0 left-0 group-hover:-translate-y-2 group-hover:rotate-2"
	/>
	<img
		src="/I.webp"
		alt=""
		width="288"
		height="244"
		class="absolute top-0 left-0 group-hover:translate-y-0.5 group-hover:rotate-6"
	/>
</svelte:element>
