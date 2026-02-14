<script>
	const { heading, children } = $props();
</script>

<div class="card h-[200vh]">
	<h1 class="pt-5 font-gambarino text-7xl text-varaccent">
		{heading}
	</h1>
	<p class="mt-5 font-inter text-2xl font-semibold text-varaccent tracking-tight">
		{@render children()}
	</p>
</div>
