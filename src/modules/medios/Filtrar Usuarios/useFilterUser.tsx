
import { useEffect, useState } from "react";
import { type RecordUsers, type typeRol, type typeStatus } from "./Filtrar";

export const useFilterUser = ({ users }: { users: RecordUsers }) => {
    const [stateUser, setUser] = useState(users)
    const [OriginalUsers] = useState(users)
    const [filters, setFilter] = useState<{
        role?: typeRol;
        status?: typeStatus;
    }>({})

    const ChangeUSer = () => {
        if (!Object.keys(filters).length) {
            return OriginalUsers
        }
        const newObjeto = Object.entries(OriginalUsers).reduce((acc, [key, value]) => {
            const isStatus = !filters.status || value.status === filters.status // Devuelve el primer true
            const isRol = !filters.role || value.role === filters.role
            if (isStatus && isRol) {
                return { ...acc, [key]: value }
            }
            return acc
        }, {})
        console.log(newObjeto)

        return newObjeto
    }

    const ChangeFilters = (type: 'role' | 'status', value: typeRol | typeStatus) => {
        setFilter((prev) => {
            return {
                ...prev,
                [type]: value
            }
        })
    }

    const ResetFilter = () => {
        setFilter({})
    }

    useEffect(() => {
        setUser(ChangeUSer())
    }, [filters])


    return { stateUser, setUser, filters, ChangeFilters, setFilter, ChangeUSer, ResetFilter }

} 