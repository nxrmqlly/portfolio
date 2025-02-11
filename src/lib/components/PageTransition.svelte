<script>
	import { gsap } from '$lib/gsap';
	import { onNavigate } from '$app/navigation';

	const cover = () =>
		new Promise((resolve) => {
			gsap.fromTo(
				'.transition-overlay .pane',
				{ transformOrigin: 'top' },
				{
					duration: 1,
					stagger: 0.1,
					scaleY: '100%',
					ease: 'power4.inOut',

					onComplete: resolve
				}
			);
		});

	const reveal = () =>
		new Promise((resolve) => {
			gsap.fromTo(
				'.transition-overlay .pane',
				{ transformOrigin: 'bottom' },
				{
					duration: 1,
					scaleY: 0,
					stagger: -0.1,
					ease: 'power4.inOut',

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
	{#each { length: 6 } as i}
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
		transform-origin: right;
		flex: 1;
		background-color: var(--color-raisin);
	}
</style>
