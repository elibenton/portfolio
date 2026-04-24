<script>
	import EliLogo from './eliLogo.svelte';

	export let about;
</script>

<button on:click class="layered-image">
	<EliLogo />
	<div class="mt-2 flex flex-row justify-center space-x-3 sm:mt-3">
		<p class={`${!about && 'font-bold'}`}>work</p>
		<p class={`${about && 'font-bold'}`}>about</p>
	</div>
</button>
