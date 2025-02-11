<script>
	import { gsap } from '$lib/gsap';
	import { onMount } from 'svelte';
	import NavOverlay from './NavOverlay.svelte';
	const { route } = $props();

	let navOpen = $state(false);

	const toggleNav = () => {
		navOpen = !navOpen;
	};
</script>

<NavOverlay bind:navOpen />

<nav class="navbar">
	<a href="/" class="nav-link">ritam das / {route}</a>
	<button id="open-nav" class="nav-btn" onclick={toggleNav}>menu</button>
</nav>

<style lang="scss">
	.navbar {
		z-index: 5;
		background-color: var(--color-ghost);
		position: fixed;
		top: 0;
		left: 0;
		width: calc(100%);
		height: 5vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-link,
	.nav-btn {
		border: none;
		cursor: pointer;
		padding: 1rem;
		background: none;
		font-size: 1.5rem;
		text-decoration: none;
		color: var(--color-raisin);
		font-family: 'Satoshi', sans-serif;
	}
	.nav-btn:hover {
		background: none;
	}
</style>
