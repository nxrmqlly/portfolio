<script>
	import { onMount } from 'svelte';
	import { gsap } from '$lib/gsap';
	import NavLink1 from './NavLink1.svelte';

	const { navOpen } = $props();

	onMount(() => {
		const tl = gsap.timeline({
			paused: true
		});
		tl.to(['.menu'], {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			ease: 'power4.inOut',
			duration: 1,
			stagger: 0.05
		})
			.fromTo(
				'.link-text',

				{
					y: '100%'
				},
				{
					y: 0,
					duration: 1,
					ease: 'power4.inOut',
					stagger: 0.05
				},
				'<'
			)
			.to(
				'.blur-bg',
				{
					opacity: 1,
					duration: 1,
					ease: 'power4.inOut'
				},
				'<'
			);
		tl.play();

		$effect(() => {
			console.debug(navOpen);
			if (navOpen) {
				tl.play();
				console.debug('play');
			} else {
				tl.reverse();
				console.debug('reverse');
			}
		});
	});

	const links = [
		{ text: 'home', href: '/' },
		{ text: 'about', href: '/about' },
		{ text: 'work', href: '/work' },
		{ text: 'random', href: '/random' }
	];
</script>

<div class="blur-bg"></div>
<div class="overlay">
	<div class="menu">
		<div class="menu-inner menu">
			<div class="links-container">
				{#each links as link}
					<div class="link">
						<div class="link-text">
							<a href={link.href}>{link.text}</a>
						</div>
					</div>
				{/each}
			</div>
			<div class="socials-container"></div>
		</div>
	</div>
</div>

<style lang="scss">
	.links-container {
		margin-top: 5vh;
		// width: 100%;
		margin-right: 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
		flex: 3;
	}
	.socials-container {
		flex: 1;
	}
	.link {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
		transition: transform 0.2s ease-in-out;
	}
	.link:hover {
		transform: translateX(-1.05rem);
	}

	.link-text a {
		text-decoration: none;
		color: var(--color-raisin);
		font-size: 4rem;
		font-family: 'Satoshi', sans-serif;
		font-weight: 400;
	}
	.overlay {
		display: flex;
		flex-direction: column;
		top: 0;
		z-index: 3;
		right: 0;
		position: fixed;
		height: 100vh;
		right: 0;

		width: 30%;
	}
	.menu {
		z-index: 4;
		height: 100%;
		flex: 1;
		background-color: var(--color-raisin);
	}
	.menu-inner {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: var(--color-ghost);
		height: 100%;
	}

	.menu,
	.menu-inner {
		clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
	}
	.blur-bg {
		pointer-events: none;
		position: fixed;
		top: 0;
		left: 0;
		opacity: 0;
		z-index: 2;
		width: 100%;
		height: 100%;
		background-color: hsla(0, 0%, 100%, 0.5);
	}
	//tablet
	@media only screen and (max-width: 1024px) {
		.overlay {
			width: 50%;
		}
	}
	//mobile
	@media only screen and (max-width: 600px) {
		.overlay {
			width: 80%;
		}
	}
</style>
