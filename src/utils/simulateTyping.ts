import { screen } from "@testing-library/svelte"
import userEvent from "@testing-library/user-event"

/**
 * Simulates the typing as the real user would
 * @param text {string} - Text to type
 * @param keysPerMinute {number} - speed at which user's hits the keys (not the same as typing)
 */
export function simulateTyping(
  text: string,
  keysPerMinute: number = null
): Promise<void> {
  // utility input is used to capture user's typing events
  const utilityInput = screen.getByLabelText("Start typing...")

  return userEvent.type(utilityInput, text, {
    delay: keysPerMinute === null ? 0 : calculateDelay(keysPerMinute),
  })
}

function calculateDelay(keysPerMinute: number): number {
  const min = 1000 * 60
  return min / keysPerMinute
}
