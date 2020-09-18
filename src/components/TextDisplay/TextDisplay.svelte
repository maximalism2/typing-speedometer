<script>
  import { textStore } from "../../stores/textStore"
  import { highlightedIndexStore } from "../../stores/highlightedIndexStoere"

  import Char from "../Char/Char.svelte"

  const highlightedIndex = $highlightedIndexStore
</script>

<p>
  {#each $textStore.split('') as char, index}
    <Char
      {char}
      highlightedChar={highlightedIndex === index}
      headChar={index < highlightedIndex}
      tailChar={highlightedIndex < index}
      mistake={false}
      correction={false} />
  {/each}
</p>
