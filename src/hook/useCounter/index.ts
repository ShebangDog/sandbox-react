import { useAtom } from "jotai"
import { BaseAtom } from "../../store/BaseAtom"

type Feature = {
  getCountById: (id: number) => number
  countUpById: (id: number) => void
}
export const useCounter = (): Feature => {
  const [value, setValue] = useAtom(BaseAtom)
  const getCountById: Feature["getCountById"] = (id) => value[id] ?? 0

  const countUpById: Feature["countUpById"] = (id) => {
    const count = value[id] ?? 0

    const next = {
      [id]: count + 1
    }

    setValue(next)
  }

  return ({
    countUpById,
    getCountById,
  })
}
