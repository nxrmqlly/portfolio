<script>
	import ScrambleText from '$lib/components/scrambletext/ScrambleText.svelte';
	import { ArrowLeft } from '@lucide/svelte';
</script>

<div>
	<h1>This page is a work in progress.</h1>
	<a href="/"><ArrowLeft /><ScrambleText text="go back"/></a>
</div>

<style>
	div {
		min-height: 100dvh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		font-family: 'Inter', sans-serif;
		font-weight: 600;
		font-size: 20px;

	}

	h1 {
		font-size: 24px;
		margin-bottom: 1rem;
	}

	a {
		display: inline-flex;
		gap: 0.5rem;
		align-items: center;
		color: var(--accent-color);
	}

	a:hover {
		text-decoration: underline;
	}
</style>
