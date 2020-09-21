export function getDisplayedChars(userInput: string, text: string): string[] {
  const textTail = text.slice(userInput.length)

  return (userInput + textTail).split("")
}
