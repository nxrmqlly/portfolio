<script>
	import { gsap } from '$lib/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			'.letter',
			{ y: '100%' },
			{
				duration: 1,
				opacity: 1,
				y: 0,
				ease: 'power4.out',

				stagger: 0.1
			}
		);
	});
</script>

<div class="text-container">
	<div class="text-inner">
		<h1 class="name">
			<div class="word">
				{#each 'ritam' as letter}
					<div class="letter">{letter}</div>
				{/each}
			</div>
			{'\xa0'}
			<div class="word">
				{#each 'das' as letter}
					<div class="letter">{letter}</div>
				{/each}
			</div>
		</h1>
		<p class="small-text job">web designer / software engineer / student</p>
	</div>
</div>

<style lang="scss">
	.word {
		display: flex;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}

	.small-text {
		color: var(--color-raisin);

		font-family: 'Cabinet Grotesk', sans-serif;
		font-weight: 650;

		height: min-content;
		width: max-content;
		margin: 0;

		font-size: clamp(0.8rem, 0.3636rem + 1.7455vw, 2rem);
	}

	.job {
		text-align: right;
		width: 100%;
	}

	.name {
		margin: 0;
		// width: 100%;

		text-align: center;
		display: flex;
		width: calc(100%);
		justify-content: space-between;
		// background-color: rebeccapurple;
		line-height: 0.9em;
		gap: 1rem;
		letter-spacing: -0.02em;
		font-family: 'Switzer', sans-serif;
		line-height: 1.2;

		font-weight: 400;
		color: var(--color-raisin);
		font-size: clamp(6rem, -5.4286rem + 36.5714vw, 22rem);
		font-size: clamp(6rem, 0.1818rem + 23.2727vw, 22rem);
		white-space: nowrap;
	}
	.text-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 30%;
		// background-color: red;
	}
	
	@media only screen and (max-width: 600px) {
		.name {
			width: 100%;
			flex-direction: column;
			gap: 0;
			padding-bottom: 1rem;
		}
		.word {
			justify-content: center;
		}
		.job {
			text-align: center;
			width: 100%;
		}
	}
</style>
