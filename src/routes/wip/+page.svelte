<script>
	import ScrambleText from '$lib/components/scrambletext/ScrambleText.svelte';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<div
	class="flex min-h-screen flex-col items-center justify-center font-inter text-lg font-semibold"
>
	<h1 class="mb-4 text-2xl">This page is a work in progress.</h1>
	<a href="/" class="inline-flex items-center gap-2 text-varaccent hover:underline">
		<ArrowLeft />
		<ScrambleText text="go back" />
	</a>
</div>
