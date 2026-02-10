<script>
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';
	import NameHeaderSVG from '$lib/components/main/header/NameHeaderSVG.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import FirstCard from '$lib/components/main/firstcard/FirstCard.svelte';

	onMount(() => {
		let tl = gsap.timeline();

		tl.set('.__nameheader', {
			clipPath: 'inset(0% 0% 0% 0%)'
		});

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
		alert('Email copied to clipboard!');
	};
</script>

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
				onkeydown={() => "aria is annoing"}
				class="cursor-pointer underline"
				onclick={copyEmail}>ritamdas@duck.com</span
			>
			or via discord, @nxrmqlly.
			<br /><br />
			I’m also on LinkedIn, GitHub and occasionally on Instagram
		</FirstCard>
	</div>
</section>
