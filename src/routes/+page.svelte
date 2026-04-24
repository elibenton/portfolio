<script>
	import { publishedStories } from '$lib/stories';

	import Photos from '../components/photoComponent.svelte';
	import Works from '../components/workComponent.svelte';
	import About from '../components/aboutComponent.svelte';
	import Home from '../components/homeComponent.svelte';

	let hoveredSlug = 'home';
	let about = false;
</script>

<svelte:head>
	<link
		rel="preload"
		as="image"
		type="image/webp"
		href="/home-photos/home.webp"
	/>
	<link
		rel="preload"
		as="image"
		type="image/webp"
		href="/home-photos/san-francisco-chronicle.webp"
	/>
	<link
		rel="preload"
		as="image"
		type="image/webp"
		href="/home-photos/radio-pacific.webp"
	/>

	<title>Eli Benton Cohen | Freelance Journalist</title>
	<meta
		name="description"
		content="Eli Benton Cohen is a audio producer, reporter, and photographer."
	/>
	<meta
		name="tags"
		content="Radio, Journalist, Freelance, Producer, NPR, New York Times, Eli, Eli Benton, Eli Benton Cohen, Eli COhen, Podcast, Podcast Producer, Freelance Journalist, Radiolab, New Yorker, Audio Journalist, Audio, Radio Producer"
	/>
	<meta name="author" content="Eli Benton Cohen" />
	<meta http-equiv="Content-Language" content="en-us" />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://eli.fm" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Eli Benton Cohen | Freelance Journalist" />
	<meta
		property="og:description"
		content="Eli Benton Cohen is a audio producer, reporter, and photographer."
	/>
	<meta property="og:image" content="/home OG.jpg" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="eli.fm" />
	<meta property="twitter:url" content="https://eli.fm" />
	<meta
		name="twitter:title"
		content="Eli Benton Cohen | Freelance Journalist"
	/>
	<meta
		name="twitter:description"
		content="Eli Benton Cohen is a audio producer, reporter, and photographer."
	/>
	<meta name="twitter:image" content="/home OG.jpg" />
</svelte:head>

<div class="home-page flex overflow-clip">
	<div
		class="flex h-screen w-full flex-col justify-between bg-stone-50 px-4 pt-4 sm:p-4 lg:w-3/5"
	>
		<Home {about} on:click={() => (about = !about)} />
		{#if about}
			<About />
		{:else}
			<Works stories={publishedStories} bind:hoveredSlug />
		{/if}
	</div>
	<Photos stories={publishedStories} {hoveredSlug} />
</div>
