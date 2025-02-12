<script>
	import NavLink from '$lib/components/navbar/NavLink.svelte';
</script>

<div class="container">
	<p class="main-text">[This page is a work in progress]</p>
	<p class="main-text"><a href="/">back home &UpperRightArrow;</a></p>
</div>

<style lang="scss">
	a {
	   color: var(--color-raisin);
	   transition: all 0.2s ease-in-out;
	}
	.main-text {
		color: var(--color-raisin);
		font-family: 'Cabinet Grotesk';
		font-size: 2rem;
		line-height: 1rem;
		transition: all 0.2s ease-in-out;

	}
	.main-text a::before {
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
	.main-text:hover {
		& a {
			color: var(--color-terracotta);
		}
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100dvh;
		width: 100%;
		overflow: hidden;
	}
</style>
