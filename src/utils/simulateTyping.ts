import { screen } from "@testing-library/svelte"
import userEvent from "@testing-library/user-event"

export function simulateTyping(text: string): Promise<void> {
  // utility input is used to capture user's typing events
  const utilityInput = screen.getByLabelText("Start typing...")
  return userEvent.type(utilityInput, text)
}
