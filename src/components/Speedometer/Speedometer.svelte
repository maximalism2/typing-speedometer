<script lang="ts">
  import { getCurrentTimestamp } from "../../utils/getCurrentTimestamp"
  import { userInputStore, UserInput } from "../../stores/userInputStore"

  function truncateKeystrokes(keyStrokes: UserInput[], startTimestamp: number): UserInput[] {
    return keyStrokes.filter(stroke => stroke.timestamp >= startTimestamp)
  }

  function getSpeed(keyStrokes: UserInput[]): number {
    const minute = 1000 * 60;
    const now = getCurrentTimestamp()

    const truncatedKeystrokes = truncateKeystrokes(keyStrokes, now - 5000)

    const first = truncatedKeystrokes[0]
    const last = truncatedKeystrokes[truncatedKeystrokes.length - 1]

    if (!first || !last) {
      return 0
    }

    return Math.round(minute / ((last.timestamp - first.timestamp) / (truncatedKeystrokes.length - 1)))
  }
</script>

<div>{getSpeed($userInputStore)} ch/min</div>
