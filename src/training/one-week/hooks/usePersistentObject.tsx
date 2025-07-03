import { useEffect, useState } from "react"
import type { ObjectUser } from "../data/inicialObject"
import type { User } from "../interfaces/data"

export const usePersistentObject = ({ initialUser }: { initialUser: ObjectUser }) => {
    const [ManageUser, SetManageUser] = useState<null | ObjectUser>(null) //esto tambien puede recibir una funcion

    const AddUser = ({ user }: { user: User }) => {
        SetManageUser((prev) => (
            {
                ...prev, [crypto.randomUUID()]: user
            }
        ))
    }

    const RefreshUser = ({ key }: { key: string }) => {
        window.localStorage.setItem(key, JSON.stringify(ManageUser))
    }

    const SetItemUser = ({ key }: { key: string }) => {
        return window.localStorage.getItem(key)
    }

    const MocksInitial = () => {
        SetManageUser(initialUser)
    }

    useEffect(() => {
        if (!ManageUser) {
            const ObjectInital = SetItemUser({ key: 'user' })
            if (!ObjectInital) {
                MocksInitial()
                return
            }
            SetManageUser(JSON.parse(ObjectInital))
            return
        }
        RefreshUser({ key: 'user' })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ManageUser])



    return { AddUser, ManageUser }


}