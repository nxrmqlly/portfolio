<script>
	import { gsap, SplitText } from '$lib/gsap';
	import { onMount } from 'svelte';

	let windowWidth = $state();
	let split;

	const setSplit = () => {
		console.log('split');
		split = SplitText.create('.hero-text', {
			type: 'lines, words',
			wordsClass: 'word++',
			linesClass: 'line++'
		});
	};

	const animate = () => {
		let tl = gsap.timeline();
		tl.from(split.words, {
			duration: 1,
			// delay: 1,
			yPercent: 100,
			stagger: 0.06,
			autoAlpha: 0,
			ease: 'power4.out'
		}).from(
			'.img-container',
			{
				duration: 1,
				yPercent: 100,
				autoAlpha: 0,
				ease: 'power4.out'
			},
			'<+0.2'
		);
	};

	// onMount(() => {
	// 	const handler = () => {
	// 		windowWidth = window.innerWidth;
	// 		console.log('Resized:', windowWidth);
	// 	};
	// 	window.addEventListener('resize', handler);
	// 	return () => window.removeEventListener('resize', handler);
	// });

	onMount(() => {
		document.fonts.ready.then(() => {
			setSplit();
			animate();
		});
	});
</script>

<section class="hero-sec">
	<h1 class="hero-text">
		<span>
			Ritam Das<span class="img-container">
				<img class="img-rit" src="/ritam.jpg" alt="ritam" />
			</span>
			&nbsp;is a student + web designer,
		</span>
		<span>based in India.</span>
		<span>— building (Savoir)</span>
	</h1>
</section>

<style>
	.hero-sec {
		min-height: 100dvh;

		display: flex;
		align-items: flex-end;

		padding-bottom: 5vh;
	}

	.hero-text {
		font-size: clamp(1.6rem, 3.5vw + 0.25rem, 2.5rem);
		font-weight: 600;
		font-family: 'Inter', sans-serif;
		line-height: 1.2;

		display: flex;
		flex-direction: column;
	}

	.img-rit {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 999px;
		position: relative;
		bottom: 0.3rem;
	}

	.img-container {
		display: inline-block;
		width: clamp(1.6rem, 3.5vw, 2.5rem);
		height: auto;
		aspect-ratio: 1 / 1;
		margin-left: 0.5rem;
		vertical-align: middle;
	}

	:global(.hero-text .line) {
		display: flex;
		align-items: center;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}

	:global(.hero-text .word5, .hero-text .word8, .hero-text .word11) {
		font-family: 'Playfair Display', serif;
		font-style: italic;
		font-weight: 500;
	}

	:global(.hero-text .word14) {
		font-style: italic;
	}
</style>
