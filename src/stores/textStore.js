import { writable } from "svelte/store"

const initialTextStore = {
  text: "",
  highlightedRange: [],
}

export const textStore = writable(initialTextStore)
