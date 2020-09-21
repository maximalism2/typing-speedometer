export function hasMistake(
  char: string,
  index: number,
  userInput: string
): boolean {
  return index < userInput.length && userInput[index] !== char
}
