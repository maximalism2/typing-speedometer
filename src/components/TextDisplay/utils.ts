export function hasMistake(
  char: string,
  index: number,
  userInput: string,
  highlightedIndex: number
): boolean {
  return (
    index < highlightedIndex &&
    index < userInput.length &&
    userInput[index] !== char
  )
}

export function hasCorrection(
  index: number,
  correctedCharsIndices: number[],
  highlightedIndex: number
): boolean {
  return (
    index < highlightedIndex &&
    correctedCharsIndices.findIndex(
      (correctedCharIndex) => correctedCharIndex === index
    ) !== -1
  )
}
