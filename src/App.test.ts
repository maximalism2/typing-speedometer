import { render, screen, fireEvent, cleanup } from "@testing-library/svelte"
import App from "./App.svelte"
import { simulateTyping } from "./utils/simulateTyping"

jest.mock("./stores/highlightedIndexStore")
jest.mock("./stores/userInputStore")

jest.mock("./utils/textsBase", () => ({
  __esModule: true,
  getRandomText: () => "Random text",
}))

describe("App", () => {
  function getHighlightedChar() {
    return screen.getByTestId("highlighted-char")
  }

  function getAllMistakes() {
    return screen.getAllByTestId("mistake-char")
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
    await simulateTyping("Rondom{space}text")

    const mistakesCollection = getAllMistakes()

    expect(mistakesCollection).toHaveLength(1)
    expect(mistakesCollection[0]).toHaveTextContent("a")
  })
})
