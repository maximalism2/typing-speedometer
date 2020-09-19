import base from "./base.json"

export function getRandomText() {
  const randomTextIndex = Math.floor(Math.random() * base.length)

  return base[randomTextIndex]
}
