<script lang="ts">
	import { gsap } from '$lib/gsap.js';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	const { startclosed = false } = $props();

	let windowWidth = 0;
	let panes = $state(0);

	onMount(() => {
		const handler = () => {
			windowWidth = window.innerWidth;
			panes = Math.max(5, Math.floor(windowWidth / 100));
			panes -= panes % 2; // ensure even number
		};

		window.addEventListener('resize', handler);

		handler(); // set once on mount

		return () => window.removeEventListener('resize', handler);
	});

	let currentAnimation = $state<any>(Promise.resolve());

	export const cover = () => {
		const anim = gsap.to('.transition-overlay .pane', {
			duration: 0.5,
			scaleX: 1.01,
			stagger: 0.04,
			ease: 'power4.out',
			onStart: () => gsap.set('.transition-overlay .pane', { transformOrigin: 'left' })
		});

		currentAnimation = anim; // GSAP objects are awaitable
		return anim;
	};

	export const reveal = () => {
		const anim = gsap.to('.transition-overlay .pane', {
			duration: 0.5,
			scaleX: 0,
			stagger: 0.04,
			ease: 'power4.out',
			onStart: () => gsap.set('.transition-overlay .pane', { transformOrigin: 'right' })
		});

		currentAnimation = anim;
		return anim;
	};

	export const completed = {
		get then() {
			return currentAnimation.then.bind(currentAnimation);
		}
	};
</script>

<div
	class="transition-overlay pointer-events-none fixed top-0 left-0 z-9999 m-0 flex h-screen w-screen overflow-hidden p-0"
>
	{#each { length: panes } as _}
		<div
			class="pane {startclosed
				? 'scale-x-0'
				: 'scale-x-100'} flex-1 bg-varaccent will-change-transform"
		></div>
	{/each}
</div>
