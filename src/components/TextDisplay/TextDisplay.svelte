<script>
  import { textStore } from "../../stores/textStore"
  import { highlightedIndexStore } from "../../stores/highlightedIndexStore"

  import Char from "../Char/Char.svelte"
</script>

<p data-testId="text-display">
  {#each $textStore.split('') as char, index}
    <Char
      {char}
      highlightedChar={$highlightedIndexStore === index}
      headChar={index < $highlightedIndexStore}
      tailChar={$highlightedIndexStore < index}
      mistake={false}
      correction={false} />
  {/each}
</p>
