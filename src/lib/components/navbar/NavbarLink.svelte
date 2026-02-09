<script>
    const { href, text, classes = '' } = $props();
    import ScrambleText from "../scrambletext/ScrambleText.svelte";
</script>

<a href="{href}" class="navbar-link {classes}">
    <ScrambleText {text} />
</a>

<style>
    .navbar-link {
        display: inline-block;

        color: var(--accent-color);
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .navbar-link:hover {
        text-decoration: underline;
    }

</style>