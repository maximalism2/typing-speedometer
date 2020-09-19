import { writable } from "svelte/store"

console.debug("highlighted index store initialized")

export const highlightedIndexStore = writable(0)
