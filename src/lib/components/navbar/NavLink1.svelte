<script>
	import { onMount } from 'svelte';
	import { gsap } from '$lib/gsap';

	const { text, href } = $props();

	let letters = $state([]);


	onMount(() => {
		letters = text.split('').map((char) => (char.trim() === '' ? '\xa0' : char));
	});
</script>

<a {href} class="text">
	<div class="block">
		{#each letters as letter, i}
			<span class="letter" style="--index: {i}">{letter}</span>
		{/each}
	</div>
	<div class="block">
		{#each letters as letter, i}
			<span class="letter" style="--index: {i}">{letter}</span>
		{/each}
	</div>
</a>

<style lang="scss">
	$transition-delay: 0.03s;

	:global(.text) {
		text-decoration: none;
		font-family: 'Cabinet Grotesk';
		font-size: 120px;
		line-height: 140px;
		overflow: hidden;
		color: var(--color-raisin);
		height: 140px;
	}

	:global(.text:hover .letter, .text.play .letter) {
		transform: translateY(-100%);
	}

	:global(.text .block:last-child) {
		color: var(--color-terracotta);
	}

	:global(.text .letter) {
		display: inline-block;
		transition: transform 0.5s cubic-bezier(0.76, 0, 0.024, 1);
		transition-delay: calc(var(--index) * #{$transition-delay});
	}
</style>
