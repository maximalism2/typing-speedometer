let subscribersCount = 0

const storeModule = jest.requireActual("../highlightedIndexStore")

export const highlightedIndexStore = {
  ...storeModule.highlightedIndexStore,
  subscribe(...subscribeArgs) {
    subscribersCount++

    const unsubscribe = storeModule.highlightedIndexStore.subscribe(
      ...subscribeArgs
    )

    return (...unsubscribeArgs) => {
      subscribersCount--

      if (subscribersCount === 0) {
        storeModule.highlightedIndexStore.set(0)
      }

      unsubscribe(...unsubscribeArgs)
    }
  },
}
