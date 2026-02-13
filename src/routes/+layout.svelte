<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import PageTransition from '$lib/components/pagetransition/PageTransition.svelte';
	import NoScript from '$lib/components/noscript/NoScript.svelte';
	import Lenis from 'lenis';
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import '../app.css';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis({ autoRaf: true });

		lenis.on('scroll', ScrollTrigger.update);

		// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
		// This ensures Lenis's smooth scroll animation updates on each GSAP tick
		gsap.ticker.add((time: number) => {
			lenis.raf(time * 1000); // Convert time from seconds to milliseconds
		});

		// Disable lag smoothing in GSAP to prevent any delay in scroll animations
		gsap.ticker.lagSmoothing(0);
	});

	const { children } = $props();
</script>

<NoScript />
{#if page.url.pathname !== '/'}
	<div class="section-px"><Navbar /></div>
{/if}
<PageTransition />

{@render children()}
