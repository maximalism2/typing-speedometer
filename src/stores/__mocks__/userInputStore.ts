import { resetableStore } from "../../utils/resetableStore"

const storeModule = jest.requireActual("../userInputStore")

export const userInputStore = resetableStore(storeModule.userInputStore, "")
