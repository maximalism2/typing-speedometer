<script>
    import TextDisplay from './components/TextDisplay/TextDisplay.svelte'
    import textsBase from './textsBase.json'

    const index = Math.floor(Math.random() * textsBase.length)
    const text = textsBase[index]
</script>

<style>
    :root {
        --background-color: white;
        --text-color: #555;
    }

    :global(body) {
        background: var(--background-color);
        color: var(--text-color);
        font-family: sans-serif;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --background-color: #333;
            --text-color: #eee;
        }
    }

    @media (prefers-color-scheme: light) {
        :root {
            --background-color: white;
            color: #555;
        }
    }

    main {
        max-width: min(80vw, 800px);
        margin: max(15vh, 200px) auto;
        font-size: 1.5em;
        line-height: 1.5em;
    }
</style>

<main>
    <code>Index: {index}</code>
    <TextDisplay {text}/>
</main>
