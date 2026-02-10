<script>
	import { gsap } from '$lib/gsap';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let windowWidth = 0;
	let panes = $state();

	onMount(() => {
		const handler = () => {
			windowWidth = window.innerWidth;
			panes = Math.max(5, Math.floor(windowWidth / 100));
			panes -= panes % 2; // ensure even number
		};

		window.addEventListener('resize', handler);

		handler(); // set once on mount

		return () => window.removeEventListener('resize', handler);
	});

	const cover = () =>
		new Promise((resolve) => {
			gsap.set('.transition-overlay .pane', { transformOrigin: 'left' });

			gsap.to('.transition-overlay .pane', {
				duration: 0.5,
				scaleX: 1.01,
				stagger: 0.04,
				ease: 'power4.out',
				onComplete: resolve
			});
		});

	const reveal = () =>
		new Promise((resolve) => {
			gsap.set('.transition-overlay .pane', { transformOrigin: 'right' });
			gsap.to('.transition-overlay .pane', {
				duration: 0.5,
				scaleX: 0,
				stagger: 0.04,
				ease: 'power4.out',
				onComplete: resolve
			});
		});

	onNavigate((navigation) => {
		if (navigation.from.url.pathname === navigation.to.url.pathname) return;
		return new Promise(async (resolve) => {
			await cover();
			resolve(); // let the navigation happen

			await navigation.complete;
			await reveal();
		});
	});
</script>

<div class="transition-overlay w-screen h-screen pointer-events-none fixed top-0 left-0 z-9999 flex p-0 m-0 overflow-hidden">
	{#each { length: panes } as _}
		<div class="pane transform- flex-1 bg-varaccent will-change-transform"></div>
	{/each}
</div>

<style>
	.pane {
		transform: scaleX(0);
	}
</style>
