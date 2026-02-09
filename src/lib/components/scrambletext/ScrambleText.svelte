<script>
    const { text, rounds = 3, delay = 60 } = $props();
    let el;
    let busy = false;

    const scramble = async () => {
        if (busy) return;
        busy = true;
 
        const original = text;
        const words = original.split(" "); // preserve spaces

        for (let i = 0; i < rounds; i++) {
            const scrambledWords = words.map(word => shuffleWord(word));
            el.textContent = scrambledWords.join(" ");
            await wait(delay);
        }

        el.textContent = original;
        busy = false;
    };

    // Fisher-Yates shuffle
    const shuffleWord = (word) => {
        const chars = [...word];
        for (let i = chars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [chars[i], chars[j]] = [chars[j], chars[i]]; // swap
        }
        return chars.join("");
    };

    const wait = (ms) => new Promise(r => setTimeout(r, ms));
</script>

<span role="tooltip" bind:this={el} class="scramble-text" onmouseenter={scramble}>
    {text}
</span>
