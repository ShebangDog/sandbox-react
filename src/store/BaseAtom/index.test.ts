import { renderHook } from "@testing-library/react"
import { useAtom } from "jotai"
import { BaseAtom } from "./index"
import { LocalStorageKeys } from "../../shared/LocalStorageKeys"
import { act } from "react"

describe("BaseAtom", () => {
  it("test", () => {
    window.localStorage.clear()
    window.localStorage.setItem(LocalStorageKeys.sample, JSON.stringify({ 0: 10 }))

    const { result } = renderHook(() => useAtom(BaseAtom))

    act(() => {
      const [value, set] = result.current
      const newValue = value[0] ?? 0

      const newSet = ({ ...value, 0: newValue + 1})

      set(newSet)
    })

    const [value] = result.current

    expect(value).toStrictEqual({0: 11})
    expect(window.localStorage.getItem(LocalStorageKeys.sample)).toBe(JSON.stringify({0: 11}))
  })

})
