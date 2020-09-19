import { Writable, writable } from "svelte/store"

export type HighlightedIndexStore = Writable<number>

export const highlightedIndexStore: HighlightedIndexStore = writable(0)
