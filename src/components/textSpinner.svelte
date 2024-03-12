<script>
	// Optional: parameters for customization
	let radius = 100; // Radius of the circle the text will wrap around
</script>

<svg
	width={radius * 2}
	height={radius * 2}
	viewBox="0 0 {radius * 2} {radius * 2}"
	xmlns="http://www.w3.org/2000/svg">
	<path
		id="circlePath"
		fill="none"
		stroke="transparent"
		d="M {radius}, {radius} m -{radius}, 0 a {radius},{radius} 0 1,0 {radius *
			2},0 a {radius},{radius} 0 1,0 -{radius * 2},0" />
	<text font-size="10" fill="black">
		<textPath
			xlink:href="#circlePath"
			startOffset="50%"
			text-anchor="middle"
			style="dominant-baseline: central;">
			Eli Benton Cohen - Multimedia Journalist - Eli Benton Cohen - Multimedia -
			Eli Benton Cohen - Multimedia Journalist Journalist
		</textPath>
	</text>
	<!-- Animation Wrapper -->
	<g class="circle">
		<use xlink:href="#circlePath" />
	</g>
</svg>

<style>
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.circle {
		animation: rotate 20s linear infinite;
		transform-origin: center;
	}
</style>
