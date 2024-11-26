import { atom } from "jotai/index"
import { BaseAtomWithStorage } from "../BaseAtomWithStorage"
import { LocalStorageKeys } from "../../shared/LocalStorageKeys"

export const BaseAtom = atom(
  (get) => {
    const got = get(BaseAtomWithStorage)
    console.log({
      tag: "call BaseAtom getter",
      localstorage: window.localStorage.getItem(LocalStorageKeys.sample),
      got,
    })

    return got
  },
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