<script lang="ts">
	import { gsap, ScrollTrigger } from '$lib/gsap.js';
	import { onMount } from 'svelte';
	import NameHeaderSVG from '$lib/components/main/header/NameHeaderSVG.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import FirstCard from '$lib/components/main/firstcard/FirstCard.svelte';
	import ScrambleText from '$lib/components/scrambletext/ScrambleText.svelte';
	import SocialLink from '$lib/components/main/firstcard/SocialLink.svelte';
	import Blinds from '$lib/components/blinds/Blinds.svelte';
	import Konami from '$lib/components/konami/Konami.svelte';

	// let blindsRef = $state();
	onMount(async () => {
		let headerTL = gsap.timeline();
		headerTL
			.set('.__nameheader-letter', {
				yPercent: 120
			})
			.set('.__nameheader', {
				clipPath: 'inset(0% 0% 0% 0%)'
			});

		// blindsRef?.reveal();
		// await blindsRef?.completed;
		headerTL.fromTo(
			['.__nameheader-letter'],
			{
				yPercent: 120
			},
			{
				yPercent: 0,
				duration: 1,
				ease: 'power4.out',
				stagger: 0.1
			}
		);

		let sections = document.querySelectorAll('section');
		sections.forEach((section, index) => {
			const container = section.querySelector('.content-container');
			if (!container) return;

			gsap.to(container, {
				rotation: 0,
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top bottom',
					end: 'top 20%',
					scrub: true
				}
			});
			if (sections.length - 1 === index) return;

			ScrollTrigger.create({
				trigger: section,
				start: 'bottom bottom',
				end: 'bottom top',
				pin: true,
				pinSpacing: false
			});
		});

		// gsap.set('.hello-www', {
		// 	x: '-100%'
		// });

		// gsap.to('.hello-www', {
		// 	scrollTrigger: {
		// 		trigger: '.hello-www',
		// 		start: 'top bottom',
		// 		end: 'bottom bottom',
		// 		scrub: true
		// 	},
		// 	x: '0%',
		// 	y: '0%',

		// 	ease: 'none'
		// });
	});

	const copyEmail = () => {
		navigator.clipboard.writeText('ritamdas@duck.com');
	};
</script>

<!-- <Blinds bind:this={blindsRef} startclosed /> -->
<section class="relative top-0 z-10 h-screen overflow-hidden">
	<div class="content-container section-px bg-ghost text-varaccent">
		<div class="pt-10 pb-10">
			<NameHeaderSVG />
		</div>
		<Navbar />
		<div class="mt-10 grid grid-cols-2 gap-40">
			<FirstCard heading="whoami?" classes="text-varaccent">
				Hey, I’m Ritam Das, an eleventh grade high school student based in India, currently learning
				about Machine Learning, delving into competitive programming (send help) and have a thing
				for design. This website serves as my portfolio/blog.
			</FirstCard>
			<FirstCard heading="let's chat!" classes="text-varaccent">
				You can contact me via email at <span
					role="button"
					tabindex="0"
					onkeydown={() => 'aria is annoing'}
					class="cursor-pointer underline"
					onclick={copyEmail}>ritamdas@duck.com</span
				>
				or via discord, @nxrmqlly.
				<br /><br />
				I’m also on
				<SocialLink href="https://www.linkedin.com/in/ritam-das-nxr/" text="LinkedIn" />,
				<SocialLink href="https://github.com/nxrmqlly" text="GitHub" />
				and occasionally on
				<SocialLink href="https://instagram.com/nxrmqlly" text="Instagram" />
			</FirstCard>
		</div>
	</div>
</section>

<section class="hello-www relative top-0 left-0 h-screen w-full overflow-hidden">
	<div class="content-container section-px z-20 bg-varaccent text-ghost">
		<Navbar />
		<div class="grid grid-cols-2 gap-40 text-ghost">

			<FirstCard heading="hello, www!" classes="text-ghost">
				This site isn’t to tell you that I “build digital experiences” or whatever, it’s supposed to
				showcase my personality so, you’ll find a lot of “unhinged” writing around here. The more
				“serious stuff” is on /blog on this website (keep scrolling). <br /> <br /> Honestly, the web
				has become boring, its all just white and blue business websites (oh wait.... this is white and
				blue too) and on the other side of the spectrum, we have the Y2K style websites which are totally
				impossible to read but, I must agree, they are pretty cool.
			</FirstCard>
		</div>
	</div>
</section>

<footer class="relative top-0 left-0 z-30 h-[50vh] overflow-hidden">
	<div
		class="section-px flex h-full items-center justify-center font-gambarino text-3xl text-varaccent"
	>
		good things happen when you reach out!
	</div>
	<span class="lg:visible">
		<Konami />
	</span>
</footer>

<style>
	.content-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		transform: rotate(30deg);
		transform-origin: bottom left;
		will-change: transform;
	}
</style>
