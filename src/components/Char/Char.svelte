<script>
  export let char
  export let headChar
  export let highlightedChar
  export let tailChar
  export let mistake
  export let correction

  let testId = ""
  $: {
    if (highlightedChar) {
      testId = "highlighted-char"
    } else if (mistake) {
      testId = "mistake-char"
    } else {
      testId = ""
    }
  }
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

  .mistake {
    color: var(--mistake-color);
    position: relative;
  }

  .mistake::after {
    content: "";
    position: absolute;
    bottom: calc(50% - 0.8rem);
    left: 0;
    width: 100%;
    background: var(--mistake-color);
    opacity: 0.1;
    height: 1.8rem;
  }
</style>

<span
  class:headChar
  class:highlightedChar
  class:tailChar
  class:mistake
  data-testId={testId}>
  {char}
</span>
