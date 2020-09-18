<script>
  export let char
  export let headChar
  export let highlightedChar
  export let tailChar
  export let mistake
  export let correction
</script>

<style>
  span {
    box-sizing: border-box;
  }

  .headChar {
    color: var(--text-head-color);
  }

  .highlightedChar {
    color: var(--highlighted-text-color);
    text-decoration: underline;
  }

  .tailChar {
    color: var(--text-tail-color);
  }
</style>

<span
  class:headChar
  class:highlightedChar
  class:tailChar
  data-testId={highlightedChar ? 'highlighted-char' : null}>
  {char}
</span>
