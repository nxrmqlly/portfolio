<script>
	let allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
		65: 'a',
		66: 'b'
	};

	// the 'official' Konami Code sequence
	let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

	// a letiable to remember the 'position' reached so far
	let konamiCodePosition = 0;

	const keyhandler = (e) => {
		let key = allowedKeys[e.keyCode];
		let requiredKey = konamiCode[konamiCodePosition];

		if (key == requiredKey) {
			konamiCodePosition++;

			if (konamiCodePosition == konamiCode.length) {
				activateCheats();
				konamiCodePosition = 0;
			}
		} else {
			konamiCodePosition = 0;
		}
	};

	const activateCheats = () => {
		const soundarr = ['fahh', 'raah', 'hellnah'];
		const sound = soundarr[Math.floor(Math.random() * soundarr.length)];

		let audio = new Audio(`${sound}.mp3`);
		alert('turn your sound on!');
		audio.play();
	};
</script>

<svelte:document onkeydown={keyhandler} />

<p class="w-full text-center font-inter font-semibold text-gray-400 pb-2 text-lg">have you tried ↑ ↑ ↓ ↓ ← → ← → B A     ?</p>