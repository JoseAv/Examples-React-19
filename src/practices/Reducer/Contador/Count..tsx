import { useReducer } from "react"
import { AccionType, initialCount } from "./Interfaces"
import { reducerCount } from "./contadorReducer"

export const Count = () => {
    const [state, dispatch] = useReducer(reducerCount, initialCount)

    return <>
        <h1>Hi, i am counting {state.Count}</h1>

        <button onClick={() => dispatch({ type: AccionType.SumCount, payload: 1 })}>Plus</button>

        <button onClick={() => dispatch({ type: AccionType.ResCount, payload: 1 })}>Subtract</button>
    </>



}