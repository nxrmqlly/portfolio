<script>
	import { gsap } from '$lib/gsap';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let windowWidth = 0;
	let panes = $state();
	
    onMount(() => {

        const handler = () => {
			windowWidth = window.innerWidth
			panes = Math.max(5, Math.floor(windowWidth / 100));
			panes -= panes % 2; // ensure even number
		};

		window.addEventListener("resize", handler);
		
		handler(); // set once on mount

		return () => window.removeEventListener("resize", handler);
    });

	
	const cover = () =>
		new Promise((resolve) => {
			gsap.fromTo(
				'.transition-overlay .pane',
				{ transformOrigin: 'left' },
				{
					duration: 0.5,
					stagger: 0.04,
					scaleX: '101%',
					ease: 'power4.out',

					onComplete: resolve
				}
			);
		});

	const reveal = () =>
		new Promise((resolve) => {
			gsap.fromTo(
				'.transition-overlay .pane',
				{ transformOrigin: 'right' },
				{
					duration: 0.5,
					scaleX: 0,
					stagger: 0.04,
					ease: 'power4.out',

					onComplete: resolve
				}
			);
		});

	onNavigate((navigation) => {
		if (navigation.from.url.pathname === navigation.to.url.pathname) return;

		// biome-ignore lint/suspicious/noAsyncPromiseExecutor: <weird rule>
		return new Promise(async (resolve) => {
			console.log('navigation');
			await cover();
			resolve();
			await navigation.complete;
			console.log('navigation complete');
			await reveal();
		});
	});
</script>

<div class="transition-overlay">
	{#each {length: panes} as _}
	<div class="pane"></div>
	{/each}
</div>

<style>
	.transition-overlay {
		opacity: 1;
		pointer-events: none;
		display: flex;
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		margin: 0;
		padding: 0;
		z-index: 1000;
		overflow: hidden;
	}
	.pane {
		transform: scaleX(0);
		flex: 1;
		background-color: var(--accent-color);
		will-change: transform;
	}
</style>
