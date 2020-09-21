import { Writable } from "svelte/store"

export function resetableStore<T>(
  store: Writable<T>,
  defaultValue: T
): Writable<T> {
  let subscribersCount = 0

  return {
    ...store,
    subscribe(...subscribeArgs) {
      subscribersCount++

      const unsubscribe = store.subscribe(...subscribeArgs)

      return (...unsubscribeArgs) => {
        subscribersCount--

        if (subscribersCount === 0) {
          store.set(defaultValue)
        }

        unsubscribe(...unsubscribeArgs)
      }
    },
  }
}
