<script>
	import NavbarLink from './NavbarLink.svelte';
	let links = [
		{ href: '/wip', text: 'leadership' },
		{ href: '/wip', text: 'projects' },
		{ href: '/wip', text: 'blog' },
	];
</script>

<nav class="navbar sticky text-varaccent text-3xl pt-4 top-0 left-0 w-full z-300 flex justify-between items-center font-general-sans font-semibold">
	<a href="/">
		<NavbarLink nounderline href="/" text="ritamdas"/>&copy;
	</a>
	<ul class="flex">
		{#each links as link}
			<li class="w-50 text-right">
				<NavbarLink href={link.href} text={link.text} />
			</li>
		{/each}
	</ul>
</nav>

<style>
	.navbar {
		/* position: sticky;
		top: 0;
		left: 0;

		z-index: 300;

		width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;

		font-size: clamp(1.2rem, 1vw + 0.5rem, 1.6rem);
		font-weight: 600; */
		/* font-family: 'Inter', sans-serif; */
		font-variant-ligatures: none;

		/* color: var(--color-varaccent);

		padding-top: 1.8rem; */
	}

</style>
