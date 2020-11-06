import { Writable, writable } from "svelte/store"

export type UserInput = {
  key: string
  timestamp: number
}

export type UserInputStore = Writable<UserInput>

export const userInputStore = writable<UserInput[]>([])
