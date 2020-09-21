<script>
  import { textStore } from "../../stores/textStore"
  import { userInputStore } from "../../stores/userInputStore"
  import { highlightedIndexStore } from "../../stores/highlightedIndexStore"

  import Char from "../Char/Char.svelte"

  import { getDisplayedChars } from "./utils"

  let charsToDisplay: String[] = []
  $: {
    charsToDisplay = getDisplayedChars($userInputStore, $textStore)
  }
</script>

<p data-testId="text-display">
  {#each charsToDisplay as char, index}
    <Char
      {char}
      highlightedChar={$highlightedIndexStore === index}
      headChar={index < $highlightedIndexStore}
      tailChar={$highlightedIndexStore < index}
      mistake={false}
      correction={false} />
  {/each}
</p>
