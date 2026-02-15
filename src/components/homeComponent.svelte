<script>
	export let about;
</script>

<button
	on:click
	class="layered-image group *:transition-transform *:duration-200 *:ease-in-out"
>
	<img
		src="/E.webp"
		alt="Eli written in squiggly ink"
		class="absolute left-0 top-0 group-hover:-translate-y-1 group-hover:-rotate-6"
	/>
	<img
		src="/L.webp"
		alt="Eli written in squiggly ink"
		class="absolute left-0 top-0 group-hover:-translate-y-2 group-hover:rotate-2"
	/>
	<img
		src="/I.webp"
		alt="Eli written in squiggly ink"
		class="absolute left-0 top-0 group-hover:translate-y-0.5 group-hover:rotate-6"
	/>
	<div class="flex translate-y-24 flex-row justify-center space-x-3">
		<p class={`${!about && 'font-bold'}`}>work</p>
		<p class={`${about && 'font-bold'}`}>about</p>
	</div>
</button>
