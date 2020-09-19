import { render, screen } from "@testing-library/svelte"
import userEvent from "@testing-library/user-event"
import App from "../App.svelte"

jest.mock("../utils/textsBase", () => ({
  __esModule: true,
  getRandomText: () => "Random text",
}))

describe("App", () => {
  it("renders text", () => {
    render(App)
  })
})
