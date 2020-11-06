import { resetableStore } from "../../utils/resetableStore"
import { UserInput } from "../userInputStore"

const storeModule = jest.requireActual("../userInputStore")

export const userInputStore = resetableStore<UserInput[]>(
  storeModule.userInputStore,
  []
)
