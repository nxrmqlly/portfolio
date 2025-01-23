<script>
	import { gsap } from '$lib/gsap';
	import { onNavigate } from '$app/navigation';

	let navigatingTo = $state('');

	const cover = () =>
		new Promise((resolve) => {
			const tl = gsap.timeline({ paused: true });
			tl.to('.transition-overlay .pane', {
				duration: 1,
				stagger: -0.05,

				scaleY: '100%',
				ease: 'power4.inOut'
			}).to('navigating-text', { y: '100%', onComplete: resolve, duration: 1 }, '<');

			tl.play();
		});

	const reveal = () =>
		new Promise((resolve) => {
			gsap.to('.transition-overlay .pane', {
				duration: 1,
				scaleY: 0,
				stagger: -0.05,
				onComplete: resolve,

				ease: 'power4.inOut'
			});
		});

	onNavigate((navigation) => {
		if (navigation.from.url.pathname === navigation.to.url.pathname) return;

		navigatingTo = navigation.to.url.pathname;

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
	{#each { length: 5 } as i}
		<div class="pane"></div>
	{/each}
</div>

<style lang="scss">
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
		transform: scaleY(0);
        transform-origin: top;
		flex: 1;
		background-color: var(--color-raisin);
	}
</style>
