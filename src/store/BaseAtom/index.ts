import { atom } from "jotai/index"
import { BaseAtomWithStorage } from "../BaseAtomWithStorage"

export const BaseAtom = atom(
  (get) => get(BaseAtomWithStorage),
  (get, set, value: Record<number, number>) => {
    set(
      BaseAtomWithStorage,
      {
        ...get(BaseAtomWithStorage),
        ...value,
      }
    )
  }
)