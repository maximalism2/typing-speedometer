import { cleanup, fireEvent, render, screen } from "@testing-library/svelte"
import App from "./App.svelte"
import { simulateTyping } from "./utils/simulateTyping"

jest.mock("./stores/highlightedIndexStore")
jest.mock("./stores/userInputStore")
jest.mock("./stores/correctedCharsIndicesStore")

jest.mock("./utils/textsBase", () => ({
  __esModule: true,
  getRandomText: () => "Random text",
}))

describe("App", () => {
  function getHighlightedChar() {
    return screen.getByTestId("highlighted-char")
  }

  beforeEach(() => {
    jest.resetModules()
    render(App)
  })

  afterEach(() => {
    cleanup()
  })

  it("renders text", () => {
    const textDisplay = screen.getByTestId("text-display")
    expect(textDisplay).toBeInTheDocument()
    expect(textDisplay).toHaveTextContent("Random text")
  })

  it("marks the first letter as current highlighted char", () => {
    expect(getHighlightedChar()).toHaveTextContent("R")
  })

  it("focuses the utility input when user presses any key", () => {
    fireEvent.keyDown(window)

    expect(document.activeElement.tagName).toBe("INPUT")
  })

  it("moves the highlight forward when user presses a key", async () => {
    await simulateTyping("R")

    expect(getHighlightedChar()).toHaveTextContent("a")
  })

  it("moves the highlight backward when user presses Backspace", async () => {
    await simulateTyping("Random{backspace}{backspace}{backspace}")

    expect(getHighlightedChar()).toHaveTextContent("d")
  })

  it("highlights mistakes in user's input", async () => {
    await simulateTyping("Rondom{space}tixt") // Should've been "Random text"

    const mistakesCollection = screen.getAllByTestId("mistake-char")

    expect(mistakesCollection).toHaveLength(2)
    expect(mistakesCollection[0]).toHaveTextContent("a")
    expect(mistakesCollection[1]).toHaveTextContent("e")
  })

  it("removes the mistake highlight when user erases the mistake", async () => {
    await simulateTyping("Ranin")

    expect(screen.getAllByTestId("mistake-char")).toHaveLength(2)
    await simulateTyping("{backspace}{backspace}")
    expect(screen.queryAllByTestId("mistake-char")).toHaveLength(0)
  })

  it("highlights corrections in user's input", async () => {
    await simulateTyping(
      "Randim{backspace}{backspace}om{space}texf{backspace}t"
    )

    const correctionsCollection = screen.getAllByTestId("corrected-char")

    expect(correctionsCollection).toHaveLength(2)
    expect(correctionsCollection[0]).toHaveTextContent("o")
    expect(correctionsCollection[1]).toHaveTextContent("t")
  })

  it("removes the correction highlight when user returns back in the text", async () => {
    await simulateTyping("Randon{backspace}m")

    expect(screen.getAllByTestId("corrected-char")).toHaveLength(1)
    await simulateTyping("{backspace}{backspace}{backspace}{backspace}")
    expect(screen.queryAllByTestId("corrected-char")).toHaveLength(0)
  })
})
