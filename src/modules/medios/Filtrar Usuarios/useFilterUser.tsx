import { useState } from "react";
import type { RecordUsers, typeRol, typeStatus } from "./Filtrar";

export const useFilterUser = ({ users }: { users: RecordUsers }) => {
    const [stateUser, setState] = useState(users)
    const [role, setRol] = useState<typeRol | null>(null)
    const [status, setStatus] = useState<typeStatus | null>(null)
    const [stateOriginal] = useState(users)

    const FilterRol = ({ newRole }: { newRole: typeRol | null }): RecordUsers => {
        setRol(newRole)
        if (newRole === null) return stateOriginal
        const newRolVisible = Object.entries(FilterStatus({ newStatus: status })).reduce((acc, [key, value]) => {
            return value.role === newRole ? { ...acc, [key]: value } : acc
        }, {})
        return newRolVisible
    }

    const FilterStatus = ({ newStatus }: { newStatus: typeStatus | null }): RecordUsers => {
        setStatus(newStatus)
        if (newStatus === null) return stateOriginal
        const newRolVisible = Object.entries(FilterRol({ newRole: role })).reduce((acc, [key, value]) => {
            return value.status === newStatus ? { ...acc, [key]: value } : acc
        }, {})
        return newRolVisible
    }

    const newFilterRol = ({ newRole }: { newRole: typeRol | null }) => {
        setState(FilterRol({ newRole }))
    }

    const newFilterStatus = ({ newStatus }: { newStatus: typeStatus | null }) => {
        setState(FilterStatus({ newStatus }))
    }

    const ResetUSer = () => {
        setState(stateOriginal)
        setRol(null)
        setStatus(null)
    }

    return { stateUser, ResetUSer, FilterRol: newFilterRol, FilterStatus: newFilterStatus }

} 