import { atomWithStorage } from "jotai/utils"
import { LocalStorageKeys } from "../../shared/LocalStorageKeys"

export const BaseAtomWithStorage = atomWithStorage<Record<number, number>>(LocalStorageKeys.sample, {}, undefined, {getOnInit: true})
