<script>
  import { textStore } from "../../stores/textStore"
  import { userInputStore } from "../../stores/userInputStore"
  import { correctedCharsIndicesStore } from "../../stores/correctedCharsIndicesStore"
  import { highlightedIndexStore } from "../../stores/highlightedIndexStore"

  import Char from "../Char/Char.svelte"

  import { hasMistake, hasCorrection } from "./utils"
</script>

<p data-testId="text-display">
  {#each $textStore.split('') as char, index}
    <Char
      {char}
      highlightedChar={$highlightedIndexStore === index}
      headChar={index < $highlightedIndexStore}
      tailChar={$highlightedIndexStore < index}
      mistake={hasMistake(char, index, $userInputStore, $highlightedIndexStore)}
      correctijjon={hasCorrection(index, $correctedCharsIndicesStore, $highlightedIndexStore)} />
  {/each}
</p>
