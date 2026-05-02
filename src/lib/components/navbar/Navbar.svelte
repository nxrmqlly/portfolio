<script>
	import NavbarLink from './NavbarLink.svelte';
	let links = [
		{ href: '/wip', text: 'leadership' },
		{ href: '/wip', text: 'projects' },
		{ href: '/wip', text: "let's talk" }
	];
</script>

<nav
	class="navbar sticky top-0 left-0 z-300 flex w-full justify-between border-b-2 py-2 font-inter text-sm font-semibold md:border-b-4 md:text-xl lg:py-4 lg:text-3xl"
>
	<div href="/" class="grid grid-cols-2 gap-1">
		<span>
			<NavbarLink nounderline href="/" text="ritamdas" />
		</span><span>&copy;</span>
	</div>
	<div class="grid grid-cols-3 lg:gap-4">
		{#each links as link}
			<div class="text-right">
				<NavbarLink href={link.href} text={link.text} />
			</div>
		{/each}
	</div>
</nav>

<style>
	.navbar {
		font-variant-ligatures: none;
	}
</style>
