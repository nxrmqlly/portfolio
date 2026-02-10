<script>
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { onMount } from 'svelte';
	import NameHeaderSVG from '$lib/components/header/NameHeaderSVG.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	
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
		)
	});
</script>

<section class="h-[200vh]">
	<div class="pt-10 pb-10">
		<NameHeaderSVG />
	</div>
	<Navbar />
</section>