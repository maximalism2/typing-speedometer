<script>
  import { textStore } from "./stores/textStore"
  import { highlightedIndexStore } from "./stores/highlightedIndexStore"

  import TextDisplay from "./components/TextDisplay/TextDisplay.svelte"

  import textsBase from "./textsBase.json"

  const index = Math.floor(Math.random() * textsBase.length)
  const text = textsBase[index]

  const charSet = text.split("")

  textStore.set(text)

  function moveCurrentHighlightedIndex(e) {
    if (!e.ctrlKey && !e.metaKey) {
      e.preventDefault()
    } else {
      return
    }

    if (e.keyCode === 8) {
      highlightedIndexStore.update((i) => i - 1)
    } else {
      highlightedIndexStore.update((i) => i + 1)
    }
  }
</script>

<style>
  :root {
    --grey-0: #f8f9fa;
    --grey-1: #e9ecef;
    --grey-2: #dee2e6;
    --grey-3: #ced4da;
    --grey-4: #adb5bd;
    --grey-5: #6c757d;
    --grey-6: #495057;
    --grey-7: #343a40;
    --grey-8: #212529;
  }

  :global(body) {
    background: var(--background-color);
    color: var(--text-color);
    font-family: sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-color: var(--grey-8);
      --text-color: var(--grey-1);

      --text-head-color: var(--grey-5);
      --highlighted-text-color: var(--grey-1);
      --text-tail-color: var(--grey-4);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --background-color: var(--grey-0);
      --text-color: var(--grey-8);

      --text-head-color: var(--grey-4);
      --highlighted-text-color: var(--grey-8);
      --text-tail-color: var(--grey-5);
    }
  }

  main {
    max-width: min(80vw, 800px);
    margin: min(10vh, 200px) auto;
    font-size: 1.5em;
    line-height: 1.5em;
  }

  @media screen and (max-width: 500px) {
    main {
      margin: 0 auto;
    }
  }

  code {
    opacity: 0;
    color: var(--grey-6);
    background: var(--grey-2);
  }

  code:hover {
    opacity: 1;
  }
</style>

<svelte:window on:keydown={moveCurrentHighlightedIndex} />

<main>
  <code>Index: {index}</code>
  <TextDisplay />
</main>
