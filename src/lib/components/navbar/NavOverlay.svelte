<script>
	import { onMount } from 'svelte';
	import { gsap } from '$lib/gsap';
	import NavLink from './NavLink.svelte';

	let { navOpen = $bindable(false) } = $props();
	const toggleNav = () => {
		navOpen = !navOpen;
	};

	onMount(() => {
		const tl = gsap.timeline({
			paused: true
		});
		tl.to(['.menu'], {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			ease: 'power4.out',
			duration: 0.8,
			stagger: 0.05
		})
			.fromTo(
				'.link-text',

				{
					y: '100%'
				},
				{
					y: 0,
					duration: 0.8,
					ease: 'power4.out',
					stagger: 0.06
				},
				'<'
			)
			.to(
				'.blur-bg',
				{
					opacity: 1,
					duration: 0.8,
					ease: 'power4.out'
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
		{ text: 'wip', href: '/wip' }
	];
	const socials = [
		{ text: 'github', href: 'https://github.com/nxrmqlly' },
		{ text: 'instagram', href: 'https://www.instagram.com/nxrmqlly/' },
		{ text: 'youtube', href: 'https://www.youtube.com/@nxrmqlly' },
		{ text: 'email', href: 'mailto:ritam.das3110@outlook.com' },
		{ text: 'X', href: 'https://x.com/Nxrmqlly' }
	];
</script>

<div class="blur-bg"></div>
<div class="overlay">
	<div class="menu">
		<div class="menu-inner menu">
			<div class="links-container">
				{#each links as link}
					<div class="nav-link link">
						<div class="link-text" onclick={toggleNav}>
							<NavLink text={link.text} href={link.href} />
						</div>
					</div>
				{/each}
			</div>
			<div class="socials-container">
				{#each socials as social}
					<div class="social-link link">
						<div class="link-text">
							<a target="_blank" rel="noopener" href={social.href}>
								{social.text} &UpperRightArrow;
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.links-container {
		margin-top: 5vh;
		padding-top: 5rem;
		// width: 100%;
		margin-right: 1rem;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		// justify-content: center;
		flex: 2;
	}
	.socials-container {
		margin-right: 1rem;
		flex: 1;
		align-items: flex-end;
		display: flex;
		flex-direction: column;
	}

	.link {
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
		transition: all 0.2s ease-in-out;
		will-change: transform, clip-path;
	}
	// .nav-link:hover {
	// 	transform: translateX(-1.05rem);
	// 	& a {
	// 		color: var(--color-terracotta);
	// 	}
	// }
	.social-link a::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 1px;
		bottom: 0;
		transform-origin: top right;
		left: 0;
		background-color: #000;
		transform: scaleX(1);
		transition: transform 0.4s ease;
		will-change: transform;
	}
	.social-link:hover {
		// transform: translateX(-1.05rem);
		& a {
			color: var(--color-terracotta);
		}
		& a::before {
			transform: scaleX(0);
		}
	}

	a {
		color: var(--color-raisin);
		font-family: 'Satoshi', sans-serif;
		text-decoration: none;
		font-weight: 450;
		transition: all 0.2s ease-in-out;
	}

	.nav-link {
		height: clamp(3.2rem, 2.8364rem + 1.4545vw, 4.2rem);
		font-size: clamp(3rem, 2.6364rem + 1.4545vw, 4rem);
	}
	.social-link {
		font-size: clamp(1.5rem, 1.3182rem + 0.7273vw, 2rem);
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

		width: 20rem;
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
		will-change: clip-path;
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
		will-change: opacity;
	}
</style>
