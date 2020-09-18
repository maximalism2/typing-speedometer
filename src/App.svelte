<script>
  import { textStore } from "./stores/textStore"

  import TextDisplay from "./components/TextDisplay/TextDisplay.svelte"

  import textsBase from "./textsBase.json"

  const index = Math.floor(Math.random() * textsBase.length)
  const text = textsBase[index]

  const charSet = text.split("")

  const minIndex = 0
  const highlightedRangeStart = charSet.findIndex(
    (char, index) => index > minIndex && char === " "
  )
  const highlightedRangeEnd =
    charSet.slice(highlightedRangeStart + 1).findIndex((char) => char === " ") +
    highlightedRangeStart +
    1

  textStore.set({
    highlightedRange: [highlightedRangeStart, highlightedRangeEnd],
    text,
  })
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
    margin: max(15vh, 200px) auto;
    font-size: 1.5em;
    line-height: 1.5em;
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

<main>
  <code>Index: {index}</code>
  <TextDisplay />
</main>
