import { useState } from "react"
import type { ObjectUser } from "../data/inicialObject"
import type { User } from "../interfaces/data"

export const usePersistentObject = <T extends ObjectUser>({
    initialValue,
    storageKey = 'user'
}: {
    initialValue: T,
    storageKey?: string
}) => {
    const [state, setState] = useState<T>(() => {
        try {
            const storedValue = window.localStorage.getItem(storageKey)
            return storedValue ? JSON.parse(storedValue) : initialValue
        } catch (error) {
            console.error("Error reading from localStorage:", error)
            return initialValue
        }
    })

    const addItem = (item: User) => {
        const newState = {
            ...state,
            [crypto.randomUUID()]: item
        } as T

        setState(newState)

        try {
            window.localStorage.setItem(storageKey, JSON.stringify(newState))
        } catch (error) {
            console.error("Error writing to localStorage:", error)
        }
    }

    return {
        addItem,
        state,
        setState
    }
}