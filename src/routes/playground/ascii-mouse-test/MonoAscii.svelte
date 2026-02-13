<script lang="ts">
	let container: HTMLElement;
	let mouse = $state({ x: -1000, y: -1000 }); // Start off-screen
	let width = $state(0);
	let height = $state(0);

	// The ASCII "gradient" from darkest to brightest
	const chars = '.:-=+*#%@'.split('');
	const COLS = 100;
	const ROWS = 20;

	function handleMouseMove(e) {
		const rect = container.getBoundingClientRect();
		mouse.x = e.clientX - rect.left;
		mouse.y = e.clientY - rect.top;
	}

	function getChar(charX, charY) {
		// Calculate position of the character in pixels
		const pxX = (charX / COLS) * width;
		const pxY = (charY / ROWS) * height;

		// Standard distance formula: sqrt((x2-x1)^2 + (y2-y1)^2)
		const dist = Math.sqrt((pxX - mouse.x) ** 2 + (pxY - mouse.y) ** 2);

		// Adjust 'radius' to change how wide the glow is
		const radius = 250;
		const intensity = Math.max(0, 1 - dist / radius);

		// Map intensity to character index
		const index = Math.floor(intensity * (chars.length - 1));
		return chars[index];
	}
</script>

<div
	role="tooltip"
	bind:this={container}
	bind:clientWidth={width}
	bind:clientHeight={height}
	onmousemove={handleMouseMove}
	class="ascii-container text-3xl"
>
	{#each Array(ROWS) as _, y}
		<div class="row">
			{#each Array(COLS) as _, x}
				<span>{getChar(x, y)}</span>
			{/each}
		</div>
	{/each}
</div>

<style>
	.ascii-container {
		display: inline-block;
		background: var(--color-varaccent);
		color: var(--color-ghost); /* Classic matrix green */
		font-family: monospace;
		line-height: 1;
		padding: 20px;
		user-select: none;
	}
	.row {
		display: flex;
	}
	span {
		width: 1ch;
		height: 1.2em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
