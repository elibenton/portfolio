<script>
	import stories from '$lib/stories.json';

	import Photos from '../components/photoComponent.svelte';
	import Works from '../components/workComponent.svelte';
	import About from '../components/aboutComponent.svelte';
	import Home from '../components/homeComponent.svelte';

	let hoveredTab = 'home';
	let about = false;

	$: console.log('HOVERED:', hoveredTab);
	$: console.log('ABOUT:', about);
</script>

<div class="flex overflow-clip">
	<div
		class="flex h-screen w-full flex-col justify-between bg-slate-100 px-4 sm:p-4 lg:w-3/5">
		<Home {about} on:click={() => (about = !about)} />
		{#if about}
			<About />
		{:else}
			<Works {stories} bind:hoveredTab />
		{/if}
	</div>
	<Photos {stories} {hoveredTab} />
</div>
