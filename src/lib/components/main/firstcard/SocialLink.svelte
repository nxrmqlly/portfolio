<script lang="ts">
    import ScrambleText from "$lib/components/scrambletext/ScrambleText.svelte";

    const { href, text, classes = '' } = $props();
</script>

<!-- <a class="underline" href="https://github.com/nxrmqlly"><ScrambleText text="GitHub"/></a> -->
 <!-- lets make this modular!! -->
<a href="{href}" class="{classes} underline inline-block">
        <ScrambleText {text} />
</a>