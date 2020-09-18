<script>
  import { textStore } from "../../stores/textStore"

  const { text, highlightedRange } = $textStore
  const [highlightStart = 0, highlightEnd = 0] = highlightedRange

  const textHead = text.slice(0, highlightStart)
  const highlightedText = text.slice(highlightStart, highlightEnd)
  const textTail = text.slice(highlightEnd)
</script>

<style>
  .textHead {
    color: var(--text-head-color);
  }

  .highlightedRange {
    color: var(--highlighted-text-color);
    display: inline-flex;
  }

  .textTail {
    color: var(--text-tail-color);
  }
</style>

<p>
  <span class="textHead">{textHead}</span>
  <span class="highlightedRange" data-testId="highlighted-range">
    {highlightedText}
  </span>
  <span class="textTail">{textTail}</span>
</p>
