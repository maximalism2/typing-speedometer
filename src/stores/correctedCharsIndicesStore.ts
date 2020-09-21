import { Writable, writable } from "svelte/store"

export const correctedCharsIndicesStore: Writable<number[]> = writable([])
