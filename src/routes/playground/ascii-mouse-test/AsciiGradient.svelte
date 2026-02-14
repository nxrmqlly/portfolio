<script>
	const { children } = $props();

	// Svelte 5 Runes for state management
	let mouse = $state({ x: 0, y: 0 });
	let randomString = $state('');
	let containerRef = $state();

	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	// Generates the string of characters filling the background
	const generateString = (length) =>
		Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');

	function handleMove(e) {
		const rect = containerRef.getBoundingClientRect();
		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		const clientY = e.touches ? e.touches[0].clientY : e.clientY;

		mouse.x = clientX - rect.left;
		mouse.y = clientY - rect.top;

		// Update the string on every move to create the "flicker" effect
		randomString = generateString(20*100);
	}
</script>

<div class="flex items-center justify-center p-8">
	<div
		class="relative container flex w-[50vw] h-[50vh] cursor-crosshair items-center justify-center overflow-hidden border bg-varaccent"
		role="tooltip"
		bind:this={containerRef}
		onmousemove={handleMove}
		ontouchmove={handleMove}
	>
		<div
			class="ascii-layer text-2xl pointer-events-none absolute inset-0 font-gambarino leading-none break-all text-ghost opacity-0"
			style:--x="{mouse.x}px"
			style:--y="{mouse.y}px"
		>
			{randomString}
		</div>

		<div
			class="content pointer-events-none relative z-10 font-gambarino text-4xl font-semibold text-ghost"
		>
			{@render children()}
		</div>
	</div>
</div>

<style>
	.container:hover .ascii-layer {
		opacity: 1;
	}

	.ascii-layer {
		transition: opacity 400ms;
		pointer-events: none;

		/* The Magic Mask: Creates the circular reveal */
		-webkit-mask-image: radial-gradient(
			250px circle at var(--x) var(--y),
			white 20%,
			rgba(255, 255, 255, 0.25),
			transparent
		);
		mask-image: radial-gradient(
			250px circle at var(--x) var(--y),
			white 20%,
			rgba(255, 255, 255, 0.25),
			transparent
		);
	}
</style>
