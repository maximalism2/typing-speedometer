<script>
  import { textStore } from "./stores/textStore"
  import { highlightedIndexStore } from "./stores/highlightedIndexStore"
  import { getRandomText } from "./utils/textsBase"

  import TextDisplay from "./components/TextDisplay/TextDisplay.svelte"

  textStore.set(getRandomText())

  function handleKeypress(e: KeyboardEvent) {
    console.log(`Key downed with ${e.key}`)

    moveCurrentHighlightedIndex(e)
  }

  function moveCurrentHighlightedIndex(e: KeyboardEvent) {
    e.preventDefault()
    highlightedIndexStore.update((i) => i + 1)
  }

  let input: HTMLInputElement
  function handleMousedown() {
    if (input) {
      input.focus()
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
</style>

<main on:click={handleMousedown}>
  <input
    bind:this={input}
    type="text"
    on:keypress={handleKeypress}
    autofocus
    style="opacity: 0; position: fixed; left: 0; top: 0; transform: scale(0); transform-origin: 0 0;" />
  <TextDisplay />
</main>
