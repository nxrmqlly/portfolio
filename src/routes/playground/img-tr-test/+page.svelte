<script>
	import { gsap } from '$lib/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.fromTo(
			'.box',
			{
				rotate: 50,
				clipPath: 'inset(50% 50% 50% 50%)'
			},
			{
				clipPath: 'inset(0% 0% 0% 0%)',
				duration: 1,
				ease: 'expo.out',
				delay: 0.2,

				rotate: -10
			}
		);
	});
</script>

<div class="box">
	<img class="box-img" src="/ritam_dither.png" alt="" srcset="" />
</div>

<div class="box"></div>

<style>
	.box {
		width: 20rem;
		height: 35rem;
		background-color: blue;
		filter: blur(2px);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.box-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
