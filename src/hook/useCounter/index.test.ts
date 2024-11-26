import { act, renderHook } from "@testing-library/react"
import { useCounter } from "./index"
import { LocalStorageKeys } from "../../shared/LocalStorageKeys"

describe("useCounter", () => {
  it("test", () => {
    window.localStorage.clear()
    window.localStorage.setItem(LocalStorageKeys.sample, JSON.stringify({0: 10}))

    const { result } = renderHook(() => useCounter())

    expect(result.current.getCountById(0)).toBe(10)
    expect(window.localStorage.getItem(LocalStorageKeys.sample)).toStrictEqual(JSON.stringify({0: 10}))

    act(() => {
      result.current.countUpById(0)
    })

    expect(result.current.getCountById(0)).toBe(11)
    expect(window.localStorage.getItem(LocalStorageKeys.sample)).toStrictEqual(JSON.stringify({0: 11}))
  })
})
