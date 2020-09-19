<script>
  import { createEventDispatcher } from "svelte"

  export let ref: HTMLInputElement

  const dispatch = createEventDispatcher()
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Backspace") {
      dispatch("backspace")
    }
  }
</script>

<input
  on:keypress
  on:keydown={handleKeydown}
  bind:this={ref}
  type="text"
  style="opacity: 0; position: fixed; left: 0; top: 0; transform: scale(0); transform-origin: 0 0;"
  aria-label="Start typing..." />
