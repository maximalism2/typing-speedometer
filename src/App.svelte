<script>
  import { textStore } from "./stores/textStore"
  import { highlightedIndexStore } from "./stores/highlightedIndexStore"
  import { userInputStore } from "./stores/userInputStore"
  import { correctedCharsIndicesStore } from "./stores/correctedCharsIndicesStore"
  import { getRandomText } from "./utils/textsBase"

  import TextDisplay from "./components/TextDisplay/TextDisplay.svelte"
  import UtilityInput from "./components/UtilityInput/UtilityInput.svelte"

  textStore.set(getRandomText())

  function handleKeypress(e: KeyboardEvent) {
    e.preventDefault()
    const { key } = e
    const userInput = $userInputStore
    const highlightedIndex = $highlightedIndexStore

    if (
      highlightedIndex < userInput.length &&
      userInput[highlightedIndex] !== key
    ) {
      const correctedInput =
        userInput.slice(0, highlightedIndex) +
        key +
        userInput.slice(highlightedIndex + 1)

      userInputStore.set(correctedInput)
      correctedCharsIndicesStore.update((collection) =>
        collection.concat(highlightedIndex)
      )
    } else if (userInput[highlightedIndex] !== key) {
      userInputStore.set(userInput + key)
    }

    highlightedIndexStore.set(highlightedIndex + 1)
  }

  function handleBackspace() {
    highlightedIndexStore.update((i) => i - 1)
  }

  let input: HTMLInputElement = null
  function focusUtilityInput() {
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

    --mistake-color: #ef233c;
    --correction-color: #f9c74f;
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

<svelte:window on:keydown={focusUtilityInput} />

<main>
  <UtilityInput
    bind:ref={input}
    on:keypress={handleKeypress}
    on:backspace={handleBackspace} />
  <TextDisplay />
</main>
