import { render, screen } from "@testing-library/svelte"
import TextDisplay from "./TextDisplay.svelte"

import { textStore } from "../../stores/textStore"
import { highlightedIndexStore } from "../../stores/highlightedIndexStore"

describe("TextDisplay", () => {
  afterEach(() => {
    textStore.set("Hello world!")
    highlightedIndexStore.set(0)
  })

  it("renders passed textStore", () => {
    textStore.set("abcdefg shos zymno!")

    const { container } = render(TextDisplay)

    expect(container).toHaveTextContent("abcdefg shos zymno!")
  })

  it("renders highlighted are when specified", () => {
    highlightedIndexStore.set(4)

    render(TextDisplay)

    expect(screen.getByTestId("highlighted-char")).toHaveTextContent("o")
  })
})
