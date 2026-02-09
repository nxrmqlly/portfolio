<script>
	import NavbarLink from './NavbarLink.svelte';
	let links = [
		{ href: '/wip', text: 'about' },
		{ href: '/wip', text: 'work' },
		{ href: '/wip', text: 'contact' },
	];
</script>

<nav class="navbar">
	<a href="/" class="logo-text"><NavbarLink href="/" text="ritamdas" />&reg;</a>
	<ul class="links">
		{#each links as link}
			<li>
				<NavbarLink href={link.href} text={link.text} />
			</li>
		{/each}
	</ul>
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;

		z-index: 300;

		width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;

		font-size: clamp(1.2rem, 1vw + 0.5rem, 1.6rem);
		font-weight: 600;
		font-family: 'Inter', sans-serif;
		font-variant-ligatures: none;

		color: var(--accent-color);

		padding-top: 1.8rem;
		padding-left: clamp(1rem, 4vw, 4rem);
		padding-right: clamp(1rem, 4vw, 4rem);
	}

	.links {
		display: flex;
		gap: 1.3rem;
	}
</style>
