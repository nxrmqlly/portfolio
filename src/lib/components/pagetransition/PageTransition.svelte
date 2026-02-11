<script>
	import { gsap } from '$lib/gsap';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Blinds from '$lib/components/blinds/Blinds.svelte';

	let blindsRef = $state();

	onNavigate((navigation) => {
		if (navigation.from.url.pathname === navigation.to.url.pathname) return;
		return new Promise(async (resolve) => {
			await blindsRef.cover();
			resolve(); // let the navigation happen

			await navigation.complete;
			await blindsRef.reveal();
		});
	});
</script>

<Blinds bind:this={blindsRef} startclosed=false />