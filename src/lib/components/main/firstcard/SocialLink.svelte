<script>
	import ScrambleText from '$lib/components/scrambletext/ScrambleText.svelte';

	const { href, text, classes = '' } = $props();
</script>

<!-- <a class="underline" href="https://github.com/nxrmqlly"><ScrambleText text="GitHub"/></a> -->
<!-- lets make this modular!! -->
<a {href} class="{classes} inline-block underline" target="_blank" rel="noopener noreferrer">
	<ScrambleText {text} />
</a>
