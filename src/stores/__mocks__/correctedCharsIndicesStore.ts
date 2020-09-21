import { resetableStore } from "../../utils/resetableStore"

const storeModule = jest.requireActual("../correctedCharsIndicesStore")

export const correctedCharsIndicesStore = resetableStore(
  storeModule.correctedCharsIndicesStore,
  []
)
