
export interface typeState {
    Count: number,
}

export interface typeAction {
    payload: number // Esto es solo una convencion comun no es obligaroio
    type: string
}

export const AccionType = {
    SumCount: 'Sum_Count',
    ResCount: 'Res_Count'
} as const

export const initialCount = {
    Count: 0
}
