<script lang="ts">
	const { classes, heading, children } = $props();
</script>

<div class="card">
	<h1 class="pt-5 font-gambarino text-7xl {classes} tracking-tight">
		{heading}
	</h1>
	<p class="mt-5 font-inter text-2xl font-semibold {classes} tracking-tight">
		{@render children()}
	</p>
</div>
