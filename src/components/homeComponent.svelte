<script>
	import EliLogo from './eliLogo.svelte';

	let { about, onclick } = $props();
</script>

<button {onclick} class="layered-image" aria-label="About" aria-pressed={about}>
	<EliLogo />
	<div class="mt-2 flex flex-row justify-center space-x-3 sm:mt-3">
		<p class={{ 'font-bold': !about }}>work</p>
		<p class={{ 'font-bold': about }}>about</p>
	</div>
</button>
