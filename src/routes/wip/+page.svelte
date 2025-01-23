<script>
	import NavLink from '$lib/components/navbar/NavLink.svelte';
</script>

<div class="container">
	<NavLink href="/" text="home" />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
</style>
