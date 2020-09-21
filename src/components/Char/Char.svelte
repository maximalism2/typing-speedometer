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
    } else if (correction) {
      testId = "corrected-char"
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

  .correction {
    color: var(--correction-color);
    position: relative;
  }

  .mistake {
    color: var(--mistake-color);
    position: relative;
  }

  .mistake::after,
  .correction::after {
    content: "";
    position: absolute;
    bottom: calc(50% - 0.8rem);
    left: 0;
    width: 100%;
    opacity: 0.1;
    height: 1.8rem;
  }

  .correction::after {
    background: var(--correction-color);
  }

  .mistake::after {
    background: var(--mistake-color);
  }
</style>

<span
  class:headChar
  class:highlightedChar
  class:tailChar
  class:mistake
  class:correction
  data-testId={testId}>
  {char}
</span>
