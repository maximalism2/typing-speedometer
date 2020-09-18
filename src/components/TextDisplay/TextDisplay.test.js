import { render, screen } from "@testing-library/svelte"
import TextDisplay from "./TextDisplay.svelte"
import { textStore } from "../../stores/textStore"

describe("TextDisplay", () => {
  afterEach(() => {
    textStore.set({ highlightedRange: [], text: "" })
  })

  function updateStore(store, slice) {
    store.update((currentState) => ({
      ...currentState,
      ...slice,
    }))
  }

  it("renders passed textStore", () => {
    updateStore(textStore, {
      highlightedRange: [8, 12],
      text: "abcdefg shos zymno!",
    })

    const { container } = render(TextDisplay)

    expect(container).toHaveTextContent("abcdefg shos zymno!")
  })

  it("renders highlighted are when specified", () => {
    updateStore(textStore, { highlightedRange: [0, 4], text: "Hello world!" })

    render(TextDisplay)

    expect(screen.getByTestId("highlighted-range")).toHaveTextContent("Hell")
  })
})
