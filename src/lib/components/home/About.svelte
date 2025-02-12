<script>
	import { gsap } from '$lib/gsap';

	import { onMount } from 'svelte';

	onMount(() => {
		// const tl = gsap.timeline();
		gsap.fromTo(
			wordsEls,
			{
				y: '100%'
			},
			{
				y: 0,
				stagger: 0.05,
				ease: 'power4.out',
				duration: 1,
				scrollTrigger: {
					trigger: '.text',
					start: 'top center',
					scrub: false,
					markers: true
				}
			}
		);
	});
	// biome-ignore lint/style/useConst: <explanation>
	let wordsEls = $state([]);

	const words = 'I craft websites that captivate, and build apps that simply work well.'.split(' ');
</script>

<section class="about-section">
	<p class="text">
		<span class="spacer"></span>
		{#each words as word, i}
			<span class="word-frame">
				<span class="word" bind:this={wordsEls[i]}>{word + '\xa0'}</span>
			</span>
		{/each}
	</p>
</section>

<style lang="scss">
	.spacer {
		width: 200px;
		height: 50px;
		display: inline-block;
		// background-color: red;
	}
	.word-frame {
		overflow: hidden;
	}
	.text {
		width: 80%;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
	}

	.word {
		display: flex;
		font-size: clamp(2.3rem, 0.5714rem + 5.7143vw, 7rem);
	}

	.about-section {
		font-family: 'Switzer', sans-serif;

		font-weight: 400;
		height: 80vh;
		flex-direction: column;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media only screen and (max-width: 720px) {
		.about-section {
			justify-content: flex-start;
		}
		.text {
			margin-top: 3rem;

			width: 100%;
		}
		.spacer {
			display: none;
		}
	}
</style>
