<script>
	import NavbarLink from './NavbarLink.svelte';
	let links = [
		{ href: '/wip', text: 'leadership' },
		{ href: '/wip', text: 'projects' },
		{ href: '/wip', text: 'let\'s talk' },
	];
</script>

<nav class="navbar border-b-4 sticky text-varaccent text-3xl py-4 top-0 left-0 w-full z-300 flex justify-between font-inter font-semibold">
	<div href="/" class="grid grid-cols-2 gap-1">
		<span>
			<NavbarLink nounderline href="/" text="ritamdas"/>
		</span><span>&copy;</span>
	</div>
	<div class="grid grid-cols-3 gap-4">
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
