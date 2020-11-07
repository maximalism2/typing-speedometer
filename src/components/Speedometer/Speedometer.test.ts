import { render, screen } from "@testing-library/svelte"
import Speedometer from "./Speedometer.svelte"
import { UserInput, userInputStore } from "../../stores/userInputStore"
import { getCurrentTimestamp } from "../../utils/getCurrentTimestamp"

jest.mock("../../stores/userInputStore")
jest.mock("../../utils/getCurrentTimestamp")

const getCurrentTimestampMock = (getCurrentTimestamp as jest.Mock<number>)

describe("Speedometer", () => {
  const now = Number(Date.parse("2020-08-02T12:00"))

  it("renders 0 ch/min by default", () => {
    render(Speedometer)

    expect(screen.getByText("0 ch/min")).toBeInTheDocument()
  })

  it("it renders correct speed starting with 2 key strokes", () => {
    getCurrentTimestampMock.mockReturnValue(now)

    userInputStore.set(generateKeystrokesByTimestamps([now - 1000, now]))

    render(Speedometer)

    expect(screen.getByText("60 ch/min")).toBeInTheDocument()
  })

  it("it renders correct speed starting with 3 key strokes", () => {
    getCurrentTimestampMock.mockReturnValue(now)

    userInputStore.set(
      generateKeystrokesByTimestamps([now - 1000, now - 600, now])
    )

    render(Speedometer)

    expect(screen.getByText("120 ch/min")).toBeInTheDocument()
  })

  it("it ignores any keystroke older than 5 sec", () => {
    getCurrentTimestampMock.mockReturnValue(now)

    userInputStore.set(generateKeystrokesByTimestamps([now - 5001, now - 5000, now]))

    render(Speedometer)

    expect(screen.getByText("12 ch/min")).toBeInTheDocument()
  })

  it("renders 0 when there is only one keystroke over the last 5 seconds",  () => {
    getCurrentTimestampMock.mockReturnValue(now)

    userInputStore.set(generateKeystrokesByTimestamps([now - 5001, now]))

    render(Speedometer)

    expect(screen.getByText("0 ch/min")).toBeInTheDocument()
  })
})

function generateKeystrokesByTimestamps(timestamps: number[]): UserInput[] {
  return timestamps.map(timestamp =>  ({
    key: 'a',
    timestamp,
  }))
}
