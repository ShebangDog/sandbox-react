import { useAtom } from "jotai"
import { CounterAtom } from "../../../store/CounterAtom"

export const Counter = () => {
  const [getCount, countUpById] = useAtom(CounterAtom)

  const count = getCount(0)
  const countUp = () => countUpById(0)

  return (
    <p onClick={countUp}>
      {count}
    </p>
  )
}
