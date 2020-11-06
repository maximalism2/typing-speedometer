<script lang="ts">
  import { getCurrentTimestamp } from "../../utils/getCurrentTimestamp"
  import { userInputStore, UserInput } from "../../stores/userInputStore"

  function getSpeed(keyStrokes: UserInput[]): number {
    let speed = 0
    let median
    const now = getCurrentTimestamp()

    for (const stroke of keyStrokes) {
      console.log(new Date(stroke.timestamp))
    }

    return speed
  }
</script>

<div>{getSpeed($userInputStore)} ch/min</div>
