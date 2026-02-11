<script>
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';
	import NameHeaderSVG from '$lib/components/main/header/NameHeaderSVG.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import FirstCard from '$lib/components/main/firstcard/FirstCard.svelte';
	import ScrambleText from '$lib/components/scrambletext/ScrambleText.svelte';
	import SocialLink from '$lib/components/main/firstcard/SocialLink.svelte';
	import Blinds from '$lib/components/blinds/Blinds.svelte';

	let blindsRef = $state();
	onMount(async () => {
		let tl = gsap.timeline();

		tl.set('.__nameheader-letter', {
			yPercent: 120
		});

		tl.set('.__nameheader', {
			clipPath: 'inset(0% 0% 0% 0%)'
		});

		blindsRef?.reveal();
		await blindsRef?.completed;

		tl.fromTo(
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
		navigator.clipboard.writeText('ritamdas@duck.com');
	};
</script>

<!-- <Blinds bind:this={blindsRef} startclosed /> -->
<section class="">
	<div class="pt-10 pb-10">
		<NameHeaderSVG />
	</div>
	<Navbar />

	<div class="mt-10 grid grid-cols-2 gap-40">
		<FirstCard heading="whoami?">
			Hey, I’m Ritam Das, an eleventh grade high school student based in India, currently learning
			about Machine Learning, delving into competitive programming (send help) and have a thing for
			design. This website serves as my portfolio/blog.
		</FirstCard>
		<FirstCard heading="let's chat!">
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
</section>
