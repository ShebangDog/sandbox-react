import { atom } from "jotai/index"
import { BaseAtom } from "../BaseAtom"

export const CounterAtom = atom(
  (get) =>
    (id: number): number => {
      const map = get(BaseAtom)

      return map[id] ?? 0
    },
  (get, set, id: number): void => {
    const map = get(BaseAtom)
    const count = map[id] ?? 0

    set(BaseAtom, { [id]: count + 1 })
  }
)

