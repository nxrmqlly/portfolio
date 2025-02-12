<div class="container">
	<p class="main-text">[This page is a work in progress]</p>
	<a class="com-link" href="/"> Home &UpperRightArrow; </a>
</div>

<style lang="scss">
	.main-text {
		color: var(--color-raisin);
		font-family: 'Cabinet Grotesk';
		font-size: clamp(1rem, 5vw, 3rem);
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 90vh;
		width: 100%;
		overflow: hidden;
	}
	.com-link {
		position: relative;
		display: inline-block;
		font-size: clamp(1rem, 5vw, 3rem);

		font-family: 'Cabinet Grotesk', sans-serif;
		font-weight: 450;
		color: var(--color-raisin);
		text-decoration: none;
		transition: color 0.2s ease-in-out;
	}

	.com-link::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: #000;
		transform-origin: top right;
		transform: scaleX(1);
		transition: transform 0.4s ease;
		will-change: transform;
	}

	.com-link:hover {
		color: var(--color-terracotta);
	}

	.com-link:hover::before {
		transform: scaleX(0);
	}
</style>
