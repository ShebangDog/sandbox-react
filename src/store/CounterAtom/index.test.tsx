import { renderHook } from "@testing-library/react"
import { useAtom } from "jotai/index"
import { act } from "react"
import { LocalStorageKeys } from "../../shared/LocalStorageKeys"
import { CounterAtom } from "./index"

describe("CounterAtom", () => {
  it("test", () => {
    window.localStorage.clear()
    window.localStorage.setItem(LocalStorageKeys.sample, JSON.stringify({ 0: 10 }))

    const { result } = renderHook(() => useAtom(CounterAtom))

    act(() => {
      const [, set] = result.current

      set(0)
    })

    const [getValueById] = result.current

    expect(getValueById(0)).toBe(11)
    expect(window.localStorage.getItem(LocalStorageKeys.sample)).toBe(JSON.stringify({0: 11}))
  })
})

