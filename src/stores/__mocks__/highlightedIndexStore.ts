import { resetableStore } from "../../utils/resetableStore"

const storeModule = jest.requireActual("../highlightedIndexStore")

export const highlightedIndexStore = resetableStore(
  storeModule.highlightedIndexStore,
  0
)
