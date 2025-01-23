<script>
	import { onMount } from 'svelte';

	const { text, href } = $props();

	let letters = $state([]);

	onMount(() => {
		letters = text.split('').map((char) => (char.trim() === '' ? '\xa0' : char));
	});
</script>

<a {href} class="nav__text">
	<div class="nav__text__block">
		{#each letters as letter, i}
			<span class="nav__text__letter" style="--index: {i}">{letter}</span>
		{/each}
	</div>
	<div class="nav__text__block">
		{#each letters as letter, i}
			<span class="nav__text__letter" style="--index: {i}">{letter}</span>
		{/each}
	</div>
</a>

<style lang="scss">
	$transition-delay: 0.03s;

	:global(.nav__text) {
		text-decoration: none;
		font-family: 'Cabinet Grotesk';
		font-size: clamp(3rem, 2.6364rem + 1.4545vw, 4rem);
		line-height: clamp(3.2rem, 2.8364rem + 1.4545vw, 4.2rem);
		overflow: hidden;
		color: var(--color-raisin);
		height: clamp(3.2rem, 2.8364rem + 1.4545vw, 4.2rem);
	}

	:global(.nav__text:hover .nav__text__letter, .nav__text.play .nav__text__letter) {
		transform: translateY(-100%);
	}

	:global(.nav__text .nav__text__block:last-child) {
		color: var(--color-terracotta);
	}

	:global(.nav__text .nav__text__letter) {
		display: inline-block;
		transition: transform 0.5s cubic-bezier(0.76, 0, 0.024, 1);
		transition-delay: calc(var(--index) * #{$transition-delay});
	}
</style>
