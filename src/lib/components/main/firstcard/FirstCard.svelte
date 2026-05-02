<script>
	const { heading, children, classes = '' } = $props();
</script>

<div class="card {classes}">
	<h1 class="pt-2 font-gambarino text-5xl md:pt-5 md:text-7xl">
		{heading}
	</h1>
	<p class="text-md mt-2 font-inter font-semibold tracking-tight md:mt-5 md:text-xl lg:text-2xl">
		{@render children()}
	</p>
</div>
