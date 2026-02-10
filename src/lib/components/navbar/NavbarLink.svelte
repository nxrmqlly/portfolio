<script>
    const { href, text, nounderline, classes = '' } = $props();
    import ScrambleText from "../scrambletext/ScrambleText.svelte";
</script>

<a href="{href}" class="{classes} {nounderline ? '' : 'underline'} inline-block">
        <ScrambleText {text} />
</a>

<style>
    .st {
        font-variant-numeric: tabular-nums;    }
</style>