import { resetableStore } from "./resetableStore"

const storeModule = jest.requireActual("../userInputStore")

export const userInputStore = resetableStore(storeModule.userInputStore, "")
