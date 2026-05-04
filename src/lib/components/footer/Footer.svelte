<script>
	import Konami from '$lib/components/konami/Konami.svelte';
	import ScrambleText from '$lib/components/scrambletext/ScrambleText.svelte';
</script>

<footer class="ftr-sec relative top-0 left-0 z-30 h-[30vh] overflow-hidden bg-varaccent text-white">
	<div
		class="bt-2 ftr-txt section-px flex h-full flex-col items-center justify-center border-varaccent text-center font-gambarino text-3xl"
	>
		good things happen when you reach out!
		<br />
		<span
			role="button"
			tabindex="0"
			onkeydown={() => alert('copied to clipboard!')}
			class="cursor-pointer underline"
			onclick={copyEmail}><ScrambleText text="hey@ritam.cc" /></span
		>
		<span class="absolute bottom-2 lg:visible">
			<Konami />
		</span>
	</div>
</footer>
