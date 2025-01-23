<script>
	import Navbar from '../lib/components/navbar/Navbar.svelte';
	import { page } from '$app/state';
	import Lenis from 'lenis';

	import { gsap, ScrollTrigger } from '$lib/gsap';

	import '../app.scss';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const lenis = new Lenis({
			autoRaf: true
		});

		lenis.on('scroll', ScrollTrigger.update);

		// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
		// This ensures Lenis's smooth scroll animation updates on each GSAP tick
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000); // Convert time from seconds to milliseconds
		});

		// Disable lag smoothing in GSAP to prevent any delay in scroll animations
		gsap.ticker.lagSmoothing(0);
	});

	const { children } = $props();
</script>

<Navbar route={page.url.pathname.replace('/', '')} />
{@render children()}
