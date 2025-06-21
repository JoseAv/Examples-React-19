
import { AccionType, type typeAction, type typeState } from "./Interfaces"

export const reducerCount = (state: typeState, action: typeAction) => {

    if (action.type === AccionType.SumCount) {
        return {
            ...state,
            Count: state.Count + action.payload // Aqui si no va parentecis es porque el + converira en numero y seria Nan + > ?? En procedencia
        }
    }
    if (action.type === AccionType.ResCount) {
        return {
            ...state,
            Count: state.Count - action.payload
        }
    }


    return state // Aqui siempre esta tipado que devolvera el state

}