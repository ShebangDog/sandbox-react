import { LocalStorageKeys } from "../../shared/LocalStorageKeys"
import { useAtom } from "jotai"
import { BaseAtomWithStorage } from "./index"
import { renderHook, act } from "@testing-library/react"

describe("BaseAtomWithStorage", () => {
    it("test", () => {
        window.localStorage.clear()
        window.localStorage.setItem(LocalStorageKeys.sample, JSON.stringify({ 2048: 10 }))

        const { result } = renderHook(() => useAtom(BaseAtomWithStorage))

        act(() => {
            const [, set] = result.current

            // countUp
            set(map => ({
                2048: (map[2048] ?? 2048) + 1
            }))
        })

        const [map] = result.current

        expect(map).toStrictEqual({2048: 11})
        expect(window.localStorage.getItem(LocalStorageKeys.sample)).toBe(JSON.stringify({2048: 11}))
    })
})