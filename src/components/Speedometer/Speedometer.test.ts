import { render, screen } from "@testing-library/svelte"
import Speedometer from "./Speedometer.svelte"
import { userInputStore } from "../../stores/userInputStore"
import { getCurrentTimestamp } from "../../utils/getCurrentTimestamp"

jest.mock("../../stores/userInputStore")
jest.mock("../../utils/getCurrentTimestamp")

describe("Speedometer", () => {
  it("renders 0 ch/min by default", () => {
    render(Speedometer)

    expect(screen.getByText("0 ch/min")).toBeInTheDocument()
  })

  it("it renders correct speed starting with 2 key strokes", () => {
    const now = Number(Date.parse("2020-08-02T12:00"))

    ;(getCurrentTimestamp as jest.Mock).mockReturnValue(now)

    userInputStore.set([
      {
        key: "h",
        timestamp: now - 1000,
      },
      {
        key: "e",
        timestamp: now,
      },
    ])

    render(Speedometer)

    expect(screen.getByText("60 ch/min")).toBeInTheDocument()
  })
})
