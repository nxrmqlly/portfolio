<script lang="ts">
	import { gsap, ScrollTrigger } from '$lib/gsap.js';
	import { onMount } from 'svelte';
	import NameHeaderSVG from '$lib/components/main/header/NameHeaderSVG.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import FirstCard from '$lib/components/main/firstcard/FirstCard.svelte';
	import ScrambleText from '$lib/components/scrambletext/ScrambleText.svelte';
	import SocialLink from '$lib/components/main/firstcard/SocialLink.svelte';
	import Blinds from '$lib/components/blinds/Blinds.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	// let blindsRef = $state();

	const varColors = [
		'oklch(49.378% 0.27583 266.272)', // blue
		'oklch(65.24% 0.2232 8.01)' // pink

		// TODO: decide if u want more colors
		// 'oklch(65.414% 0.12842 169.843)' // teal
	];
	// when header is clicked, change sitewide color

	const handleHeaderClick = () => {
		const currentColor = getComputedStyle(document.documentElement)
			.getPropertyValue('--varaccent')
			.trim();
		const currentIndex = varColors.findIndex((color) => color === currentColor);
		const nextColor = varColors[(currentIndex + 1) % varColors.length];
		document.documentElement.style.setProperty('--varaccent', nextColor);
	};

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
	});

	const copyEmail = () => {
		navigator.clipboard.writeText('hey@ritam.cc');
	};
</script>

<!-- <Blinds bind:this={blindsRef} startclosed /> -->
<section class="section-px sticky top-0 z-10 h-screen overflow-hidden">
	<div class="py-3 md:py-10" onmousedown={handleHeaderClick} role="button" tabindex="0">
		<NameHeaderSVG />
	</div>
	<div class="nav-cont sticky bg-ghost text-varaccent">
		<Navbar />
	</div>
	<div class="grid grid-rows-2 gap-15 md:mt-10 md:grid-cols-2 md:gap-20 lg:gap-40">
		<FirstCard heading="whoami?" classes="text-varaccent">
			hello, I’m ritam, an twelfth grade high school student based in india, currently building
			hardware projects. also, i have a thing for design. this website serves as my portfolio/blog.
			<br /><br />
			working on my hackathon event,
			<SocialLink href="https://ccuhacks.in" text="@ccuhacks 2026" /> -- you can come too!
		</FirstCard>
		<FirstCard heading="let's chat!" classes="text-varaccent">
			You can contact me via email at <span
				role="button"
				tabindex="0"
				onkeydown={() => alert('copied to clipboard!')}
				class="cursor-pointer underline"
				onclick={copyEmail}>hey@ritam.cc</span
			>
			<br /><br />
			I’m also on
			<SocialLink href="https://www.linkedin.com/in/ritam-das-nxr/" text="LinkedIn" />,
			<SocialLink href="https://github.com/nxrmqlly" text="GitHub" />
			and occasionally on
			<SocialLink href="https://instagram.com/nxrmqlly" text="Instagram" />
		</FirstCard>
	</div>
</section>

<section
	class="hello-www section-px sticky top-0 left-0 z-20 min-h-screen w-full overflow-hidden bg-varaccent"
>
	<div class="text-ghost">
		<Navbar />
	</div>
	<div
		class=" flex flex-col items-center justify-center gap-15 text-ghost md:mt-10 md:grid-cols-2 md:gap-10 lg:gap-15"
	>
		<div class="pt-5 font-gambarino text-5xl md:pt-5 md:text-7xl">forgive me im just a teen.</div>
		<p
			class="text-md mt-2 max-w-[90%] text-center font-inter font-semibold tracking-tight md:mt-5 md:max-w-[70%] md:text-xl lg:max-w-[50%] lg:text-2xl"
		>
			This site isn’t to tell you that I “build digital experiences” or whatever, it’s supposed to
			showcase my personality so, you’ll find a lot of “unhinged” writing around here. The more
			“serious stuff” is on /blog on this website (keep scrolling -- but the website isnt finished).
			<br /> <br />
			Honestly, the web has become boring, its all just white and blue business websites (oh wait....
			this is white and blue too) and on the other side of the spectrum, we have the Y2K style websites
			which are totally impossible to read but, I must agree, they are pretty cool.
		</p>
		<!-- <div class="grid grid-cols-2 gap-10 md:grid-rows-2">
			<div class="h-20 w-20 bg-red-400">
				
				<img src="/ritam_dither.png" alt="me" />
			</div>
			<div class="h-20 w-20 bg-red-400"></div>
		</div> -->
	</div>
</section>

<section
	class="section-px relative top-0 left-0 z-20 min-h-screen w-full overflow-hidden bg-white text-varaccent"
>
	<div class="text-varaccent">
		<Navbar />
	</div>
	<div
		class="flex flex-col items-center justify-center gap-15 md:mt-10 md:grid-cols-2 md:gap-10 lg:gap-15"
	>
		<FirstCard heading="some of my stuff that i think im proud of">
			<div>i told you</div>
			<div>the website was</div>
			<div>not finished</div>
			<div>have a look at my <SocialLink href="https://github.com/nxrmqlly" text="GitHub" /></div>
		</FirstCard>
	</div>
</section>

<Footer />
