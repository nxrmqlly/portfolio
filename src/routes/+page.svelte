<script>
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';
	import HeaderNew from '$lib/components/header/HeaderNew.svelte';

	onMount(() => {
		gsap.fromTo(
			'.star',
			{
				transformOrigin: '50% 50%',
				rotate: 0
			},
			{
				rotate: 360,
				duration: 10,
				ease: 'linear',
				// yoyo: true,
				repeat: -1
			}
		);

		let tl = gsap.timeline();

		tl.set('.header__main', {
			clipPath: 'inset(0% 0% 0% 0%)'
		});

		tl.fromTo(
			['.header__animate-up'],
			{
				yPercent: 120
				// opacity: 0,
			},
			{
				yPercent: 0,
				// opacity: 1,
				duration: 1,
				ease: 'power4.out',
				stagger: 0.1
			}
		)
		tl.fromTo('.box-dither', 
			{
                rotate: 50,
                clipPath: "inset(50% 50% 50% 50%)",
            },
            {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1,
                ease: "expo.out",
                delay: 0.2,

                rotate: -10
            },
			"-=0.9"
		)

		// gsap.fromTo(
		// 	['.header-cont', '.box-dither'],
		// 	{
		// 		filter: 'contrast(2) blur(0px)'
		// 	},
		// 	{
		// 		scrollTrigger: {
		// 			trigger: '.header-cont',
		// 			start: 'top top',
		// 			end: 'bottom top',
		// 			scrub: true,
		// 			markers: false
		// 		},
		// 		filter: 'contrast(5) blur(15px)'
		// 	}
		// );
	});
</script>

<section class="hero-sec">
	<div class="header-cont">
		<HeaderNew />
	</div>
	<!-- <div class="box-dither">
    	<img class="box-img-dither" src="/ritam_dither.png" alt="" srcset="">
	</div> -->
	<!-- <div class="main-grid-parent">
		<div class="">
			Student and web developer, diving into the world of AI/ML with an undying love for design.
		</div>
		<div class="">Sixteen (16) years ago, I was born. That's in 2009 btw.</div>
		<div class="">Based in Calcutta, India. Apparantly it's called the city of joy.</div>
		<div class="">AI/ML nerd with a thing for design. (I suck at both lol)</div>
	</div> -->
</section>
<section class="hero-sec"></section>

<style>
	.box-dither {
		position: absolute;
		top: 50%;

		width: clamp(10rem, 30vw, 25rem);
		
		aspect-ratio: 2/3;
		
		object-fit: cover;

		transform: translateY(-50%) rotate(-7deg);
	}

	.box-img-dither {
		width: 100%;
        height: 100%;
		object-fit: cover;
	}

	.main-grid-parent {
		width: 100%;

		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		gap: 6%;

		color: var(--accent-color);

		font-size: clamp(1.2rem, 2vw, 24px);
		font-weight: 600;
		line-height: 1.2;
	}

	.main-grid-parent div {
		/* border: 1px solid #000; */
		/* font-size: 30px; */
		text-align: left;
	}
	.hero-sec {
		margin-top: 10rem;
		/* height: 100dvh; */

		display: flex;
		/* justify-content: center; */
		align-items: center;
		flex-direction: column;

		font-family: 'Inter', sans-serif;
	}

	.header-cont {
		/* margin-top: clamp(6rem, 16vh - 2rem, 8rem);
		margin-bottom: clamp(3rem, 10vh - 2rem, 8rem); */

		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 767px) {
		.main-grid-parent {
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(4, 1fr);

			gap: 4%;
		}
	}
	@media (min-width: 768px) and (max-width: 991px) {
		.main-grid-parent {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);

			gap: 4%;
		}
	}
</style>
